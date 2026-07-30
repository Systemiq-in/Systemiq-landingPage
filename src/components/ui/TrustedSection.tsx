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
    <section className="py-12 bg-white border-y border-black/[0.08] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-[#F5F5F7] border border-black/[0.06]"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] block tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-medium text-[#86868B] block mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
