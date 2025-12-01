import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatDate(dateString: string | undefined | null): string {
  if (!dateString) return '';

  let parseString = dateString;
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    parseString += 'T00:00:00';
  }

  const dateObj = new Date(parseString);
  if (isNaN(dateObj.getTime())) {
    return '';
  }

  return dateObj.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
