'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Layers, Timer } from 'lucide-react';
import { systems, lineupIntro, type SystemProduct } from '@/content/products';

/**
 * The system lineup.
 *
 * These are productised architectures, not case studies — so the card is built
 * to read like a spec sheet rather than a testimonial. The catalog code is the
 * organising device: it is the one place a number is honest here, because the
 * lineup genuinely is an indexed catalog.
 */

function StatusPill({ status }: { status: SystemProduct['status'] }) {
  const live = status === 'live';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
        live
          ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
          : 'border-[#0071E3]/25 bg-[#0071E3]/10 text-[#00A3FF]'
      }`}
    >
      <span className="relative flex h-1.5 w-1.5">
        {live && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        )}
        <span
          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
            live ? 'bg-emerald-400' : 'bg-[#00A3FF]'
          }`}
        />
      </span>
      {live ? 'In production' : 'Ready to deploy'}
    </span>
  );
}

function SystemCard({
  system,
  variant,
  index,
}: {
  system: SystemProduct;
  variant: 'compact' | 'full';
  index: number;
}) {
  const full = variant === 'full';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', bounce: 0, duration: 0.7, delay: (index % 4) * 0.07 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.06] bg-[#13151A]/80 p-7 transition-all duration-500 hover:border-[#0071E3]/35 hover:shadow-[0_12px_44px_rgba(0,113,227,0.14)] sm:p-8"
    >
      {/* Illuminated top edge on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0071E3] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {/* Ghosted catalog code */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -top-5 select-none text-[5.5rem] font-extrabold leading-none tracking-tighter text-white/[0.025] transition-colors duration-500 group-hover:text-[#0071E3]/[0.07]"
      >
        {system.code.split('-')[1]}
      </span>

      <div className="relative z-10 flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">
          {system.code}
        </span>
        <StatusPill status={system.status} />
      </div>

      <div className="relative z-10 mt-5">
        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-[1.75rem]">
          {system.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-[#00A3FF]">{system.category}</p>
      </div>

      <p className="relative z-10 mt-4 text-sm leading-relaxed text-white/55">
        {system.summary}
      </p>

      {full && (
        <>
          <div className="relative z-10 mt-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
              Modules
            </span>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {system.modules.map((m) => (
                <li
                  key={m}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[11px] font-medium text-white/60 transition-colors duration-300 group-hover:border-white/10 group-hover:text-white/75"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 mt-6 rounded-2xl border border-white/[0.05] bg-white/[0.015] p-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
              Tailored to you
            </span>
            <p className="mt-2 text-[13px] leading-relaxed text-white/55">
              {system.tailoring}
            </p>
          </div>

          <div className="relative z-10 mt-5 flex flex-wrap gap-1.5">
            {system.fits.map((f) => (
              <span
                key={f}
                className="rounded-full border border-[#0071E3]/15 bg-[#0071E3]/[0.07] px-2.5 py-1 text-[11px] font-medium text-white/60"
              >
                {f}
              </span>
            ))}
          </div>
        </>
      )}

      {/* Spec footer */}
      <div className="relative z-10 mt-auto flex items-center justify-between gap-4 border-t border-white/[0.06] pt-5 text-xs">
        <span className="inline-flex items-center gap-1.5 font-medium text-white/45">
          <Layers className="h-3.5 w-3.5 text-white/30" aria-hidden="true" />
          {system.modules.length} modules
        </span>
        <span className="inline-flex items-center gap-1.5 font-medium text-white/45">
          <Timer className="h-3.5 w-3.5 text-white/30" aria-hidden="true" />
          Live in {system.tailoringWeeks} weeks
        </span>
      </div>
    </motion.article>
  );
}

export default function SystemLineup({
  variant = 'compact',
  showHeading = true,
}: {
  variant?: 'compact' | 'full';
  showHeading?: boolean;
}) {
  const full = variant === 'full';
  const liveCount = systems.filter((s) => s.status === 'live').length;

  return (
    <section className="border-t border-white/[0.08] bg-transparent py-20 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
            className="max-w-3xl space-y-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00A3FF]" />
              {lineupIntro.eyebrow}
            </span>

            <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              {lineupIntro.heading}
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
              {lineupIntro.lead}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-white/45">
              <span>
                <strong className="font-semibold text-white">{systems.length}</strong> systems
              </span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span>
                <strong className="font-semibold text-white">{liveCount}</strong> in production today
              </span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span>Fitted to your operation, not rebuilt from scratch</span>
            </div>
          </motion.div>
        )}

        <div
          className={
            full
              ? 'grid grid-cols-1 gap-6 lg:grid-cols-2'
              : 'grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4'
          }
        >
          {systems.map((s, i) => (
            <SystemCard key={s.code} system={s} variant={variant} index={i} />
          ))}
        </div>

        {/* Closing strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', bounce: 0, duration: 0.7 }}
          className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-white/[0.06] bg-gradient-to-br from-[#0071E3]/[0.09] to-transparent p-8 sm:p-10 lg:flex-row lg:items-center"
        >
          <div className="max-w-xl space-y-2">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Nothing here fits? The parts still do.
            </h3>
            <p className="text-sm leading-relaxed text-white/55 sm:text-base">
              Authentication, billing, inventory, dispatch and document generation are already
              engineered and tested. A system we have not built yet is assembled from parts we
              have — not written from a blank file.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            {!full && (
              <Link
                href="/case-studies"
                className="active-scale inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:bg-white/[0.08]"
              >
                <span>See the full lineup</span>
                <ChevronRight className="h-4 w-4 text-white/50" />
              </Link>
            )}
            <Link
              href="/contact"
              className="active-scale inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
            >
              <span>Match my operation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
