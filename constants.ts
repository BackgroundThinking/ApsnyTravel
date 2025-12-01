import { Tour, TourRegion, TourType, TourDifficulty, Review } from './types';

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    tourId: '1',
    author: 'Марина К.',
    rating: 5,
    date: '2024-02-10',
    comment:
      'Поездка на Рицу превзошла ожидания! Водитель внимательный, гид делился историями. Обязательно поедем снова летом.',
  },
  {
    id: 'r2',
    tourId: '1',
    author: 'Илья П.',
    rating: 4,
    date: '2024-03-02',
    comment: 'Красивейшие виды, но дорога длинная. Зато остановки у Голубого озера и Юпшарского каньона того стоят.',
  },
  {
    id: 'r3',
    tourId: '2',
    author: 'Светлана Р.',
    rating: 5,
    date: '2024-01-18',
    comment:
      'Гагра шикарна зимой, мало людей и мягкий климат. Понравился рассказ про историю Пицунды и органный концерт.',
  },
  {
    id: 'r4',
    tourId: '3',
    author: 'Дмитрий Л.',
    rating: 5,
    date: '2024-04-22',
    comment: 'Адреналин зашкаливал! Команда следила за безопасностью, а виды с моста просто космос.',
  },
];

export const TOURS: Tour[] = [
  // ABKHAZIA
  {
    id: '1',
    slug: 'abkhazia-country-of-soul',
    title: 'Абхазия — «Страна Души»',
    short_desc: 'Авторский маршрут: Гагра, Пицунда, озеро Рица, Новый Афон и дикие пляжи.',
    description_md: `
      ## Чего ожидать
      Большое путешествие по главным местам силы Абхазии. Мы увидим легендарное озеро Рица, величественные каньоны, древние храмы и заброшенные города-призраки.

      ## Программа
      * Встреча в Адлере или Сочи.
      * Гагра: Колоннада, ресторан Гагрипш, парк принца Ольденбургского.
      * Бзыбское ущелье и Голубое озеро.
      * Юпшарский каньон («Каменный мешок»).
      * Озеро Рица и водопады.
      * Пицунда: реликтовая сосновая роща.
      * Обед в проверенном месте (аутентичная кухня, без туристических ловушек).

      ## Особенности
      Помощь на границе, комфортный Mercedes V-Class или E-Class. Возможность корректировать маршрут.
    `,
    region: TourRegion.ABKHAZIA,
    type: TourType.TOUR,
    difficulty: TourDifficulty.EASY,
    duration_hours: 10,
    price_from: 10000,
    currency: 'RUB',
    cover_image: 'https://picsum.photos/800/600?random=1',
    gallery_images: ['https://picsum.photos/800/600?random=11', 'https://picsum.photos/800/600?random=12'],
    tags: ['Природа', 'История', 'Гастрономия', 'Авторский'],
    is_active: true,
  },

  // SOCHI & COAST
  {
    id: '2',
    slug: 'sochi-olympic-coast',
    title: 'Сочи и Олимпийское побережье',
    short_desc: 'Обзорная экскурсия: от исторического центра Сочи до футуристического Сириуса.',
    description_md: `
      ## Чего ожидать
      Контрасты курортной столицы. Мы проедем по Курортному проспекту, прогуляемся у Морпорта, увидим сталинский ампир и современные олимпийские объекты.

      ## Программа
      * Морской порт Сочи.
      * Парк Ривьера и исторический центр.
      * Дача Сталина (по желанию).
      * Гора Ахун со смотровой башней.
      * Олимпийский парк и шоу фонтанов (вечером).
    `,
    region: TourRegion.SOCHI,
    type: TourType.TOUR,
    difficulty: TourDifficulty.EASY,
    duration_hours: 6,
    price_from: 8000,
    currency: 'RUB',
    cover_image: 'https://picsum.photos/800/600?random=2',
    gallery_images: ['https://picsum.photos/800/600?random=21'],
    tags: ['Город', 'История', 'Олимпиада'],
    is_active: true,
  },

  // KRASNAYA POLYANA
  {
    id: '3',
    slug: 'krasnaya-polyana-mountains',
    title: 'Красная Поляна: Русские Альпы',
    short_desc: 'Три курорта: Роза Хутор, Газпром, Красная Поляна. Горы, канатки и казино.',
    description_md: `
      ## Чего ожидать
      Поездка в горный кластер по новой живописной дороге. Вы увидите лучшие горнолыжные курорты России, подниметесь на пики и вдохнете чистейший горный воздух.

      ## Программа
      * Ущелье Ахцу (старая дорога).
      * Курорт Красная Поляна (бывший Горки Город).
      * Роза Хутор: Ратуша, набережная Мзымты.
      * ГТЦ Газпром: Лаура и Альпика.
      * Скайпарк (по желанию).
    `,
    region: TourRegion.KRASNAYA_POLYANA,
    type: TourType.TOUR,
    difficulty: TourDifficulty.EASY,
    duration_hours: 8,
    price_from: 9000,
    currency: 'RUB',
    cover_image: 'https://picsum.photos/800/600?random=3',
    gallery_images: ['https://picsum.photos/800/600?random=31'],
    tags: ['Горы', 'Панорамы', 'Лыжи'],
    is_active: true,
  },

  // PHOTO TOURS
  {
    id: '4',
    slug: 'cabriolet-photo-tour',
    title: 'Фото-тур на кабриолете',
    short_desc: 'Peugeot 308 CC, ветер в волосах и профессиональные фото на ваш телефон.',
    description_md: `
      ## Чего ожидать
      Идеальный вариант для контента, романтических свиданий или просто красивой прогулки. Крыша открывается за 20 секунд!

      ## Маршрут
      * Живописная дорога на Красную Поляну.
      * Смотровая площадка ущелья Ахцу.
      * Старая Краснополянская дорога («Скальник»).
      * Закат у моря в Имеретинской бухте.

      ## Бонус
      Я сделаю для вас профессиональные фото на ваш телефон и подскажу лучшие ракурсы.
    `,
    region: TourRegion.SOCHI,
    type: TourType.PHOTO_TOUR,
    difficulty: TourDifficulty.EASY,
    duration_hours: 4,
    price_from: 7000,
    currency: 'RUB',
    cover_image: 'https://picsum.photos/800/600?random=4',
    gallery_images: ['https://picsum.photos/800/600?random=41'],
    tags: ['Фото', 'Кабриолет', 'Романтика'],
    is_active: true,
  },

  // TRANSFERS
  {
    id: '5',
    slug: 'vip-transfer-airport-sochi',
    title: 'VIP Трансфер: Аэропорт — Сочи',
    short_desc: 'Встреча с табличкой, помощь с багажом, Mercedes E-Class или V-Class.',
    description_md: `
      ## Комфорт и статус
      Встречу вас в аэропорту Сочи (AER) и доставлю в отель в центре Сочи, Сириусе или Красной Поляне.

      * **Автомобили:** Mercedes-Benz E-Class (седан) или V-Class (минивэн).
      * **Сервис:** Вода, Wi-Fi, детские кресла, помощь с багажом.
      * **Цена:** Фиксированная, известна заранее.

      ## Направления
      * Аэропорт → Олимпийский парк / Сириус
      * Аэропорт → Центр Сочи
      * Аэропорт → Красная Поляна
      * Аэропорт → Абхазия (Гагра, Пицунда, Сухум)
    `,
    region: TourRegion.SOCHI,
    type: TourType.TRANSFER,
    difficulty: TourDifficulty.EASY,
    duration_hours: 1,
    price_from: 2000,
    currency: 'RUB',
    cover_image: 'https://picsum.photos/800/600?random=5',
    gallery_images: ['https://picsum.photos/800/600?random=51'],
    tags: ['Трансфер', 'VIP', 'Аэропорт'],
    is_active: true,
  },
  {
    id: '6',
    slug: 'business-chauffeur',
    title: 'Бизнес-сопровождение',
    short_desc: 'Аренда авто с водителем на день. Для деловых встреч и мероприятий.',
    description_md: `
      ## Ваш личный водитель
      Почасовая аренда или полный бизнес-день (до 10 часов). Решение любых логистических задач.

      * Пунктуальность и конфиденциальность.
      * Дресс-код.
      * Чистый автомобиль бизнес-класса.
      * Помощь в организации (бронирование ресторанов, советы).
    `,
    region: TourRegion.SOCHI,
    type: TourType.TRANSFER,
    difficulty: TourDifficulty.EASY,
    duration_hours: 8,
    price_from: 15000,
    currency: 'RUB',
    cover_image: 'https://picsum.photos/800/600?random=6',
    gallery_images: [],
    tags: ['Бизнес', 'Аренда', 'Консьерж'],
    is_active: true,
  }
];

export const REGIONS_LABELS: Record<TourRegion, string> = {
  [TourRegion.ABKHAZIA]: 'Абхазия',
  [TourRegion.SOCHI]: 'Сочи',
  [TourRegion.KRASNAYA_POLYANA]: 'Красная Поляна',
  [TourRegion.OLYMPIC_PARK]: 'Олимпийский парк',
};

export const TYPES_LABELS: Record<TourType, string> = {
  [TourType.TOUR]: 'Тур',
  [TourType.EXCURSION]: 'Экскурсия',
  [TourType.TRANSFER]: 'Трансфер',
  [TourType.PHOTO_TOUR]: 'Фото-тур',
};