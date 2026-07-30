'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Clock, DollarSign, Zap } from 'lucide-react';
import WorkflowAuditModal from '../layout/WorkflowAuditModal';

export default function SmeRoiCalculator() {
  const [teamSize, setTeamSize] = useState<number>(25);
  const [spreadsheetCount, setSpreadsheetCount] = useState<number>(8);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  // Estimations: Each person spends ~2.5 hrs/week copy-pasting across spreadsheets
  const hoursSavedPerMonth = Math.round(teamSize * (spreadsheetCount * 0.8) * 4);
  const dollarsSavedPerMonth = Math.round(hoursSavedPerMonth * 22);

  return (
    <section className="py-24 bg-[#090909] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 bg-gradient-to-r from-[#0d0e12] via-[#12141c] to-[#0d0e12] space-y-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-white/10 pb-8">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7AE7FF]/10 border border-[#7AE7FF]/30 text-xs font-mono text-[#7AE7FF]">
                <Calculator className="w-3.5 h-3.5" />
                <span>INTERACTIVE ROI ESTIMATOR</span>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Calculate Your SME Efficiency ROI
              </h2>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Slide the controls below to see how much manual entry time and money custom software can save your company every month.
              </p>
            </div>

            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#4F7CFF] to-[#7AE7FF] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition shrink-0"
            >
              <span>Get Detailed ROI Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Sliders Controls Column */}
            <div className="lg:col-span-6 space-y-8">
              {/* Slider 1: Team Size */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono text-white/80">Team Size (Employees / Staff)</label>
                  <span className="text-lg font-bold font-mono text-[#7AE7FF]">{teamSize} Staff</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#4F7CFF]"
                />
              </div>

              {/* Slider 2: Spreadsheet Count */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono text-white/80">Active Manual Spreadsheets / Workbooks</label>
                  <span className="text-lg font-bold font-mono text-[#7AE7FF]">{spreadsheetCount} Sheets</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="30"
                  value={spreadsheetCount}
                  onChange={(e) => setSpreadsheetCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#4F7CFF]"
                />
              </div>
            </div>

            {/* Computed ROI Output Display Column */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#4F7CFF]/15 border border-[#4F7CFF]/30 text-[#7AE7FF] flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-white/50 block">Est. Time Saved / Month</span>
                <span className="text-3xl font-extrabold font-mono text-white block">
                  ~{hoursSavedPerMonth.toLocaleString()} hrs
                </span>
                <span className="text-[11px] text-white/40 block">Team productivity unlocked</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#7AE7FF]/20 border border-[#7AE7FF]/40 text-[#7AE7FF] flex items-center justify-center mx-auto mb-2">
                  <DollarSign className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#7AE7FF] block">Est. Cost Value Saved</span>
                <span className="text-3xl font-extrabold font-mono text-[#7AE7FF] block">
                  ~${dollarsSavedPerMonth.toLocaleString()}
                </span>
                <span className="text-[11px] text-white/50 block">Monthly operational savings</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WorkflowAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        defaultTopic="ROI Audit Session"
      />
    </section>
  );
}
