'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '350+', label: 'Wholesale & SME Clients', borderColor: 'border-t-4 border-blue-500' },
  { value: '99.9%', label: 'Uptime & Data Accuracy', borderColor: 'border-t-4 border-emerald-500' },
  { value: '2-4 Wks', label: 'Fixed Sprint Timelines', borderColor: 'border-t-4 border-indigo-500' },
  { value: '100%', label: 'Full Code Ownership', borderColor: 'border-t-4 border-cyan-500' },
];

export default function TrustedSection() {
  return (
    <section className="py-10 bg-[#0D121F] border-y border-slate-800/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`p-5 rounded-2xl bg-[#131927]/90 border border-slate-800 shadow-xl transition-all ${stat.borderColor}`}
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent block font-mono">
                {stat.value}
              </span>
              <span className="text-[11px] font-bold text-slate-400 block mt-1 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
