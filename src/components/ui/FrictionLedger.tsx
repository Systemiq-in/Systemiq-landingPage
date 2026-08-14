'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { systems } from '@/content/products';

/**
 * The problem, as a ledger.
 *
 * Operations people read ledgers, so the section is one: the symptom on the
 * left, what it actually costs on the right. Each row carries the system from
 * the lineup that solves it, which makes the list a router into the products
 * rather than decoration — the structure encodes real information.
 *
 * Deliberately not a red-card/blue-card "old way vs new way" comparison.
 */

const rows = [
  {
    symptom: 'Stock lives in three spreadsheets',
    cost: 'Overselling, dead inventory, and a physical count at the end of every month.',
    system: 'SYS-02',
  },
  {
    symptom: 'Orders arrive on WhatsApp',
    cost: 'Nothing is searchable, nothing is auditable, and it all sits on one person’s phone.',
    system: 'SYS-03',
  },
  {
    symptom: 'Invoices get typed twice',
    cost: 'Entry errors that only surface at the year-end audit, when they are expensive.',
    system: 'SYS-01',
  },
  {
    symptom: 'Dealers ring to ask what is in stock',
    cost: 'Your team answers the same question all day instead of selling.',
    system: 'SYS-03',
  },
  {
    symptom: 'Reports are assembled by hand',
    cost: 'You make decisions on numbers that are already a week old.',
    system: 'SYS-01',
  },
  {
    symptom: 'Equipment goes out and does not come back',
    cost: 'No record of who has what, what condition it left in, or when it was due.',
    system: 'SYS-05',
  },
];

const byCode = new Map(systems.map((s) => [s.code, s]));

export default function FrictionLedger() {
  return (
    <section className="relative border-t border-white/[0.08] bg-transparent py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Thesis */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00A3FF]">
                The problem
              </span>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-5xl">
                Nothing is broken.
                <span className="mt-1 block text-white/35">Everything is manual.</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/55 sm:text-lg">
                Every tool you own works fine on its own. They just don’t talk to each other, and
                the gap between them is where the cost lives.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-white/40">
                Each of these already has a system built for it.
              </p>
            </div>
          </div>

          {/* Ledger */}
          <dl className="lg:col-span-8">
            {rows.map((row, i) => {
              const system = byCode.get(row.system);
              return (
                <motion.div
                  key={row.symptom}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href="/case-studies"
                    className="group relative flex flex-col gap-3 border-t border-white/[0.08] py-6 pl-5 transition-colors duration-500 last:border-b hover:border-white/20 sm:flex-row sm:items-baseline sm:gap-8 sm:py-7 sm:pl-7"
                  >
                    {/* Edge light */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-full w-px bg-white/10 transition-colors duration-500 group-hover:bg-gradient-to-b group-hover:from-[#0071E3] group-hover:to-[#00A3FF]"
                    />

                    <dt className="text-lg font-semibold leading-snug tracking-[-0.01em] text-white sm:w-[42%] sm:shrink-0">
                      {row.symptom}
                    </dt>

                    <dd className="flex-1 text-sm leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-white/70 sm:text-base">
                      {row.cost}
                    </dd>

                    {system && (
                      <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-white/45 transition-all duration-500 group-hover:border-[#0071E3]/50 group-hover:bg-[#0071E3]/10 group-hover:text-[#00A3FF]">
                        {system.name}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </span>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
