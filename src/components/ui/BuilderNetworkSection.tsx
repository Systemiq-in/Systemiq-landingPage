'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, Rocket, ShieldCheck, Sparkles, Zap, Users } from 'lucide-react';

export default function BuilderNetworkSection() {
  return (
    <section className="py-20 bg-[#FAFAFA] relative border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-600">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>The Systemiq Engineering Fellowship</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Building Systems. <br />
                <span className="text-blue-600">Developing Elite Engineers.</span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed font-normal">
                Systemiq pairs top computer science talent with Principal System Architects. Student fellows build real production modules for growing SMEs under strict senior code review.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Rocket className="w-4 h-4 text-blue-600" />
                    <span>Production Code</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Ship code to real cloud infrastructure handling active business transactions.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-indigo-600" />
                    <span>Senior Mentorship</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    100% of architecture design, DB schemas & PR reviews are led by Senior Architects.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/careers"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold flex items-center gap-2 transition shadow-md shadow-blue-500/20"
                >
                  <span>Apply for Fellowship</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs font-bold text-blue-600 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Paid Sprints · Rolling Applications
                </span>
              </div>
            </div>

            {/* Right Fellowship Perks */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Fellowship Highlights
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-blue-600">
                    <Sparkles className="w-3.5 h-3.5" /> Production Quality
                  </span>
                </div>

                <div className="space-y-2.5 font-sans text-xs text-slate-800 font-semibold">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                    <span>💡 Modern Stack</span>
                    <span className="text-blue-600 font-bold">Next 15 + Postgres</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                    <span>💸 Paid Per Module</span>
                    <span className="text-blue-600 font-bold">Competitive Stipends</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                    <span>⚡ Portfolio Proof</span>
                    <span className="text-blue-600 font-bold">Verified CV Metrics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
