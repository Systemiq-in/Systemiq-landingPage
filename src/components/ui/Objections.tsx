'use client';

import { motion } from 'framer-motion';
import { site } from '@/content/site';

/**
 * The questions people actually ask before hiring an independent engineer.
 *
 * This section exists to carry content that appears nowhere else on the site.
 * It deliberately does not restate what gets built (the lineup), what it costs
 * in time (the facts strip), or how the software is put together (the
 * architecture section) — it answers the commercial worries that stop someone
 * getting in touch.
 *
 * Emits FAQPage structured data, which is eligible for rich results on
 * question-shaped searches.
 */

const faqs = [
  {
    q: 'How is this priced?',
    a: 'A fixed price per milestone, quoted after the workflow audit once the scope is actually known. Not hourly, and no per-seat licence on software you own.',
  },
  {
    q: 'You are one person. What if you are not around later?',
    a: 'You get the source code, the database schemas, and infrastructure running in your own accounts — not mine. Nothing is locked to me, so any competent developer can pick it up. I stay on for support because clients want that, not because you would be stranded without it.',
  },
  {
    q: 'Will my team have to change how they work?',
    a: 'No. The system is shaped around the process you already run, using the words your staff already use for things. If a workflow genuinely should change, I will say so and explain why — but that is your call, not a condition.',
  },
  {
    q: 'What happens to the data we already have?',
    a: 'It comes with you. Spreadsheets, Tally exports and existing records are migrated during the build, so you start on day one with your real history rather than an empty database.',
  },
  {
    q: 'What if we need changes after launch?',
    a: 'Expected — operations change. Small adjustments are covered during the handover period; anything larger is quoted the same way as the original build. Some clients keep a monthly retainer, most call when they need something.',
  },
  {
    q: 'How do we start?',
    a: `A free 45-minute call where I map your current process and name the bottlenecks. You keep that write-up whether or not you hire me. Replies come ${site.contact.responseTime}.`,
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Objections() {
  return (
    <section className="border-t border-white/[0.08] bg-transparent py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#00A3FF]">
            Before you get in touch
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-5xl">
            The questions people actually ask.
          </h2>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-white/[0.08] pt-6"
            >
              <dt className="text-lg font-bold leading-snug tracking-[-0.01em] text-white">
                {f.q}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-white/55 sm:text-base">{f.a}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
