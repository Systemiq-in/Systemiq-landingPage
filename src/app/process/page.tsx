'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileSearch,
  FileCode2,
  Cpu,
  ShieldCheck,
  Rocket,
  Headphones,
  CheckCircle2,
  Terminal,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

const sprints = [
  {
    sprint: 'Sprint 0',
    title: 'Workflow Audit & Architecture Specification',
    duration: 'Week 1',
    outcomes: ['Current spreadsheet & manual process audit', 'Database schema ERD diagramming', 'Figma interactive wireframe prototype', 'Fixed sprint scope & deliverable matrix'],
    icon: <FileSearch className="w-6 h-6 text-[#7AE7FF]" />,
  },
  {
    sprint: 'Sprint 1',
    title: 'Core Engine & Database Layer',
    duration: 'Week 2 - 3',
    outcomes: ['PostgreSQL / Cloud database setup', 'Authentication & RBAC role permissions', 'Core API endpoint development', 'Initial UI layout & navigation integration'],
    icon: <Cpu className="w-6 h-6 text-[#4F7CFF]" />,
  },
  {
    sprint: 'Sprint 2',
    title: 'Business Modules & Integration Pipeline',
    duration: 'Week 4 - 5',
    outcomes: ['ERP / Inventory / CRM workflow modules', 'Tally Prime / WhatsApp Meta API integration', 'Automated document/invoice generation', 'Real-time WebSocket event triggers'],
    icon: <FileCode2 className="w-6 h-6 text-[#7AE7FF]" />,
  },
  {
    sprint: 'Sprint 3',
    title: 'Rigorous QA & User Acceptance Testing (UAT)',
    duration: 'Week 6',
    outcomes: ['End-to-end integration testing', 'Historical spreadsheet data migration', 'Concurrency & security load testing', 'Key stakeholder UAT feedback iteration'],
    icon: <ShieldCheck className="w-6 h-6 text-[#4F7CFF]" />,
  },
  {
    sprint: 'Sprint 4',
    title: 'Production Cutover & Dedicated Support',
    duration: 'Week 7+',
    outcomes: ['Zero-downtime production deployment', 'On-site / remote staff training', 'Telemetry monitoring & automated backups', 'Ongoing SLA support & iteration backlog'],
    icon: <Rocket className="w-6 h-6 text-[#7AE7FF]" />,
  },
];

export default function ProcessPage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090909] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#7AE7FF]">
            <Terminal className="w-3.5 h-3.5" />
            <span>Sprint Methodology & Delivery Engine</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Fixed Sprint Cycles. <br />
            <span className="text-gradient">Zero Delivery Drift.</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            We follow a disciplined, 4-phase agile engineering sprint methodology designed specifically for SMEs. You see working software every 2 weeks—no black-box delays.
          </p>
        </div>

        {/* Sprint Timeline Cards */}
        <div className="space-y-8">
          {sprints.map((sp, idx) => (
            <motion.div
              key={sp.sprint}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-panel rounded-2xl p-8 border border-white/10 hover:border-[#4F7CFF]/50 transition bg-[#0d0e12] space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/05 border border-white/10 flex items-center justify-center">
                    {sp.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#7AE7FF]">{sp.sprint} · {sp.duration}</span>
                    <h2 className="text-2xl font-bold text-white tracking-tight">{sp.title}</h2>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/05 border border-white/10 text-xs font-mono text-white/60">
                  <Sparkles className="w-3.5 h-3.5 text-[#7AE7FF]" />
                  <span>Guaranteed Deliverable</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {sp.outcomes.map((out) => (
                  <div key={out} className="p-4 rounded-xl bg-white/[0.02] border border-white/05 space-y-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7AE7FF]" />
                    <p className="text-xs text-white/80 leading-relaxed font-mono">{out}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="glass-panel rounded-2xl p-8 border border-white/15 text-center space-y-6 bg-gradient-to-r from-[#0d0e12] via-[#11131c] to-[#0d0e12]">
          <h2 className="text-3xl font-bold text-white">Experience Predictable Software Delivery</h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto">
            Schedule a 45-minute workflow audit to map out your sprint schedule with our senior software architects.
          </p>
          <button
            onClick={() => setIsAuditModalOpen(true)}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#4F7CFF] to-[#7AE7FF] text-white font-semibold text-sm hover:opacity-90 transition shadow-lg inline-flex items-center gap-2"
          >
            <span>Book Free Sprint Blueprint Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <WorkflowAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        defaultTopic="Sprint Planning Audit"
      />
    </div>
  );
}
