export const branding = {
  siteName: 'ApsnyTravel',
  ownerName: 'Александр',
  siteTagline: 'Индивидуальные туры по Абхазии и Сочи с частным гидом',
  heroTagline: 'Влюбляю в Абхазию!',
  regionLabel: 'Абхазия и Сочи',
  defaultDescription:
    'Каталог авторских экскурсий и индивидуальных туров по Абхазии и Сочи с опытным частным гидом.',
  defaultOgImage: 'https://picsum.photos/1200/630?random=default_og',
  contact: {
    phone: {
      display: '+7 (900) 123-45-67',
      href: 'tel:+79001234567',
      availability: 'Звонки с 9:00 до 21:00',
      placeholder: '+7 999 0000000',
    },
    email: 'hello@apsnytravel.ru',
    telegram: 'https://t.me/apsnytravel',
    whatsapp: 'https://wa.me/79001234567',
  },
  socials: {
    instagram: 'https://instagram.com/apsnytravel',
  },
};

export type BrandingConfig = typeof branding;
