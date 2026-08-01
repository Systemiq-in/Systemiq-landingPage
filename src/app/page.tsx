'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import TrustedSection from '@/components/ui/TrustedSection';
import InteractiveWhatWeBuild from '@/components/ui/InteractiveWhatWeBuild';
import TheSystemiqShift from '@/components/ui/TheSystemiqShift';
import WhySystemiq from '@/components/ui/WhySystemiq';
import HowWeWork from '@/components/ui/HowWeWork';
import FeaturedIndustries from '@/components/ui/FeaturedIndustries';
import ArchitectureDiagram from '@/components/ui/ArchitectureDiagram';
import BuilderNetworkSection from '@/components/ui/BuilderNetworkSection';
import HomeCTA from '@/components/ui/HomeCTA';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

import HeroGraphics from '@/components/ui/HeroGraphics';

export default function HomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Subtle parallax for the main headline to create a cinematic feel
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-screen bg-transparent text-white/90 antialiased selection:bg-[#0071E3] selection:text-white">
      {/* ---------------- IMMERSIVE BRAND HERO ---------------- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-24">
        
        <HeroGraphics />

        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-auto mb-auto"
        >
          {/* Subtle Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/10 text-[11px] font-semibold text-white/90 tracking-wide shadow-[0_0_20px_rgba(0,113,227,0.15)] mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00A3FF]" />
            <span>The Premium Business Studio</span>
          </motion.div>

          {/* Monumental Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-white leading-[0.95] pb-2"
          >
            Software that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#00A3FF]">
              feels like magic.
            </span>
          </motion.h1>

          {/* Elegant Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-xl sm:text-2xl lg:text-3xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed tracking-tight"
          >
            Systemiq engineers bespoke software systems that silently orchestrate your entire business. 
            No spreadsheets. No chaos. Just clarity.
          </motion.p>

          {/* Refined CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="px-10 py-5 rounded-full bg-gradient-to-r from-[#0071E3] to-[#00A3FF] text-white font-semibold text-base transition-all shadow-[0_0_40px_rgba(0,113,227,0.4)] hover:shadow-[0_0_60px_rgba(0,113,227,0.6)] hover:-translate-y-1 flex items-center gap-3 border border-white/10"
            >
              <span>Book 30-Min Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/solutions"
              className="px-10 py-5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-base transition-all flex items-center gap-2 group backdrop-blur-md"
            >
              <span>Explore Solutions</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Positioned relative instead of absolute on small screens to prevent overlap */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-3 text-white/40 pb-10"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll to explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* ---------------- BRAND EXPERIENCE CONTENT ---------------- */}
      
      {/* ---------------- TRUSTED SECTION ---------------- */}
      <TrustedSection />

      {/* ---------------- THE PARADIGM SHIFT ---------------- */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
        <TheSystemiqShift />
      </motion.div>

      {/* ---------------- WHAT WE BUILD ---------------- */}
      <InteractiveWhatWeBuild />

      {/* ---------------- WHY SYSTEMIQ ---------------- */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <WhySystemiq />
      </motion.div>

      {/* ---------------- HOW WE WORK ---------------- */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
        <HowWeWork />
      </motion.div>

      {/* ---------------- FEATURED INDUSTRIES ---------------- */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
        <FeaturedIndustries />
      </motion.div>

      {/* ---------------- ARCHITECTURE DIAGRAM ---------------- */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
        <ArchitectureDiagram />
      </motion.div>

      {/* ---------------- BUILDER NETWORK / FELLOWSHIP ---------------- */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
        <BuilderNetworkSection />
      </motion.div>

      {/* ---------------- HOME CTA ---------------- */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
        <HomeCTA />
      </motion.div>

      {/* Audit Modal */}
      <WorkflowAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
