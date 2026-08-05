'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import TiltCard from './TiltCard';

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

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="h-full"
            >
              <TiltCard className="bento-card group p-6 sm:p-8 flex flex-col justify-between h-full" tiltOffset={15}>
                <div className="flex text-[#00A3FF] mb-6 gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg text-white/80 font-medium leading-relaxed mb-8 flex-1">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                  <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/50 font-bold text-lg group-hover:bg-[#0071E3] group-hover:text-white transition-colors duration-300">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white tracking-tight">{t.author}</div>
                    <div className="text-sm font-medium text-[#0071E3] group-hover:text-[#00A3FF] transition-colors">{t.role}</div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
