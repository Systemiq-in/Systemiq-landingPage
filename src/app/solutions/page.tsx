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
} from 'lucide-react';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

const solutionModules = [
  {
    id: 'erp',
    title: 'Custom ERP Systems',
    category: 'Enterprise Core',
    icon: <Server className="w-5 h-5 text-[#0071E3]" />,
    desc: 'One central software system for orders, inventory, raw materials, and finances. Built specifically around your actual daily business steps.',
    features: ['Zero manual copy-pasting', 'Multi-branch visibility', 'Role-based permission controls', 'Real-time production scheduling'],
  },
  {
    id: 'inventory',
    title: 'Inventory & Stock Control',
    category: 'Warehouse',
    icon: <Boxes className="w-5 h-5 text-[#0071E3]" />,
    desc: 'Know your exact inventory counts across all stores and warehouses in real-time. Automatic reorder alerts before items run out.',
    features: ['Prevents stockouts', 'Batch & serial tracking', 'Automated reorder triggers', 'Barcode printing & scanning'],
  },
  {
    id: 'warehouse',
    title: 'Mobile Warehouse Scanners',
    category: 'Logistics',
    icon: <Warehouse className="w-5 h-5 text-[#0071E3]" />,
    desc: 'Equip warehouse staff with fast mobile scanner apps. Speed up picking, packing, and dispatch with 99.9% accuracy.',
    features: ['99.9% pick accuracy', 'Fast mobile barcode scanning', 'Instant dispatch manifests', 'Inter-bin transfer tracking'],
  },
  {
    id: 'dealer-portals',
    title: 'B2B Dealer Portals',
    category: 'Wholesale Hub',
    icon: <Building className="w-5 h-5 text-[#0071E3]" />,
    desc: 'Give wholesale dealers a self-service portal to view live prices, check credit limits, and place bulk orders anytime.',
    features: ['Automatic credit limit enforcement', 'Dealer tier pricing matrix', '24/7 self-service order placement', 'Real-time order status tracking'],
  },
  {
    id: 'crm',
    title: 'Sales & Quotation Systems',
    category: 'Revenue',
    icon: <Users className="w-5 h-5 text-[#0071E3]" />,
    desc: 'Track sales leads, generate professional PDF quotes in 3 seconds, and ensure your sales team follows up on time.',
    features: ['3-second PDF quote generator', 'Lead follow-up reminders', 'Sales manager dashboards', 'Discount approval workflows'],
  },
  {
    id: 'integrations',
    title: 'Tally & WhatsApp Integration',
    category: 'Automation',
    icon: <MessageSquare className="w-5 h-5 text-[#0071E3]" />,
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
    <div className="min-h-screen bg-transparent text-white/90 pt-32 pb-20 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
            Solutions Catalog
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Engineered For Growing SMEs.
          </h1>
          <p className="text-base sm:text-lg text-white/50 leading-relaxed font-normal">
            Modular business software components designed to replace manual spreadsheets and automate daily workflows.
          </p>
        </div>

        {/* Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionModules.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleModuleClick(item.title)}
              className="bg-[#13151A]/80 rounded-3xl p-8 border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_32px_rgba(0,113,227,0.15)] transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 hover:bg-[#13151A] hover:border-[#0071E3]/30"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-[#090A0C] border border-white/[0.08] flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">{item.title}</h2>
                </div>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-normal">{item.desc}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                <div className="space-y-2">
                  {item.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs font-medium text-white/70">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0071E3] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-[#0071E3] pt-2">
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
