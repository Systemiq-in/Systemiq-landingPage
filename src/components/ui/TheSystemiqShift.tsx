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
      className="py-24 lg:py-32 bg-transparent relative overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
            The Paradigm Shift
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tighter leading-tight">
            Stop forcing your business into rigid, generic software.
          </h2>
          <p className="text-lg sm:text-2xl text-white/50 font-medium leading-relaxed">
            Off-the-shelf tools, fragmented apps, and endless spreadsheets drain your momentum. We build the exact system your workflow actually needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-stretch">
          {/* The Old Way */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="rounded-[2.5rem] bg-[#13151A]/80 border border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.2)] p-10 sm:p-14 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/30" />
            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-3 text-red-500 font-semibold tracking-wide uppercase text-sm">
                <AlertCircle className="w-5 h-5" />
                The Old Way
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight">Fragmented & Manual</h3>
              <ul className="space-y-6">
                {[
                  'Dozens of spreadsheets crashing with too much data.',
                  'Paying per-user seats for 5 different SaaS products.',
                  'Manual data entry between Tally, CRM, and Inventory.',
                  'No real-time visibility into branch operations.',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/60 text-lg font-medium leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* The Old Way - Glitch/Broken Graphics */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-64 h-64 overflow-hidden">
              <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,90 L30,50 L50,70 L90,10" fill="none" stroke="#FF0000" strokeWidth="2" strokeDasharray="5,5" />
                <circle cx="30" cy="50" r="3" fill="#FF0000" />
                <circle cx="50" cy="70" r="3" fill="#FF0000" />
                <circle cx="90" cy="10" r="3" fill="#FF0000" />
                <text x="40" y="40" fill="#FF0000" fontSize="8" transform="rotate(-15 40,40)">ERR_SYNC</text>
                <text x="60" y="80" fill="#FF0000" fontSize="8" transform="rotate(15 60,80)">TIMEOUT</text>
              </svg>
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

            {/* The Systemiq Way - Glowing Data Flow Graphics */}
            <div className="absolute right-0 bottom-0 opacity-30 pointer-events-none w-80 h-80 overflow-hidden">
              <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                {/* Background track */}
                <path d="M0,80 Q25,80 50,50 T100,20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                <path d="M0,60 Q25,60 50,30 T100,0" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                
                {/* Animated Flowing Line */}
                <motion.path 
                  d="M0,80 Q25,80 50,50 T100,20" 
                  fill="none" 
                  stroke="#FFFFFF" 
                  strokeWidth="3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
                  style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))" }}
                />
                
                {/* Connection Nodes */}
                <circle cx="50" cy="50" r="4" fill="#FFFFFF" className="animate-pulse" />
                <circle cx="100" cy="20" r="4" fill="#FFFFFF" className="animate-pulse" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
