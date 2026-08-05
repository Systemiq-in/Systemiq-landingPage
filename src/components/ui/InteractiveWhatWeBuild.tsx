'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Boxes,
  Warehouse,
  Building,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
  Users,
  ArrowRight,
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
  ctaText: string;
}

const brandCards: BrandCard[] = [
  {
    id: 'web-erp',
    title: 'Websites, Web Apps & ERPs',
    category: 'Digital Core',
    icon: <Server className="w-5 h-5" />,
    tag: '#FullStack',
    description:
      'From stunning marketing websites and customer-facing web applications to powerful internal ERP systems tailored to your business.',
    outcomes: ['High-conversion websites', 'Scalable web applications', 'Custom business software'],
    ctaText: 'View Software Blueprint',
  },
  {
    id: 'inventory',
    title: 'Inventory & Stock Sync',
    category: 'Warehouse',
    icon: <Boxes className="w-5 h-5" />,
    tag: '#LiveStock',
    description:
      'Know your exact inventory counts across all stores and warehouses in real-time. Automatic reorder alerts before items run out.',
    outcomes: ['Prevents stockouts', 'Batch & serial tracking', 'Automated reorder triggers'],
    ctaText: 'View Inventory Blueprint',
  },
  {
    id: 'warehouse',
    title: 'Mobile Warehouse Scanners',
    category: 'Logistics',
    icon: <Warehouse className="w-5 h-5" />,
    tag: '#FastPick',
    description:
      'Equip warehouse staff with fast mobile scanner apps. Speed up picking, packing, and dispatch with 99.9% accuracy.',
    outcomes: ['99.9% pick accuracy', 'Fast mobile scanning', 'Instant dispatch manifests'],
    ctaText: 'View Scanner Blueprint',
  },
  {
    id: 'dealer-portals',
    title: 'B2B Dealer Portals',
    category: 'Wholesale Hub',
    icon: <Building className="w-5 h-5" />,
    tag: '#24/7Orders',
    description:
      'Give wholesale dealers a self-service portal to view live prices, check credit limits, and place bulk orders anytime.',
    outcomes: ['Automatic credit enforcement', 'Dealer tier pricing', '24/7 order placement'],
    ctaText: 'View Portal Blueprint',
  },
  {
    id: 'crm',
    title: 'Sales & PDF Quotations',
    category: 'Revenue',
    icon: <Users className="w-5 h-5" />,
    tag: '#InstantQuotes',
    description:
      'Track sales leads, generate professional PDF quotes in 3 seconds, and ensure your sales team follows up on time.',
    outcomes: ['3-second PDF quotes', 'Lead follow-up reminders', 'Sales manager dashboards'],
    ctaText: 'View CRM Blueprint',
  },
  {
    id: 'whatsapp',
    title: 'Tally & WhatsApp Sync',
    category: 'Automation',
    icon: <MessageSquare className="w-5 h-5" />,
    tag: '#AutoMessaging',
    description:
      'Post invoices straight to Tally Prime without re-typing. Text customers order updates & receipts on WhatsApp automatically.',
    outcomes: ['Direct Tally Prime sync', 'Automated WhatsApp receipts', 'Zero double entry'],
    ctaText: 'View Sync Blueprint',
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
    <section className="py-12 lg:py-16 bg-transparent border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold text-[#00A3FF] tracking-widest uppercase">
              Solutions Catalog
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              What We Engineer.
            </h2>
          </div>
          <p className="text-white/50 text-sm sm:text-base font-normal max-w-md leading-relaxed">
            From stunning marketing websites and dynamic web apps to powerful ERPs. Select a solution module to view its architecture.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-auto"
        >
          {brandCards.map((item, idx) => {
            const isWide = idx === 0 || idx === 3;
            return (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } }
                }}
                onClick={() => handleCardClick(item.title)}
                className={`active-scale bento-card group flex flex-col justify-between p-6 sm:p-8 cursor-pointer ${
                  isWide ? 'xl:col-span-2' : 'xl:col-span-1'
                } hover:shadow-[0_8px_32px_rgba(0,113,227,0.15)] transition-all duration-500`}
              >
                {/* Spotlight effect placeholder */}
                <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0, 113, 227, 0.12) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 shadow-inner flex items-center justify-center text-[#00A3FF] group-hover:bg-[#0071E3] group-hover:text-white group-hover:border-[#00A3FF] transition-all duration-500">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold px-3 py-1.5 bg-white/[0.05] text-white/70 rounded-full border border-white/[0.05] tracking-widest group-hover:bg-[#0071E3]/20 group-hover:text-white group-hover:border-[#0071E3]/50 transition-colors duration-500">
                      {item.tag}
                    </span>
                  </div>

                  <div className={`flex flex-col h-full flex-1 ${isWide ? 'xl:flex-row xl:items-start xl:justify-between xl:gap-8' : ''}`}>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-[#00A3FF] uppercase tracking-widest block mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-white/60 leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className={`space-y-3 pt-4 border-t border-white/10 mb-6 flex-1 ${isWide ? 'xl:border-t-0 xl:pt-0 xl:border-l xl:pl-8' : ''}`}>
                      {item.outcomes.map((oc) => (
                        <div key={oc} className="flex items-center gap-2 text-[13px] font-medium text-white/70">
                          <CheckCircle2 className="w-4 h-4 text-[#0071E3] shrink-0" />
                          <span>{oc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-bold text-white uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-all duration-300 mt-auto pt-4">
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <WorkflowAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTopic={selectedTopic || 'Custom Software'}
      />
    </section>
  );
}
