'use client';

import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, Check, Shield } from 'lucide-react';

const pillars = [
  {
    title: 'Business First',
    subtitle: 'Workflow-Led Architecture',
    icon: <Target className="w-6 h-6 text-[#7AE7FF]" />,
    description:
      'We engineer around your workflow—not the other way around. No forced off-the-shelf constraints or clunky workarounds.',
    points: [
      'Zero forced process changes',
      'Exact matching of operational rules',
      'Seamless legacy data ingestion',
    ],
  },
  {
    title: 'Rapid Delivery',
    subtitle: 'Fixed Sprint Shipping',
    icon: <Zap className="w-6 h-6 text-[#4F7CFF]" />,
    description:
      'Production-ready systems delivered in fixed sprint cycles. Continuous deliverables and zero scope drift.',
    points: [
      '2 to 4-week sprint milestones',
      'Live staging environment testing',
      'Fixed-timeline delivery guarantees',
    ],
  },
  {
    title: 'Built to Scale',
    subtitle: 'Enterprise Foundation',
    icon: <TrendingUp className="w-6 h-6 text-[#7AE7FF]" />,
    description:
      'Cloud-native architecture designed for future growth. High concurrency, microservice-ready, and 100% IP ownership.',
    points: [
      'Sub-100ms API query speeds',
      'Auto-scaling cloud infrastructure',
      'Full source code & data ownership',
    ],
  },
];

export default function WhySystemiq() {
  return (
    <section className="py-24 bg-[#090909] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#4F7CFF]">
            <Shield className="w-3.5 h-3.5" />
            <span>The Systemiq Engineering Edge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Growing Businesses Choose Systemiq.
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            We operate as your specialized external software systems studio—delivering enterprise precision without agency bloat.
          </p>
        </div>

        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-8 relative group flex flex-col justify-between border border-white/10 hover:border-[#4F7CFF]/50 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#4F7CFF]/50 group-hover:bg-[#4F7CFF]/10 flex items-center justify-center mb-6 transition-colors">
                  {item.icon}
                </div>
                <span className="text-xs font-mono text-[#7AE7FF] block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/05 space-y-2.5">
                {item.points.map((pt) => (
                  <div key={pt} className="flex items-center gap-2 text-xs font-mono text-white/70">
                    <Check className="w-3.5 h-3.5 text-[#7AE7FF] shrink-0" />
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
