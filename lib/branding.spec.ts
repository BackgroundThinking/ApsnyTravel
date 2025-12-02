import { describe, it, expect } from 'vitest';
import { branding } from './branding';

describe('Branding Configuration', () => {
  it('should have a site name', () => {
    expect(branding.siteName).toBeDefined();
    expect(branding.siteName.length).toBeGreaterThan(0);
  });

  it('should have valid contact phone numbers', () => {
    expect(branding.contact.phone.display).toBeDefined();
    expect(branding.contact.phone.href).toMatch(/^tel:\+?[0-9]+$/);
  });

  it('should have social links', () => {
    expect(branding.socials.instagram).toBeDefined();
    expect(branding.contact.telegram).toContain('t.me');
    expect(branding.contact.whatsapp).toMatch(/wa\.me|whatsapp\.com/);
  });

  it('should have a default description', () => {
    expect(branding.defaultDescription).toBeDefined();
    expect(branding.defaultDescription.length).toBeGreaterThan(10);
  });
});
