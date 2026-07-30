'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import WorkflowAuditModal from '../layout/WorkflowAuditModal';

export default function HomeCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-[#090909] relative z-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/15 bg-gradient-to-br from-[#11131c]/95 via-[#0d0e12]/90 to-[#090909] text-center overflow-hidden shadow-2xl">
          {/* Decorative Spotlight & Grids */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#7AE7FF] to-transparent" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#4F7CFF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4F7CFF]/15 border border-[#4F7CFF]/30 text-xs font-mono text-[#7AE7FF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Consultation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Ready to replace spreadsheets with real software?
            </h2>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Book a complimentary 45-minute workflow audit with our principal software architects. We will dissect your current manual bottlenecks and map out a custom system blueprint.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#4F7CFF] via-[#5C86FF] to-[#7AE7FF] text-white font-bold text-base hover:opacity-95 transition-all shadow-xl shadow-[#4F7CFF]/25 flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Book Your Free Workflow Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/40">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% NDA Protection
              </span>
              <span>•</span>
              <span>No Sales Pitch</span>
              <span>•</span>
              <span>Direct Principal Architect Review</span>
            </div>
          </div>
        </div>
      </div>

      <WorkflowAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
