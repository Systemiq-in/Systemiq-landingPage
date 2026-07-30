'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '350+', label: 'Wholesale & SME Clients', borderColor: 'border-t-4 border-blue-600' },
  { value: '99.9%', label: 'Uptime & Data Accuracy', borderColor: 'border-t-4 border-emerald-600' },
  { value: '2-4 Wks', label: 'Fixed Sprint Timelines', borderColor: 'border-t-4 border-indigo-600' },
  { value: '100%', label: 'Full Code Ownership', borderColor: 'border-t-4 border-amber-600' },
];

export default function TrustedSection() {
  return (
    <section className="py-12 bg-white border-y border-slate-200/80 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all ${stat.borderColor}`}
            >
              <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-slate-700 block mt-1.5 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
