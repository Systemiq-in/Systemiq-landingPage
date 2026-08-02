'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Boxes,
  Warehouse,
  Building,
  Users,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
  Zap
} from 'lucide-react';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

const solutionModules = [
  {
    id: 'erp',
    title: 'Custom ERP Systems',
    category: 'Enterprise Core',
    icon: <Server className="w-5 h-5 text-white" />,
    iconBg: 'bg-[#0071E3]',
    desc: 'One central software system for orders, inventory, raw materials, and finances. Built specifically around your actual daily business steps.',
    features: ['Zero manual copy-pasting', 'Multi-branch visibility', 'Role-based permission controls', 'Real-time production scheduling'],
    colSpan: 'md:col-span-2 lg:col-span-2'
  },
  {
    id: 'inventory',
    title: 'Inventory & Stock Control',
    category: 'Warehouse',
    icon: <Boxes className="w-5 h-5 text-white" />,
    iconBg: 'bg-emerald-500',
    desc: 'Know your exact inventory counts across all stores and warehouses in real-time. Automatic reorder alerts before items run out.',
    features: ['Prevents stockouts', 'Batch & serial tracking', 'Automated reorder triggers'],
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    id: 'warehouse',
    title: 'Mobile Warehouse Scanners',
    category: 'Logistics',
    icon: <Warehouse className="w-5 h-5 text-white" />,
    iconBg: 'bg-indigo-500',
    desc: 'Equip warehouse staff with fast mobile scanner apps. Speed up picking, packing, and dispatch with 99.9% accuracy.',
    features: ['99.9% pick accuracy', 'Fast mobile barcode scanning', 'Instant dispatch manifests'],
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    id: 'dealer-portals',
    title: 'B2B Dealer Portals',
    category: 'Wholesale Hub',
    icon: <Building className="w-5 h-5 text-white" />,
    iconBg: 'bg-[#00A3FF]',
    desc: 'Give wholesale dealers a self-service portal to view live prices, check credit limits, and place bulk orders anytime.',
    features: ['Automatic credit limit enforcement', 'Dealer tier pricing matrix', '24/7 self-service order placement'],
    colSpan: 'md:col-span-2 lg:col-span-2'
  },
  {
    id: 'crm',
    title: 'Sales & Quotation Systems',
    category: 'Revenue',
    icon: <Users className="w-5 h-5 text-white" />,
    iconBg: 'bg-rose-500',
    desc: 'Track sales leads, generate professional PDF quotes in 3 seconds, and ensure your sales team follows up on time.',
    features: ['3-second PDF quote generator', 'Lead follow-up reminders', 'Sales manager dashboards'],
    colSpan: 'md:col-span-2 lg:col-span-2'
  },
  {
    id: 'integrations',
    title: 'Tally & WhatsApp',
    category: 'Automation',
    icon: <MessageSquare className="w-5 h-5 text-white" />,
    iconBg: 'bg-teal-500',
    desc: 'Post invoices straight to Tally Prime without re-typing. Text customers order updates & receipts on WhatsApp automatically.',
    features: ['Direct Tally Prime ledger sync', 'Automated WhatsApp receipts', 'Zero double entry'],
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
];

export default function SolutionsPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModuleClick = (title: string) => {
    setSelectedTopic(title);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-transparent text-white/90 pt-32 pb-20 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00A3FF] text-xs font-semibold tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5" />
            Solutions Catalog
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Engineered For Growing SMEs.
          </h1>
          <p className="text-base sm:text-lg text-white/50 leading-relaxed font-normal">
            Modular business software components designed to replace manual spreadsheets and automate daily workflows.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutionModules.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => handleModuleClick(item.title)}
              className={`group bg-[#13151A]/80 rounded-[2rem] p-8 border border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,113,227,0.15)] hover:border-white/10 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden relative ${item.colSpan}`}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-white/40 uppercase tracking-wider px-3 py-1 bg-white/[0.03] rounded-full border border-white/[0.05]">
                    {item.category}
                  </span>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-[#00A3FF] transition-colors">{item.title}</h2>
                  <p className="text-sm text-white/50 leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>

              <div className="space-y-4 pt-6 mt-6 border-t border-white/[0.04] relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                  {item.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs font-medium text-white/70">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0071E3] shrink-0 group-hover:text-[#00A3FF] transition-colors" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-[#0071E3] group-hover:text-[#00A3FF] pt-4 group-hover:translate-x-1 transition-all">
                  <span>Inspect Blueprint</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <WorkflowAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTopic={selectedTopic || 'Custom Software'}
      />
    </div>
  );
}
