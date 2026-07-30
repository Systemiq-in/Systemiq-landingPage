'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Boxes,
  Zap,
  Building,
  CheckCircle2,
  TrendingUp,
  Clock,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Smartphone,
  FileCheck,
  Sparkles,
} from 'lucide-react';

export default function HeroSystemSimulator() {
  const [activeTab, setActiveTab] = useState<'inventory' | 'tally' | 'dealer'>('inventory');
  const [isScanning, setIsScanning] = useState(false);

  const triggerScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 1200);
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 rounded-3xl bg-white border border-slate-200/80 shadow-2xl overflow-hidden text-left relative">
      {/* Decorative Glow Blobs Behind Simulator */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-400/15 rounded-full blur-3xl pointer-events-none" />

      {/* Simulator Navigation Bar */}
      <div className="bg-slate-900 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <span className="text-xs font-mono text-slate-300 font-bold flex items-center gap-2 pl-2 border-l border-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Systemiq Engine v2.4 · Live Studio Preview
          </span>
        </div>

        {/* Interactive Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              activeTab === 'inventory'
                ? 'bg-blue-600 text-white font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Boxes className="w-3.5 h-3.5" />
            <span>Stock Sync</span>
          </button>

          <button
            onClick={() => setActiveTab('tally')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              activeTab === 'tally'
                ? 'bg-indigo-600 text-white font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Tally & WhatsApp</span>
          </button>

          <button
            onClick={() => setActiveTab('dealer')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              activeTab === 'dealer'
                ? 'bg-blue-600 text-white font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            <span>Dealer Portal</span>
          </button>
        </div>
      </div>

      {/* Simulator Interactive Body */}
      <div className="p-6 sm:p-8 bg-gradient-to-b from-white via-slate-50/50 to-white relative z-10 min-h-[320px]">
        <AnimatePresence mode="wait">
          {activeTab === 'inventory' && (
            <motion.div
              key="inventory"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Header Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Live Warehouse Stock</span>
                  <span className="text-2xl font-extrabold font-mono text-slate-900">4,892 Units</span>
                  <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> 100% Accurate (4 Stores)
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Reorder Triggers</span>
                  <span className="text-2xl font-extrabold font-mono text-amber-600">2 Alerts Pending</span>
                  <span className="text-[11px] font-bold text-slate-500">Auto PO sent to vendor</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Mobile Scanner Sync</span>
                  <span className="text-2xl font-extrabold font-mono text-blue-600">0.02s Response</span>
                  <span className="text-[11px] font-bold text-blue-600 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Zero Manual Entry
                  </span>
                </div>
              </div>

              {/* Live Scanner Interaction Card */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Barcode Scanner Simulation</span>
                  </div>
                  <h4 className="text-base font-bold text-white">SKU-8821: High-Tensile Steel Bolts</h4>
                  <p className="text-xs text-slate-400 font-mono">Bin Location: A-14-3 · Hub 02 Central Warehouse</p>
                </div>

                <button
                  onClick={triggerScan}
                  disabled={isScanning}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 transition shadow-md shrink-0 disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                  <span>{isScanning ? 'Syncing DB...' : 'Simulate Scan'}</span>
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'tally' && (
            <motion.div
              key="tally"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Tally Prime Direct Posting</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold">100% Synced</span>
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900">INV-2026-0941 Posted</h4>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Voucher created under Sales Ledger. GST Breakup & E-Way Bill numbers injected automatically.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">WhatsApp Client Alert</span>
                    <span className="px-2 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold">Sent Instantly</span>
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900">Receipt Sent to +91 98***</h4>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Customer received PDF invoice link & WhatsApp dispatch tracking number automatically.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between text-xs font-semibold text-slate-800">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Zero double data entry required across accounts & logistics.
                </span>
                <span className="text-blue-600 font-bold font-mono">0.4s Execution</span>
              </div>
            </motion.div>
          )}

          {activeTab === 'dealer' && (
            <motion.div
              key="dealer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Active B2B Dealers</span>
                  <span className="text-2xl font-extrabold font-mono text-slate-900">142 Dealers</span>
                  <span className="text-[11px] font-bold text-blue-600">Tiered Pricing Active</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Credit Limit Guard</span>
                  <span className="text-2xl font-extrabold font-mono text-emerald-600">Auto Enforced</span>
                  <span className="text-[11px] font-bold text-slate-500">Locks unpaid overdues</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">PDF Quotation Generator</span>
                  <span className="text-2xl font-extrabold font-mono text-indigo-600">3 Seconds</span>
                  <span className="text-[11px] font-bold text-indigo-600">Branded with your logo</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between text-xs font-bold text-blue-900">
                <span>Dealers place orders 24/7 without calling sales staff or typing WhatsApp notes.</span>
                <span className="px-3 py-1 rounded-lg bg-blue-600 text-white font-mono text-[11px]">24/7 Self-Service</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Simulator Footer Bar */}
      <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Systemiq Custom Architecture · Zero Monthly Seat Fees
        </span>
        <span className="text-blue-600 font-bold font-mono">100% Code Ownership</span>
      </div>
    </div>
  );
}
