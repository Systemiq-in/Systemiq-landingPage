'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  ShieldCheck,
  Cpu,
  Users,
  Award,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Code2,
} from 'lucide-react';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

const values = [
  {
    title: 'Systems-First Thinking',
    description: 'We do not build band-aids. We dissect your entire operation and engineer holistic systems that remove friction across teams.',
    icon: <Cpu className="w-5 h-5 text-[#7AE7FF]" />,
  },
  {
    title: 'Zero Agency Bloat',
    description: 'No account managers passing messages. You work directly with principal architects and senior engineers who build your software.',
    icon: <ShieldCheck className="w-5 h-5 text-[#4F7CFF]" />,
  },
  {
    title: 'Fixed Sprint Shipping',
    description: 'Predictable, continuous delivery. We ship production software in 2 to 4-week sprint cycles with strict milestone guarantees.',
    icon: <Calendar className="w-5 h-5 text-[#7AE7FF]" />,
  },
  {
    title: 'Complete Ownership',
    description: 'You own 100% of your source code, data schemas, and intellectual property. No vendor lock-in or subscription traps.',
    icon: <Code2 className="w-5 h-5 text-[#4F7CFF]" />,
  },
];

const studioTimeline = [
  {
    year: '2023',
    title: 'Studio Foundation',
    desc: 'Founded by senior software architects frustrated by off-the-shelf ERP bloat and agency overhead for growing SMEs.',
  },
  {
    year: '2024',
    title: 'Builder Network Launch',
    desc: 'Pioneered our senior-mentored student engineering network, delivering high-speed sprints while training elite developers.',
  },
  {
    year: '2025',
    title: '25+ SME Systems Deployed',
    desc: 'Engineered custom manufacturing ERPs, wholesale portals, and inventory systems handling over $50M in annual transactions.',
  },
  {
    year: '2026',
    title: 'Enterprise Studio Scaling',
    desc: 'Expanding our specialized SME studio to offer multi-region cloud deployments, real-time Tally Prime integrations, and AI workflow copilots.',
  },
];

const teamPlaceholders = [
  {
    name: 'Mohamed Ramzy',
    role: 'Principal System Architect',
    bio: '10+ years architecting distributed backend systems and enterprise ERPs for mid-market industrial firms.',
  },
  {
    name: 'Senior Architect Team',
    role: 'Core Engineering Leads',
    bio: 'Lead architects supervising code reviews, database schema design, and cloud infrastructure deployment.',
  },
  {
    name: 'Systemiq Builder Network',
    role: 'Engineers & Developers',
    bio: 'Top 5% engineering students trained under principal mentorship to build production UI and API modules.',
  },
];

export default function AboutPage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090909] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#7AE7FF]">
            <Terminal className="w-3.5 h-3.5" />
            <span>About Systemiq Technologies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            We exist to engineer software that <span className="text-gradient">scales businesses.</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Systemiq is NOT a web design agency. We are a specialized Business Systems Studio that engineers custom software systems, ERPs, and internal operational portals for growing SMEs.
          </p>
        </div>

        {/* Mission & Vision Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel rounded-2xl p-8 border border-white/10 space-y-4 bg-gradient-to-br from-[#111218] to-[#090909]">
            <div className="w-10 h-10 rounded-xl bg-[#4F7CFF]/15 border border-[#4F7CFF]/30 text-[#7AE7FF] flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-xs font-mono text-[#7AE7FF] uppercase tracking-widest">Our Mission</h2>
            <p className="text-2xl font-bold text-white tracking-tight">
              &ldquo;Engineering systems that scale businesses.&rdquo;
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              To eliminate software friction for mid-market businesses by replacing brittle spreadsheets and generic tools with tailored, high-performance software systems.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-8 border border-white/10 space-y-4 bg-gradient-to-br from-[#111218] to-[#090909]">
            <div className="w-10 h-10 rounded-xl bg-[#7AE7FF]/15 border border-[#7AE7FF]/30 text-[#7AE7FF] flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="text-xs font-mono text-[#7AE7FF] uppercase tracking-widest">Our Vision</h2>
            <p className="text-2xl font-bold text-white tracking-tight">
              The Premier Systems Studio for SMEs.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              To become the global standard for business software craftsmanship—where every growing company operates on clean, custom-built software infrastructure.
            </p>
          </div>
        </div>

        {/* Studio Values */}
        <div className="space-y-12">
          <div>
            <span className="tech-tag">Engineering Ethos</span>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-2">
              Our Core Principles.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-card rounded-xl p-6 border border-white/10 space-y-3">
                <div className="p-2.5 w-max rounded-lg bg-white/05 border border-white/10">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{v.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Timeline */}
        <div className="space-y-12">
          <div>
            <span className="tech-tag">Studio History</span>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-2">
              Our Evolution.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {studioTimeline.map((item) => (
              <div key={item.year} className="glass-card rounded-xl p-6 border border-white/10 space-y-3 relative">
                <span className="text-2xl font-bold font-mono text-[#7AE7FF]">{item.year}</span>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Placeholders */}
        <div className="space-y-12">
          <div>
            <span className="tech-tag">Leadership & Network</span>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-2">
              Architects & Engineers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamPlaceholders.map((member) => (
              <div key={member.name} className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4F7CFF] to-[#7AE7FF] p-[1px]">
                  <div className="w-full h-full bg-[#0d0e12] rounded-full flex items-center justify-center text-white font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <span className="text-xs font-mono text-[#7AE7FF]">{member.role}</span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="glass-panel rounded-2xl p-8 sm:p-12 border border-white/15 text-center space-y-6 bg-gradient-to-r from-[#0d0e12] via-[#11131c] to-[#0d0e12]">
          <h2 className="text-3xl font-bold text-white">Work With Systemiq Studio</h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto">
            Ready to replace manual spreadsheets with engineered software systems?
          </p>
          <button
            onClick={() => setIsAuditModalOpen(true)}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#4F7CFF] to-[#7AE7FF] text-white font-semibold text-sm hover:opacity-90 transition shadow-lg"
          >
            Book Free Workflow Audit
          </button>
        </div>
      </div>

      <WorkflowAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
