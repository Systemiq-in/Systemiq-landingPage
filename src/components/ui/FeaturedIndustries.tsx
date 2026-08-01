'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Factory, Truck, ShoppingCart, Stethoscope, ChevronRight } from 'lucide-react';

const industries = [
  {
    title: 'Manufacturing & Plants',
    icon: <Factory className="w-5 h-5 text-[#0071E3]" />,
    desc: 'Raw material batch tracking, machine maintenance logs, shift card management, and automated GRNs.',
  },
  {
    title: 'Logistics & Warehousing',
    icon: <Truck className="w-5 h-5 text-[#0071E3]" />,
    desc: 'Barcode scanning, multi-bin allocation, vehicle loading manifests, and inter-branch stock transfers.',
  },
  {
    title: 'Wholesale & B2B Distribution',
    icon: <ShoppingCart className="w-5 h-5 text-[#0071E3]" />,
    desc: '24/7 dealer ordering portals, tier pricing matrix, automated credit holds, and Tally Prime voucher posting.',
  },
  {
    title: 'Healthcare & Pharma',
    icon: <Stethoscope className="w-5 h-5 text-[#0071E3]" />,
    desc: 'FEFO/FIFO batch expiry tracking, drug license compliance validation, and distributor portals.',
  },
];

export default function FeaturedIndustries() {
  return (
    <section className="py-16 lg:py-20 bg-transparent border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
              Vertical Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Industries We Serve.
            </h2>
          </div>
          <Link
            href="/industries"
            className="text-xs sm:text-sm font-semibold text-[#0071E3] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>View All Industries</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#13151A]/80 rounded-3xl p-6 border border-white/[0.04] hover:border-[#0071E3]/40 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#090A0C] flex items-center justify-center mb-4 border border-white/[0.08]">
                  {ind.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {ind.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-normal mt-2">
                  {ind.desc}
                </p>
              </div>

              <Link
                href="/industries"
                className="text-xs font-semibold text-[#0071E3] hover:underline flex items-center gap-1 pt-3 border-t border-white/[0.06]"
              >
                <span>Read Blueprint</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
