'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Layers,
  Server,
  Clock,
  MessageSquare,
  Code2,
} from 'lucide-react';
import BlueprintBackground from '@/components/ui/BlueprintBackground';
import TrustedSection from '@/components/ui/TrustedSection';
import InteractiveWhatWeBuild from '@/components/ui/InteractiveWhatWeBuild';
import SpreadsheetVsSystemiq from '@/components/ui/SpreadsheetVsSystemiq';
import WhySystemiq from '@/components/ui/WhySystemiq';
import HowWeWork from '@/components/ui/HowWeWork';
import FeaturedIndustries from '@/components/ui/FeaturedIndustries';
import ArchitectureDiagram from '@/components/ui/ArchitectureDiagram';
import BuilderNetworkSection from '@/components/ui/BuilderNetworkSection';
import CaseStudiesPreview from '@/components/ui/CaseStudiesPreview';
import Testimonials from '@/components/ui/Testimonials';
import HomeCTA from '@/components/ui/HomeCTA';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

const heroValueProps = [
  {
    icon: <Server className="w-5 h-5 text-blue-600" />,
    title: 'Zero Spreadsheets',
    desc: 'Consolidate inventory, sales & orders into one single source of truth.',
  },
  {
    icon: <Clock className="w-5 h-5 text-blue-600" />,
    title: '2-4 Week Sprints',
    desc: 'Fast, predictable delivery cycles with working software every fortnight.',
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
    title: 'Tally & WhatsApp Sync',
    desc: 'Direct automated posting into Tally Prime and instant client alerts.',
  },
  {
    icon: <Code2 className="w-5 h-5 text-blue-600" />,
    title: '100% Code Ownership',
    desc: 'Full source code, IP rights, and database ownership. No vendor lock-in.',
  },
];

export default function HomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-slate-900">
      {/* ---------------- CLEAN ELEGANT HERO SECTION ---------------- */}
      <section className="relative min-h-[80vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <BlueprintBackground />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          {/* Studio Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-blue-600 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>BUSINESS SYSTEMS STUDIO FOR GROWING SMES</span>
          </motion.div>

          {/* Large Bold Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08]"
          >
            Engineering Custom Systems <br />
            <span className="highlight-yellow-light px-2 text-slate-900">That Scale Growing Businesses.</span>
          </motion.h1>

          {/* SME-Focused Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            We build custom ERPs, live inventory portals, and automated Tally & WhatsApp workflows tailored to how your SME operates. Delivered in 2 to 4-week sprints.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2.5 group"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Free Workflow Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/solutions"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm transition flex items-center justify-center gap-2 shadow-sm"
            >
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Explore Solutions</span>
            </Link>
          </motion.div>

          {/* ---------------- 4-CARD VALUE PROPOSITION GRID ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
          >
            {heroValueProps.map((vp) => (
              <div
                key={vp.title}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2 hover:border-blue-500 transition"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                  {vp.icon}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 tracking-tight">{vp.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{vp.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- TRUSTED SECTION ---------------- */}
      <TrustedSection />

      {/* ---------------- SPREADSHEET VS SYSTEMIQ MATRIX ---------------- */}
      <SpreadsheetVsSystemiq />

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
