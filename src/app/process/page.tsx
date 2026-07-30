'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, ShieldCheck, Zap, ArrowRight, Layers } from 'lucide-react';
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
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-600">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Engineering Methodology</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Predictable Software <span className="text-blue-600">Sprint Delivery.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            No endless timelines or unpredictable scope creep. We engineer software in disciplined 2 to 4-week sprint cycles with guaranteed deliverables.
          </p>
        </div>

        {/* 3 Sprint Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sprintGuarantees.map((g) => (
            <div key={g.title} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-2">
              <CheckCircle2 className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="text-lg font-extrabold text-slate-900">{g.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">{g.desc}</p>
            </div>
          ))}
        </div>

        {/* How We Work Compact Section */}
        <HowWeWork />

        {/* CTA */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 text-center space-y-6 shadow-xl">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Ready to Start Sprint 01?</h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-normal">
            Book a 30-minute Workflow Audit with our Senior System Architects.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition shadow-lg shadow-blue-500/20"
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
