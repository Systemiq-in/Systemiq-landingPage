'use client';

import { motion } from 'framer-motion';
import { Building2, Activity, Clock, ShieldCheck } from 'lucide-react';

const stats = [
  { value: 'Bespoke', label: 'SME & Enterprise Solutions', icon: <Building2 className="w-5 h-5 text-[#0071E3]" /> },
  { value: '99.9%', label: 'Uptime & Data Accuracy', icon: <Activity className="w-5 h-5 text-[#0071E3]" /> },
  { value: '2-4 Wks', label: 'Fixed Sprint Timelines', icon: <Clock className="w-5 h-5 text-[#0071E3]" /> },
  { value: '100%', label: 'Full Code Ownership', icon: <ShieldCheck className="w-5 h-5 text-[#0071E3]" /> },
];

export default function TrustedSection() {
  return (
    <section className="py-12 bg-transparent border-y border-white/[0.08] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bento-card group flex flex-col items-center p-6 text-center"
            >
              <div className="w-10 h-10 mb-4 rounded-xl bg-white/[0.03] border border-white/10 shadow-inner flex items-center justify-center group-hover:bg-[#0071E3] group-hover:border-[#00A3FF] transition-all duration-300">
                {stat.icon}
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white block tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-white/50 block mt-1.5 uppercase tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
