'use client';

import { motion } from 'framer-motion';
import { Quote, Star, Building2, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Before Systemiq, our team was managing 12 different Excel sheets across 3 manufacturing plants. Systemiq built us a tailored ERP in 6 sprints. Stock drift is zero and billing takes 2 minutes.',
    author: 'Vikramaditya Sharma',
    role: 'Managing Director',
    company: 'Apex Precision Metals',
    industry: 'Industrial SME',
  },
  {
    quote:
      'Systemiq engineered our B2B dealer portal from scratch. Our 350+ distributors order directly, credit limits are auto-enforced, and invoices sync directly to Tally Prime. Flawless execution.',
    author: 'Tariq Mansoor',
    role: 'Head of Operations',
    company: 'Nova Distribution Hub',
    industry: 'Wholesale & Logistics',
  },
  {
    quote:
      'They operate completely differently than generic web development agencies. Systemiq behaves like a senior software engineering studio. They understand business mechanics first.',
    author: 'Elena Rostova',
    role: 'Chief Technology Officer',
    company: 'Vanguard Global Logistics',
    industry: 'Supply Chain',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#090909] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#7AE7FF]">
            <Quote className="w-3.5 h-3.5 text-[#4F7CFF]" />
            <span>Executive Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Loved by Business Leaders.
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Here is what SME leaders and operations directors say about our software systems studio.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-8 border border-white/10 flex flex-col justify-between hover:border-[#4F7CFF]/40 transition group"
            >
              <div>
                <div className="flex items-center gap-1 text-[#7AE7FF] mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#7AE7FF] text-[#7AE7FF]" />
                  ))}
                </div>
                <p className="text-sm text-white/80 leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-white/05 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#7AE7FF] transition-colors">
                    {t.author}
                  </h4>
                  <p className="text-xs text-white/50">{t.role}, {t.company}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/05 border border-white/10 flex items-center justify-center text-white/40">
                  <Building2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
