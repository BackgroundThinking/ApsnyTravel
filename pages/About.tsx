import React from 'react';
import { usePageMeta } from '../lib/seo';
import { branding } from '../lib/branding';
import {
  Car,
  CheckCircle2,
  Shield,
  MapPin,
  Camera,
  Utensils,
  Award,
} from 'lucide-react';
import { REVIEWS } from '../constants';
import { Reviews } from '../components/Reviews';

export function About() {
  usePageMeta({
    title: 'О гиде и автопарке',
    description:
      'Познакомьтесь с Александром — основателем Apsny Travel. 30 лет опыта, VIP-сервис, авторские маршруты и собственный автопарк.',
    path: '/about',
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
          <div className="w-full md:w-1/3">
            <img
              src="https://picsum.photos/800/800?grayscale"
              alt="Alexander"
              className="rounded-xl w-full object-cover shadow-lg aspect-square"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              {branding.siteName} — Влюбляю в Абхазию!
            </h1>
            <p className="text-xl text-slate-600 mb-6 font-medium">
              Здравствуйте! Меня зовут Александр, но друзья и гости называют
              меня Алекс.
            </p>
            <div className="prose prose-slate text-slate-600">
              <p>
                Я — основатель и идейный вдохновитель туристического агентства{' '}
                <strong>{branding.siteName}</strong> (Апсны-Трэвел).
              </p>
              <p>
                <strong>Более 30 лет</strong> я работаю в сфере гостеприимства
                города Сочи и Абхазии, и за это время успел влюбить в эти
                удивительные места тысячи путешественников. Мой водительский
                стаж также превышает 30 лет, что гарантирует вам безопасность и
                комфорт на любых маршрутах.
              </p>
              <p>
                Я смогу показать вам Абхазию, Сочи и Красную Поляну совершенно с
                другой стороны — своими глазами, где каждый последующий тур
                будет интереснее предыдущего. Буду вашим проводником к самым
                неизведанным и таинственным локациям, покажу самые мощные места
                Силы этих удивительных земель.
              </p>
            </div>
          </div>
        </div>

        {/* Fleet Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Наш автопарк
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Peugeot 308 CC */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <img
                src="https://picsum.photos/800/600?random=car3"
                alt="Peugeot 308 CC"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Peugeot 308 CC
                </h3>
                <p className="text-sm text-slate-500 mb-4">Кабриолет</p>
                <p className="text-slate-600 text-sm mb-4">
                  Идеально для романтических и фототуров! Почувствуйте свободу с
                  открытой крышей или насладитесь комфортом в закрытом салоне.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• 3 пассажира + 1 доп. место</li>
                  <li>• Открытая/закрытая крыша</li>
                  <li>• Идеально для фото</li>
                </ul>
              </div>
            </div>

            {/* Mercedes E-Class */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <img
                src="https://picsum.photos/800/600?random=car1"
                alt="Mercedes E-Class"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Mercedes-Benz E-Class
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  Бизнес-класс (E 200 d)
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  Элегантный автомобиль бизнес-класса для комфортных поездок и
                  трансферов.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• 4 пассажирских места</li>
                  <li>• Климат-контроль</li>
                  <li>• Кожаный салон</li>
                </ul>
              </div>
            </div>

            {/* Mercedes V-Class */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <img
                src="https://picsum.photos/800/600?random=car2"
                alt="Mercedes V-Class"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Mercedes-Benz V-Class
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  Минивэн бизнес-класса
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  Просторный минивэн бизнес-класса для семейных поездок и
                  групповых туров. Большие панорамные окна с качественной
                  тонировкой.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• До 7 пассажиров</li>
                  <li>• Возможность мини-бара</li>
                  <li>• Вместительный багажник</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Почему выбирают {branding.siteName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Award className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Высокие стандарты LUX-сервиса
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Испытайте на себе самые высокие стандарты качества
                  предоставляемых услуг уровня Luxury.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Индивидуальный подход
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Каждый маршрут обговаривается индивидуально и может меняться
                  во время поездки с учётом ваших пожеланий.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Camera className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Профессиональная фотосессия в подарок
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  При заказе тура вы получаете профессиональную фотосессию на
                  ваш телефон абсолютно бесплатно!
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Без навязчивых дегустаций
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Только комфортные туры без сомнительных дегустаций вина и
                  мёда, без откатов от придорожных кафе.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Utensils className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Лучшие заведения питания
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Только те рестораны и кафе, где кушают местные жители — с
                  европейским уровнем обслуживания и аутентичной кухней.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <MapPin className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Уникальные локации</h3>
                <p className="text-slate-600 text-sm mt-1">
                  Покажу места, куда не довезут туристические автобусы. Более
                  100 направлений маршрутов.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What is included Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Что включено в обслуживание
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-teal-600" />
                Комфорт и безопасность
              </h3>
              <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                <li>Конфиденциальность личной информации</li>
                <li>Профессиональный стиль вождения</li>
                <li>Аккуратная манера вождения</li>
                <li>Водительский стаж более 30 лет</li>
                <li>Пунктуальность</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Car className="h-5 w-5 text-teal-600" />
                Удобства в автомобиле
              </h3>
              <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                <li>Всегда чистый и ухоженный салон</li>
                <li>Кожаный салон с климат-контролем</li>
                <li>Качественная музыкальная система</li>
                <li>
                  <strong>Безлимитный Wi-Fi</strong>
                </li>
                <li>Прохладительные напитки</li>
                <li>Детские кресла и бустер</li>
                <li>Перевозка домашних питомцев</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-600" />
                Водитель
              </h3>
              <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                <li>Опрятный внешний вид, дресс-код</li>
                <li>Огромный опыт в гостеприимстве</li>
                <li>Отличное знание маршрутов</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <Reviews reviews={REVIEWS} />
    </div>
  );
}
