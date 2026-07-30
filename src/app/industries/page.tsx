'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Factory,
  Truck,
  ShoppingBag,
  Plane,
  HeartPulse,
  HardHat,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

const industrySections = [
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial Production',
    icon: <Factory className="w-6 h-6 text-[#7AE7FF]" />,
    painPoints: ['Complex Bill of Materials (BOM) managed on spreadsheets', 'Machine downtime untracked', 'Raw material stockouts stopping shop floor'],
    solutions: ['Live Job Card Tracking', 'Automated BOM Material Costing', 'Machine OEE Monitoring', 'GST Billing & Tally Prime Sync'],
    metric: '3.4x Faster Order Execution',
  },
  {
    id: 'wholesale',
    title: 'Wholesale & B2B Distribution',
    icon: <Truck className="w-6 h-6 text-[#4F7CFF]" />,
    painPoints: ['Manual phone/WhatsApp order taking from 300+ dealers', 'Unenforced dealer credit limits leading to bad debt', 'Multi-hub stock discrepancies'],
    solutions: ['Self-Service Dealer Ordering Portal', 'Automated Credit Tier Checks', 'Multi-Warehouse Inter-transfer Sync', 'WhatsApp Instant Receipt Dispatch'],
    metric: '0% Credit Enforcement Drift',
  },
  {
    id: 'retail',
    title: 'Retail & Multi-Store E-Commerce',
    icon: <ShoppingBag className="w-6 h-6 text-[#7AE7FF]" />,
    painPoints: ['Disconnected online and offline inventory', 'Slow POS checkout during peak hours', 'Inaccurate sales reconciliation'],
    solutions: ['Centralized Stock Ledger API', 'High-Speed Web POS Interface', 'Automated Multi-Channel Sync', 'Loyalty & Discount Matrix'],
    metric: '100% Stock Ledger Accuracy',
  },
  {
    id: 'travel',
    title: 'Travel & Special Fares Logistics',
    icon: <Plane className="w-6 h-6 text-[#4F7CFF]" />,
    painPoints: ['Unconsolidated special fares inventory', 'Manual PNR processing & ticket voucher generation', 'Slow agent communication'],
    solutions: ['Special Fare Inventory Portal', 'Automated Itinerary Builder', 'PNR & Passenger Data Sync', 'WhatsApp Fare Alert Engine'],
    metric: '10x Faster Fare Dispatch',
  },
  {
    id: 'healthcare',
    title: 'Healthcare, Pharma & Medical Supplies',
    icon: <HeartPulse className="w-6 h-6 text-[#7AE7FF]" />,
    painPoints: ['Batch number expiration risk', 'Strict regulatory audit compliance demands', 'Sample kit tracking loss'],
    solutions: ['Batch Expiry Matrix Alerts', 'HIPAA/Regulatory Compliant Logs', 'Sample Kit Chain-of-Custody', 'Cold Chain Sensor Logs'],
    metric: 'Zero Expired Stock Losses',
  },
  {
    id: 'construction',
    title: 'Construction & Contracting Engineering',
    icon: <HardHat className="w-6 h-6 text-[#4F7CFF]" />,
    painPoints: ['Material loss across job sites', 'Subcontractor billing discrepancies', 'Equipment rental idle time'],
    solutions: ['Site Requisition Mobile PWA', 'Subcontractor RA Bill Approvals', 'Heavy Machinery Dispatch Matrix', 'Project Cost-to-Complete Analytics'],
    metric: '18% Site Wastage Reduction',
  },
  {
    id: 'education',
    title: 'Education, Academies & EdTech',
    icon: <GraduationCap className="w-6 h-6 text-[#7AE7FF]" />,
    painPoints: ['Manual fee tracking & delayed payment followups', 'Fragmented student attendance logs', 'Certificate issuance delays'],
    solutions: ['Self-Service Student Fee Portal', 'Automated Dunning & Payment Links', 'Biometric Attendance Integration', 'Digital Credentials Engine'],
    metric: '99% Timely Fee Collection',
  },
];

export default function IndustriesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const handleOpenAudit = (title: string) => {
    setSelectedIndustry(title);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090909] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#7AE7FF]">
            <Terminal className="w-3.5 h-3.5" />
            <span>Vertical Industry Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Engineered Systems for <br />
            <span className="text-gradient">High-Complexity Industries.</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Every industry operates under unique regulatory, supply chain, and workflow rules. We engineer specialized business software systems tailored to your exact industry matrix.
          </p>
        </div>

        {/* Dedicated Industry Sections */}
        <div className="space-y-12">
          {industrySections.map((ind) => (
            <div
              key={ind.id}
              id={ind.id}
              className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 bg-[#0d0e12] space-y-8 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/05 border border-white/10 flex items-center justify-center">
                    {ind.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">{ind.title}</h2>
                    <span className="text-xs font-mono text-[#7AE7FF]">Verified Industry Architecture</span>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-xl bg-[#4F7CFF]/15 border border-[#4F7CFF]/30 text-white font-mono text-xs text-center">
                  Target Outcome: <span className="text-[#7AE7FF] font-bold">{ind.metric}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pain points */}
                <div className="space-y-3 p-5 rounded-2xl bg-white/[0.02] border border-white/05">
                  <h3 className="text-xs font-mono text-red-400 uppercase tracking-wider">
                    Friction & Bottlenecks Replaced
                  </h3>
                  <div className="space-y-2">
                    {ind.painPoints.map((pp) => (
                      <div key={pp} className="flex items-start gap-2 text-xs text-white/60">
                        <span className="text-red-400 font-bold shrink-0">✕</span>
                        <span>{pp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Custom Modules */}
                <div className="space-y-3 p-5 rounded-2xl bg-[#4F7CFF]/05 border border-[#4F7CFF]/20">
                  <h3 className="text-xs font-mono text-[#7AE7FF] uppercase tracking-wider">
                    Engineered Software Modules
                  </h3>
                  <div className="space-y-2">
                    {ind.solutions.map((sol) => (
                      <div key={sol} className="flex items-start gap-2 text-xs text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#7AE7FF] shrink-0" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center border-t border-white/05">
                <span className="text-xs font-mono text-white/40">
                  Need a custom {ind.title} blueprint?
                </span>
                <button
                  onClick={() => handleOpenAudit(ind.title)}
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#4F7CFF] to-[#7AE7FF] text-white text-xs font-semibold flex items-center gap-2"
                >
                  <span>Book Industry Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WorkflowAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTopic={`${selectedIndustry} System`}
      />
    </div>
  );
}
