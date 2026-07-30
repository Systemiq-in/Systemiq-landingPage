'use client';

import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, Check } from 'lucide-react';

const pillars = [
  {
    title: 'Business First',
    subtitle: 'Built Around Your Workflows',
    icon: <Target className="w-5 h-5 text-[#0071E3]" />,
    description:
      'We engineer software around how your business already operates—not the other way around. Zero forced process changes or rigid workarounds.',
    points: [
      'Matches your exact daily business steps',
      'No forced subscription seat fees',
      'Seamless import of existing spreadsheet data',
    ],
  },
  {
    title: 'Rapid Sprint Delivery',
    subtitle: 'Working Software Every 2 Weeks',
    icon: <Zap className="w-5 h-5 text-[#0071E3]" />,
    description:
      'Production-ready software delivered in predictable 2 to 4-week sprint cycles. You test real features every step of the way.',
    points: [
      'Clear 2-week deliverable milestones',
      'Live staging environment testing',
      'Fixed timeline delivery guarantee',
    ],
  },
  {
    title: 'Built to Scale',
    subtitle: '100% IP & Data Ownership',
    icon: <TrendingUp className="w-5 h-5 text-[#0071E3]" />,
    description:
      'Cloud-native architecture designed for long-term company growth. Fast execution speeds, zero lag, and total ownership of your software.',
    points: [
      'Instant sub-second page load speeds',
      'Full source code & data ownership',
      'Auto-scaling cloud infrastructure',
    ],
  },
];

export default function WhySystemiq() {
  return (
    <section className="py-16 lg:py-20 bg-[#F5F5F7] border-t border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
            The Studio Edge
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight">
            Why Growing SMEs Choose Systemiq.
          </h2>
          <p className="text-[#86868B] text-base sm:text-lg font-normal leading-relaxed">
            We operate as your dedicated external software systems studio—delivering enterprise precision without agency complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white rounded-3xl p-8 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#F5F5F7] flex items-center justify-center mb-5 border border-black/[0.06]">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold text-[#0071E3] block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-xl font-bold text-[#1D1D1F] mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.06] space-y-2">
                {item.points.map((pt) => (
                  <div key={pt} className="flex items-center gap-2 text-xs font-medium text-[#1D1D1F]">
                    <Check className="w-3.5 h-3.5 text-[#0071E3] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
