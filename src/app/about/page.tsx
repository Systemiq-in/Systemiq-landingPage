'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  ShieldCheck,
  Cpu,
  Calendar,
  Code2,
} from 'lucide-react';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

const values = [
  {
    title: 'Systems-First Thinking',
    description: 'We do not build band-aids. We dissect your entire operation and engineer holistic software systems that remove friction across teams.',
    icon: <Cpu className="w-5 h-5 text-[#0071E3]" />,
  },
  {
    title: 'Zero Agency Bloat',
    description: 'No account managers passing messages. You work directly with principal architects and senior engineers who build your software.',
    icon: <ShieldCheck className="w-5 h-5 text-[#0071E3]" />,
  },
  {
    title: 'Fixed Sprint Shipping',
    description: 'Predictable, continuous delivery. We ship production software in 2 to 4-week sprint cycles with strict milestone guarantees.',
    icon: <Calendar className="w-5 h-5 text-[#0071E3]" />,
  },
  {
    title: 'Complete Ownership',
    description: 'You own 100% of your source code, data schemas, and intellectual property. No vendor lock-in or subscription traps.',
    icon: <Code2 className="w-5 h-5 text-[#0071E3]" />,
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
    desc: 'Pioneered our senior-mentored student engineering fellowship, delivering high-speed sprints while training elite developers.',
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
    role: 'Engineers & Fellows',
    bio: 'Top 5% engineering students trained under principal mentorship to build production UI and API modules.',
  },
];

export default function AboutPage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-white/90 pt-32 pb-20 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
            About Systemiq Technologies
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Software That Scales Businesses.
          </h1>
          <p className="text-base sm:text-lg text-white/50 leading-relaxed font-normal">
            Systemiq is a specialized Business Systems Studio that engineers custom software systems, ERPs, and internal operational portals for growing SMEs.
          </p>
        </motion.div>

        {/* Mission & Vision Split */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", bounce: 0, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-[#13151A]/80 rounded-3xl p-8 border border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-transparent text-[#0071E3] flex items-center justify-center border border-white/[0.06]">
              <Target className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider block">Our Mission</span>
            <p className="text-2xl font-extrabold text-white tracking-tight">
              &ldquo;Engineering systems that scale businesses.&rdquo;
            </p>
            <p className="text-sm text-white/50 leading-relaxed font-normal">
              To eliminate software friction for mid-market businesses by replacing brittle spreadsheets and generic tools with tailored, high-performance software systems.
            </p>
          </div>

          <div className="bg-[#13151A]/80 rounded-3xl p-8 border border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-transparent text-[#0071E3] flex items-center justify-center border border-white/[0.06]">
              <Eye className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider block">Our Vision</span>
            <p className="text-2xl font-extrabold text-white tracking-tight">
              The Premier Systems Studio for SMEs.
            </p>
            <p className="text-sm text-white/50 leading-relaxed font-normal">
              To become the global standard for business software craftsmanship—where every growing company operates on clean, custom-built software infrastructure.
            </p>
          </div>
        </motion.div>

        {/* Studio Values */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", bounce: 0, duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">Engineering Ethos</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Our Core Principles.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#13151A]/80 rounded-3xl p-6 border border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-transparent flex items-center justify-center border border-white/[0.06]">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">{v.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed font-normal">{v.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Studio Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", bounce: 0, duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">Studio Journey</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Our Evolution.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {studioTimeline.map((item) => (
              <div key={item.year} className="bg-[#13151A]/80 rounded-3xl p-6 border border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-2">
                <span className="text-2xl font-bold font-mono text-[#0071E3]">{item.year}</span>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Placeholders */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", bounce: 0, duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">Leadership & Network</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Architects & Engineers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamPlaceholders.map((member) => (
              <div key={member.name} className="bg-[#13151A]/80 rounded-3xl p-8 border border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#0071E3] text-white font-bold flex items-center justify-center text-lg shadow-sm">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <span className="text-xs font-semibold text-[#0071E3]">{member.role}</span>
                </div>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-normal">{member.bio}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", bounce: 0, duration: 0.8 }}
          className="bg-[#13151A]/80 rounded-3xl p-10 sm:p-14 border border-white/[0.04] text-center space-y-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Work With Systemiq Studio</h2>
          <p className="text-base text-white/50 max-w-xl mx-auto font-normal">
            Ready to replace manual spreadsheets with engineered software systems?
          </p>
          <button
            onClick={() => setIsAuditModalOpen(true)}
            className="active-scale px-8 py-4 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-sm transition shadow-sm"
          >
            Book Free Workflow Audit
          </button>
        </motion.div>
      </div>

      <WorkflowAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
