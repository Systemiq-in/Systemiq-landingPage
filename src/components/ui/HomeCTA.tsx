'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import WorkflowAuditModal from '../layout/WorkflowAuditModal';

export default function HomeCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-24 bg-[#FAFAFA] relative border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/80 shadow-md space-y-6 relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-600">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Free 30-Minute Workflow Consultation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ready to Upgrade Your <br />
              <span className="text-blue-600">Business Systems?</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
              Book a 30-minute Workflow Audit with our Senior System Architects. We will analyze your spreadsheets and map out a clear software solution.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Free Workflow Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" /> No commitment required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Direct talk with Senior Leads
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Custom blueprint provided
              </span>
            </div>
          </div>
        </div>
      </section>

      <WorkflowAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
