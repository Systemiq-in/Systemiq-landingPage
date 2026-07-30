'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ShieldCheck, ArrowRight, Code2, Users, Sparkles, Rocket, Zap, HeartHandshake } from 'lucide-react';

export default function BuilderNetworkSection() {
  return (
    <section className="py-24 bg-[#090909] relative border-t border-white/[0.08] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#4F7CFF]/08 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#7AE7FF]/06 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 bg-gradient-to-b from-[#0e0f14]/90 to-[#090909]/95 relative overflow-hidden">
          {/* Subtle Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7AE7FF]/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7AE7FF]/10 border border-[#7AE7FF]/30 text-xs font-mono text-[#7AE7FF]">
                <GraduationCap className="w-4 h-4" />
                <span>The Systemiq Builder Network</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Building Software. <br />
                <span className="text-gradient">Building Engineers.</span>
              </h2>

              <p className="text-white/80 text-base leading-relaxed">
                No coffee runs. No boring 100-page assignment PDFs. Systemiq collaborates with top-tier student developers under senior architect supervision to build real software used by growing businesses every day.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/05 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Rocket className="w-4 h-4 text-[#7AE7FF]" />
                    <span>Real Production Code</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Ship code to real cloud servers with thousands of daily users—not sandbox toy apps.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/05 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#4F7CFF]" />
                    <span>Senior Mentorship</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    100% of architecture design, security reviews, and DB schemas are led by Senior Principals.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/careers"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#4F7CFF] to-[#3B62E6] hover:from-[#5C86FF] hover:to-[#4F7CFF] text-white text-sm font-semibold flex items-center gap-2 transition shadow-lg shadow-[#4F7CFF]/20"
                >
                  <span>Join Builder Network</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs font-mono text-[#7AE7FF] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Paid Sprints · Remote-First · Rolling Applications
                </span>
              </div>
            </div>

            {/* Right GenZ Vibe Card Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                    Student Dev Perks
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-[#7AE7FF]">
                    <Sparkles className="w-3.5 h-3.5" /> Zero Corporate Fluff
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs text-white/80">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/05 flex items-center justify-between">
                    <span>💡 Learn Modern Stack</span>
                    <span className="text-[#7AE7FF]">Next 15 + Postgres</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/05 flex items-center justify-between">
                    <span>💸 Get Paid Per Sprint</span>
                    <span className="text-[#7AE7FF]">Fair Compensation</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/05 flex items-center justify-between">
                    <span>⚡ Resume Flex</span>
                    <span className="text-[#7AE7FF]">Production Proof</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/05 flex items-center justify-between">
                    <span>🎯 Senior 1-on-1 Code Reviews</span>
                    <span className="text-[#7AE7FF]">100% Quality Rate</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#7AE7FF]/08 border border-[#7AE7FF]/20 flex items-center gap-3">
                  <HeartHandshake className="w-5 h-5 text-[#7AE7FF] shrink-0" />
                  <span className="text-xs text-white/80 leading-tight">
                    Gain real engineering muscle before you even graduate.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
