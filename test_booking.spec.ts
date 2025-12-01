import { describe, it, expect } from 'vitest';
import { bookingPayloadSchema } from './lib/booking';

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
        const todayStr = today.toISOString().split('T')[0];

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
});
