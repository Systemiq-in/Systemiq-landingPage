'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowUpRight, ShieldCheck } from 'lucide-react';
import WorkflowAuditModal from './WorkflowAuditModal';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-[80] hidden sm:block"
          >
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4F7CFF] to-[#7AE7FF] rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-300 animate-pulse" />

              <button
                onClick={() => setIsModalOpen(true)}
                className="relative px-5 py-3 rounded-full bg-[#0d0e12] border border-white/20 text-white flex items-center gap-3 shadow-2xl hover:bg-[#121318] transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#7AE7FF] animate-ping" />
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold tracking-tight text-white flex items-center gap-1">
                    Book Free Audit <ArrowUpRight className="w-3.5 h-3.5 text-[#7AE7FF]" />
                  </span>
                  <span className="text-[10px] font-mono text-white/50">45-min system blueprint</span>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <WorkflowAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
