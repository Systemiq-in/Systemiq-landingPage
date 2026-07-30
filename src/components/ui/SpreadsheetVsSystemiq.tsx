'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const comparisonData = [
  {
    category: 'Inventory & Warehousing',
    oldWay: '12 separate Excel sheets across 4 store managers. Stock counts are always 2 days out of date.',
    systemiqWay: 'Centralized live inventory ledger with real-time barcode scanning. Stock updates instantly across all hubs.',
    impact: '100% Stock Accuracy',
  },
  {
    category: 'Order Taking & Wholesale',
    oldWay: 'Dealers send voice notes and photos of written paper slips on WhatsApp. Team manually types them into Tally.',
    systemiqWay: 'Self-service 24/7 B2B dealer portal with automatic credit limit checks and instant WhatsApp order receipts.',
    impact: '10x Faster Dispatch',
  },
  {
    category: 'Billing & Accounting',
    oldWay: 'Accounts team spends 3 hours every evening re-entering invoices from paper to Tally Prime.',
    systemiqWay: 'Invoices post directly into Tally Prime with one click. GST and E-Way bills generated automatically.',
    impact: 'Zero Manual Entry',
  },
  {
    category: 'Executive Visibility',
    oldWay: 'Owner waits until end of month to ask accountant for profit margins and cash flow health.',
    systemiqWay: 'Real-time admin dashboard accessible on mobile showing today’s sales, margins, and stock alerts.',
    impact: 'Instant Visibility',
  },
];

export default function SpreadsheetVsSystemiq() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-16 lg:py-20 bg-transparent border-t border-black/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
            Operational Transformation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight">
            Spreadsheet Chaos vs. Systemiq.
          </h2>
          <p className="text-[#86868B] text-base sm:text-lg font-normal leading-relaxed">
            See how custom business software eliminates manual workarounds for growing SMEs.
          </p>
        </div>

        {/* Apple Style Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Module Selector */}
          <div className="lg:col-span-5 space-y-3">
            {comparisonData.map((item, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <div
                  key={item.category}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-white border-[#0071E3] shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
                      : 'bg-white/60 border-black/[0.06] hover:bg-white hover:border-black/[0.12]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#86868B]">Module 0{idx + 1}</span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#F5F5F7] text-[#0071E3]">
                      {item.impact}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#1D1D1F] mt-1">{item.category}</h3>
                </div>
              );
            })}
          </div>

          {/* Active Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)] space-y-6"
              >
                <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                  <h4 className="text-xl font-bold text-[#1D1D1F]">{comparisonData[activeIdx].category}</h4>
                  <span className="text-xs font-semibold text-[#0071E3]">
                    Target: {comparisonData[activeIdx].impact}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-100 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 uppercase tracking-wider">
                      <AlertCircle className="w-4 h-4" />
                      <span>Before Systemiq</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#1D1D1F] leading-relaxed">
                      {comparisonData[activeIdx].oldWay}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0071E3] uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>With Systemiq Engine</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#1D1D1F] font-medium leading-relaxed">
                      {comparisonData[activeIdx].systemiqWay}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
