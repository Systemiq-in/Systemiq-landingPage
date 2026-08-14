'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  ShieldCheck,
  Cpu,
  Code2,
  MessageSquare,
  ArrowRight,
  Linkedin,
} from 'lucide-react';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';
import { site } from '@/content/site';
import { systems } from '@/content/products';

const principles = [
  {
    title: 'Systems-first thinking',
    description:
      'I do not build band-aids. Before writing code I map how your operation actually runs, then engineer around the bottleneck rather than around the request.',
    icon: <Cpu className="h-5 w-5 text-[#0071E3]" />,
  },
  {
    title: 'You talk to the engineer',
    description:
      'There is no account manager relaying messages. The person who scopes your system is the person who architects it and the person who writes it.',
    icon: <MessageSquare className="h-5 w-5 text-[#0071E3]" />,
  },
  {
    title: 'Start from something that works',
    description:
      'Most builds begin from one of the systems already in the lineup, fitted to your business. Starting from a running architecture is why delivery is measured in weeks.',
    icon: <ShieldCheck className="h-5 w-5 text-[#0071E3]" />,
  },
  {
    title: 'You own everything',
    description:
      'Source code, database schemas and infrastructure are handed over in full. No licence fees on your own software, and no dependency on me to keep running it.',
    icon: <Code2 className="h-5 w-5 text-[#0071E3]" />,
  },
];

export default function AboutPage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const liveCount = systems.filter((s) => s.status === 'live').length;

  return (
    <div className="min-h-screen bg-transparent pb-20 pt-32 text-white/90 antialiased">
      <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
          className="max-w-3xl space-y-5"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-[#0071E3]">
            About {site.name}
          </span>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-6xl">
            One engineer. Whole systems.
          </h1>
          <p className="text-base font-normal leading-relaxed text-white/55 sm:text-lg">
            {site.name} is an independent software practice run by{' '}
            <span className="font-semibold text-white">{site.operator.name}</span>. I build the
            operational software that growing businesses run on — billing, inventory, dealer
            portals, commerce and asset tracking — and I build it end to end, from the database
            schema to the screen your staff use every day.
          </p>
        </motion.div>

        {/* Operator card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
          className="overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[#13151A]/80"
        >
          <div className="grid grid-cols-1 gap-10 p-8 sm:p-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#0071E3] to-[#00A3FF] text-3xl font-extrabold text-white shadow-[0_8px_32px_rgba(0,113,227,0.3)]">
                {site.operator.name.charAt(0)}
              </div>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-white">
                {site.operator.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-[#00A3FF]">{site.operator.role}</p>
              <p className="mt-1 text-sm text-white/45">{site.contact.location}</p>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-white/60 lg:col-span-8 sm:text-base">
              <p>
                I work the way a good in-house engineer would, except you only pay for the build.
                That means sitting with your team, learning the vocabulary your business already
                uses, and shipping something your staff can operate without a manual.
              </p>
              <p>
                Over time I have built and kept a library of{' '}
                <span className="font-semibold text-white">{systems.length} operational systems</span>
                {' '}— {liveCount} of them running in production today. New work usually starts from
                one of those rather than an empty repository, which is why a system that would
                normally take a quarter takes a few weeks.
              </p>
              <p>
                Being one person is the point, not a limitation to apologise for. Nothing gets lost
                between a salesperson, a project manager and a developer, because there is only one
                of me and I am all three.
              </p>

              <div className="flex flex-wrap gap-3 pt-3">
                <Link
                  href="/case-studies"
                  className="active-scale inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/[0.08]"
                >
                  <span>See the system lineup</span>
                  <ArrowRight className="h-4 w-4 text-white/50" />
                </Link>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="active-scale inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10"
                >
                  <Linkedin className="h-4 w-4 text-[#0A66C2]" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="active-scale inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/70 transition-all hover:text-white"
                >
                  {site.contact.email}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <div className="space-y-4 rounded-3xl border border-white/[0.04] bg-[#13151A]/80 p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/[0.06] text-[#0071E3]">
              <Target className="h-5 w-5" />
            </div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
              What I am trying to do
            </span>
            <p className="text-2xl font-extrabold tracking-tight text-white">
              &ldquo;{site.tagline}&rdquo;
            </p>
            <p className="text-sm font-normal leading-relaxed text-white/50">
              Replace the spreadsheets, WhatsApp threads and double entry that hold a growing
              business together with software built around how it actually operates.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/[0.04] bg-[#13151A]/80 p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/[0.06] text-[#0071E3]">
              <Eye className="h-5 w-5" />
            </div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
              Where this is going
            </span>
            <p className="text-2xl font-extrabold tracking-tight text-white">
              A system for every operation.
            </p>
            <p className="text-sm font-normal leading-relaxed text-white/50">
              Every project adds another proven architecture to the lineup. The library grows, and
              each new client starts further ahead than the last one did.
            </p>
          </div>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
          className="space-y-8"
        >
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#0071E3]">
              How I work
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Four things I hold to.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((v) => (
              <div
                key={v.title}
                className="space-y-3 rounded-3xl border border-white/[0.04] bg-[#13151A]/80 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/[0.06]">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold tracking-tight text-white">{v.title}</h3>
                <p className="text-xs font-normal leading-relaxed text-white/50">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
          className="space-y-6 rounded-3xl border border-white/[0.04] bg-[#13151A]/80 p-10 text-center sm:p-14"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Tell me what is slowing you down.
          </h2>
          <p className="mx-auto max-w-xl text-base font-normal text-white/50">
            A short call, no charge. I will map your current process and tell you honestly whether
            software is the answer.
          </p>
          <button
            onClick={() => setIsAuditModalOpen(true)}
            className="active-scale rounded-full bg-[#0071E3] px-8 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0077ED]"
          >
            Book a workflow audit
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
