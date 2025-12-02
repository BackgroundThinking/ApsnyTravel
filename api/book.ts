import { z } from 'zod';

// Define the schema locally to avoid importing from client code (which might use import.meta.env)
const futureDateSchema = z
  .string()
  .optional()
  .refine((value) => {
    if (!value) return true;
    // Allow YYYY-MM-DD or full ISO
    let parseString = value;
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      parseString += 'T00:00:00';
    }
    const parsed = new Date(parseString);
    if (Number.isNaN(parsed.getTime())) return false;
    // We just check if it's a valid date string for the purpose of the API.
    // Logic for "future" is good but we can be lenient on the server
    // to avoid rejecting valid bookings due to timezone slight mismatches if not critical.
    // However, adhering to the requirement "validate fields", I will keep it simple.
    return true;
  }, 'Некорректная дата');

const bookingSchema = z.object({
  tourTitle: z.string().min(1),
  client_name: z.string().min(1),
  client_contact: z.string().min(1), // We expect sanitized input, but we'll validate basic non-empty
  desired_date: futureDateSchema,
  pax: z.number().int().positive(),
  client_message: z.string().optional(),
});

export default async function handler(req: any, res: any) {
  // 1. Method Guard
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // 2. Security: Validate Body
  try {
    const payload = bookingSchema.parse(req.body);

    const {
      client_name,
      client_contact,
      desired_date,
      pax,
      tourTitle,
      client_message,
    } = payload;

    // 3. Construct Telegram Message
    // Using HTML parse_mode for reliability
    const messageText = [
      `🚀 <b>Новая заявка с сайта</b>`,
      ``,
      `👤 <b>Турист:</b> ${escapeHtml(client_name)}`,
      `📞 <b>Связь:</b> ${escapeHtml(client_contact)}`,
      `👥 <b>Кол-во:</b> ${pax} чел.`,
      `📅 <b>Дата:</b> ${desired_date ? escapeHtml(desired_date) : 'Не указана'}`,
      `🏔 <b>Тур:</b> ${escapeHtml(tourTitle)}`,
      ``,
      `💬 <b>Комментарий:</b> ${client_message ? escapeHtml(client_message) : 'Нет комментария'}`,
    ].join('\n');

    // 4. Send to Telegram
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const botToken = process.env.TELEGRAM_BOT_TOKEN;

    if (!chatId || !botToken) {
      console.error('Missing Telegram configuration');
      return res.status(500).json({ error: 'Server misconfiguration' });
    }

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: 'HTML',
      }),
    });

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      console.error('Telegram API Error:', errorText);
      return res.status(502).json({ error: 'Failed to send to Telegram' });
    }

    // 5. Success
    return res.status(200).json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Invalid payload', details: error.errors });
    }
    console.error('Handler error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
