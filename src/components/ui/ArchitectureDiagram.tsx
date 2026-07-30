'use client';

import { Database, Layout, MessageSquare } from 'lucide-react';

export default function ArchitectureDiagram() {
  return (
    <section className="py-16 lg:py-20 bg-[#F5F5F7] border-t border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
            Cloud Infrastructure
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight">
            Built On Modern Architecture.
          </h2>
          <p className="text-[#86868B] text-base sm:text-lg font-normal leading-relaxed">
            Your software runs on dedicated cloud servers with real-time backups, sub-second speed, and complete database privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F5F5F7] text-[#0071E3] flex items-center justify-center border border-black/[0.06]">
              <Layout className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#1D1D1F]">1. Ultra-Fast Interface</h3>
            <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed font-normal">
              Built with Next.js 15 & Tailwind CSS. Loads in under 0.4 seconds on mobile and desktop without lagging or freezing.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F5F5F7] text-[#0071E3] flex items-center justify-center border border-black/[0.06]">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#1D1D1F]">2. Secure Dedicated DB</h3>
            <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed font-normal">
              PostgreSQL relational database with daily automatic cloud snapshots. Your company data remains 100% private to you.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F5F5F7] text-[#0071E3] flex items-center justify-center border border-black/[0.06]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#1D1D1F]">3. Direct API Connectors</h3>
            <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed font-normal">
              Direct webhook connections into Tally Prime XML endpoints, Meta WhatsApp Business API, and barcode scanners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
