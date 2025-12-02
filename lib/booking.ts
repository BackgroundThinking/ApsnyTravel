import { z } from 'zod';

const INTERNATIONAL_PHONE_REGEX = /^\+?[1-9]\d{7,14}$/;
const WAIT_FALLBACK_MS = 1200;

const futureDateSchema = z
  .string()
  .optional()
  .refine((value) => {
    if (!value) return true;

    // Explicitly append time if it's a simple YYYY-MM-DD string to ensure local parsing
    // This prevents "2023-10-10" being parsed as UTC midnight (often previous day in Western hemispheres)
    let parseString = value;
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      parseString += 'T00:00:00';
    }

    const parsed = new Date(parseString);
    if (Number.isNaN(parsed.getTime())) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // At this point parsed is already local because we appended T00:00:00 (or it was ISO with TZ)
    // We just need to check if it's >= today (midnight)
    return parsed.getTime() >= today.getTime();
  }, 'Дата должна быть в будущем');

export const bookingPayloadSchema = z.object({
  tourTitle: z.string().min(1, 'Название тура обязательно'),
  client_name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  client_contact: z
    .string()
    .transform((val) => val.replace(/[\s\-()]/g, ''))
    .pipe(
      z
        .string()
        .regex(
          INTERNATIONAL_PHONE_REGEX,
          'Введите номер в международном формате, например +79990000000',
        ),
    ),
  desired_date: futureDateSchema,
  pax: z.number().min(1, 'Минимум 1 человек').max(20, 'Максимум 20 человек'),
  client_message: z.string().max(500, 'Сообщение слишком длинное').optional(),
  consent: z.boolean().refine((val) => val === true, 'Необходимо согласие'),
});

export const bookingFormSchema = bookingPayloadSchema.omit({ tourTitle: true });

export type BookingPayload = z.infer<typeof bookingPayloadSchema>;
export type BookingFormValues = z.infer<typeof bookingFormSchema>;

export class BookingSubmissionError extends Error {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = 'BookingSubmissionError';
    this.status = status;
  }
}

export interface BookingSubmissionResult {
  ok: true;
  mocked?: boolean;
  response?: unknown;
}

export async function submitBookingRequest(
  payload: BookingPayload,
): Promise<BookingSubmissionResult> {
  bookingPayloadSchema.parse(payload);

  // Default to local API route if not configured
  const endpoint = import.meta.env.VITE_BOOKING_ENDPOINT || '/api/book';

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).catch((error: unknown) => {
    throw new BookingSubmissionError(
      (error as Error)?.message || 'Network error',
    );
  });

  if (!response.ok) {
    const message = await response.text().catch(() => '');
    throw new BookingSubmissionError(
      message || 'Не удалось отправить заявку. Попробуйте позже.',
      response.status,
    );
  }

  const parsedResponse = await response.json().catch(() => undefined);
  return { ok: true, mocked: false, response: parsedResponse };
}
