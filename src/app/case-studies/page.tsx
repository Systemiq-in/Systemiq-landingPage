'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

const fullCaseStudies = [
  {
    client: 'Apex Steel & Manufacturing',
    industry: 'Industrial Manufacturing',
    headline: 'Replaced 18 Excel workbooks with a single real-time ERP matrix',
    summary: 'Apex operated 4 manufacturing plants with manual Excel stock logs. Systemiq engineered a custom ERP with live barcode scanners and automated bill of materials.',
    metrics: [
      { label: 'Time Saved', val: '24 hrs/wk' },
      { label: 'Stock Accuracy', val: '99.9%' },
      { label: 'Dispatch Speed', val: '3x Faster' },
    ],
  },
  {
    client: 'Metro Wholesale Logistics',
    industry: 'Wholesale & B2B Distribution',
    headline: 'Launched self-service B2B dealer portal with instant Tally sync',
    summary: 'Metro dealt with 350+ wholesale buyers sending paper orders via WhatsApp. Systemiq deployed a 24/7 dealer portal with credit checks and automatic Tally Prime ledger posting.',
    metrics: [
      { label: 'Dispatch Speed', val: '4x Faster' },
      { label: 'Billing Errors', val: '0 Incidents' },
      { label: 'Tally Auto Sync', val: '100%' },
    ],
  },
];

export default function CaseStudiesPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStudyClick = (title: string) => {
    setSelectedTopic(title);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-600">
            <Award className="w-4 h-4 text-blue-600" />
            <span>Proven Business Impact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Client Proven <span className="text-blue-600">Case Studies.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Discover how growing SMEs eliminated manual spreadsheets and scaled their daily business operations with custom software.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fullCaseStudies.map((cs) => (
            <div
              key={cs.client}
              onClick={() => handleStudyClick(cs.client)}
              className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-500 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-sm font-extrabold text-slate-900">{cs.client}</span>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {cs.industry}
                  </span>
                </div>

                <h2 className="text-xl font-extrabold text-slate-900 leading-snug">"{cs.headline}"</h2>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{cs.summary}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="grid grid-cols-3 gap-3">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                      <span className="text-[10px] font-semibold text-slate-500 block">{m.label}</span>
                      <span className="text-base font-extrabold font-mono text-blue-600 block mt-0.5">{m.val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-blue-600 pt-2 font-mono">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WorkflowAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTopic={selectedTopic || 'Case Study Audit'}
      />
    </div>
  );
}
