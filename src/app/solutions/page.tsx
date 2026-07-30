'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Boxes,
  Users,
  GitMerge,
  BarChart3,
  Smartphone,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

interface CategorySolution {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  summary: string;
  techSpecs: string[];
  features: string[];
  architectureOverview: string;
}

const solutionsList: CategorySolution[] = [
  {
    id: 'erp',
    title: 'Custom ERP Systems',
    category: 'Enterprise Core',
    icon: <Server className="w-6 h-6 text-[#7AE7FF]" />,
    summary:
      'Engineered specifically around your business matrix to replace rigid, bloated off-the-shelf software with zero license fees per seat.',
    techSpecs: ['Next.js 15 App Router', 'PostgreSQL Relational DB', 'Role-Based Access Control', 'Bi-directional Tally Sync'],
    features: [
      'Multi-entity & multi-branch general ledger',
      'Automated purchase order to GRN matching',
      'Real-time job card & shop floor tracking',
      'Automated GST E-way Bill generation',
    ],
    architectureOverview: 'Client Request -> API Gateway -> Distributed Micro-services -> PostgreSQL -> Real-time Tally Prime Ledger Mirror.',
  },
  {
    id: 'inventory',
    title: 'Inventory & Warehouse Automation',
    category: 'Supply Chain',
    icon: <Boxes className="w-6 h-6 text-[#4F7CFF]" />,
    summary:
      'Real-time multi-warehouse stock synchronization, QR-code scanning, and automated reorder alerts to eliminate stock-outs.',
    techSpecs: ['PWA Offline Scan API', 'WebSockets Real-time Feed', 'Barcoding Engine', 'Batch/Expiry Matrix'],
    features: [
      'Bin-level location mapping & pick paths',
      'Automated safety stock alert triggers',
      'Batch number & serial number trace',
      'Inter-warehouse transfer manifest logs',
    ],
    architectureOverview: 'Barcode Mobile PWA -> WebSocket Server -> Stock Ledger DB -> Dispatch Alert Engine -> WhatsApp Notification API.',
  },
  {
    id: 'crm',
    title: 'B2B CRM & Revenue Operations',
    category: 'Sales Operations',
    icon: <Users className="w-6 h-6 text-[#7AE7FF]" />,
    summary:
      'Custom B2B sales pipeline manager engineered around complex SME sales cycles, quotes, and contract approvals.',
    techSpecs: ['Custom Kanban Engine', 'Automated PDF Dispatch', 'Stripe / Razorpay Sync', 'Audit Trail'],
    features: [
      'Custom quotation & proposal generator',
      'Dealer credit limit enforcement engine',
      'Automated follow-up & dunning sequences',
      'Commission calculation engine',
    ],
    architectureOverview: 'Opportunity Created -> Rule Engine -> Credit Check API -> PDF Auto-Generator -> E-Signature Webhook.',
  },
  {
    id: 'automation',
    title: 'Workflow & Integration Automation',
    category: 'Automation',
    icon: <GitMerge className="w-6 h-6 text-[#4F7CFF]" />,
    summary:
      'Connect isolated teams, spreadsheets, and legacy tools with rule-based event engines, approvals, and WhatsApp integrations.',
    techSpecs: ['Meta WhatsApp Official API', 'Tally Prime API', 'Webhook Dispatcher', 'Queue Worker (Redis)'],
    features: [
      'WhatsApp order confirmation & tracking',
      'Automated payment link generation',
      'Multi-level manager approval triggers',
      'Custom Webhook integrations',
    ],
    architectureOverview: 'Trigger Event -> Redis Queue -> Worker Service -> Integration Gateway (Meta/Tally/Bank) -> Event Logged.',
  },
  {
    id: 'analytics',
    title: 'Executive Admin & Analytics Dashboards',
    category: 'Analytics',
    icon: <BarChart3 className="w-6 h-6 text-[#7AE7FF]" />,
    summary:
      'Real-time command centers delivering unit economics, sales velocity, and inventory health metrics with sub-second queries.',
    techSpecs: ['Recharts / Tremor UI', 'ClickHouse / Postgres Aggregation', 'Export to Excel/PDF', 'Custom Role Views'],
    features: [
      'Live cash flow & aging ledger view',
      'Production capacity utilization charts',
      'Top customer & margin analysis',
      'Instant CSV/XLSX export engine',
    ],
    architectureOverview: 'Read-Replica DB -> OLAP Aggregator -> Cache Layer -> Next.js SSR Dashboard Canvas.',
  },
  {
    id: 'mobile',
    title: 'Mobile Apps & Field Operations',
    category: 'Mobile Apps',
    icon: <Smartphone className="w-6 h-6 text-[#4F7CFF]" />,
    summary:
      'High-performance Progressive Web Apps (PWA) for field agents, drivers, warehouse pickers, and site engineers.',
    techSpecs: ['PWA Offline Capability', 'Camera Barcode Scanner', 'Geolocation Tagging', 'Biometric Auth'],
    features: [
      'Offline-first data sync capability',
      'Photo proof of delivery capture',
      'Field attendance & geo-fencing',
      'Instant push notifications',
    ],
    architectureOverview: 'Mobile PWA -> Local IndexedDB -> Service Worker Sync -> Secure API Endpoint -> Postgres DB.',
  },
  {
    id: 'internal',
    title: 'Internal Portals & Workspaces',
    category: 'Internal Tools',
    icon: <ShieldCheck className="w-6 h-6 text-[#7AE7FF]" />,
    summary:
      'Custom employee portals for attendance, shift handoffs, internal knowledge bases, and operational ticketing.',
    techSpecs: ['Strict Audit Logging', 'OAuth2 / SAML SSO', 'SOP Document Engine', 'Ticketing Queue'],
    features: [
      'Internal ticketing & task handoffs',
      'Shift logging & attendance tracking',
      'SOP & policy document management',
      'Granular department permission controls',
    ],
    architectureOverview: 'SSO Auth -> Role Permission Middleware -> Workspace Views -> Audit Trail Logs.',
  },
];

export default function SolutionsPage() {
  const [expandedId, setExpandedId] = useState<string>('erp');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTopic, setActiveTopic] = useState<string>('Custom ERP Systems');

  const toggleExpand = (id: string, title: string) => {
    setExpandedId(expandedId === id ? '' : id);
    setActiveTopic(title);
  };

  const openAuditModal = (title: string) => {
    setActiveTopic(title);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090909] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#7AE7FF]">
            <Terminal className="w-3.5 h-3.5" />
            <span>Systems Catalog & Technical Specifications</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Custom Business Systems <br />
            <span className="text-gradient">Engineered to Order.</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Explore our modular software systems portfolio. Every solution is custom engineered to align with your specific SME workflows, integrations, and operational requirements.
          </p>
        </div>

        {/* Category Tabs / Expandable Accordion List */}
        <div className="space-y-6">
          {solutionsList.map((sol) => {
            const isExpanded = expandedId === sol.id;
            return (
              <div
                key={sol.id}
                id={sol.id}
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-[#4F7CFF]/60 bg-[#0e1017]'
                    : 'border-white/10 hover:border-white/20 bg-[#0d0e12]'
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(sol.id, sol.title)}
                  className="p-6 cursor-pointer flex items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                      {sol.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-[#7AE7FF]">{sol.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{sol.title}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden md:inline-block text-xs font-mono text-white/40">
                      {isExpanded ? 'Hide Architecture Spec' : 'Inspect Architecture Spec'}
                    </span>
                    <div
                      className={`p-2 rounded-lg bg-white/05 border border-white/10 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 bg-[#4F7CFF]/20 text-[#7AE7FF]' : 'text-white/60'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expandable Technical Specification Panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/10 p-6 sm:p-8 bg-[#09090b]/80 space-y-8"
                    >
                      <p className="text-sm text-white/80 leading-relaxed max-w-3xl">
                        {sol.summary}
                      </p>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Core Features */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-mono text-white/50 uppercase tracking-wider">
                            Engineered System Modules
                          </h4>
                          <div className="space-y-2">
                            {sol.features.map((feat) => (
                              <div key={feat} className="flex items-start gap-2.5 text-sm text-white/90">
                                <CheckCircle2 className="w-4 h-4 text-[#7AE7FF] shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-mono text-white/50 uppercase tracking-wider">
                            Technical Specification
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {sol.techSpecs.map((spec) => (
                              <span
                                key={spec}
                                className="px-3 py-1.5 rounded-lg bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 text-[#7AE7FF] text-xs font-mono"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Architecture Flow Box */}
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/05 space-y-2">
                        <span className="text-[11px] font-mono text-white/40 block uppercase tracking-wider">
                          Data Pipeline Flow
                        </span>
                        <div className="font-mono text-xs text-[#7AE7FF] p-3 rounded-lg bg-black/50 border border-white/05 overflow-x-auto">
                          {sol.architectureOverview}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-xs font-mono text-white/50">
                          Ready for custom sprint implementation?
                        </span>
                        <button
                          onClick={() => openAuditModal(sol.title)}
                          className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#4F7CFF] to-[#7AE7FF] text-white text-xs font-semibold flex items-center gap-2 shadow-lg"
                        >
                          <span>Request {sol.title} Blueprint</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <WorkflowAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTopic={activeTopic}
      />
    </div>
  );
}
