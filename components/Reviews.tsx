import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

interface ReviewsProps {
  reviews: Review[];
}

export function Reviews({ reviews }: ReviewsProps) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Отзывы наших гостей</h2>
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
           {/* Summary Rating */}
           <div className="flex items-center justify-center gap-2 mb-8">
              <span className="text-2xl font-bold text-slate-900">4.7</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-6 w-6 ${i < 4 ? 'fill-current' : i === 4 ? 'fill-current text-yellow-400 opacity-70' : 'text-slate-300'}`} />
                ))}
              </div>
              <span className="text-slate-600">(на основании 53 оценок)</span>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-slate-900">{review.author}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'text-slate-200'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 text-sm italic">&quot;{review.comment}&quot;</p>
                {review.date && <p className="text-xs text-slate-400 mt-3 text-right">{review.date}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
