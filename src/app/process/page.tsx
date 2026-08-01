'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import HowWeWork from '@/components/ui/HowWeWork';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

const sprintGuarantees = [
  { title: 'Fixed 2-4 Week Delivery', desc: 'Every sprint outcome is scoped upfront with explicit milestone deadlines.' },
  { title: 'Working Code Fortnightly', desc: 'You test live, working software features on staging servers every 2 weeks.' },
  { title: '100% IP & Data Rights', desc: 'Full ownership of all database schemas, API routes, and source code.' },
];

export default function ProcessPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-white/90 pt-32 pb-20 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
            Engineering Methodology
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Predictable Software Sprints.
          </h1>
          <p className="text-base sm:text-lg text-white/50 leading-relaxed font-normal">
            No endless timelines or unpredictable scope creep. We engineer software in disciplined 2 to 4-week sprint cycles with guaranteed deliverables.
          </p>
        </div>

        {/* 3 Sprint Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sprintGuarantees.map((g) => (
            <motion.div
              key={g.title}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-[#13151A]/80 rounded-3xl p-8 border border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_32px_rgba(0,113,227,0.1)] hover:-translate-y-1 space-y-3 transition-all"
            >
              <CheckCircle2 className="w-6 h-6 text-[#0071E3] mb-2" />
              <h3 className="text-xl font-bold text-white tracking-tight">{g.title}</h3>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-normal">{g.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* How We Work Section */}
        <HowWeWork />

        {/* CTA */}
        <div className="bg-[#13151A]/80 rounded-3xl p-10 sm:p-14 border border-white/[0.04] text-center space-y-6 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Ready to Start Sprint 01?</h2>
          <p className="text-base text-white/50 max-w-xl mx-auto font-normal">
            Book a 30-minute Workflow Audit with our Senior System Architects.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-sm transition shadow-sm hover:scale-[1.02]"
          >
            Book Free Workflow Audit
          </button>
        </div>
      </div>

      <WorkflowAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
