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
    <section className="py-14 sm:py-16 bg-[#0B0F17] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-bold text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPERATIONAL TRANSFORM MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Spreadsheet Chaos vs. <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              The Systemiq Engine.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed">
            Compare how growing SMEs operate before and after replacing legacy manual processes with custom software.
          </p>
        </div>

        {/* Interactive Comparison Tabs & Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Tab Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            {comparisonData.map((item, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <div
                  key={item.category}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-slate-900 border-blue-500 shadow-xl shadow-blue-500/10'
                      : 'bg-[#131927]/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-400">Module 0{idx + 1}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {item.impact}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-white mt-1">{item.category}</h3>
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
                transition={{ duration: 0.2 }}
                className="bg-[#131927] rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-5 shadow-2xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-base font-extrabold text-white">{comparisonData[activeIdx].category}</span>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
                    Target: {comparisonData[activeIdx].impact}
                  </span>
                </div>

                {/* Old Way vs Systemiq Way Split */}
                <div className="space-y-4">
                  {/* The Old Way */}
                  <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-800/40 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>The Spreadsheet Chaos (Before)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {comparisonData[activeIdx].oldWay}
                    </p>
                  </div>

                  {/* The Systemiq Way */}
                  <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/40 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>The Systemiq Engine (After)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white leading-relaxed font-semibold">
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
