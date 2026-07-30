'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, AlertTriangle, ShieldCheck } from 'lucide-react';

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
    impact: 'Instant Decisions',
  },
];

export default function SpreadsheetVsSystemiq() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-24 bg-[#FAFAFA] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-600">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPERATIONAL TRANSFORM MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            The Spreadsheet Chaos vs. <br />
            <span className="text-blue-600">The Systemiq Engine.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Compare how growing SMEs operate before and after replacing legacy manual processes with custom software.
          </p>
        </div>

        {/* Interactive Comparison Tabs & Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Tab Selector */}
          <div className="lg:col-span-5 space-y-3">
            {comparisonData.map((item, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <div
                  key={item.category}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-white border-blue-600 shadow-md shadow-blue-500/10'
                      : 'bg-white/60 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-600">Module 0{idx + 1}</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {item.impact}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">{item.category}</h3>
                </div>
              );
            })}
          </div>

          {/* Active Comparison Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 space-y-8 shadow-xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-base font-extrabold text-slate-900">{comparisonData[activeIdx].category}</span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                    Target Outcome: {comparisonData[activeIdx].impact}
                  </span>
                </div>

                {/* Old Way vs Systemiq Way Split */}
                <div className="space-y-6">
                  {/* The Old Way */}
                  <div className="p-5 rounded-2xl bg-red-50 border border-red-200 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4" />
                      <span>The Spreadsheet Chaos (Before)</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {comparisonData[activeIdx].oldWay}
                    </p>
                  </div>

                  {/* The Systemiq Way */}
                  <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4" />
                      <span>The Systemiq Engine (After)</span>
                    </div>
                    <p className="text-sm text-slate-900 leading-relaxed font-semibold">
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
