'use client';

import { useState } from 'react';
import { Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import WorkflowAuditModal from '../layout/WorkflowAuditModal';

export default function HomeCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 lg:py-24 bg-transparent border-t border-white/[0.08] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#13151A]/80 rounded-3xl p-10 sm:p-14 border border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.2)] space-y-6">
            <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
              Free 30-Minute Consultation
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Upgrade Your <br />
              <span className="text-[#0071E3]">Business Operating System?</span>
            </h2>

            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
              Book a 30-minute Workflow Audit with our Senior System Architects. We will analyze your spreadsheets and map out a clear software solution.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="active-scale w-full sm:w-auto px-8 py-4 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2 group hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book a workflow audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs text-white/50 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0071E3]" /> No commitment required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0071E3]" /> Direct talk with Senior Leads
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0071E3]" /> Custom blueprint provided
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
