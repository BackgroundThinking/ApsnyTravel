import { describe, it, expect } from 'vitest';
import { bookingPayloadSchema } from './booking';

describe('Booking Validation', () => {
    it('should validate future dates correctly', () => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const validDate = tomorrow.toISOString().split('T')[0];

        const payload = {
            tourTitle: 'Test Tour',
            client_name: 'Test Client',
            client_contact: '+79991234567',
            desired_date: validDate,
            pax: 2,
            consent: true
        };

        const result = bookingPayloadSchema.safeParse(payload);
        expect(result.success).toBe(true);
    });

    it('should reject past dates', () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        const invalidDate = yesterday.toISOString().split('T')[0];

        const payload = {
            tourTitle: 'Test Tour',
            client_name: 'Test Client',
            client_contact: '+79991234567',
            desired_date: invalidDate,
            pax: 2,
            consent: true
        };

        const result = bookingPayloadSchema.safeParse(payload);
        expect(result.success).toBe(false);
    });

    it('should allow "today" regardless of timezone', () => {
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0]; // "YYYY-MM-DD"

        const payload = {
            tourTitle: 'Test Tour',
            client_name: 'Test Client',
            client_contact: '+79991234567',
            desired_date: todayStr,
            pax: 2,
            consent: true
        };

        const result = bookingPayloadSchema.safeParse(payload);
        expect(result.success).toBe(true);
    });

    it('should validate phone number with spaces, dashes, and parentheses', () => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const validDate = tomorrow.toISOString().split('T')[0];

        const payload = {
            tourTitle: 'Test Tour',
            client_name: 'Test Client',
            client_contact: '+7 (999) 123-45-67',
            desired_date: validDate,
            pax: 2,
            consent: true
        };

        const result = bookingPayloadSchema.safeParse(payload);
        expect(result.success).toBe(true);
        if (result.success) {
            // Also verify that the transformed value is clean
            expect(result.data.client_contact).toBe('+79991234567');
        }
    });

    it('should reject invalid phone numbers', () => {
        const invalidPhones = ['123', 'abc', '+12345'];
        const validDate = new Date().toISOString().split('T')[0];

        invalidPhones.forEach((phone) => {
            const result = bookingPayloadSchema.safeParse({
                tourTitle: 'Test',
                client_name: 'Test',
                client_contact: phone,
                desired_date: validDate,
                pax: 2,
                consent: true
            });
            expect(result.success).toBe(false);
        });
    });

    it('should enforce pax limits', () => {
        const validDate = new Date().toISOString().split('T')[0];
        const basePayload = {
            tourTitle: 'Test',
            client_name: 'Test',
            client_contact: '+79990000000',
            desired_date: validDate,
            consent: true
        };

        expect(bookingPayloadSchema.safeParse({ ...basePayload, pax: 0 }).success).toBe(false);
        expect(bookingPayloadSchema.safeParse({ ...basePayload, pax: 21 }).success).toBe(false);
        expect(bookingPayloadSchema.safeParse({ ...basePayload, pax: 5 }).success).toBe(true);
    });
});
