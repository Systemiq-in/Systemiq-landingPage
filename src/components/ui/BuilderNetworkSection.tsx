'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ShieldCheck, ArrowRight, Code2, Users, Sparkles } from 'lucide-react';

export default function BuilderNetworkSection() {
  return (
    <section className="py-24 bg-[#090909] relative border-t border-white/[0.08] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#4F7CFF]/08 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#7AE7FF]/06 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 bg-gradient-to-b from-[#0e0f14]/90 to-[#090909]/95 relative overflow-hidden">
          {/* Subtle Top Accent Beam */}
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

              <p className="text-white/70 text-base leading-relaxed">
                Systemiq pairs elite engineering student talent with veteran Senior System Architects. This hybrid studio model enables us to engineer production-grade business software with extraordinary agility, while forging the next generation of software architects.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/05 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#7AE7FF]" />
                    <span>Senior Supervision</span>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed">
                    100% of architecture design, code review, security audits, and deployments are executed by Senior Principals.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/05 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Award className="w-4 h-4 text-[#4F7CFF]" />
                    <span>Real-World Impact</span>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Students work on real SME production systems with true business metrics—not academic toy apps.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/careers"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#4F7CFF] to-[#3B62E6] hover:from-[#5C86FF] hover:to-[#4F7CFF] text-white text-sm font-semibold flex items-center gap-2 transition shadow-lg shadow-[#4F7CFF]/20"
                >
                  <span>Apply to Join Builder Network</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about#network"
                  className="px-6 py-3 rounded-lg bg-white/05 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition"
                >
                  Learn About Our Model
                </Link>
              </div>
            </div>

            {/* Right Metric Card Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                    Network Metrics
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-[#7AE7FF]">
                    <Sparkles className="w-3.5 h-3.5" /> Studio Standard
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-3xl font-bold text-white font-mono">100%</span>
                    <span className="text-xs text-white/50 block mt-0.5">Code Review Rate</span>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-[#7AE7FF] font-mono">4.9/5</span>
                    <span className="text-xs text-white/50 block mt-0.5">SME Quality Rating</span>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-[#4F7CFF] font-mono">40+</span>
                    <span className="text-xs text-white/50 block mt-0.5">Active Student Engineers</span>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-white font-mono">0</span>
                    <span className="text-xs text-white/50 block mt-0.5">Security Vulnerabilities</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#7AE7FF]/05 border border-[#7AE7FF]/20 flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-[#7AE7FF] shrink-0" />
                  <span className="text-xs text-white/80 leading-tight">
                    Strict Senior-Mentored Production Pipeline with zero compromise on software security.
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
