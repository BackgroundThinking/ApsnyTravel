import React from 'react';
import { usePageMeta } from '../lib/seo';
import { Car, CheckCircle2, Shield, Wifi, MapPin, Camera, FileCheck, Heart } from 'lucide-react';

export function About() {
  usePageMeta({
    title: 'О гиде и автопарке',
    description:
      'Александр (Алекс) — ваш персональный гид и водитель. 30 лет опыта, VIP-автопарк (Mercedes, Peugeot Cabrio), авторские маршруты без туристических ловушек.',
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
              alt="Alexander Guide"
              className="rounded-xl w-full object-cover shadow-lg aspect-square"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Apsny Travel — с душой и комфортом</h1>
            <p className="text-xl text-teal-700 mb-6 font-bold italic">
              «Влюбляю в Абхазию, Сочи и Красную Поляну!»
            </p>
            <div className="prose prose-slate text-slate-600">
              <p>
                Здравствуйте! Меня зовут <strong>Александр (Алекс)</strong>. Я — основатель Apsny Travel, ваш личный водитель, гид и фотограф.
              </p>
              <p>
                Мой опыт работы в сфере экскурсионного сервиса и гостеприимства Сочи — <strong>более 30 лет</strong>.
                Я покажу вам наши края совершенно с другой стороны: без спешки, без толп и шаблонных маршрутов.
              </p>
              <p>
                <strong>Моя цель:</strong> Предоставить вам услуги уровня Luxury и европейский сервис с кавказским гостеприимством, чтобы вы стали нашими постоянными гостями навсегда.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">Стаж вождения 30+ лет</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">Честные цены, без «сюрпризов»</span>
              </div>
              <div className="flex items-center gap-3">
                <Camera className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">Фото-бонус на ваш телефон</span>
              </div>
              <div className="flex items-center gap-3">
                <Wifi className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">Wi-Fi даже в Абхазии</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Наш автопарк</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Mercedes E-Class */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <img src="https://picsum.photos/800/600?random=car1" alt="Mercedes E-Class" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Mercedes-Benz E-Class</h3>
                <p className="text-sm text-slate-500 mb-4 font-medium">Бизнес-седан (E 200 d)</p>
                <p className="text-slate-600 text-sm mb-4">
                  Идеален для VIP-трансферов и туров для пар. Тишина, кожаный салон и плавность хода.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• До 3-4 пассажиров</li>
                  <li>• Климат-контроль</li>
                  <li>• Дресс-код водителя</li>
                </ul>
              </div>
            </div>

            {/* Mercedes V-Class */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <img src="https://picsum.photos/800/600?random=car2" alt="Mercedes V-Class" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Mercedes-Benz V-Class</h3>
                <p className="text-sm text-slate-500 mb-4 font-medium">Минивэн (до 7 мест)</p>
                <p className="text-slate-600 text-sm mb-4">
                  Для семей и компаний. Панорамные окна, просторный салон. Легкая посадка и высадка.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• 7 пассажирских мест</li>
                  <li>• Столик / Мини-бар (по запросу)</li>
                  <li>• Большой багажник</li>
                </ul>
              </div>
            </div>

            {/* Peugeot 308 CC */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <img src="https://picsum.photos/800/600?random=car3" alt="Peugeot 308 CC" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Peugeot 308 CC</h3>
                <p className="text-sm text-slate-500 mb-4 font-medium">Кабриолет</p>
                <p className="text-slate-600 text-sm mb-4">
                  Для фототуров и романтики. Крыша открывается за 20 секунд. Ветер в волосах и красивые виды.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• 3 взрослых + 1 детское место</li>
                  <li>• Открытая или закрытая крыша</li>
                  <li>• Яркие фото</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Почему гости выбирают нас?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex gap-4">
              <div className="mt-1">
                 <MapPin className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Нет туристическим ловушкам</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Мы категорически против навязанных дегустаций меда и вина, где цены завышены, а качество сомнительно.
                  Никаких откатов от придорожных кафе. Только аутентичные места, где едят местные.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1">
                 <Camera className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Фото — часть сервиса</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  В подарок каждому гостю — профессиональная фотосессия на ваш телефон. Я знаю лучшие ракурсы и локации,
                  чтобы ваши соцсети взорвались от лайков!
                </p>
              </div>
            </div>

             <div className="flex gap-4">
              <div className="mt-1">
                 <FileCheck className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Легкая граница</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Поездка в Абхазию требует знаний: как пройти границу быстро, какие документы нужны. Я помогу
                  пройти этот этап максимально комфортно и без очередей.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1">
                 <Heart className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Забота о детях</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Путешествуете с семьей? В наличии всегда два детских кресла и бустер. Безопасное и плавное вождение
                  гарантирует, что детей не укачает на серпантине.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
