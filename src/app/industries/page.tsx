'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Factory, Truck, ShoppingCart, Stethoscope, ChevronRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

const verticals = [
  {
    title: 'Manufacturing & Plants',
    icon: <Factory className="w-6 h-6 text-[#0071E3]" />,
    problem: 'Manual shift production logs, un-tracked raw material wastage, and delayed bill of materials (BOM).',
    solution: 'Live shift production cards, automated GRN matching, raw material batch allocation, and machine downtime tracking.',
    gradient: 'from-blue-500/10 to-indigo-500/10'
  },
  {
    title: 'Logistics & Warehouses',
    icon: <Truck className="w-6 h-6 text-[#0071E3]" />,
    problem: 'Stock counts mismatching across store locations, slow picking times, and paper dispatch slips.',
    solution: 'Mobile barcode scanner picking, multi-bin stock allocation, vehicle loading manifests, and inter-branch transfers.',
    gradient: 'from-emerald-500/10 to-teal-500/10'
  },
  {
    title: 'Wholesale & B2B Distribution',
    icon: <ShoppingCart className="w-6 h-6 text-[#0071E3]" />,
    problem: 'Dealers placing orders via paper notes and WhatsApp messages, resulting in re-entry mistakes and credit overruns.',
    solution: '24/7 self-service dealer portal, tier pricing matrix, automatic credit limit locks, and direct Tally Prime voucher posting.',
    gradient: 'from-violet-500/10 to-purple-500/10'
  },
  {
    title: 'Healthcare & Pharma Distributors',
    icon: <Stethoscope className="w-6 h-6 text-[#0071E3]" />,
    problem: 'FEFO batch expiry compliance risk, complex drug license tracking, and manual return vouchers.',
    solution: 'Automated FEFO batch picking, drug license validity checks, automated expiry alerts, and distributor portals.',
    gradient: 'from-rose-500/10 to-pink-500/10'
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
    <div className="min-h-screen bg-transparent text-white/90 pt-32 pb-20 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00A3FF] text-xs font-semibold tracking-widest uppercase">
            Vertical Architecture
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Tailored Industry Solutions.
          </h1>
          <p className="text-base sm:text-lg text-white/50 leading-relaxed font-normal max-w-2xl mx-auto">
            Every vertical operates with unique challenges. We engineer software modules around your industry's specific workflow requirements.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {verticals.map((v, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={v.title}
              onClick={() => handleVerticalClick(v.title)}
              className="group bg-[#13151A]/80 rounded-[2rem] p-8 sm:p-10 border border-white/[0.04] hover:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,113,227,0.15)] transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden relative"
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${v.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full transform translate-x-1/3 -translate-y-1/3`} />

              <div className="space-y-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-sm">
                  {v.icon}
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{v.title}</h2>

                <div className="space-y-4">
                  {/* Problem Block */}
                  <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/10 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider">
                      <AlertCircle className="w-4 h-4" />
                      <span>Operational Challenge</span>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed font-normal">{v.problem}</p>
                  </div>

                  {/* Solution Block */}
                  <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-2 group-hover:bg-emerald-500/10 transition-colors duration-500">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Engineered Solution</span>
                    </div>
                    <p className="text-sm text-white/90 font-medium leading-relaxed">{v.solution}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-[#00A3FF] pt-8 relative z-10 group-hover:translate-x-1 transition-transform">
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
        defaultTopic={selectedTopic || 'Custom Software'}
      />
    </div>
  );
}
