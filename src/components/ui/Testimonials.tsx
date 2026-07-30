'use client';

import { Quote } from 'lucide-react';

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
    <section className="py-16 lg:py-20 bg-[#F5F5F7] border-t border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
            Client Voices
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight">
            What Founders Say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-3xl p-8 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#0071E3]/30" />
                <p className="text-[#1D1D1F] text-base leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.06]">
                <span className="text-base font-bold text-[#1D1D1F] block">{t.author}</span>
                <span className="text-xs text-[#86868B] font-medium block">{t.role} · {t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
