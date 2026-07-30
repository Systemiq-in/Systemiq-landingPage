'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Systemiq built us a custom inventory scanner system in 3 weeks. We eliminated 4 hours of daily paper entry and haven’t had a stockout since.',
    author: 'Rajesh Sharma',
    role: 'Managing Director',
    company: 'Vanguard Industrial Supplies',
  },
  {
    quote:
      'Our wholesale dealers now place orders directly on WhatsApp and our website. Invoices post to Tally Prime automatically. Game changer for our business.',
    author: 'Sunil Mehta',
    role: 'Head of Operations',
    company: 'Apex Fasteners & Hardware',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-[#FAFAFA] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-600">
            <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Founders Say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-blue-500/40" />
                <p className="text-slate-700 text-base leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-sm font-extrabold text-slate-900 block">{t.author}</span>
                <span className="text-xs text-slate-500 font-semibold block">{t.role} · {t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
