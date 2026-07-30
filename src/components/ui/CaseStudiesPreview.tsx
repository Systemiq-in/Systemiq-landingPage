'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award } from 'lucide-react';

const caseStudies = [
  {
    client: 'Apex Steel & Manufacturing',
    location: 'Industrial Zone',
    headline: 'Replaced 18 Excel workbooks with a single real-time ERP matrix',
    stats: [
      { label: 'Time Saved', val: '24 hrs/wk', color: 'text-blue-400' },
      { label: 'Stock Accuracy', val: '99.9%', color: 'text-emerald-400' },
    ],
  },
  {
    client: 'Metro Wholesale Logistics',
    location: '4 Regional Hubs',
    headline: 'Launched self-service B2B dealer portal with instant Tally sync',
    stats: [
      { label: 'Dispatch Speed', val: '4x Faster', color: 'text-indigo-400' },
      { label: 'Billing Errors', val: '0 Incidents', color: 'text-cyan-400' },
    ],
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-14 sm:py-16 bg-[#090D14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-bold text-blue-400">
              <Award className="w-3.5 h-3.5" />
              <span>Real Business Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Client Proven Proof.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="text-xs sm:text-sm font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition shrink-0 font-mono"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.client}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#131927] rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-blue-500/50 shadow-xl transition-all duration-300 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-base font-extrabold text-white">{cs.client}</span>
                <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 font-mono">
                  {cs.location}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-200 leading-snug">
                "{cs.headline}"
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {cs.stats.map((s) => (
                  <div key={s.label} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">{s.label}</span>
                    <span className={`text-xl font-extrabold font-mono ${s.color} block mt-1`}>{s.val}</span>
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
