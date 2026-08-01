'use client';

import { motion } from 'framer-motion';
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
    <section className="py-24 lg:py-32 bg-transparent border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved by Founders.
          </h2>
          <p className="text-lg text-white/50 font-medium leading-relaxed">
            Don't just take our word for it. Here's what SME owners say after switching to Systemiq.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#13151A]/80 border border-white/[0.04] p-8 rounded-3xl hover:bg-[#13151A] hover:border-white/[0.08] transition-all flex flex-col justify-between h-full"
            >
              <div className="flex text-[#0071E3] mb-6 gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-base sm:text-lg text-white/80 font-medium leading-relaxed mb-8 flex-1">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                <div className="w-12 h-12 rounded-full bg-[#090A0C] border border-white/[0.08] flex items-center justify-center text-white/50 font-bold text-lg">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white tracking-tight">{t.author}</div>
                  <div className="text-sm font-medium text-[#0071E3]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
