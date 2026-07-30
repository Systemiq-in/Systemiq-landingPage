'use client';

import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, Check, Shield } from 'lucide-react';

const pillars = [
  {
    title: 'Business First',
    subtitle: 'Built Around Your Workflows',
    icon: <Target className="w-5 h-5 text-blue-400" />,
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
    icon: <Zap className="w-5 h-5 text-indigo-400" />,
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
    icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
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
    <section className="py-14 sm:py-16 bg-[#0B0F17] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-bold text-blue-400">
            <Shield className="w-3.5 h-3.5" />
            <span>The Systemiq Studio Edge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Growing Businesses Choose Systemiq.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
            We operate as your dedicated external software systems studio—delivering enterprise precision without agency bloat.
          </p>
        </div>

        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#131927] rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <span className="text-xs font-mono font-bold text-blue-400 block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-xl font-extrabold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-5 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                {item.points.map((pt) => (
                  <div key={pt} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
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
