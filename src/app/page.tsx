'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Server,
  Boxes,
  MessageSquare,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Zap,
  TrendingUp,
  Shield,
  Layers,
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

const heroTabs = [
  {
    id: 'erp',
    label: 'Central ERP Engine',
    icon: <Server className="w-4 h-4" />,
    badge: '100% Order Accuracy',
    title: 'Complete Operational Control',
    description: 'Unify multi-branch sales, inventory, and accounting into one intuitive interface.',
    metrics: [
      { label: 'Active Branches', value: '4 Hubs' },
      { label: 'Today’s Orders', value: '184 Completed' },
      { label: 'Processing Speed', value: 'Instant' },
    ],
  },
  {
    id: 'inventory',
    label: 'Live Stock Sync',
    icon: <Boxes className="w-4 h-4" />,
    badge: 'Zero Stockouts',
    title: 'Real-Time Warehouse Ledger',
    description: 'Track raw materials and finished goods with instant barcode updates and auto-reorder alerts.',
    metrics: [
      { label: 'Stock Accuracy', value: '99.9%' },
      { label: 'Pick & Pack', value: '3x Speed' },
      { label: 'Reorder Alerts', value: 'Automated' },
    ],
  },
  {
    id: 'tally',
    label: 'Tally & WhatsApp Sync',
    icon: <MessageSquare className="w-4 h-4" />,
    badge: 'Zero Manual Entry',
    title: 'Automated Billing & Messaging',
    description: 'Post invoices directly to Tally Prime and deliver receipts to customers on WhatsApp automatically.',
    metrics: [
      { label: 'Tally Sync', value: 'Direct API' },
      { label: 'PDF Quotes', value: '3 Seconds' },
      { label: 'WhatsApp Receipts', value: 'Auto-Sent' },
    ],
  },
];

export default function HomePage() {
  const [activeTabId, setActiveTabId] = useState('erp');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const activeTab = heroTabs.find((t) => t.id === activeTabId) || heroTabs[0];

  return (
    <div className="relative min-h-screen bg-[#F5F5F7] text-[#1D1D1F] overflow-x-hidden antialiased">
      {/* ---------------- ARTISTIC APPLE HERO SECTION ---------------- */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Lens Light Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,113,227,0.12),rgba(245,245,247,0))]" />

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-black/[0.08] text-xs font-semibold text-[#1D1D1F] shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0071E3]" />
            <span className="text-[#86868B]">Systemiq Studio</span>
            <span className="text-black/[0.15]">·</span>
            <span className="text-[#1D1D1F]">Custom Software for Growing SMEs</span>
          </motion.div>

          {/* Masterpiece Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.04]">
              Custom Software. <br />
              <span className="text-[#0071E3]">Built for How You Work.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-[#86868B] max-w-2xl mx-auto font-normal leading-relaxed">
              Replace manual spreadsheets with elegant, intuitive software systems. Delivered in weeks.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-sm transition-all shadow-[0_4px_16px_rgba(0,113,227,0.25)] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Schedule a Free Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/solutions"
              className="text-[#0071E3] font-semibold text-sm hover:underline flex items-center gap-1 px-4 py-3"
            >
              <span>Explore Solutions Catalog</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* ---------------- ARTISTIC INTERACTIVE STUDIO CANVAS ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-8"
          >
            {/* Interactive Tab Switcher */}
            <div className="inline-flex p-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-black/[0.08] shadow-sm mb-6 gap-1">
              {heroTabs.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`relative px-4 sm:px-6 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'text-[#0071E3] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]'
                        : 'text-[#86868B] hover:text-[#1D1D1F]'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Showcase Glass Window */}
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-black/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.05)] text-left relative overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-5 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
                  <span className="text-xs font-medium text-[#86868B] ml-2 font-mono">
                    systemiq-studio // {activeTab.id}.app
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-semibold text-[#0071E3]">
                  {activeTab.badge}
                </span>
              </div>

              {/* Animated Content Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F]">
                      {activeTab.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#86868B] leading-relaxed font-normal max-w-2xl">
                      {activeTab.description}
                    </p>
                  </div>

                  {/* Dynamic Metrics Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    {activeTab.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.06] flex flex-col justify-between space-y-1"
                      >
                        <span className="text-xs font-medium text-[#86868B]">{m.label}</span>
                        <span className="text-xl font-bold text-[#0071E3] tracking-tight">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- TRUSTED SECTION ---------------- */}
      <TrustedSection />

      {/* ---------------- SPREADSHEET VS SYSTEMIQ ---------------- */}
      <SpreadsheetVsSystemiq />

      {/* ---------------- WHAT WE BUILD ---------------- */}
      <InteractiveWhatWeBuild />

      {/* ---------------- WHY SYSTEMIQ ---------------- */}
      <WhySystemiq />

      {/* ---------------- HOW WE WORK ---------------- */}
      <HowWeWork />

      {/* ---------------- FEATURED INDUSTRIES ---------------- */}
      <FeaturedIndustries />

      {/* ---------------- ARCHITECTURE DIAGRAM ---------------- */}
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
