'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  SearchCheck,
  Compass,
  Code2,
  TestTube2,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

interface ArchStep {
  id: number;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  detail: string;
  techStack: string[];
}

const steps: ArchStep[] = [
  {
    id: 1,
    label: 'Business',
    sublabel: 'Domain Context',
    icon: <Building2 className="w-5 h-5 text-[#7AE7FF]" />,
    detail: 'Deep dive into existing SME operations, supply chain constraints, revenue models, and data silos.',
    techStack: ['Domain Modeling', 'Process Mapping'],
  },
  {
    id: 2,
    label: 'Workflow Analysis',
    sublabel: 'Bottleneck Audit',
    icon: <SearchCheck className="w-5 h-5 text-[#4F7CFF]" />,
    detail: 'Deconstruct spreadsheet dependencies, manual handoffs, and operational drift points.',
    techStack: ['Audit Matrix', 'Data Flow Diagrams'],
  },
  {
    id: 3,
    label: 'System Design',
    sublabel: 'Blueprint & Specs',
    icon: <Compass className="w-5 h-5 text-[#7AE7FF]" />,
    detail: 'Architect database schemas, API specs, permissions matrix, and responsive UI wireframes.',
    techStack: ['PostgreSQL Schema', 'REST/gRPC Spec', 'UI Wireframes'],
  },
  {
    id: 4,
    label: 'Development',
    sublabel: 'Sprint Execution',
    icon: <Code2 className="w-5 h-5 text-[#4F7CFF]" />,
    detail: 'Clean modular code engineered using Next.js 15, TypeScript, Tailwind CSS, and cloud-native databases.',
    techStack: ['Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 5,
    label: 'Testing',
    sublabel: 'QA & Load Tests',
    icon: <TestTube2 className="w-5 h-5 text-[#7AE7FF]" />,
    detail: 'Automate unit tests, integration tests, concurrency checks, and extreme user edge case scenarios.',
    techStack: ['Jest', 'Playwright', 'Load Testing'],
  },
  {
    id: 6,
    label: 'Deployment',
    sublabel: 'Zero-Downtime Rollout',
    icon: <Rocket className="w-5 h-5 text-[#4F7CFF]" />,
    detail: 'Containerized deployment to isolated cloud infrastructure with automated migration scripts.',
    techStack: ['Docker', 'Vercel / AWS', 'CI/CD Pipelines'],
  },
  {
    id: 7,
    label: 'Continuous Support',
    sublabel: 'Monitoring & Scaling',
    icon: <ShieldCheck className="w-5 h-5 text-[#7AE7FF]" />,
    detail: 'Real-time telemetry, automated backups, SLA guarantees, and feature iteration sprints.',
    techStack: ['Sentry', 'Telemetry', 'SLA Guarantee'],
  },
];

export default function ArchitectureDiagram() {
  const [activeStep, setActiveStep] = useState<number>(3); // Default to System Design

  return (
    <section className="py-24 relative bg-[#090909] border-y border-white/[0.08] overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#7AE7FF]">
            <Terminal className="w-3.5 h-3.5" />
            <span>Architecture & Execution Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            How We Transform Complexity Into Systems.
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Our multi-layer engineering pipeline converts raw business requirements into mission-critical, enterprise-grade software.
          </p>
        </div>

        {/* Animated Flow Nodes (Desktop Horizontal & Mobile Vertical) */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-3 mb-12">
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <motion.div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                whileHover={{ scale: 1.02 }}
                className={`relative cursor-pointer p-4 rounded-xl transition-all duration-300 flex flex-col justify-between border ${
                  isActive
                    ? 'bg-[#12141a] border-[#4F7CFF] shadow-[0_0_20px_rgba(79,124,255,0.2)] text-white'
                    : 'glass-card border-white/10 hover:border-white/20 text-white/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-white/40">0{step.id}</span>
                    <div
                      className={`p-1.5 rounded-lg transition-colors ${
                        isActive ? 'bg-[#4F7CFF]/20 text-[#7AE7FF]' : 'bg-white/05'
                      }`}
                    >
                      {step.icon}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-0.5 tracking-tight">
                    {step.label}
                  </h4>
                  <p className="text-[11px] font-mono text-white/40">{step.sublabel}</p>
                </div>

                {/* Animated Arrow Connector for desktop */}
                {step.id < steps.length && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="w-2 h-2 rotate-45 border-t border-r border-[#4F7CFF]" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Selected Step Detail Inspector Panel */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 bg-[#0d0e12]/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="tech-tag">Stage 0{activeStep} Active Inspector</span>
              <span className="text-xs font-mono text-[#7AE7FF] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Operational Standard
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              {steps[activeStep - 1].label}: {steps[activeStep - 1].sublabel}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              {steps[activeStep - 1].detail}
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-auto shrink-0">
            <span className="text-xs font-mono text-white/40">Core Methodology</span>
            <div className="flex flex-wrap gap-2">
              {steps[activeStep - 1].techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 text-[#7AE7FF] text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
