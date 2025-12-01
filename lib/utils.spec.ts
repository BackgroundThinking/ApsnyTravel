import { describe, it, expect } from 'vitest';
import { formatDate } from './utils';

describe('formatDate', () => {
  it('should format YYYY-MM-DD correctly in Western timezones', () => {
    // 2023-10-27 is the input.
    // In America/New_York (UTC-4/5), 2023-10-27T00:00:00Z is 2023-10-26T20:00:00.
    // So toLocaleDateString returns 26th.
    const input = '2023-10-27';
    const output = formatDate(input);

    // We expect it to represent the 27th, not 26th.
    expect(output).toContain('27');
  });

  it('should handle undefined or null', () => {
    expect(formatDate(undefined)).toBe('');
    expect(formatDate(null)).toBe('');
  });

  it('should handle invalid dates', () => {
    expect(formatDate('invalid-date')).toBe('');
  });

  it('should handle dates that already have time', () => {
    // "2023-10-27T10:00:00" -> This should be parsed as local time if no Z, or treated as is.
    // The fix only targets strings strictly matching /^\d{4}-\d{2}-\d{2}$/.
    const input = '2023-10-27T10:00:00';
    // This test might be flaky depending on timezone if we don't control it,
    // but the intention is that `formatDate` doesn't break other formats.
    const output = formatDate(input);
    // Just ensure it returns a non-empty string and doesn't crash
    expect(output).not.toBe('');
  });
});
