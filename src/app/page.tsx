'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Layers,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Boxes,
  MessageSquare,
  Calculator,
  Zap,
  TrendingUp,
  Server,
  Terminal,
  Play,
  Check,
} from 'lucide-react';
import BlueprintBackground from '@/components/ui/BlueprintBackground';
import TrustedSection from '@/components/ui/TrustedSection';
import InteractiveWhatWeBuild from '@/components/ui/InteractiveWhatWeBuild';
import SpreadsheetVsSystemiq from '@/components/ui/SpreadsheetVsSystemiq';
import SmeRoiCalculator from '@/components/ui/SmeRoiCalculator';
import WhySystemiq from '@/components/ui/WhySystemiq';
import HowWeWork from '@/components/ui/HowWeWork';
import FeaturedIndustries from '@/components/ui/FeaturedIndustries';
import ArchitectureDiagram from '@/components/ui/ArchitectureDiagram';
import BuilderNetworkSection from '@/components/ui/BuilderNetworkSection';
import CaseStudiesPreview from '@/components/ui/CaseStudiesPreview';
import Testimonials from '@/components/ui/Testimonials';
import HomeCTA from '@/components/ui/HomeCTA';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

const heroTabs = [
  {
    id: 'erp',
    label: 'Custom ERP',
    icon: <Server className="w-4 h-4 text-[#7AE7FF]" />,
    title: 'Central Order & Material Matrix',
    metric1: '$42,850 Revenue Today',
    metric2: '99.8% On-Time Dispatch',
    logs: [
      { text: 'Order #4820 processed · Steel Sheet B-12 allocated', time: 'Just now' },
      { text: 'Auto GRN matched with Purchase Order #902', time: '2m ago' },
      { text: 'Shift 2 Production Card #104 started', time: '5m ago' },
    ],
  },
  {
    id: 'inventory',
    label: 'Inventory Sync',
    icon: <Boxes className="w-4 h-4 text-[#4F7CFF]" />,
    title: 'Live 4-Warehouse Stock Control',
    metric1: '14,200 SKUs Monitored',
    metric2: '0 Stockout Incidents',
    logs: [
      { text: 'Bin A-14 scanner picked 50 units (Warehouse North)', time: 'Just now' },
      { text: 'Safety stock alert triggered for Item #X-901', time: '1m ago' },
      { text: 'Inter-branch transfer voucher #892 signed', time: '4m ago' },
    ],
  },
  {
    id: 'integrations',
    label: 'Tally & WhatsApp',
    icon: <MessageSquare className="w-4 h-4 text-[#7AE7FF]" />,
    title: 'Automated Accounting & Alerts',
    metric1: '100% Tally Voucher Sync',
    metric2: 'Instant WhatsApp Dispatch',
    logs: [
      { text: 'Invoice #INV-2045 posted to Tally Prime Ledger', time: 'Just now' },
      { text: 'WhatsApp order confirmation & tracking sent to Dealer', time: '1m ago' },
      { text: 'Payment link generated & emailed to client', time: '3m ago' },
    ],
  },
];

export default function HomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('erp');
  const [liveCounter, setLiveCounter] = useState(14820);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCounter((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentTabData = heroTabs.find((t) => t.id === activeTab) || heroTabs[0];

  return (
    <div className="relative min-h-screen bg-[#090909]">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <BlueprintBackground />

        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-8">
          {/* Studio Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#7AE7FF] backdrop-blur-md shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#4F7CFF] animate-pulse" />
            <span>BUSINESS SYSTEMS STUDIO FOR GROWING SMES</span>
          </motion.div>

          {/* Large Bold Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]"
          >
            Custom Software. <br />
            <span className="text-gradient">Engineered Around Your Business.</span>
          </motion.h1>

          {/* SME-Focused Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            We replace spreadsheets, disconnected tools and manual entries with custom software systems built specifically for how your SME operates.
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
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#4F7CFF] via-[#5C86FF] to-[#3B62E6] hover:from-[#5C86FF] hover:to-[#4F7CFF] text-white font-semibold text-sm transition-all shadow-xl shadow-[#4F7CFF]/20 flex items-center justify-center gap-2.5 group"
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
              <span>Explore Solutions</span>
            </Link>
          </motion.div>

          {/* ---------------- LIVE INTERACTIVE SYSTEM SHOWCASE WIDGET ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-10 max-w-4xl mx-auto"
          >
            <div className="glass-panel rounded-2xl border border-white/15 bg-[#0d0e12]/90 overflow-hidden shadow-2xl relative">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#08080a] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-white/40 ml-2">systemiq-live-preview.internal</span>
                </div>

                {/* Tab Controls */}
                <div className="flex items-center gap-1.5">
                  {heroTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono flex items-center gap-1.5 transition ${
                        activeTab === tab.id
                          ? 'bg-[#4F7CFF]/20 text-[#7AE7FF] border border-[#4F7CFF]/40 font-semibold'
                          : 'text-white/50 hover:text-white hover:bg-white/05'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Console Body */}
              <div className="p-6 text-left space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#7AE7FF] uppercase tracking-wider">
                      Active Business Engine Module
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight">{currentTabData.title}</h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Live Stream #{liveCounter}</span>
                    </div>
                  </div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/05">
                    <span className="text-[11px] font-mono text-white/50 block">Real-time Outcome</span>
                    <span className="text-lg font-bold font-mono text-white block mt-0.5">{currentTabData.metric1}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/05">
                    <span className="text-[11px] font-mono text-white/50 block">Operational Accuracy</span>
                    <span className="text-lg font-bold font-mono text-[#7AE7FF] block mt-0.5">{currentTabData.metric2}</span>
                  </div>
                </div>

                {/* Live Log Stream */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">
                    Automated Event Pipeline
                  </span>
                  <div className="space-y-2 font-mono text-xs">
                    {currentTabData.logs.map((log, i) => (
                      <motion.div
                        key={log.text}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="p-2.5 rounded-lg bg-black/60 border border-white/05 flex items-center justify-between text-white/80"
                      >
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#7AE7FF] shrink-0" />
                          <span>{log.text}</span>
                        </div>
                        <span className="text-[10px] text-white/40">{log.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
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

      {/* ---------------- SME ROI CALCULATOR ---------------- */}
      <SmeRoiCalculator />

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
