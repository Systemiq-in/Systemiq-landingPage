'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowRight, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const cases = [
  {
    id: 'manufacturing-erp',
    title: 'Custom ERP for High-Precision Manufacturing',
    client: 'Apex Metal Products (120 Employees)',
    category: 'Manufacturing ERP',
    metrics: [
      { label: 'Manual Order Processing', value: '-85%' },
      { label: 'Sprint Deployment', value: '4 Sprints' },
      { label: 'BOM Calculation Speed', value: 'Instant' },
    ],
    summary:
      'Replaced 14 disconnected Excel workbooks with a unified custom ERP system managing raw material stock, shop floor scheduling, and GST billing.',
    tags: ['Next.js', 'PostgreSQL', 'Tally Sync', 'Barcode Scanner'],
  },
  {
    id: 'dealer-portal',
    title: 'B2B Dealer Ordering & Credit Limit Portal',
    client: 'Nova Wholesale Hardware (350+ Dealers)',
    category: 'Wholesale B2B',
    metrics: [
      { label: 'Order Processing Speed', value: '10x Faster' },
      { label: 'Credit Enforcement Drift', value: '0%' },
      { label: 'Monthly B2B Volume', value: '$4.2M' },
    ],
    summary:
      'Engineered a self-service dealer portal with live inventory view, automated credit tier checks, WhatsApp order confirmations, and direct Tally integration.',
    tags: ['TypeScript', 'WhatsApp API', 'Tally Prime', 'Tailwind'],
  },
  {
    id: 'inventory-automation',
    title: 'Multi-Warehouse Inventory & Dispatch Automation',
    client: 'Vanguard Logistics & Distribution',
    category: 'Supply Chain',
    metrics: [
      { label: 'Stock Reconciliation Time', value: '90 Min -> 2 Min' },
      { label: 'Mis-pick Error Rate', value: '0.02%' },
      { label: 'Active Warehouses', value: '4 Hubs' },
    ],
    summary:
      'Automated stock movement across 4 regional warehouses with QR-code scanning, real-time reorder triggers, and driver dispatch manifests.',
    tags: ['WebSockets', 'PWA Mobile Scan', 'PostgreSQL', 'Docker'],
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-24 bg-[#090909] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="tech-tag">Verified SME Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Case Studies & Proof.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#7AE7FF] hover:text-white transition"
          >
            <span>View Full Case Study Archive</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Three Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-7 border border-white/10 hover:border-[#4F7CFF]/50 transition flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#4F7CFF]/10 text-[#7AE7FF] border border-[#4F7CFF]/20">
                    {cs.category}
                  </span>
                  <span className="text-[11px] font-mono text-white/40">{cs.client}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#7AE7FF] transition-colors leading-snug">
                  {cs.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6">
                  {cs.summary}
                </p>

                {/* Metrics Box */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/05 mb-6 text-center">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <span className="text-sm sm:text-base font-bold font-mono text-white block">
                        {m.value}
                      </span>
                      <span className="text-[9px] font-mono text-white/40 block leading-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/05 mb-4">
                  {cs.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/05 text-white/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/case-studies#${cs.id}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-white/70 group-hover:text-[#7AE7FF] transition-colors"
                >
                  <span>Read Breakdown & System Metrics</span>
                  <ArrowRight className="w-3.5 h-3.5 -translate-x-1 group-hover:translate-x-0 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
