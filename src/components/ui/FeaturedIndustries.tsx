'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Factory,
  Truck,
  ShoppingBag,
  Plane,
  HeartPulse,
  HardHat,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';

const industries = [
  {
    name: 'Manufacturing',
    slug: 'manufacturing',
    icon: <Factory className="w-6 h-6 text-[#7AE7FF]" />,
    description: 'BOM tracking, machine floor scheduling, raw material ERPs, and quality control logs.',
    useCases: ['Shop Floor Control', 'BOM Calculation', 'Machine Maintenance'],
  },
  {
    name: 'Distribution & Wholesale',
    slug: 'distribution',
    icon: <Truck className="w-6 h-6 text-[#4F7CFF]" />,
    description: 'Multi-warehouse stock sync, B2B dealer order portals, and fleet dispatch manifests.',
    useCases: ['Route Optimization', 'B2B Dealer Hub', 'Batch Traceability'],
  },
  {
    name: 'Retail & E-Commerce',
    slug: 'retail',
    icon: <ShoppingBag className="w-6 h-6 text-[#7AE7FF]" />,
    description: 'Omnichannel inventory integration, POS sync, loyalty engines, and automated billing.',
    useCases: ['POS Centralization', 'Live Stock Sync', 'Returns Processing'],
  },
  {
    name: 'Travel & Logistics',
    slug: 'travel',
    icon: <Plane className="w-6 h-6 text-[#4F7CFF]" />,
    description: 'Booking engine portals, itinerary automation, special fare inventory, and supplier sync.',
    useCases: ['Itinerary Engine', 'PNR Integration', 'Agent Allocation'],
  },
  {
    name: 'Healthcare & Pharma',
    slug: 'healthcare',
    icon: <HeartPulse className="w-6 h-6 text-[#7AE7FF]" />,
    description: 'HIPAA/compliance stock logs, batch expiration alerts, sample tracking, and billing.',
    useCases: ['Batch Expiration', 'Sample Log Matrix', 'Compliance Reporting'],
  },
  {
    name: 'Construction & Contracting',
    slug: 'construction',
    icon: <HardHat className="w-6 h-6 text-[#4F7CFF]" />,
    description: 'Site material requisitions, contractor billing, equipment dispatch, and project costing.',
    useCases: ['Site Requisition', 'Equipment Track', 'Sub-contractor Portal'],
  },
  {
    name: 'Education & Training',
    slug: 'education',
    icon: <GraduationCap className="w-6 h-6 text-[#7AE7FF]" />,
    description: 'Student admission portals, fee billing automation, attendance, and exam grading systems.',
    useCases: ['Fee Collection', 'Student Matrix', 'Certification Engine'],
  },
];

export default function FeaturedIndustries() {
  return (
    <section className="py-24 bg-[#090909] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="tech-tag">Industry Vertical Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Built for High-Complexity Domains.
            </h2>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#7AE7FF] hover:text-white transition"
          >
            <span>Explore All Industry Architectures</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Link
                href={`/industries#${ind.slug}`}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between h-full border border-white/10 hover:border-[#4F7CFF]/50 transition group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#4F7CFF]/50 group-hover:bg-[#4F7CFF]/10 flex items-center justify-center mb-5 transition-colors">
                    {ind.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#7AE7FF] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-4">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/05 space-y-1.5">
                  {ind.useCases.map((uc) => (
                    <span
                      key={uc}
                      className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-white/05 text-white/50 mr-1.5 mb-1"
                    >
                      {uc}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
