'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
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
    industry: 'Wholesale & Distribution',
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
    <div className="min-h-screen bg-transparent text-white/90 pt-32 pb-20 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
            Proven Results
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Client Case Studies.
          </h1>
          <p className="text-base sm:text-lg text-white/50 leading-relaxed font-normal">
            Discover how growing SMEs eliminated manual spreadsheets and scaled their daily business operations with custom software.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fullCaseStudies.map((cs) => (
            <motion.div
              key={cs.client}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleStudyClick(cs.client)}
              className="bg-[#13151A]/80 rounded-3xl p-8 border border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <span className="text-base font-bold text-white">{cs.client}</span>
                  <span className="text-xs font-semibold text-[#0071E3] bg-transparent px-3 py-1 rounded-full border border-white/[0.06]">
                    {cs.industry}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white leading-snug">"{cs.headline}"</h2>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-normal">{cs.summary}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                <div className="grid grid-cols-3 gap-3">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="p-3.5 rounded-2xl bg-transparent border border-white/[0.06] text-center">
                      <span className="text-[10px] font-medium text-white/50 block uppercase tracking-wider">{m.label}</span>
                      <span className="text-lg font-bold text-[#0071E3] block mt-0.5">{m.val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-[#0071E3] pt-2">
                  <span>Read Full Case Study</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
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
