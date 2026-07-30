'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

const caseStudies = [
  {
    client: 'Apex Steel & Manufacturing',
    location: 'Industrial Zone',
    headline: 'Replaced 18 Excel workbooks with a single real-time ERP matrix',
    stats: [
      { label: 'Time Saved', val: '24 hrs/wk', color: 'text-blue-600' },
      { label: 'Stock Accuracy', val: '99.9%', color: 'text-emerald-600' },
    ],
  },
  {
    client: 'Metro Wholesale Logistics',
    location: '4 Regional Hubs',
    headline: 'Launched self-service B2B dealer portal with instant Tally sync',
    stats: [
      { label: 'Dispatch Speed', val: '4x Faster', color: 'text-indigo-600' },
      { label: 'Billing Errors', val: '0 Incidents', color: 'text-amber-600' },
    ],
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-20 lg:py-24 bg-[#FAFAFA] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-600">
              <Award className="w-3.5 h-3.5" />
              <span>Real Business Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Client Proven Proof.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition shrink-0"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.client}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-300 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-base font-extrabold text-slate-900">{cs.client}</span>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80">
                  {cs.location}
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                "{cs.headline}"
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {cs.stats.map((s) => (
                  <div key={s.label} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <span className="text-xs font-bold text-slate-500 block uppercase tracking-wider">{s.label}</span>
                    <span className={`text-2xl font-extrabold font-mono ${s.color} block mt-1`}>{s.val}</span>
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
