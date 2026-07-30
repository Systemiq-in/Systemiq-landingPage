'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Factory, Truck, ShoppingCart, Stethoscope, ChevronRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

const verticals = [
  {
    title: 'Manufacturing & Plants',
    icon: <Factory className="w-5 h-5 text-[#0071E3]" />,
    problem: 'Manual shift production logs, un-tracked raw material wastage, and delayed bill of materials (BOM).',
    solution: 'Live shift production cards, automated GRN matching, raw material batch allocation, and machine downtime tracking.',
  },
  {
    title: 'Logistics & Warehouses',
    icon: <Truck className="w-5 h-5 text-[#0071E3]" />,
    problem: 'Stock counts mismatching across store locations, slow picking times, and paper dispatch slips.',
    solution: 'Mobile barcode scanner picking, multi-bin stock allocation, vehicle loading manifests, and inter-branch transfers.',
  },
  {
    title: 'Wholesale & B2B Distribution',
    icon: <ShoppingCart className="w-5 h-5 text-[#0071E3]" />,
    problem: 'Dealers placing orders via paper notes and WhatsApp messages, resulting in re-entry mistakes and credit overruns.',
    solution: '24/7 self-service dealer portal, tier pricing matrix, automatic credit limit locks, and direct Tally Prime voucher posting.',
  },
  {
    title: 'Healthcare & Pharma Distributors',
    icon: <Stethoscope className="w-5 h-5 text-[#0071E3]" />,
    problem: 'FEFO batch expiry compliance risk, complex drug license tracking, and manual return vouchers.',
    solution: 'Automated FEFO batch picking, drug license validity checks, automated expiry alerts, and distributor portals.',
  },
];

export default function IndustriesPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVerticalClick = (title: string) => {
    setSelectedTopic(title);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-32 pb-20 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
            Vertical Architecture
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight">
            Tailored Industry Solutions.
          </h1>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-normal">
            Every vertical operates with unique challenges. We engineer software modules around your industry's specific workflow requirements.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {verticals.map((v) => (
            <motion.div
              key={v.title}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleVerticalClick(v.title)}
              className="bg-white rounded-3xl p-8 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F5F5F7] border border-black/[0.06] flex items-center justify-center">
                  {v.icon}
                </div>
                <h2 className="text-2xl font-bold text-[#1D1D1F] tracking-tight">{v.title}</h2>

                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 uppercase tracking-wider">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Operational Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1D1D1F] leading-relaxed">{v.problem}</p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0071E3] uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Engineered Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1D1D1F] font-medium leading-relaxed">{v.solution}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-[#0071E3] pt-2">
                <span>Request Vertical Blueprint</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <WorkflowAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTopic={selectedTopic || 'Industry Solution'}
      />
    </div>
  );
}
