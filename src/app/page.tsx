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

export default function HomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-slate-900 overflow-x-hidden">
      {/* ---------------- HIGH-IMPACT VIBRANT HERO SECTION ---------------- */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/60 via-slate-50 to-white">
        <BlueprintBackground />

        {/* Ambient Gradient Glow Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-400/20 via-indigo-300/20 to-purple-400/20 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-8">
          {/* Studio Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-blue-600 text-xs font-extrabold shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>BUSINESS SYSTEMS STUDIO FOR GROWING SMES</span>
          </motion.div>

          {/* Large Dynamic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08]"
          >
            Engineering Custom Systems <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              That Scale Growing Businesses.
            </span>
          </motion.h1>

          {/* SME-Focused Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            We build custom ERPs, live inventory portals, and automated Tally & WhatsApp workflows tailored to how your SME operates. Delivered in 2 to 4-week sprints.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2.5 group hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Free Workflow Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/solutions"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-extrabold text-sm transition flex items-center justify-center gap-2 shadow-sm hover:border-blue-500"
            >
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Explore Solutions</span>
            </Link>
          </motion.div>

          {/* ---------------- HIGH-DENSITY HERO BENTO GRID ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-10 grid grid-cols-1 md:grid-cols-12 gap-6 text-left"
          >
            {/* Bento Card 1: Main Highlight Card */}
            <div className="md:col-span-6 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-lg transition-all space-y-6 flex flex-col justify-between border-t-4 border-t-blue-600">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Server className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Zero Spreadsheets. Centralized Source of Truth.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Replace fragmented Excel workbooks with unified custom software built around your exact operational steps.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Multi-Branch Live Sync
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> Role Permission Controls
                </span>
              </div>
            </div>

            {/* Bento Card 2: Inventory & Stock Sync */}
            <div className="md:col-span-3 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-lg transition-all space-y-4 flex flex-col justify-between border-t-4 border-t-indigo-600">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  <Boxes className="w-4 h-4 text-indigo-600" />
                </div>
                <h4 className="text-lg font-extrabold text-slate-900 tracking-tight">Live Stock Sync</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Real-time stock counts across stores & warehouses. Automated reorder triggers before stockouts happen.
                </p>
              </div>
              <span className="text-[11px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full w-fit border border-indigo-100">
                #ZeroStockouts
              </span>
            </div>

            {/* Bento Card 3: Tally & WhatsApp Sync */}
            <div className="md:col-span-3 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-lg transition-all space-y-4 flex flex-col justify-between border-t-4 border-t-emerald-600">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                </div>
                <h4 className="text-lg font-extrabold text-slate-900 tracking-tight">Tally & WhatsApp</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Invoices post straight into Tally Prime without re-typing. Auto-send WhatsApp order updates & receipts.
                </p>
              </div>
              <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full w-fit border border-emerald-100">
                #DirectTallySync
              </span>
            </div>

            {/* Bento Card 4: Sprint Delivery Guarantee */}
            <div className="md:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-lg transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t-4 border-t-amber-500">
              <div className="space-y-2 max-w-md">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Predictable Milestones</span>
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">2 to 4-Week Sprint Delivery</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Working software shipped every fortnight. Staging environments for live user testing before rollout.
                </p>
              </div>

              <div className="px-5 py-3 rounded-2xl bg-amber-50 border border-amber-200 text-center shrink-0">
                <span className="text-2xl font-extrabold font-mono text-amber-700 block">2 Wks</span>
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Sprint Cycles</span>
              </div>
            </div>

            {/* Bento Card 5: Full Code Ownership */}
            <div className="md:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-lg transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t-4 border-t-blue-600">
              <div className="space-y-2 max-w-md">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Total Intellectual Property</span>
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">100% Code & Data Ownership</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  You own your source code, database, and system architecture. Zero recurring per-user seat license fees.
                </p>
              </div>

              <div className="px-5 py-3 rounded-2xl bg-blue-50 border border-blue-200 text-center shrink-0">
                <span className="text-2xl font-extrabold font-mono text-blue-700 block">100%</span>
                <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wider">IP Ownership</span>
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
