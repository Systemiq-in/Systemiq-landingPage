'use client';

import { motion } from 'framer-motion';
import {
  FileSearch,
  FileCode2,
  Cpu,
  ShieldCheck,
  Rocket,
  Headphones,
  CheckCircle,
} from 'lucide-react';

const timelineSteps = [
  {
    step: '01',
    title: 'Workflow Audit',
    subtitle: 'Spreadsheet & Process Mapping',
    icon: <FileSearch className="w-5 h-5 text-[#7AE7FF]" />,
    description:
      'We sit down with your team to review your current spreadsheets, manual workarounds, and daily pain points to map out a clear solution.',
  },
  {
    step: '02',
    title: 'System Blueprint',
    subtitle: 'Visual Wireframes & Specs',
    icon: <FileCode2 className="w-5 h-5 text-[#4F7CFF]" />,
    description:
      'We design simple visual screen mockups and clear database plans so you see exactly how your software will look and feel before any coding starts.',
  },
  {
    step: '03',
    title: 'Development Sprint',
    subtitle: 'Agile 2-Week Builds',
    icon: <Cpu className="w-5 h-5 text-[#7AE7FF]" />,
    description:
      'Our engineering studio builds your software in focused 2-week sprint cycles. You test real working features every fortnight.',
  },
  {
    step: '04',
    title: 'Testing & Staff Training',
    subtitle: 'QA & Effortless Onboarding',
    icon: <ShieldCheck className="w-5 h-5 text-[#4F7CFF]" />,
    description:
      'We test every edge case and train your staff step-by-step so transitioning to the new software is completely frictionless.',
  },
  {
    step: '05',
    title: 'Smooth Deployment',
    subtitle: 'Go-Live & Data Migration',
    icon: <Rocket className="w-5 h-5 text-[#7AE7FF]" />,
    description:
      'We import all your historical Excel data and launch your live software system with zero disruption to daily business.',
  },
  {
    step: '06',
    title: 'Continuous Support',
    subtitle: 'Maintenance & Upgrades',
    icon: <Headphones className="w-5 h-5 text-[#4F7CFF]" />,
    description:
      'We provide ongoing technical support, automatic cloud backups, and feature upgrades as your business continues to expand.',
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 bg-[#090909] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#7AE7FF]">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Sprint Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            How We Work.
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            A simple, predictable 6-phase engineering lifecycle designed to eliminate uncertainty and deliver production software fast.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#4F7CFF] via-[#7AE7FF] to-[#4F7CFF]/20 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {timelineSteps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`flex flex-col lg:flex-row items-center justify-between ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="hidden lg:block lg:w-5/12" />

                  {/* Center Node */}
                  <div className="w-10 h-10 rounded-full bg-[#0d0e12] border-2 border-[#4F7CFF] text-[#7AE7FF] font-mono text-xs font-bold flex items-center justify-center shadow-[0_0_15px_rgba(79,124,255,0.3)] my-4 lg:my-0 shrink-0 z-10">
                    {item.step}
                  </div>

                  {/* Card */}
                  <div className="w-full lg:w-5/12 glass-card rounded-2xl p-6 border border-white/10 hover:border-[#4F7CFF]/50 transition group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-[#4F7CFF]/40 transition">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-[#7AE7FF] block">
                          Phase {item.step} · {item.subtitle}
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
