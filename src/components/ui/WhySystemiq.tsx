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
    <section className="py-12 lg:py-16 bg-transparent border-t border-white/[0.08] relative overflow-hidden">
      {/* Localized Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0, 113, 227, 0.05) 0%, transparent 60%)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#00A3FF] tracking-widest uppercase">
            The Studio Edge
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Growing SMEs Choose Systemiq.
          </h2>
          <p className="text-lg text-white/50 font-medium leading-relaxed">
            We don't sell generic software. We engineer exact digital replicas of your business processes.
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pillars.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="bento-card group p-6 sm:p-8 flex flex-col space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 shadow-inner flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#0071E3] transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed font-medium mb-6">
                {item.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/[0.06] space-y-2">
                {item.points.map((pt) => (
                  <div key={pt} className="flex items-center gap-2 text-xs font-medium text-white/70">
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
