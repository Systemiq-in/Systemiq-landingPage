'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const caseStudies = [
  {
    client: 'Apex Steel & Manufacturing',
    location: 'Industrial Zone',
    headline: 'Replaced 18 Excel workbooks with a single real-time ERP matrix',
    stats: [
      { label: 'Time Saved', val: '24 hrs/wk' },
      { label: 'Stock Accuracy', val: '99.9%' },
    ],
  },
  {
    client: 'Metro Wholesale Logistics',
    location: '4 Regional Hubs',
    headline: 'Launched self-service B2B dealer portal with instant Tally sync',
    stats: [
      { label: 'Dispatch Speed', val: '4x Faster' },
      { label: 'Billing Errors', val: '0 Incidents' },
    ],
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-16 lg:py-20 bg-white/40 backdrop-blur-2xl border-t border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
              Proven Impact
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight">
              Client Case Studies.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="text-xs sm:text-sm font-semibold text-[#0071E3] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>View All Case Studies</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.client}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-[#F5F5F7] rounded-3xl p-8 border border-black/[0.06] hover:border-[#0071E3]/40 shadow-sm hover:shadow-md transition-all duration-300 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                <span className="text-base font-bold text-[#1D1D1F]">{cs.client}</span>
                <span className="text-xs font-semibold text-[#0071E3] bg-white px-3 py-1 rounded-full border border-black/[0.06]">
                  {cs.location}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#1D1D1F] leading-snug">
                "{cs.headline}"
              </h3>
              
              {/* Mock UI Visual Proof */}
              <div className="h-32 w-full bg-white rounded-2xl border border-black/[0.06] shadow-sm overflow-hidden flex flex-col relative group">
                {/* Mac-like Header */}
                <div className="h-6 bg-[#F5F5F7] border-b border-black/[0.06] flex items-center px-3 gap-1.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-rose-400" />
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div className="mx-auto h-2 w-16 bg-black/[0.04] rounded-full" />
                </div>
                {/* Mock Content */}
                <div className="p-3 flex-1 flex flex-col gap-2">
                  <div className="flex gap-2 mb-1">
                    <div className="h-3 w-12 bg-[#0071E3]/20 rounded-sm" />
                    <div className="h-3 w-8 bg-black/[0.04] rounded-sm" />
                    <div className="h-3 w-16 bg-black/[0.04] rounded-sm" />
                  </div>
                  <div className="h-1.5 w-full bg-black/[0.02] rounded-full" />
                  <div className="h-1.5 w-5/6 bg-black/[0.02] rounded-full" />
                  <div className="h-1.5 w-full bg-black/[0.02] rounded-full" />
                  
                  <div className="mt-auto flex justify-between items-end">
                    <div className="w-10 h-6 bg-emerald-50 border border-emerald-100 rounded-md flex items-center justify-center">
                      <div className="h-1.5 w-6 bg-emerald-400 rounded-full" />
                    </div>
                    <div className="w-16 h-6 bg-[#0071E3]/10 rounded-md flex items-center justify-center">
                      <div className="h-1.5 w-10 bg-[#0071E3] rounded-full" />
                    </div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0071E3]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-[10px] font-bold text-[#0071E3] bg-white px-2 py-1 rounded-full shadow-sm border border-[#0071E3]/20 uppercase tracking-wider">Inspect UI</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {cs.stats.map((s) => (
                  <div key={s.label} className="p-4 rounded-2xl bg-white border border-black/[0.06] group-hover:border-[#0071E3]/20 transition-colors">
                    <span className="text-xs font-medium text-[#86868B] block uppercase tracking-wider">{s.label}</span>
                    <span className="text-2xl font-bold text-[#0071E3] block mt-1">{s.val}</span>
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
