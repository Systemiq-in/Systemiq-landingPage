'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, TrendingUp, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

const fullCaseStudies = [
  {
    client: 'Apex Steel & Manufacturing',
    industry: 'Industrial Manufacturing',
    headline: 'Replaced 18 Excel workbooks with a single real-time ERP matrix',
    summary: 'Apex operated 4 manufacturing plants with manual Excel stock logs. Systemiq engineered a custom ERP with live barcode scanners and an automated bill of materials.',
    metrics: [
      { label: 'Time Saved', val: '24 hrs/wk', icon: <Clock className="w-4 h-4 text-[#00A3FF]" /> },
      { label: 'Stock Accuracy', val: '99.9%', icon: <ShieldCheck className="w-4 h-4 text-emerald-400" /> },
      { label: 'Dispatch Speed', val: '3x Faster', icon: <TrendingUp className="w-4 h-4 text-[#0071E3]" /> },
    ],
  },
  {
    client: 'Metro Wholesale Logistics',
    industry: 'Wholesale & Distribution',
    headline: 'Launched self-service B2B dealer portal with instant Tally sync',
    summary: 'Metro dealt with 350+ wholesale buyers sending paper orders via WhatsApp. Systemiq deployed a 24/7 dealer portal with credit checks and automatic Tally Prime ledger posting.',
    metrics: [
      { label: 'Dispatch Speed', val: '4x Faster', icon: <TrendingUp className="w-4 h-4 text-[#00A3FF]" /> },
      { label: 'Billing Errors', val: 'Zero', icon: <AlertTriangle className="w-4 h-4 text-emerald-400" /> },
      { label: 'Tally Auto Sync', val: '100%', icon: <ShieldCheck className="w-4 h-4 text-[#0071E3]" /> },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00A3FF] text-xs font-semibold tracking-widest uppercase">
            Proven Results
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Client Case Studies.
          </h1>
          <p className="text-base sm:text-lg text-white/50 leading-relaxed font-normal max-w-2xl mx-auto">
            Discover how growing SMEs eliminated manual spreadsheets and scaled their daily business operations with custom software infrastructure.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fullCaseStudies.map((cs, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={cs.client}
              onClick={() => handleStudyClick(cs.client)}
              className="group bg-[#13151A]/80 rounded-[2rem] p-8 sm:p-10 border border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-white/10 hover:shadow-[0_12px_32px_rgba(0,113,227,0.15)] transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden relative"
            >
              <div className="space-y-8 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.06] pb-6 gap-4 sm:gap-0">
                  <span className="text-xl font-bold text-white">{cs.client}</span>
                  <span className="text-xs font-semibold text-[#00A3FF] bg-[#0071E3]/10 px-4 py-1.5 rounded-full border border-[#0071E3]/20 w-fit">
                    {cs.industry}
                  </span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">"{cs.headline}"</h2>
                  <p className="text-sm sm:text-base text-white/60 leading-relaxed font-normal">{cs.summary}</p>
                </div>
              </div>

              <div className="space-y-8 pt-8 mt-8 border-t border-white/[0.06] relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] group-hover:bg-white/[0.04] transition-colors duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        {m.icon}
                        <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">{m.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-white block">{m.val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-[#00A3FF] group-hover:translate-x-1 transition-transform">
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
        defaultTopic={selectedTopic || 'Custom Software'}
      />
    </div>
  );
}
