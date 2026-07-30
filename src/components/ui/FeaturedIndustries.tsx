'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Factory, Truck, ShoppingCart, Stethoscope, Building2, ArrowRight } from 'lucide-react';

const industries = [
  {
    title: 'Manufacturing & Plants',
    icon: <Factory className="w-5 h-5 text-blue-400" />,
    desc: 'Raw material batch tracking, machine maintenance logs, shift card management, and automated GRNs.',
  },
  {
    title: 'Logistics & Warehousing',
    icon: <Truck className="w-5 h-5 text-indigo-400" />,
    desc: 'Barcode scanning, multi-bin allocation, vehicle loading manifests, and inter-branch stock transfers.',
  },
  {
    title: 'Wholesale & B2B Distribution',
    icon: <ShoppingCart className="w-5 h-5 text-blue-400" />,
    desc: '24/7 dealer ordering portals, tier pricing matrix, automated credit holds, and Tally Prime voucher posting.',
  },
  {
    title: 'Healthcare & Pharma',
    icon: <Stethoscope className="w-5 h-5 text-indigo-400" />,
    desc: 'FEFO/FIFO batch expiry tracking, drug license compliance validation, and distributor portals.',
  },
];

export default function FeaturedIndustries() {
  return (
    <section className="py-14 sm:py-16 bg-[#090D14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-bold text-blue-400">
              <Building2 className="w-3.5 h-3.5" />
              <span>Tailored Industry Modules</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Industries We Serve.
            </h2>
          </div>
          <Link
            href="/industries"
            className="text-xs sm:text-sm font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition shrink-0 font-mono"
          >
            <span>View All Vertical Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#131927] rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3">
                  {ind.icon}
                </div>
                <h3 className="text-lg font-extrabold text-white tracking-tight">
                  {ind.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal mt-2">
                  {ind.desc}
                </p>
              </div>

              <Link
                href="/industries"
                className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 pt-3 border-t border-slate-800 font-mono"
              >
                <span>Read Industry Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
