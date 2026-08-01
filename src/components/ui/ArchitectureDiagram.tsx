'use client';

import { motion } from 'framer-motion';
import { Database, Layout, MessageSquare } from 'lucide-react';

export default function ArchitectureDiagram() {
  return (
    <section className="py-16 lg:py-20 bg-transparent border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
            Cloud Infrastructure
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built On Modern Architecture.
          </h2>
          <p className="text-white/50 text-base sm:text-lg font-normal leading-relaxed">
            Your software runs on dedicated cloud servers with real-time backups, sub-second speed, and complete database privacy.
          </p>
        </div>

        <div className="relative pt-10">
          {/* Animated Pipeline Graphic */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 hidden md:block pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 800 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Paths */}
              <path d="M150,50 L400,50 L650,50" stroke="white" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="4 4" />
              
              {/* Nodes */}
              <circle cx="150" cy="50" r="8" fill="#0071E3" fillOpacity="0.2" />
              <circle cx="400" cy="50" r="12" fill="#0071E3" fillOpacity="0.2" />
              <circle cx="650" cy="50" r="8" fill="#0071E3" fillOpacity="0.2" />
              <circle cx="150" cy="50" r="4" fill="#0071E3" />
              <circle cx="400" cy="50" r="6" fill="#0071E3" />
              <circle cx="650" cy="50" r="4" fill="#0071E3" />

              {/* Data Packets */}
              <motion.circle 
                cx="150" cy="50" r="3" fill="#FFF"
                animate={{ cx: [150, 400] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle 
                cx="400" cy="50" r="3" fill="#FFF"
                animate={{ cx: [400, 650] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 md:mt-24">
            <div className="bg-[#13151A]/80 rounded-3xl p-8 border border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_32px_rgba(0,113,227,0.1)] hover:-translate-y-1 transition-all duration-300 space-y-3 relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0071E3]/5 blur-[40px] rounded-full group-hover:bg-[#0071E3]/20 transition-colors" />
              <div className="w-10 h-10 rounded-2xl bg-[#090A0C] text-[#0071E3] flex items-center justify-center border border-white/[0.08] relative z-10">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white relative z-10">1. Ultra-Fast Interface</h3>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-normal relative z-10">
                Built with Next.js 15 & Tailwind CSS. Loads in under 0.4 seconds on mobile and desktop without lagging or freezing.
              </p>
            </div>

            <div className="bg-[#13151A]/80 rounded-3xl p-8 border border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_32px_rgba(0,113,227,0.1)] hover:-translate-y-1 transition-all duration-300 space-y-3 relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0071E3]/5 blur-[40px] rounded-full group-hover:bg-[#0071E3]/20 transition-colors" />
              <div className="w-10 h-10 rounded-2xl bg-[#090A0C] text-[#0071E3] flex items-center justify-center border border-white/[0.08] relative z-10">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white relative z-10">2. Secure Dedicated DB</h3>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-normal relative z-10">
                PostgreSQL relational database with daily automatic cloud snapshots. Your company data remains 100% private to you.
              </p>
            </div>

            <div className="bg-[#13151A]/80 rounded-3xl p-8 border border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_32px_rgba(0,113,227,0.1)] hover:-translate-y-1 transition-all duration-300 space-y-3 relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0071E3]/5 blur-[40px] rounded-full group-hover:bg-[#0071E3]/20 transition-colors" />
              <div className="w-10 h-10 rounded-2xl bg-[#090A0C] text-[#0071E3] flex items-center justify-center border border-white/[0.08] relative z-10">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white relative z-10">3. Direct API Connectors</h3>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-normal relative z-10">
                Direct webhook connections into Tally Prime XML endpoints, Meta WhatsApp Business API, and barcode scanners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
