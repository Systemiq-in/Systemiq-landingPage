'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Boxes, Wrench, Rocket } from 'lucide-react';
import SystemLineup from '@/components/ui/SystemLineup';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';
import { systems } from '@/content/products';

const fitting = [
  {
    icon: Boxes,
    title: 'Pick the closest system',
    body: 'We match your operation against the lineup. Usually one architecture already covers eighty percent of what you need.',
  },
  {
    icon: Wrench,
    title: 'Fit it to your workflow',
    body: 'Your fields, documents, tax rules, roles and terminology replace the originals. The engineered core stays intact and stays tested.',
  },
  {
    icon: Rocket,
    title: 'Launch and extend',
    body: 'You go live in weeks. Anything genuinely specific to your business gets built on top of a system that is already running.',
  },
];

export default function SystemLineupPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const liveCount = systems.filter((s) => s.status === 'live').length;

  return (
    <div className="min-h-screen bg-transparent pt-32 text-white/90 antialiased">
      {/* Header */}
      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
          className="max-w-4xl space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            {liveCount} systems in production
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
            Built already.
            <br />
            <span className="bg-gradient-to-br from-white via-blue-100 to-[#00A3FF] bg-clip-text text-transparent">
              Waiting for your business.
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            Most software projects start with an empty repository and a six-month estimate. Ours
            start with a system that already works. Below is the full lineup — every one of them a
            real, running codebase we can fit to your operation.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="active-scale inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          >
            <span>Find my system</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        {/* How fitting works */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {fitting.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.7, delay: i * 0.08 }}
              className="rounded-[1.75rem] border border-white/[0.06] bg-[#13151A]/80 p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0071E3]/20 bg-[#0071E3]/10">
                <step.icon className="h-5 w-5 text-[#00A3FF]" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-lg font-bold text-white">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </header>

      {/* The lineup */}
      <div className="mt-8">
        <SystemLineup variant="full" />
      </div>

      <WorkflowAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultTopic="System lineup"
      />
    </div>
  );
}
