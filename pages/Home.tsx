import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowRight, Loader2, ShieldCheck, Star, Users, Camera, Car } from 'lucide-react';
import { Button } from '../components/ui/button';
import { TourCard } from '../components/tours/TourCard';
import { fetchTours } from '../lib/api';
import { usePageMeta } from '../lib/seo';
import { Tour } from '../types';
import { REVIEWS } from '../constants'; // Import local reviews

export function Home() {
  usePageMeta({
    title: 'Главная',
    description:
      'Авторские экскурсии в Абхазию, Сочи и Красную Поляну. VIP-трансферы, фото-туры на кабриолете. Александр — ваш личный гид.',
    path: '/',
  });

  const {
    data: tours,
    isLoading,
    isError,
    error,
  } = useQuery<Tour[]>({
    queryKey: ['tours'],
    queryFn: fetchTours,
    staleTime: 5 * 60 * 1000,
  });

  const featuredTours = (tours ?? []).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://picsum.photos/1920/1080?random=hero" 
            alt="Abkhazia Landscape" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mb-6 drop-shadow-lg">
            Влюбляю в Абхазию, <br />Сочи и Красную Поляну!
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-100 mb-10 font-medium drop-shadow-md">
            Индивидуальные авторские туры и VIP-трансферы от Александра. <br/>
            Комфорт Luxury уровня, фото-бонусы и никаких туристических ловушек.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-lg px-8 bg-teal-600 hover:bg-teal-700 border-none shadow-lg transition-transform hover:scale-105">
              <Link to="/catalog">Выбрать маршрут</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white/50 hover:bg-white/20 hover:text-white backdrop-blur-sm transition-transform hover:scale-105">
              <Link to="/about">Об автопарке</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-teal-50 p-3">
                <ShieldCheck className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-slate-900">Безопасность</h3>
              <p className="text-sm text-slate-600 mt-2 leading-snug">
                30+ лет стажа. Аккуратное вождение. Детские кресла.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-teal-50 p-3">
                <Star className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-slate-900">Без ловушек</h3>
              <p className="text-sm text-slate-600 mt-2 leading-snug">
                Нет комиссионным кафе и дегустациям. Только честные места.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-teal-50 p-3">
                <Car className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-slate-900">VIP Авто</h3>
              <p className="text-sm text-slate-600 mt-2 leading-snug">
                Mercedes E & V Class, Кабриолет. Вода, Wi-Fi, чистота.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-teal-50 p-3">
                <Camera className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-bold text-slate-900">Фото-бонус</h3>
              <p className="text-sm text-slate-600 mt-2 leading-snug">
                Профессиональные фото на ваш телефон — бесплатно.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
               <h2 className="text-3xl font-bold text-slate-900">Популярные направления</h2>
               <p className="text-slate-500 mt-2">Выбирайте готовый маршрут или создайте свой</p>
            </div>

            <Link to="/catalog" className="hidden sm:flex items-center text-teal-600 font-medium hover:text-teal-700">
              Смотреть все <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {isLoading && (
            <div className="flex items-center gap-2 text-slate-600 py-10">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Загружаем туры...</span>
            </div>
          )}

          {isError && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {(error as Error)?.message || 'Не удалось загрузить туры.'}
            </div>
          )}

          {!isLoading && !isError && (
            featuredTours.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-slate-200 bg-white p-6 text-center text-slate-600">
                Туры пока не добавлены.
              </div>
            )
          )}

          <div className="mt-8 text-center sm:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link to="/catalog">Смотреть все туры</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Отзывы гостей</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((review) => (
              <div key={review.id} className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'text-slate-300'}`} />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6 flex-grow">"{review.comment}"</p>
                <div className="mt-auto">
                   <p className="font-bold text-slate-900">{review.author}</p>
                   <p className="text-xs text-slate-400">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
           <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm mb-4">Рейтинг 4.7/5 на основе более 50 отзывов</p>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative aspect-video rounded-xl overflow-hidden shadow-2xl">
             <img src="https://picsum.photos/800/600?grayscale" alt="Guide Alexander" className="object-cover h-full w-full opacity-90 hover:opacity-100 transition-opacity" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Ваш личный гид Александр</h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Я родился и вырос здесь, поэтому знаю каждый поворот серпантина и каждую тропинку в горах.
              Моя философия — показать вам настоящий Кавказ: живой, вкусный и гостеприимный.
            </p>
            <ul className="space-y-3 mb-8 text-slate-300">
               <li className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-teal-400" /> Безопасное вождение (стаж 30 лет)</li>
               <li className="flex items-center gap-2"><Car className="h-5 w-5 text-teal-400" /> Комфортные авто бизнес-класса</li>
               <li className="flex items-center gap-2"><Camera className="h-5 w-5 text-teal-400" /> Помощь с фото и видео</li>
            </ul>
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 border-none">
              <Link to="/about">Подробнее обо мне</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
