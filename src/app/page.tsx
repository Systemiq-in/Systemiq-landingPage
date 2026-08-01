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
import CaseStudiesPreview from '@/components/ui/CaseStudiesPreview';
import Testimonials from '@/components/ui/Testimonials';
import HomeCTA from '@/components/ui/HomeCTA';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

export default function HomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Subtle parallax for the main headline to create a cinematic feel
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-screen bg-transparent text-[#1D1D1F] overflow-x-hidden antialiased selection:bg-[#0071E3] selection:text-white">
      {/* ---------------- IMMERSIVE BRAND HERO ---------------- */}
      <section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden">
        {/* Cinematic Background Gradient Mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#0071E3]/5 to-transparent rounded-full blur-3xl opacity-60" />
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-bl from-[#0077ED]/5 to-transparent rounded-full blur-3xl opacity-40" />
        </div>

        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
        >
          {/* Giant Hero Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center p-4 rounded-3xl bg-white/60 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/60"
          >
            <Image
              src="/logo_without_bg.png"
              alt="Systemiq Hero Logo"
              width={100}
              height={100}
              className="object-contain drop-shadow-sm"
              priority
            />
          </motion.div>

          {/* Subtle Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-[11px] font-semibold text-[#1D1D1F] tracking-wide shadow-sm mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0071E3]" />
            <span>The Premium Business Studio</span>
          </motion.div>

          {/* Monumental Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tighter text-[#1D1D1F] leading-[0.95] pb-2"
          >
            Software that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D1D1F] to-[#86868B]">
              feels like magic.
            </span>
          </motion.h1>

          {/* Elegant Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-xl sm:text-3xl text-[#86868B] max-w-3xl mx-auto font-medium leading-relaxed tracking-tight"
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
              className="px-10 py-5 rounded-full bg-[#1D1D1F] hover:bg-black text-white font-semibold text-base transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] flex items-center gap-3"
            >
              <span>Book 30-Min Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/solutions"
              className="text-[#1D1D1F] font-semibold text-base hover:text-[#0071E3] transition-colors flex items-center gap-1 group"
            >
              <span>Explore Solutions</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#86868B]"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#86868B]/40 to-transparent" />
        </motion.div>
      </section>

      {/* ---------------- BRAND EXPERIENCE CONTENT ---------------- */}
      
      {/* ---------------- TRUSTED SECTION ---------------- */}
      <TrustedSection />

      {/* ---------------- THE PARADIGM SHIFT ---------------- */}
      <TheSystemiqShift />

      {/* ---------------- WHAT WE BUILD ---------------- */}
      <InteractiveWhatWeBuild />

      {/* ---------------- WHY SYSTEMIQ ---------------- */}
      <WhySystemiq />

      {/* ---------------- HOW WE WORK ---------------- */}
      <HowWeWork />

      {/* ---------------- FEATURED INDUSTRIES ---------------- */}
      <FeaturedIndustries />

      {/* ---------------- ARCHITECTURE DIAGRAM ---------------- */}
      <ArchitectureDiagram />

      {/* ---------------- CASE STUDIES PREVIEW ---------------- */}
      <CaseStudiesPreview />

      {/* ---------------- TESTIMONIALS ---------------- */}
      <Testimonials />

      {/* ---------------- HOME CTA ---------------- */}
      <HomeCTA />

      {/* Audit Modal */}
      <WorkflowAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
