'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Layers,
  CheckCircle2,
  Boxes,
  MessageSquare,
  Server,
  Check,
  Sparkles,
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
    icon: <Server className="w-4 h-4 text-blue-600" />,
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
    icon: <Boxes className="w-4 h-4 text-indigo-600" />,
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
    icon: <MessageSquare className="w-4 h-4 text-[#0EA5E9]" />,
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
    <div className="relative min-h-screen bg-[#FAFAFA] text-slate-900">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <BlueprintBackground />

        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-8">
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
            Custom Business Software. <br />
            <span className="highlight-yellow-light px-2 text-slate-900">Engineered Around Your Workflow.</span>
          </motion.h1>

          {/* SME-Focused Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            We replace spreadsheets, disconnected tools and manual entry with custom software systems built specifically for how your business runs.
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
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2.5 group"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Free Workflow Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/solutions"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm transition flex items-center justify-center gap-2 shadow-sm"
            >
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Explore Solutions</span>
            </Link>
          </motion.div>

          {/* ---------------- LIVE INTERACTIVE SYSTEM DEMO ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-10 max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl relative text-left space-y-6">
              {/* Top Navigation Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-700">Live Operating Software Preview</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {heroTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-600 border border-blue-200 shadow-sm'
                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Console Body */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                    Software Engine Preview
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
                    {currentTabData.title}
                  </h3>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <span className="text-xs font-semibold text-slate-500 block">Real-time Business Outcome</span>
                    <span className="text-xl font-extrabold text-slate-900 block mt-1">{currentTabData.metric1}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                    <span className="text-xs font-semibold text-blue-600 block">Operational Accuracy</span>
                    <span className="text-xl font-extrabold text-blue-700 block mt-1">{currentTabData.metric2}</span>
                  </div>
                </div>

                {/* Live Log Stream */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-500 block">
                    Automated Workflow Event Stream
                  </span>
                  <div className="space-y-2 font-sans text-xs">
                    {currentTabData.logs.map((log, i) => (
                      <motion.div
                        key={log.text}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-slate-700 font-medium"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{log.text}</span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono">{log.time}</span>
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
