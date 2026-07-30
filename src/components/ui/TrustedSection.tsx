'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '350+', label: 'Wholesale & SME Clients' },
  { value: '99.9%', label: 'Uptime & Data Accuracy' },
  { value: '2-4 Wks', label: 'Fixed Sprint Timelines' },
  { value: '100%', label: 'Full Code Ownership' },
];

export default function TrustedSection() {
  return (
    <section className="py-12 bg-white border-y border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80"
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600 block">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-slate-600 block mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
