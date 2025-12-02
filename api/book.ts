import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

// --- CONFIGURATION & CONSTANTS ---
// Centralized configuration for upstream API limits and endpoints.
const TELEGRAM_API_BASE = 'https://api.telegram.org';

// --- HELPER: HTML SANITIZATION ---
// This function implements the defense against HTML Injection attacks.
// It strictly replaces the 4 reserved characters in Telegram's HTML parse mode.
// Reference: https://core.telegram.org/bots/api#html-style
function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// --- SCHEMA DEFINITION (ZERO TRUST) ---
// Defined locally to isolate server build from client build artifacts.
// This schema acts as the primary firewall for the application logic.
const bookingSchema = z.object({
  client_name: z.string().min(2, 'Name is too short'),
  // Server-side validation is slightly more permissive (min(5)) to avoid
  // rejecting potentially valid but oddly formatted numbers that bypassed client regex.
  client_contact: z.string().min(5, 'Contact info is too short'),
  tourTitle: z.string().min(1, 'Tour title is required'),
  pax: z.number().min(1).max(20, 'Group size must be 1-20'),
  desired_date: z.string().optional(),
  client_message: z.string().optional(),
});

/**
 * Main Serverless Handler
 * Routes: POST /api/book
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. METHOD GUARD
  // Strictly enforce HTTP verb correctness.
  // GET requests (browser navigation) are rejected.
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // 2. INPUT VALIDATION (ZERO TRUST)
    // We treat req.body as a raw unknown. safeParse validates it against our strict schema.
    const result = bookingSchema.safeParse(req.body);

    if (!result.success) {
      // 400 Bad Request: Client sent malformed data.
      // We return detailed error messages to help the frontend display validation hints.
      return res.status(400).json({
        error: 'Invalid Data',
        details: result.error.errors,
      });
    }

    const data = result.data;

    // 3. SECRETS RESOLUTION
    // Access environment variables securely injected by Vercel.
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Critical configuration check: Fail safely if secrets are missing.
    if (!botToken || !chatId) {
      console.error('SERVER_ERROR: Missing Telegram Environment Variables');
      // Return 500 but do NOT leak the specific missing var name to the client.
      return res
        .status(500)
        .json({ error: 'Internal Server Configuration Error' });
    }

    // 4. PAYLOAD CONSTRUCTION (HTML FORMATTING)
    // Construct the visual representation for the Telegram Admin.
    // Note usage of escapeHtml() on ALL user-provided fields.
    const dateLine = data.desired_date
      ? `📅 <b>Дата:</b> ${escapeHtml(data.desired_date)}`
      : '📅 <b>Дата:</b> <i>Не указана</i>';

    const messageHtml = [
      `🚀 <b>Новая заявка с сайта</b>`,
      ``,
      `👤 <b>Турист:</b> ${escapeHtml(data.client_name)}`,
      `📞 <b>Связь:</b> <a href="tel:${escapeHtml(data.client_contact)}">${escapeHtml(data.client_contact)}</a>`,
      `👥 <b>Кол-во:</b> ${data.pax} чел.`,
      dateLine,
      `🏔 <b>Тур:</b> ${escapeHtml(data.tourTitle)}`,
      ``,
      `💬 <b>Комментарий:</b> ${data.client_message ? escapeHtml(data.client_message) : 'Нет комментария'}`,
    ].join('\n');

    // 5. UPSTREAM REQUEST (ZERO DEPENDENCY)
    // Using native fetch implementation available in Node.js 18+.
    // This avoids the overhead of 'node-telegram-bot-api' or 'axios'.
    const telegramUrl = `${TELEGRAM_API_BASE}/bot${botToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageHtml,
        parse_mode: 'HTML',
        // disable_web_page_preview: true // Keeps the chat clean
      }),
    });

    // Parse the upstream response to check for API-level errors (e.g. 400 from Telegram)
    const responseData = await response.json();

    // 6. RESPONSE HANDLING & NO LEAKAGE
    // Check both HTTP status and Telegram's logical 'ok' field.
    // @ts-expect-error - responseData is unknown but we check 'ok' property
    if (!response.ok || !responseData.ok) {
      // Log the REAL upstream error for the admin/architect to see in Vercel logs.
      // This is crucial for debugging "Bad Request" errors caused by formatting.
      console.error(
        'TELEGRAM_API_ERROR:',
        JSON.stringify(responseData, null, 2),
      );

      // Return a sanitized error to the client.
      // Do not forward the Telegram error description.
      return res.status(502).json({ error: 'Upstream Error' });
    }

    // Success path
    return res.status(200).json({ success: true });
  } catch (error) {
    // Catch-all for unexpected runtime errors (e.g. JSON serialization failure).
    console.error('UNHANDLED_EXCEPTION:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
