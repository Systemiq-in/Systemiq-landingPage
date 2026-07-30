'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function TheSystemiqShift() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scaleImg = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <section 
      ref={containerRef}
      className="py-24 lg:py-32 bg-transparent relative overflow-hidden border-t border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
            The Paradigm Shift
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#1D1D1F] tracking-tighter leading-tight">
            Stop forcing your business into rigid, generic software.
          </h2>
          <p className="text-lg sm:text-2xl text-[#86868B] font-medium leading-relaxed">
            Off-the-shelf tools, fragmented apps, and endless spreadsheets drain your momentum. We build the exact system your workflow actually needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-stretch">
          {/* The Old Way */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="rounded-[2.5rem] bg-[#FAFAFA] border border-black/[0.06] p-10 sm:p-14 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/20" />
            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-3 text-red-500 font-semibold tracking-wide uppercase text-sm">
                <AlertCircle className="w-5 h-5" />
                The Old Way
              </div>
              <h3 className="text-3xl font-bold text-[#1D1D1F] tracking-tight">Fragmented & Manual</h3>
              <ul className="space-y-6">
                {[
                  'Dozens of spreadsheets crashing with too much data.',
                  'Paying per-user seats for 5 different SaaS products.',
                  'Manual data entry between Tally, CRM, and Inventory.',
                  'No real-time visibility into branch operations.',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#86868B] text-lg font-medium leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* The Systemiq Way */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="rounded-[2.5rem] bg-[#0071E3] text-white p-10 sm:p-14 flex flex-col justify-between overflow-hidden relative group shadow-[0_20px_60px_rgba(0,113,227,0.2)]"
          >
            {/* Ambient Background Glow inside the blue card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-3 text-white/80 font-semibold tracking-wide uppercase text-sm">
                <CheckCircle2 className="w-5 h-5 text-white" />
                The Systemiq Way
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight">Unified & Automated</h3>
              <ul className="space-y-6">
                {[
                  'One central platform engineered exactly for your workflow.',
                  'Zero subscription per-user seat fees. You own it.',
                  'Direct Tally Prime and WhatsApp API automation.',
                  'Live, instant metrics across all your warehouses and stores.',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/90 text-lg font-medium leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-10 relative z-10">
              <span className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-4 transition-all cursor-pointer">
                See How We Build It <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
