'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FolderGit2,
  TrendingUp,
  CheckCircle2,
  Terminal,
  ArrowRight,
  ShieldCheck,
  Building2,
  ExternalLink,
} from 'lucide-react';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

const fullCaseStudies = [
  {
    id: 'manufacturing-erp',
    title: 'Custom ERP System for Precision Metal Fabrication',
    client: 'Apex Precision Metals',
    industry: 'Industrial Manufacturing',
    location: 'United States',
    problem:
      'The company managed 14 separate Excel workbooks to track raw steel inventory, shop floor job cards, machine utilization, and customer billing. Stock discrepancies caused 40+ hours of monthly downtime and billing errors.',
    solution:
      'Systemiq engineered a custom ERP with live inventory bin tracking, automated Bill of Materials (BOM) calculation, machine floor scheduling, and bi-directional Tally Prime accounting sync.',
    metrics: [
      { value: '-85%', label: 'Manual Order Processing Overhead' },
      { value: '0%', label: 'Raw Stock Inventory Drift' },
      { value: '4 Sprints', label: 'Total Production Delivery Time' },
      { value: '$120K', label: 'Annual Operational Cost Savings' },
    ],
    architecture: ['Next.js 15', 'PostgreSQL', 'Tally Prime API', 'Tailwind CSS', 'Docker Containerization'],
  },
  {
    id: 'dealer-portal',
    title: 'B2B Dealer Ordering & Automated Credit Limits',
    client: 'Nova Hardware & Wholesale Hub',
    industry: 'Distribution & Wholesale',
    location: 'Middle East & Asia',
    problem:
      '350+ wholesale dealers placed orders via unstructured WhatsApp messages and phone calls. Credit limits were checked manually on paper, leading to $180K in bad debt overruns.',
    solution:
      'Systemiq built a high-speed B2B dealer self-service portal with real-time stock availability, automated credit limit checking, WhatsApp order receipts, and payment gateway integration.',
    metrics: [
      { value: '10x', label: 'Order Processing Speed' },
      { value: '0 Bad Debt', label: 'Credit Limit Enforcement Accuracy' },
      { value: '$4.2M', label: 'Monthly Processed Volume' },
      { value: '350+', label: 'Active Wholesale Dealers' },
    ],
    architecture: ['TypeScript', 'Official Meta WhatsApp API', 'PostgreSQL', 'Stripe API', 'Redis Queue'],
  },
  {
    id: 'inventory-automation',
    title: 'Multi-Warehouse Inventory & QR Dispatch',
    client: 'Vanguard Logistics & Distribution',
    industry: 'Supply Chain & Freight',
    location: 'Global',
    problem:
      'Inventory was spread across 4 regional warehouses with zero real-time visibility. Pickers relied on printed paper slips, resulting in a 4.2% mis-pack rate and frequent stockouts.',
    solution:
      'Systemiq engineered a Progressive Web App (PWA) barcode scanning system with real-time WebSocket stock updates, automated reorder thresholds, and driver dispatch manifests.',
    metrics: [
      { value: '90m -> 2m', label: 'Stock Reconciliation Time' },
      { value: '0.02%', label: 'Mis-pick Error Rate' },
      { value: '4 Hubs', label: 'Real-time Synchronized Warehouses' },
      { value: '100%', label: 'Driver Manifest Digitization' },
    ],
    architecture: ['WebSockets', 'PWA Offline Scan API', 'Next.js App Router', 'ClickHouse Analytics'],
  },
];

export default function CaseStudiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState('');

  const handleOpenAudit = (title: string) => {
    setSelectedCase(title);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090909] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#7AE7FF]">
            <Terminal className="w-3.5 h-3.5" />
            <span>Proven Business Impact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Case Studies & <br />
            <span className="text-gradient">Production Metrics.</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Examine how custom business software engineered by Systemiq Technologies replaced spreadsheets, eliminated operational bottlenecks, and accelerated ROI for SMEs.
          </p>
        </div>

        {/* Full Case Studies Showcase */}
        <div className="space-y-16">
          {fullCaseStudies.map((cs) => (
            <div
              key={cs.id}
              id={cs.id}
              className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 bg-[#0d0e12] space-y-8 relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#4F7CFF]/15 text-[#7AE7FF] border border-[#4F7CFF]/30">
                      {cs.industry}
                    </span>
                    <span className="text-xs font-mono text-white/40">{cs.location}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{cs.title}</h2>
                  <p className="text-xs font-mono text-white/50 mt-1">Client: {cs.client}</p>
                </div>
              </div>

              {/* Problem / Solution Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/05 space-y-3">
                  <h3 className="text-xs font-mono text-red-400 uppercase tracking-wider">
                    Legacy Pain Point & Bottlenecks
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">{cs.problem}</p>
                </div>

                <div className="p-6 rounded-2xl bg-[#4F7CFF]/05 border border-[#4F7CFF]/20 space-y-3">
                  <h3 className="text-xs font-mono text-[#7AE7FF] uppercase tracking-wider">
                    Engineered System Solution
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              {/* Metrics Showcase Grid */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono text-white/50 uppercase tracking-wider">
                  Verified Production Metrics
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="p-4 rounded-xl bg-white/[0.03] border border-white/05 text-center">
                      <span className="text-2xl sm:text-3xl font-bold font-mono text-[#7AE7FF] block">
                        {m.value}
                      </span>
                      <span className="text-[11px] font-mono text-white/50 block mt-1">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/05">
                <div className="flex flex-wrap gap-2">
                  {cs.architecture.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-white/05 border border-white/10 text-white/60 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleOpenAudit(cs.title)}
                  className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-medium flex items-center gap-2 transition"
                >
                  <span>Build Similar System</span>
                  <ArrowRight className="w-4 h-4 text-[#7AE7FF]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WorkflowAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTopic={`System based on ${selectedCase}`}
      />
    </div>
  );
}
