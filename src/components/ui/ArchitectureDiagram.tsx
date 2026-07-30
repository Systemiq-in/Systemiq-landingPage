'use client';

import { motion } from 'framer-motion';
import { Database, Cpu, Layout, Lock, MessageSquare, Zap, Layers } from 'lucide-react';

export default function ArchitectureDiagram() {
  return (
    <section className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-600">
            <Layers className="w-3.5 h-3.5" />
            <span>High Reliability Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built On Modern Cloud Architecture.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Your software runs on dedicated cloud servers with real-time backups, zero lag, and total database privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Layout className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">1. Instant Fast Interface</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Built with Next.js 15 & Tailwind CSS. Loads in under 0.4 seconds on mobile and desktop without lagging or freezing.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">2. Secure Dedicated DB</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              PostgreSQL relational database with daily automatic cloud snapshots. Your company data remains 100% private to you.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">3. Direct API Connectors</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct webhook connections into Tally Prime XML endpoints, Meta WhatsApp Business API, and barcode scanners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
