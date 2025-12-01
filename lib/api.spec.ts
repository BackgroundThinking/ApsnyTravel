import { describe, it, expect } from 'vitest';
import { fetchTours, fetchTourBySlug, ApiError } from './api';
import { TOURS } from '../constants';

describe('API Service (Mock Mode)', () => {
    // We assume Mock Mode is the default for these tests as VITE_API_URL is not set in test env.

    it('fetchTours should return active tours from constants', async () => {
        const tours = await fetchTours();

        // Should return an array
        expect(Array.isArray(tours)).toBe(true);

        // Should only contain active tours
        tours.forEach(tour => {
            expect(tour.is_active).toBe(true);
        });

        // Verify count matches constants active count
        const expectedCount = TOURS.filter(t => t.is_active).length;
        expect(tours.length).toBe(expectedCount);
    });

    it('fetchTourBySlug should return the correct tour', async () => {
        const activeTour = TOURS.find(t => t.is_active);
        if (!activeTour) throw new Error('No active tours in constants to test with');

        const tour = await fetchTourBySlug(activeTour.slug);
        expect(tour).toBeDefined();
        expect(tour.slug).toBe(activeTour.slug);
    });

    it('fetchTourBySlug should throw 404 for unknown slug', async () => {
        await expect(fetchTourBySlug('non-existent-slug-123')).rejects.toThrow('Тур не найден');

        try {
             await fetchTourBySlug('non-existent-slug-123');
        } catch (error: any) {
            expect(error).toBeInstanceOf(ApiError);
            expect(error.status).toBe(404);
        }
    });

    it('fetchTourBySlug should throw 404 for inactive tour slug', async () => {
        const inactiveTour = TOURS.find(t => !t.is_active);

        // If there are no inactive tours in constants, we can skip this test logic
        // or temporarily mock TOURS (but TOURS is imported constant).
        // For now, we just skip if no inactive tour exists.
        if (inactiveTour) {
             await expect(fetchTourBySlug(inactiveTour.slug)).rejects.toThrow('Тур не найден');
        }
    });
});
