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
    <section className="py-14 sm:py-16 bg-[#0B0F17] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-bold text-blue-400">
            <Star className="w-3.5 h-3.5 fill-blue-400 text-blue-400" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Founders Say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-[#131927] rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <Quote className="w-7 h-7 text-blue-400/40" />
                <p className="text-slate-300 text-sm leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-sm font-extrabold text-white block">{t.author}</span>
                <span className="text-xs text-slate-400 font-semibold block">{t.role} · {t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
