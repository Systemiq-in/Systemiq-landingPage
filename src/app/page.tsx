'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Terminal, Sparkles, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import BlueprintBackground from '@/components/ui/BlueprintBackground';
import TrustedSection from '@/components/ui/TrustedSection';
import InteractiveWhatWeBuild from '@/components/ui/InteractiveWhatWeBuild';
import WhySystemiq from '@/components/ui/WhySystemiq';
import HowWeWork from '@/components/ui/HowWeWork';
import FeaturedIndustries from '@/components/ui/FeaturedIndustries';
import ArchitectureDiagram from '@/components/ui/ArchitectureDiagram';
import BuilderNetworkSection from '@/components/ui/BuilderNetworkSection';
import CaseStudiesPreview from '@/components/ui/CaseStudiesPreview';
import Testimonials from '@/components/ui/Testimonials';
import HomeCTA from '@/components/ui/HomeCTA';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

export default function HomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#090909]">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <BlueprintBackground />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#7AE7FF] backdrop-blur-md shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#7AE7FF] animate-pulse" />
            <span>BUSINESS SYSTEMS STUDIO FOR GROWING SMES</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]"
          >
            Custom Software. <br />
            <span className="text-gradient">Engineered Around Your Business.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            We replace spreadsheets, disconnected tools and manual workflows with custom business systems that help SMEs operate faster, smarter and at scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#4F7CFF] via-[#5C86FF] to-[#7AE7FF] text-white font-semibold text-sm hover:opacity-95 transition-all shadow-xl shadow-[#4F7CFF]/25 flex items-center justify-center gap-2.5 group"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Free Workflow Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/solutions"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4 text-[#7AE7FF]" />
              <span>View Solutions</span>
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <div className="p-4 rounded-xl glass-panel border border-white/05 text-center">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-white block">100%</span>
              <span className="text-[11px] font-mono text-white/50">Bespoke Architecture</span>
            </div>
            <div className="p-4 rounded-xl glass-panel border border-white/05 text-center">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-[#7AE7FF] block">2-4 Wks</span>
              <span className="text-[11px] font-mono text-white/50">Sprint Cycle Delivery</span>
            </div>
            <div className="p-4 rounded-xl glass-panel border border-white/05 text-center">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-[#4F7CFF] block">0 Drift</span>
              <span className="text-[11px] font-mono text-white/50">Data & Tally Precision</span>
            </div>
            <div className="p-4 rounded-xl glass-panel border border-white/05 text-center">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-white block">Full IP</span>
              <span className="text-[11px] font-mono text-white/50">Complete Source Code</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- TRUSTED SECTION ---------------- */}
      <TrustedSection />

      {/* ---------------- WHAT WE BUILD ---------------- */}
      <InteractiveWhatWeBuild />

      {/* ---------------- WHY SYSTEMIQ ---------------- */}
      <WhySystemiq />

      {/* ---------------- HOW WE WORK ---------------- */}
      <HowWeWork />

      {/* ---------------- FEATURED INDUSTRIES ---------------- */}
      <FeaturedIndustries />

      {/* ---------------- ARCHITECTURE SECTION ---------------- */}
      <ArchitectureDiagram />

      {/* ---------------- BUILDER NETWORK SECTION ---------------- */}
      <BuilderNetworkSection />

      {/* ---------------- CASE STUDIES PREVIEW ---------------- */}
      <CaseStudiesPreview />

      {/* ---------------- TESTIMONIALS ---------------- */}
      <Testimonials />

      {/* ---------------- HOME CTA ---------------- */}
      <HomeCTA />

      {/* Audit Modal */}
      <WorkflowAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
