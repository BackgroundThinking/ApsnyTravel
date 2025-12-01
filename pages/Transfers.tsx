import React from 'react';
import { usePageMeta } from '../lib/seo';
import { Car, CreditCard } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export function Transfers() {
  usePageMeta({
    title: 'VIP Трансфер',
    description: 'Комфортный трансфер из аэропорта Сочи во все направления: Красная Поляна, Центр Сочи, Абхазия. Фиксированные тарифы.',
    path: '/transfers',
  });

  const tariffs = [
    { dest: 'Аэропорт Сочи → ФТ Сириус', price: '999 руб.' },
    { dest: 'Аэропорт Сочи → Центральный Сочи', price: '1 999 руб.' },
    { dest: 'Аэропорт Сочи → ПГТ Дагомыс', price: '2 999 руб.' },
    { dest: 'Аэропорт Сочи → ПГТ Красная Поляна', price: '1 499 руб.' },
    { dest: 'Аэропорт Сочи → Курорт Красная Поляна 540', price: '1 999 руб.' },
    { dest: 'Аэропорт Сочи → Курорт Красная Поляна 960', price: '2 499 руб.' },
    { dest: 'Аэропорт Сочи → Роза Хутор 540', price: '2 499 руб.' },
    { dest: 'Аэропорт Сочи → Роза Плато 1170', price: '3 000 руб.' },
    { dest: 'Аэропорт Сочи → Газпром 540', price: '2 499 руб.' },
    { dest: 'Аэропорт Сочи → Газпром Поляна 1389', price: '3 000 руб.' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">VIP-Трансфер из Аэропорта Сочи</h1>
            <p className="text-xl text-slate-600 mb-8">
                Предоставляем услуги комфортного трансфера из Международного аэропорта Сочи имени В. И. Севастьянова во все направления.
                Встретим вас в любой точке и доставим на самом высоком уровне — вам останется только наслаждаться поездкой.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                 <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <CreditCard className="h-6 w-6 text-teal-600" />
                        Тарифы
                    </h2>
                    <div className="space-y-4">
                        {tariffs.map((item, index) => (
                            <div key={index} className="flex justify-between items-center border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                                <span className="text-slate-700 font-medium">{item.dest}</span>
                                <span className="text-teal-700 font-bold whitespace-nowrap">{item.price}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 p-4 bg-slate-50 rounded-lg">
                        <h3 className="font-bold text-slate-900 mb-2">Дополнительные условия</h3>
                        <ul className="text-sm text-slate-600 space-y-2">
                            <li>• Почасовая оплата: <strong>2 000 руб./час</strong></li>
                            <li>• Бизнес-день (до 10 часов): <strong>15 000 руб.</strong></li>
                            <li>• Подача автомобиля в отдалённые районы — стоимость договорная</li>
                            <li>• Свыше 10 часов — <strong>1 000 руб./час</strong></li>
                        </ul>
                    </div>
                 </div>

                 <div className="flex flex-col gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                         <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Car className="h-5 w-5 text-teal-600" />
                            Наш транспорт
                        </h3>
                        <p className="text-slate-600 mb-4">
                            В вашем распоряжении автомобили бизнес-класса:
                        </p>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-teal-500" />
                                <strong>Mercedes-Benz E-Class</strong> (до 4 пассажиров)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-teal-500" />
                                <strong>Mercedes-Benz V-Class</strong> (до 7 пассажиров)
                            </li>
                        </ul>
                        <div className="mt-6">
                            <Button asChild className="w-full">
                                <Link to="/about">Подробнее об автопарке</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Заказать трансфер</h3>
                        <p className="text-slate-300 mb-6">
                            Свяжитесь с нами, чтобы забронировать автомобиль к вашему прилету.
                        </p>
                        <div className="flex flex-col gap-3">
                             <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white w-full">
                                <Link to="/contacts">Связаться с нами</Link>
                            </Button>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  );
}
