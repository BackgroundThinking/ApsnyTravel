import React from 'react';
import { usePageMeta } from '../lib/seo';
import { Car, CheckCircle2, Shield, Wifi, MapPin, Camera, FileCheck } from 'lucide-react';

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
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Apsny Travel — с любовью к Кавказу</h1>
            <p className="text-xl text-slate-600 mb-6 font-medium">
              «Я влюбляю людей в Абхазию, Сочи и Красную Поляну!»
            </p>
            <div className="prose prose-slate text-slate-600">
              <p>
                Меня зовут Александр. Я — основатель Apsny Travel, ваш личный водитель, гид и фотограф в одном лице.
                За моими плечами более 30 лет опыта в сфере гостеприимства и вождения на сложных горных дорогах.
              </p>
              <p>
                Моя философия проста: каждый гость — это VIP. Я не вожу массовые экскурсии на автобусах.
                Я создаю авторские путешествия, где нет места спешке, туристическим ловушкам и скрытым комиссиям.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">Безопасность и конфиденциальность</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">Честные цены, никаких «ловушек»</span>
              </div>
              <div className="flex items-center gap-3">
                <Car className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">VIP и LUX автопарк</span>
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
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <img src="https://picsum.photos/800/600?random=car1" alt="Mercedes E-Class" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Mercedes-Benz E-Class</h3>
                <p className="text-sm text-slate-500 mb-4">Бизнес-седан (E 200 d)</p>
                <p className="text-slate-600 text-sm mb-4">
                  Идеален для VIP-трансферов, деловых поездок и туров для пар. Комфорт бизнес-класса, тишина и плавность хода.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• До 3-4 пассажиров</li>
                  <li>• Климат-контроль</li>
                  <li>• Кожаный салон</li>
                </ul>
              </div>
            </div>

            {/* Mercedes V-Class */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <img src="https://picsum.photos/800/600?random=car2" alt="Mercedes V-Class" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Mercedes-Benz V-Class</h3>
                <p className="text-sm text-slate-500 mb-4">Минивэн бизнес-класса</p>
                <p className="text-slate-600 text-sm mb-4">
                  Для семей и небольших компаний. Просторный салон, панорамное остекление и удобная посадка.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• До 7 пассажиров</li>
                  <li>• Столик для переговоров</li>
                  <li>• Вместительный багажник</li>
                </ul>
              </div>
            </div>

            {/* Peugeot 308 CC */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <img src="https://picsum.photos/800/600?random=car3" alt="Peugeot 308 CC" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Peugeot 308 CC</h3>
                <p className="text-sm text-slate-500 mb-4">Кабриолет</p>
                <p className="text-slate-600 text-sm mb-4">
                  Для ярких впечатлений и фотосессий. Крыша складывается за 20 секунд. Ветер, море и горы!
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• 3 взрослых + 1 детское место</li>
                  <li>• Открытая/закрытая крыша</li>
                  <li>• Фото-туры</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Принципы работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <div className="bg-white p-3 rounded-full w-fit shadow-sm">
                 <MapPin className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Нет туристическим ловушкам</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Мы не заезжаем на навязанные дегустации меда или вина, где цены завышены втрое.
                Я покажу вам места, где покупают и едят сами местные жители.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-white p-3 rounded-full w-fit shadow-sm">
                 <Camera className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Фото — часть сервиса</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Я знаю лучшие видовые точки и умею ловить свет. Профессиональные фото на ваш телефон — это
                бесплатный бонус к любому туру.
              </p>
            </div>
             <div className="flex flex-col gap-3">
              <div className="bg-white p-3 rounded-full w-fit shadow-sm">
                 <FileCheck className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Помощь на границе</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Поездка в Абхазию имеет свои нюансы. Я помогу с документами, подскажу лучшее время для
                прохождения границы, чтобы мы не теряли часы в очередях.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
