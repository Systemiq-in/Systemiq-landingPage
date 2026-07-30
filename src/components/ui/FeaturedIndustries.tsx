'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Factory, Truck, ShoppingCart, Stethoscope, Building2, ArrowRight } from 'lucide-react';

const industries = [
  {
    title: 'Manufacturing & Plants',
    icon: <Factory className="w-6 h-6 text-blue-600" />,
    desc: 'Raw material batch tracking, machine maintenance logs, shift card management, and automated GRNs.',
  },
  {
    title: 'Logistics & Warehousing',
    icon: <Truck className="w-6 h-6 text-indigo-600" />,
    desc: 'Barcode scanning, multi-bin allocation, vehicle loading manifests, and inter-branch stock transfers.',
  },
  {
    title: 'Wholesale & B2B Distribution',
    icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
    desc: '24/7 dealer ordering portals, tier pricing matrix, automated credit holds, and Tally Prime voucher posting.',
  },
  {
    title: 'Healthcare & Pharma',
    icon: <Stethoscope className="w-6 h-6 text-indigo-600" />,
    desc: 'FEFO/FIFO batch expiry tracking, drug license compliance validation, and distributor portals.',
  },
];

export default function FeaturedIndustries() {
  return (
    <section className="py-24 bg-[#FAFAFA] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-600">
              <Building2 className="w-3.5 h-3.5" />
              <span>Tailored Industry Modules</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Industries We Serve.
            </h2>
          </div>
          <Link
            href="/industries"
            className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition"
          >
            <span>View All Vertical Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-500 shadow-md hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  {ind.icon}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  {ind.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mt-2">
                  {ind.desc}
                </p>
              </div>

              <Link
                href="/industries"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 pt-4 border-t border-slate-100"
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
