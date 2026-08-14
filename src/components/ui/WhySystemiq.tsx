'use client';

import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, Check } from 'lucide-react';

const pillars = [
  {
    title: 'Business first',
    subtitle: 'Built around your workflow',
    Icon: Target,
    description:
      'Software engineered around how your business already operates — not the other way around. No forced process changes, no rigid workarounds.',
    points: [
      'Matches your actual daily steps',
      'No per-seat subscription fees',
      'Your existing spreadsheet data imports in',
    ],
  },
  {
    title: 'Fast delivery',
    subtitle: 'Working software every two weeks',
    Icon: Zap,
    description:
      'Because builds start from an architecture that already runs, you see working features in weeks. You test each one on a live staging environment before it ships.',
    points: [
      'Clear two-week milestones',
      'Live staging you can try',
      'Fixed scope agreed up front',
    ],
  },
  {
    title: 'Yours to keep',
    subtitle: 'Full code and data ownership',
    Icon: TrendingUp,
    description:
      'Cloud-native architecture that grows with the business, handed over in full. No licence fees on your own software and no dependency on me to keep it running.',
    points: [
      'Full source code and schemas',
      'Your data, exportable any time',
      'Infrastructure in your own accounts',
    ],
  },
];

export default function WhySystemiq() {
  return (
    <section className="py-20 lg:py-28 bg-transparent border-t border-white/[0.08] relative overflow-hidden">
      {/* Localized ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,113,227,0.05) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold text-[#00A3FF] tracking-widest uppercase">
            Why work this way
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.06] text-balance">
            Why growing businesses choose Systemiq.
          </h2>
          <p className="text-lg text-white/55 font-medium leading-relaxed text-balance">
            Not generic software with your logo on it — a system shaped to the way your
            operation already works.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pillars.map(({ title, subtitle, Icon, description, points }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="bento-card group flex flex-col p-7 sm:p-8"
            >
              {/* Icon tile — icon flips to white as the tile fills, so it stays legible */}
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 shadow-inner flex items-center justify-center text-[#0071E3] transition-all duration-300 group-hover:bg-[#0071E3] group-hover:border-[#00A3FF] group-hover:text-white group-hover:scale-105">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>

              <h3 className="mt-7 text-xl font-bold text-white tracking-tight">{title}</h3>
              <p className="mt-1 text-sm font-semibold text-[#00A3FF]">{subtitle}</p>

              <p className="mt-4 text-sm text-white/55 leading-relaxed">{description}</p>

              <ul className="mt-auto pt-7 space-y-2.5 border-t border-white/[0.06]">
                {points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-xs font-medium text-white/65">
                    <Check
                      className="w-3.5 h-3.5 mt-0.5 text-[#0071E3] shrink-0 transition-colors duration-300 group-hover:text-[#00A3FF]"
                      aria-hidden="true"
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
