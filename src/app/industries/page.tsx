'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Factory, Truck, ShoppingCart, Stethoscope, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

const verticals = [
  {
    title: 'Manufacturing & Industrial Plants',
    icon: <Factory className="w-6 h-6 text-blue-600" />,
    problem: 'Manual shift production logs, un-tracked raw material wastage, and delayed bill of materials (BOM).',
    solution: 'Live shift production cards, automated GRN matching, raw material batch allocation, and machine downtime tracking.',
  },
  {
    title: 'Logistics & Multi-Warehouse Distribution',
    icon: <Truck className="w-6 h-6 text-indigo-600" />,
    problem: 'Stock counts mismatching across store locations, slow picking times, and paper dispatch slips.',
    solution: 'Mobile barcode scanner picking, multi-bin stock allocation, vehicle loading manifests, and inter-branch transfers.',
  },
  {
    title: 'Wholesale & B2B Distribution',
    icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
    problem: 'Dealers placing orders via paper notes and WhatsApp messages, resulting in re-entry mistakes and credit overruns.',
    solution: '24/7 self-service dealer portal, tier pricing matrix, automatic credit limit locks, and direct Tally Prime voucher posting.',
  },
  {
    title: 'Healthcare & Pharma Distributors',
    icon: <Stethoscope className="w-6 h-6 text-indigo-600" />,
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
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-600">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span>Vertical Industry Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Tailored Industry <span className="text-blue-600">Software Architecture.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every vertical operates with unique challenges. We engineer software modules around your industry's specific workflow requirements.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {verticals.map((v) => (
            <div
              key={v.title}
              onClick={() => handleVerticalClick(v.title)}
              className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-500 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  {v.icon}
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">{v.title}</h2>

                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 space-y-1">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">Operational Problem</span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">{v.problem}</p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-1">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">Systemiq Engineered Solution</span>
                  <p className="text-xs text-slate-900 leading-relaxed font-semibold">{v.solution}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-bold text-blue-600 pt-2 font-mono">
                <span>Request Vertical Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
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
