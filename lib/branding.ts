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
      display: '+7 (906) 888-08-89',
      href: 'tel:+79068880889',
      availability: 'Звонки с 9:00 до 21:00',
      placeholder: '+7 906 888-08-89',
    },
    email: 'hello@apsnytravel.ru',
    telegram: 'https://t.me/AlexanderDvornikov',
    telegramBot: 'https://t.me/ApsnyTravelBot',
    whatsapp: 'https://api.whatsapp.com/message/NI5FSUTTYK5WF1',
    address: 'Сочи, Новороссийское Шоссе 27',
  },
  socials: {
    instagram: 'https://www.instagram.com/apsny_travel',
  },
};

export type BrandingConfig = typeof branding;
