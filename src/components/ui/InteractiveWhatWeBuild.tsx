'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Boxes,
  Warehouse,
  Building,
  Zap,
  GitMerge,
  MessageSquare,
  Calculator,
  Receipt,
  LayoutDashboard,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
} from 'lucide-react';
import WorkflowAuditModal from '../layout/WorkflowAuditModal';

interface BrandCard {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  tag: string;
  description: string;
  outcomes: string[];
}

const brandCards: BrandCard[] = [
  {
    id: 'erp',
    title: 'Custom ERP Systems',
    category: 'Enterprise Core',
    icon: <Server className="w-6 h-6 text-blue-600" />,
    tag: '#ZeroExcel',
    description:
      'One central system for orders, inventory, raw materials, and finances. Built specifically around your actual daily business steps.',
    outcomes: ['Zero manual copy-pasting', 'Multi-branch visibility', 'Role permission controls'],
  },
  {
    id: 'inventory',
    title: 'Inventory & Stock Sync',
    category: 'Warehouse',
    icon: <Boxes className="w-6 h-6 text-indigo-600" />,
    tag: '#LiveStock',
    description:
      'Know your exact inventory counts across all stores and warehouses in real-time. Automatic reorder alerts before items run out.',
    outcomes: ['Prevents stockouts', 'Batch & serial tracking', 'Automated reorder triggers'],
  },
  {
    id: 'warehouse',
    title: 'Mobile Warehouse Scanners',
    category: 'Logistics',
    icon: <Warehouse className="w-6 h-6 text-blue-600" />,
    tag: '#FastPick',
    description:
      'Equip warehouse staff with fast mobile scanner apps. Speed up picking, packing, and dispatch with 99.9% accuracy.',
    outcomes: ['99.9% pick accuracy', 'Fast mobile scanning', 'Instant dispatch manifests'],
  },
  {
    id: 'dealer-portals',
    title: 'B2B Dealer Portals',
    category: 'Wholesale Hub',
    icon: <Building className="w-6 h-6 text-indigo-600" />,
    tag: '#24/7Orders',
    description:
      'Give wholesale dealers a self-service portal to view live prices, check credit limits, and place bulk orders anytime.',
    outcomes: ['Automatic credit enforcement', 'Dealer tier pricing', '24/7 order placement'],
  },
  {
    id: 'crm',
    title: 'Sales & PDF Quotations',
    category: 'Revenue',
    icon: <Users className="w-6 h-6 text-blue-600" />,
    tag: '#InstantQuotes',
    description:
      'Track sales leads, generate professional PDF quotes in 3 seconds, and ensure your sales team follows up on time.',
    outcomes: ['3-second PDF quotes', 'Lead follow-up reminders', 'Sales manager dashboards'],
  },
  {
    id: 'whatsapp',
    title: 'Tally & WhatsApp Sync',
    category: 'Automation',
    icon: <MessageSquare className="w-6 h-6 text-indigo-600" />,
    tag: '#AutoMessaging',
    description:
      'Post invoices straight to Tally Prime without re-typing. Text customers order updates & receipts on WhatsApp automatically.',
    outcomes: ['Direct Tally Prime sync', 'Automated WhatsApp receipts', 'Zero double entry'],
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
    <section className="py-20 lg:py-24 relative bg-[#FAFAFA] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-600">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Solutions Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What We Engineer <span className="text-blue-600">For Growing Businesses</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-md leading-relaxed">
            Pick a module below to inspect its capabilities and request a customized sprint blueprint.
          </p>
        </div>

        {/* Uniform Light Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandCards.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              onClick={() => handleCardClick(item.title)}
              className="bg-white rounded-3xl p-8 cursor-pointer flex flex-col justify-between border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-700">
                    {item.tag}
                  </span>
                </div>

                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                  {item.outcomes.map((oc) => (
                    <div key={oc} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{oc}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-blue-600 font-mono">
                  <span>Inspect Blueprint</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
    </section>
  );
}
