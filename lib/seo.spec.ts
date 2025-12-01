// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { usePageMeta } from './seo';

function getMeta(property: string) {
  return document
    .querySelector(`meta[property="${property}"], meta[name="${property}"]`)
    ?.getAttribute('content');
}

describe('usePageMeta', () => {
  beforeEach(() => {
    document.title = '';
    document.head.innerHTML = '';
  });

  it('should set default title and description', () => {
    renderHook(() => usePageMeta());

    expect(document.title).toBe('ApsnyTravel');
    const desc = getMeta('description');
    expect(desc).toContain('Абхазии и Сочи');
  });

  it('should override title and append site name', () => {
    renderHook(() => usePageMeta({ title: 'Test Page' }));

    expect(document.title).toBe('Test Page — ApsnyTravel');
    expect(getMeta('og:title')).toBe('Test Page — ApsnyTravel');
  });

  it('should use default OG image if not provided', () => {
    renderHook(() => usePageMeta());

    expect(getMeta('og:image')).toContain('picsum.photos');
  });

  it('should use provided OG image', () => {
    renderHook(() => usePageMeta({ openGraph: { image: 'custom.jpg' } }));

    expect(getMeta('og:image')).toBe('custom.jpg');
  });
});
