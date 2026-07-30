'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Boxes,
  Warehouse,
  Building,
  MessageSquare,
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
    icon: <Server className="w-5 h-5 text-blue-400" />,
    tag: '#ZeroExcel',
    description:
      'One central system for orders, inventory, raw materials, and finances. Built specifically around your actual daily business steps.',
    outcomes: ['Zero manual copy-pasting', 'Multi-branch visibility', 'Role permission controls'],
  },
  {
    id: 'inventory',
    title: 'Inventory & Stock Sync',
    category: 'Warehouse',
    icon: <Boxes className="w-5 h-5 text-indigo-400" />,
    tag: '#LiveStock',
    description:
      'Know your exact inventory counts across all stores and warehouses in real-time. Automatic reorder alerts before items run out.',
    outcomes: ['Prevents stockouts', 'Batch & serial tracking', 'Automated reorder triggers'],
  },
  {
    id: 'warehouse',
    title: 'Mobile Warehouse Scanners',
    category: 'Logistics',
    icon: <Warehouse className="w-5 h-5 text-blue-400" />,
    tag: '#FastPick',
    description:
      'Equip warehouse staff with fast mobile scanner apps. Speed up picking, packing, and dispatch with 99.9% accuracy.',
    outcomes: ['99.9% pick accuracy', 'Fast mobile scanning', 'Instant dispatch manifests'],
  },
  {
    id: 'dealer-portals',
    title: 'B2B Dealer Portals',
    category: 'Wholesale Hub',
    icon: <Building className="w-5 h-5 text-indigo-400" />,
    tag: '#24/7Orders',
    description:
      'Give wholesale dealers a self-service portal to view live prices, check credit limits, and place bulk orders anytime.',
    outcomes: ['Automatic credit enforcement', 'Dealer tier pricing', '24/7 order placement'],
  },
  {
    id: 'crm',
    title: 'Sales & PDF Quotations',
    category: 'Revenue',
    icon: <Users className="w-5 h-5 text-blue-400" />,
    tag: '#InstantQuotes',
    description:
      'Track sales leads, generate professional PDF quotes in 3 seconds, and ensure your sales team follows up on time.',
    outcomes: ['3-second PDF quotes', 'Lead follow-up reminders', 'Sales manager dashboards'],
  },
  {
    id: 'whatsapp',
    title: 'Tally & WhatsApp Sync',
    category: 'Automation',
    icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
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
    <section className="py-14 sm:py-16 relative bg-[#090D14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-bold text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Solutions Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              What We Engineer <span className="text-blue-400">For Growing Businesses</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-normal max-w-md leading-relaxed">
            Pick a module below to inspect its capabilities and request a customized sprint blueprint.
          </p>
        </div>

        {/* Studio Dark Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandCards.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              onClick={() => handleCardClick(item.title)}
              className="bg-[#131927] rounded-2xl p-6 cursor-pointer flex flex-col justify-between border border-slate-800 hover:border-blue-500/50 shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-mono font-bold text-slate-300">
                    {item.tag}
                  </span>
                </div>

                <span className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-extrabold text-white tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal mb-5">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="space-y-2 pt-3 border-t border-slate-800 mb-5">
                  {item.outcomes.map((oc) => (
                    <div key={oc} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{oc}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-blue-400 font-mono">
                  <span>Inspect Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
