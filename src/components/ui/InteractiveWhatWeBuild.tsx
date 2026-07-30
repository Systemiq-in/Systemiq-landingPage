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
  badgeStyle: string;
  cardGradient: string;
  textColor: string;
  description: string;
  outcomes: string[];
}

const brandCards: BrandCard[] = [
  {
    id: 'erp',
    title: 'Custom ERP Systems',
    category: 'Enterprise Core',
    icon: <Server className="w-6 h-6 text-white" />,
    tag: '#ZeroExcel',
    badgeStyle: 'bg-[#4F7CFF]/20 text-[#7AE7FF] border border-[#4F7CFF]/40',
    cardGradient: 'bg-gradient-to-br from-[#121526] via-[#161b36] to-[#0d0e12] border-[#4F7CFF]/40',
    textColor: 'text-white',
    description:
      'One central system for orders, inventory, raw materials, and finances. Built specifically around your actual daily business steps.',
    outcomes: ['Zero manual copy-pasting', 'Multi-branch visibility', 'Role permission controls'],
  },
  {
    id: 'inventory',
    title: 'Inventory & Stock Sync',
    category: 'Warehouse',
    icon: <Boxes className="w-6 h-6 text-slate-950" />,
    tag: '#LiveStock',
    badgeStyle: 'bg-black/20 text-slate-950 border border-slate-900/20 font-bold',
    cardGradient: 'bg-gradient-to-br from-[#FFB800] via-[#FBBF24] to-[#F59E0B] border-amber-400/40',
    textColor: 'text-slate-950',
    description:
      'Know your exact inventory counts across all stores and warehouses in real-time. Automatic reorder alerts before items run out.',
    outcomes: ['Prevents stockouts', 'Batch & serial tracking', 'Automated reorder triggers'],
  },
  {
    id: 'warehouse',
    title: 'Mobile Warehouse Scanners',
    category: 'Logistics',
    icon: <Warehouse className="w-6 h-6 text-white" />,
    tag: '#FastPick',
    badgeStyle: 'bg-[#7AE7FF]/20 text-[#7AE7FF] border border-[#7AE7FF]/40',
    cardGradient: 'bg-gradient-to-br from-[#0c1e2b] via-[#102a3d] to-[#0d0e12] border-[#7AE7FF]/40',
    textColor: 'text-white',
    description:
      'Equip warehouse staff with fast mobile scanner apps. Speed up picking, packing, and dispatch with 99.9% accuracy.',
    outcomes: ['99.9% pick accuracy', 'Fast mobile scanning', 'Instant dispatch manifests'],
  },
  {
    id: 'dealer-portals',
    title: 'B2B Dealer Portals',
    category: 'Wholesale Hub',
    icon: <Building className="w-6 h-6 text-white" />,
    tag: '#24/7Orders',
    badgeStyle: 'bg-[#8B5CF6]/20 text-[#C4B5FD] border border-[#8B5CF6]/40',
    cardGradient: 'bg-gradient-to-br from-[#19142b] via-[#221a3d] to-[#0d0e12] border-[#8B5CF6]/40',
    textColor: 'text-white',
    description:
      'Give wholesale dealers a self-service portal to view live prices, check credit limits, and place bulk orders anytime.',
    outcomes: ['Automatic credit enforcement', 'Dealer tier pricing', '24/7 order placement'],
  },
  {
    id: 'crm',
    title: 'Sales & PDF Quotations',
    category: 'Revenue',
    icon: <Users className="w-6 h-6 text-white" />,
    tag: '#InstantQuotes',
    badgeStyle: 'bg-[#4F7CFF]/20 text-[#7AE7FF] border border-[#4F7CFF]/40',
    cardGradient: 'bg-gradient-to-br from-[#121526] via-[#192247] to-[#0d0e12] border-[#4F7CFF]/40',
    textColor: 'text-white',
    description:
      'Track sales leads, generate professional PDF quotes in 3 seconds, and ensure your sales team follows up on time.',
    outcomes: ['3-second PDF quotes', 'Lead follow-up reminders', 'Sales manager dashboards'],
  },
  {
    id: 'whatsapp',
    title: 'Tally & WhatsApp Sync',
    category: 'Automation',
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    tag: '#AutoMessaging',
    badgeStyle: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40',
    cardGradient: 'bg-gradient-to-br from-[#0c2419] via-[#103323] to-[#0d0e12] border-emerald-500/40',
    textColor: 'text-white',
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
    <section className="py-24 relative bg-[#090909] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="pill-tag bg-[#4F7CFF]/20 text-[#7AE7FF] border border-[#4F7CFF]/40">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Solutions Catalog</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              What We Engineer <span className="highlight-yellow px-2 text-white">For Growing Businesses</span>
            </h2>
          </div>
          <p className="text-white/70 text-base max-w-md leading-relaxed">
            Pick a module below to inspect its capabilities and request a customized sprint blueprint.
          </p>
        </div>

        {/* Uniform Brand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandCards.map((item, idx) => {
            const isDarkText = item.textColor === 'text-slate-950';
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => handleCardClick(item.title)}
                className={`rounded-3xl p-8 cursor-pointer flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${item.cardGradient} ${item.textColor} border relative overflow-hidden group`}
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${isDarkText ? 'bg-black/15' : 'bg-white/10'}`}>
                      {item.icon}
                    </div>
                    <span className={`pill-tag ${item.badgeStyle}`}>
                      {item.tag}
                    </span>
                  </div>

                  <span className={`text-xs font-mono font-bold uppercase tracking-wider block mb-1 ${isDarkText ? 'text-slate-800' : 'text-[#7AE7FF]'}`}>
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-extrabold tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-8 ${isDarkText ? 'text-slate-900/80 font-medium' : 'text-white/80'}`}>
                    {item.description}
                  </p>
                </div>

                {/* Outcomes */}
                <div>
                  <div className={`space-y-2 pt-6 border-t ${isDarkText ? 'border-black/15' : 'border-white/10'} mb-6`}>
                    {item.outcomes.map((oc) => (
                      <div key={oc} className="flex items-center gap-2 text-xs font-semibold">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${isDarkText ? 'text-slate-950' : 'text-[#7AE7FF]'}`} />
                        <span>{oc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold font-mono">
                    <span>Inspect Blueprint</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
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
