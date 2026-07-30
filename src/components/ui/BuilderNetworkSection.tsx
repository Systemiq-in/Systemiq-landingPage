'use client';

import Link from 'next/link';
import { ChevronRight, GraduationCap, Rocket, ShieldCheck } from 'lucide-react';

export default function BuilderNetworkSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#F5F5F7] border-t border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] border border-black/[0.06] text-xs font-semibold text-[#0071E3]">
                <GraduationCap className="w-4 h-4 text-[#0071E3]" />
                <span>The Systemiq Fellowship</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight">
                Building Systems. <br />
                <span className="text-[#0071E3]">Developing Elite Engineers.</span>
              </h2>

              <p className="text-[#86868B] text-base leading-relaxed font-normal">
                Systemiq pairs top computer science talent with Senior System Architects. Student fellows build production-ready modules under principal engineering mentorship.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.06] space-y-1.5">
                  <div className="flex items-center gap-2 text-[#1D1D1F] font-bold text-sm">
                    <Rocket className="w-4 h-4 text-[#0071E3]" />
                    <span>Real Production Code</span>
                  </div>
                  <p className="text-xs text-[#86868B] leading-relaxed font-normal">
                    Ship software to live cloud environments serving active business transactions.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.06] space-y-1.5">
                  <div className="flex items-center gap-2 text-[#1D1D1F] font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#0071E3]" />
                    <span>Senior Mentorship</span>
                  </div>
                  <p className="text-xs text-[#86868B] leading-relaxed font-normal">
                    100% of architecture design, DB schemas & PR reviews are guided by Senior Leads.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-sm font-semibold transition shadow-sm hover:scale-[1.02]"
                >
                  <span>Apply for Fellowship</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Highlights */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#F5F5F7] rounded-3xl p-6 border border-black/[0.06] space-y-4">
                <span className="text-xs font-semibold text-[#86868B] uppercase tracking-wider block border-b border-black/[0.06] pb-3">
                  Fellowship Overview
                </span>

                <div className="space-y-3 text-xs text-[#1D1D1F]">
                  <div className="p-3.5 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-between shadow-sm">
                    <span className="font-medium">Modern Tech Stack</span>
                    <span className="text-[#0071E3] font-semibold">Next.js 15 & Postgres</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-between shadow-sm">
                    <span className="font-medium">Fellowship Stipend</span>
                    <span className="text-[#0071E3] font-semibold">Paid Per Module</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-between shadow-sm">
                    <span className="font-medium">Career Outcomes</span>
                    <span className="text-[#0071E3] font-semibold">Verified Work Metrics</span>
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
