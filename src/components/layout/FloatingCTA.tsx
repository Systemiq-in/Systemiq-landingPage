'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import WorkflowAuditModal from './WorkflowAuditModal';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed bottom-6 right-6 z-[80] hidden sm:block"
          >
            <div className="relative group">
              <button
                onClick={() => setIsModalOpen(true)}
                className="active-scale relative px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-900 flex items-center gap-3 shadow-xl hover:border-blue-600 hover:shadow-2xl transition-all"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                <div className="flex flex-col text-left">
                  <span className="text-xs font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
                    Book a workflow audit <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">Free 30-minute call</span>
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
