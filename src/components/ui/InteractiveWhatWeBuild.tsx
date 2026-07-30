'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Boxes,
  Warehouse,
  Users,
  Building,
  Zap,
  GitMerge,
  MessageSquare,
  Calculator,
  Receipt,
  LayoutDashboard,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';
import WorkflowAuditModal from '../layout/WorkflowAuditModal';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  tag: string;
  description: string;
  features: string[];
}

const services: ServiceItem[] = [
  {
    id: 'erp',
    title: 'Custom ERP Systems',
    category: 'Enterprise Core',
    icon: <Server className="w-5 h-5 text-[#7AE7FF]" />,
    tag: 'Core System',
    description:
      'Tailor-made Resource Planning tailored to your specific operational matrix. Replaces rigid off-the-shelf legacy software.',
    features: ['Multi-entity Ledger', 'Department Routing', 'Role-based Access', 'Audit Logs'],
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    category: 'Supply Chain',
    icon: <Boxes className="w-5 h-5 text-[#4F7CFF]" />,
    tag: 'Real-time Sync',
    description:
      'Live stock tracking across multiple warehouses, automated reorder thresholds, and serial/batch number trace.',
    features: ['Batch Tracking', 'Reorder Triggers', 'Multi-Loc Sync', 'Barcoding'],
  },
  {
    id: 'warehouse',
    title: 'Warehouse Systems',
    category: 'Logistics',
    icon: <Warehouse className="w-5 h-5 text-[#7AE7FF]" />,
    tag: 'High Velocity',
    description:
      'Mobile-first warehouse execution, bin allocation, pick-pack-ship workflows, and dispatch manifests.',
    features: ['Bin Level Map', 'Pick-Pack Verification', 'Dispatch Manifests', 'Scanner API'],
  },
  {
    id: 'dealer-portals',
    title: 'Dealer Portals',
    category: 'B2B Network',
    icon: <Building className="w-5 h-5 text-[#4F7CFF]" />,
    tag: 'B2B Hub',
    description:
      'Self-service ordering portals for distributors and dealers with customized credit limits and volume tier pricing.',
    features: ['Credit Limit Engine', 'Tiered Pricing', 'Live Order Status', 'Catalog Search'],
  },
  {
    id: 'crm',
    title: 'Sales & CRM Systems',
    category: 'Revenue Operations',
    icon: <Users className="w-5 h-5 text-[#7AE7FF]" />,
    tag: 'Pipeline Engine',
    description:
      'B2B sales pipeline manager engineered around complex SME sales cycles, quotes, and contract approvals.',
    features: ['Quote Generator', 'Pipeline Analytics', 'Lead Scoring', 'Followup Automations'],
  },
  {
    id: 'sales-auto',
    title: 'Sales Automation',
    category: 'Revenue Operations',
    icon: <Zap className="w-5 h-5 text-[#4F7CFF]" />,
    tag: 'Automated Flow',
    description:
      'Automate repetitive sales admin, automated proposal generation, contract dispatch, and payment reminders.',
    features: ['Proposal Dispatch', 'Dunnings Engine', 'E-signatures', 'Auto Reminders'],
  },
  {
    id: 'workflow-auto',
    title: 'Workflow Automation',
    category: 'Operations',
    icon: <GitMerge className="w-5 h-5 text-[#7AE7FF]" />,
    tag: 'Orchestration',
    description:
      'Connect isolated teams and systems with rule-based event engines, approvals, and cross-tool data sync.',
    features: ['Approval Hierarchy', 'Webhooks Engine', 'Event Triggers', 'Exception Alerts'],
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Integrations',
    category: 'Integrations',
    icon: <MessageSquare className="w-5 h-5 text-[#4F7CFF]" />,
    tag: 'Business API',
    description:
      'Automated WhatsApp notifications for order confirmation, dispatch alerts, payment links, and customer queries.',
    features: ['Official Meta API', 'Payment Links', 'Automated Receipts', 'Support Routing'],
  },
  {
    id: 'tally',
    title: 'Tally Integration',
    category: 'Finance API',
    icon: <Calculator className="w-5 h-5 text-[#7AE7FF]" />,
    tag: 'Direct Sync',
    description:
      'Bi-directional synchronization between custom front-end apps and Tally Prime / ERP 9 with 0 accounting drift.',
    features: ['Voucher Posting', 'Ledger Master Sync', '0-Drift Reconciliation', 'Auto Reconciliation'],
  },
  {
    id: 'billing',
    title: 'Billing & Invoicing Systems',
    category: 'Finance Core',
    icon: <Receipt className="w-5 h-5 text-[#4F7CFF]" />,
    tag: 'GST & Compliance',
    description:
      'E-invoicing, GST compliant billing, multi-currency invoices, and automated payment gateway reconciliations.',
    features: ['E-Way Bill Direct API', 'GST Breakdown', 'Multi-Currency', 'Stripe/Razorpay Sync'],
  },
  {
    id: 'dashboards',
    title: 'Admin Dashboards',
    category: 'Intelligence',
    icon: <LayoutDashboard className="w-5 h-5 text-[#7AE7FF]" />,
    tag: 'Real-time Metrics',
    description:
      'Executive command centers delivering real-time operational metrics, unit economics, and health alerts.',
    features: ['Custom Widgets', 'Real-time WebSockets', 'CSV Export', 'Role Views'],
  },
  {
    id: 'internal-portals',
    title: 'Internal Portals',
    category: 'Workforce',
    icon: <ShieldAlert className="w-5 h-5 text-[#4F7CFF]" />,
    tag: 'Workforce Hub',
    description:
      'Custom employee portals for attendance, task handoffs, operational ticketing, and internal knowledge bases.',
    features: ['Task Handoffs', 'Shift Logging', 'Asset Tracking', 'SOP Hub'],
  },
];

export default function InteractiveWhatWeBuild() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (title: string) => {
    setSelectedTopic(title);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 relative bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="tech-tag">Systems Portfolio</span>
              <span className="text-xs font-mono text-white/40">// Production Software Modules</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              What We Engineer.
            </h2>
          </div>
          <p className="text-white/60 text-sm max-w-md leading-relaxed">
            Every business system is engineered from scratch for your specific operational workflow—ensuring zero bloat, lightning execution speed, and 100% ownership.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => handleCardClick(item.title)}
              className="glass-card rounded-2xl p-6 relative group cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle hover gradient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4F7CFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Top bar inside card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#4F7CFF]/50 group-hover:bg-[#4F7CFF]/10 flex items-center justify-center transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white/60 group-hover:text-[#7AE7FF] group-hover:bg-[#7AE7FF]/10 transition-colors">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#7AE7FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tags / Features */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/05 mb-4">
                  {item.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.02] border border-white/05 text-white/50"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-white/50 group-hover:text-white transition-colors">
                  <span>Engineer Architecture</span>
                  <ArrowRight className="w-4 h-4 text-[#7AE7FF] -translate-x-1 group-hover:translate-x-0 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <WorkflowAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTopic={selectedTopic || 'Custom Software System'}
      />
    </section>
  );
}
