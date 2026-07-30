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
  ArrowRight,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

const solutionModules = [
  {
    id: 'erp',
    title: 'Custom ERP Systems',
    category: 'Enterprise Core',
    icon: <Server className="w-6 h-6 text-blue-600" />,
    desc: 'One central software system for orders, inventory, raw materials, and finances. Built specifically around your actual daily business steps.',
    features: ['Zero manual copy-pasting', 'Multi-branch visibility', 'Role-based permission controls', 'Real-time production scheduling'],
  },
  {
    id: 'inventory',
    title: 'Inventory & Stock Control',
    category: 'Warehouse',
    icon: <Boxes className="w-6 h-6 text-indigo-600" />,
    desc: 'Know your exact inventory counts across all stores and warehouses in real-time. Automatic reorder alerts before items run out.',
    features: ['Prevents stockouts', 'Batch & serial tracking', 'Automated reorder triggers', 'Barcode printing & scanning'],
  },
  {
    id: 'warehouse',
    title: 'Mobile Warehouse Scanners',
    category: 'Logistics',
    icon: <Warehouse className="w-6 h-6 text-blue-600" />,
    desc: 'Equip warehouse staff with fast mobile scanner apps. Speed up picking, packing, and dispatch with 99.9% accuracy.',
    features: ['99.9% pick accuracy', 'Fast mobile barcode scanning', 'Instant dispatch manifests', 'Inter-bin transfer tracking'],
  },
  {
    id: 'dealer-portals',
    title: 'B2B Dealer Portals',
    category: 'Wholesale Hub',
    icon: <Building className="w-6 h-6 text-indigo-600" />,
    desc: 'Give wholesale dealers a self-service portal to view live prices, check credit limits, and place bulk orders anytime.',
    features: ['Automatic credit limit enforcement', 'Dealer tier pricing matrix', '24/7 self-service order placement', 'Real-time order status tracking'],
  },
  {
    id: 'crm',
    title: 'Sales & Quotation Systems',
    category: 'Revenue',
    icon: <Users className="w-6 h-6 text-blue-600" />,
    desc: 'Track sales leads, generate professional PDF quotes in 3 seconds, and ensure your sales team follows up on time.',
    features: ['3-second PDF quote generator', 'Lead follow-up reminders', 'Sales manager dashboards', 'Discount approval workflows'],
  },
  {
    id: 'integrations',
    title: 'Tally & WhatsApp Integration',
    category: 'Automation',
    icon: <MessageSquare className="w-6 h-6 text-indigo-600" />,
    desc: 'Post invoices straight to Tally Prime without re-typing. Text customers order updates & receipts on WhatsApp automatically.',
    features: ['Direct Tally Prime ledger sync', 'Automated WhatsApp receipts', 'Zero double entry', 'Payment link integration'],
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
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-600">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Software Solution Catalog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Software Systems Engineered For <span className="text-blue-600">Growing SMEs.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Explore our modular software components designed to replace manual spreadsheets and automate daily business operations.
          </p>
        </div>

        {/* Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionModules.map((item) => (
            <div
              key={item.id}
              onClick={() => handleModuleClick(item.title)}
              className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-500 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">{item.title}</h2>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="space-y-2">
                  {item.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-blue-600 pt-2 font-mono">
                  <span>Inspect Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
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
