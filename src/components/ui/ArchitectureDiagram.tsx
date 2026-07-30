'use client';

import { motion } from 'framer-motion';
import { Database, Layout, MessageSquare, Layers } from 'lucide-react';

export default function ArchitectureDiagram() {
  return (
    <section className="py-14 sm:py-16 bg-[#0B0F17] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-bold text-blue-400">
            <Layers className="w-3.5 h-3.5" />
            <span>High Reliability Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built On Modern Cloud Architecture.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed">
            Your software runs on dedicated cloud servers with real-time backups, zero lag, and total database privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#131927] rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 shadow-xl transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
              <Layout className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-white">1. Instant Fast Interface</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Built with Next.js 15 & Tailwind CSS. Loads in under 0.4 seconds on mobile and desktop without lagging or freezing.
            </p>
          </div>

          <div className="bg-[#131927] rounded-2xl p-6 border border-slate-800 hover:border-indigo-500/50 shadow-xl transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-white">2. Secure Dedicated DB</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              PostgreSQL relational database with daily automatic cloud snapshots. Your company data remains 100% private to you.
            </p>
          </div>

          <div className="bg-[#131927] rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 shadow-xl transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-extrabold text-white">3. Direct API Connectors</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Direct webhook connections into Tally Prime XML endpoints, Meta WhatsApp Business API, and barcode scanners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
