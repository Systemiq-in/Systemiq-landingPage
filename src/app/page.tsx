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
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Boxes,
  Zap,
  Building,
} from 'lucide-react';
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

export default function HomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0B0F17] text-slate-100 overflow-x-hidden bg-grid-studio">
      {/* ---------------- HIGH-IMPACT STUDIO HERO SECTION ---------------- */}
      <section className="relative min-h-[80vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Gradient Glow Halos */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/20 to-purple-600/20 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-6">
          {/* Studio Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold shadow-lg shadow-blue-500/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>BUSINESS SYSTEMS STUDIO FOR GROWING SMES</span>
          </motion.div>

          {/* Large Dynamic Studio Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]"
          >
            We Build Custom Software <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              That Operates Your Entire SME.
            </span>
          </motion.h1>

          {/* SME-Focused Business Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Ditch messy Excel workbooks and rigid off-the-shelf software. We engineer custom ERPs, warehouse stock scanners, and automated Tally Prime & WhatsApp workflows in 2 to 4-week sprints.
          </motion.p>

          {/* Primary & Secondary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2.5 group hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Free Workflow Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/solutions"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-white font-extrabold text-sm transition flex items-center justify-center gap-2 shadow-md hover:border-slate-700"
            >
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Explore Solution Modules</span>
            </Link>
          </motion.div>

          {/* ---------------- HIGH-DENSITY STUDIO BENTO GRID ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-5 text-left"
          >
            {/* Bento Card 1: Core ERP Feature */}
            <div className="md:col-span-6 bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-800/90 hover:border-blue-500/50 shadow-xl transition-all space-y-4 flex flex-col justify-between border-t-4 border-t-blue-500">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <Server className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  Zero Spreadsheets. Central Operational Matrix.
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Consolidate orders, raw materials, inventory, and multi-branch operations into one single source of truth.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Multi-Branch Live Sync
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Role Permission Controls
                </span>
              </div>
            </div>

            {/* Bento Card 2: Stock Sync */}
            <div className="md:col-span-3 bg-slate-900/90 rounded-2xl p-6 border border-slate-800/90 hover:border-indigo-500/50 shadow-xl transition-all space-y-3 flex flex-col justify-between border-t-4 border-t-indigo-500">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
                  <Boxes className="w-4 h-4 text-indigo-400" />
                </div>
                <h4 className="text-base font-extrabold text-white tracking-tight">Live Stock Sync</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real-time stock counts across stores & warehouses. Automated reorder triggers.
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full w-fit border border-indigo-500/20">
                #ZeroStockouts
              </span>
            </div>

            {/* Bento Card 3: Tally & WhatsApp */}
            <div className="md:col-span-3 bg-slate-900/90 rounded-2xl p-6 border border-slate-800/90 hover:border-emerald-500/50 shadow-xl transition-all space-y-3 flex flex-col justify-between border-t-4 border-t-emerald-500">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="text-base font-extrabold text-white tracking-tight">Tally & WhatsApp</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Direct Tally Prime invoice posting. Auto-send WhatsApp receipt links.
                </p>
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full w-fit border border-emerald-500/20">
                #DirectTallySync
              </span>
            </div>

            {/* Bento Card 4: Sprint Delivery */}
            <div className="md:col-span-6 bg-slate-900/90 rounded-2xl p-6 border border-slate-800/90 hover:border-amber-500/50 shadow-xl transition-all flex items-center justify-between gap-4 border-t-4 border-t-amber-500">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Fixed Milestones</span>
                </div>
                <h4 className="text-lg font-extrabold text-white tracking-tight">2 to 4-Week Sprint Delivery</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Working software delivered every fortnight with live staging environments for testing.
                </p>
              </div>

              <div className="px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center shrink-0">
                <span className="text-xl font-extrabold font-mono text-amber-400 block">2 Wks</span>
                <span className="text-[9px] font-bold text-amber-300 uppercase tracking-wider">Sprint Cycles</span>
              </div>
            </div>

            {/* Bento Card 5: Full Code Ownership */}
            <div className="md:col-span-6 bg-slate-900/90 rounded-2xl p-6 border border-slate-800/90 hover:border-cyan-500/50 shadow-xl transition-all flex items-center justify-between gap-4 border-t-4 border-t-cyan-500">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Intellectual Property</span>
                </div>
                <h4 className="text-lg font-extrabold text-white tracking-tight">100% Source Code & Data Ownership</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  You own your source code, database, and system architecture. Zero monthly seat fees.
                </p>
              </div>

              <div className="px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center shrink-0">
                <span className="text-xl font-extrabold font-mono text-cyan-400 block">100%</span>
                <span className="text-[9px] font-bold text-cyan-300 uppercase tracking-wider">IP Ownership</span>
              </div>
            </div>
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
