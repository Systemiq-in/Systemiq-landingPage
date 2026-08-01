'use client';

import { motion } from 'framer-motion';
import { Building2, Activity, Clock, ShieldCheck } from 'lucide-react';

const stats = [
  { value: '350+', label: 'Wholesale & SME Clients', icon: <Building2 className="w-5 h-5 text-[#0071E3]" /> },
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
              className="flex flex-col items-center p-6 rounded-3xl bg-[#13151A]/80 border border-white/[0.04] shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all hover:bg-[#13151A] hover:border-white/[0.08]"
            >
              <div className="w-10 h-10 mb-4 rounded-xl bg-[#090A0C] border border-white/[0.08] shadow-sm flex items-center justify-center">
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
