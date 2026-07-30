'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Loader2, Calendar, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WorkflowAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export default function WorkflowAuditModal({
  isOpen,
  onClose,
  defaultTopic = 'Workflow Audit',
}: WorkflowAuditModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '10-50',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('https://formspree.io/f/xjgnzdrq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New ${defaultTopic} Booking from ${formData.company || formData.name}`,
          requestedService: defaultTopic,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#4F7CFF', '#7AE7FF', '#ffffff'],
        });
      } else {
        const data = await response.json();
        setErrorMsg(data.error || 'Failed to submit. Please try again.');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      employees: '10-50',
      description: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl glass-panel bg-[#0d0e12]/95 rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl z-10 overflow-hidden my-auto"
          >
            {/* Corner Decorative Lines */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4F7CFF]/15 to-transparent blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#7AE7FF]/10 to-transparent blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={resetForm}
              className="absolute top-5 right-5 p-2 text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="py-10 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#4F7CFF]/20 border border-[#4F7CFF]/40 text-[#7AE7FF] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Audit Request Received
                  </h3>
                  <p className="text-sm text-white/60 mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. A senior system architect from Systemiq will review your workflow requirements and reach out within 24 hours to schedule your audit session.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/05 text-left max-w-md mx-auto text-xs text-white/50 space-y-1 font-mono">
                  <div className="flex justify-between">
                    <span>Target Organization:</span>
                    <span className="text-white">{formData.company || 'Not specified'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Audit Scope:</span>
                    <span className="text-[#7AE7FF]">{defaultTopic}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-emerald-400">Scheduled for Arch-Review</span>
                  </div>
                </div>
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-white/90 transition shadow-lg"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="tech-tag">Studio Engagement</span>
                  <span className="text-xs text-white/40 font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#4F7CFF]" /> Free 45-Min Technical Audit
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Book Your {defaultTopic}
                </h2>
                <p className="text-xs sm:text-sm text-white/60 mt-1 mb-6">
                  Analyze existing bottlenecks, replace manual spreadsheets, and outline your custom business software architecture with our principal engineers.
                </p>

                {errorMsg && (
                  <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Apex Logistics Ltd"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1.5">
                        Team Size
                      </label>
                      <select
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#111113] border border-white/10 text-white text-sm focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] transition"
                      >
                        <option value="1-10">1-10 employees</option>
                        <option value="10-50">10-50 employees</option>
                        <option value="50-200">50-200 employees</option>
                        <option value="200+">200+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-1.5">
                      Current Workflows / Bottlenecks to Replace
                    </label>
                    <textarea
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="e.g. We rely on 12 manual Excel spreadsheets to handle inventory and sales orders across 3 warehouses. Need a unified custom ERP & dealer portal."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] transition resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-white/40 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#7AE7FF]" />
                      Strict NDA guaranteed. No spam.
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#4F7CFF] to-[#3B62E6] hover:from-[#5C86FF] hover:to-[#4F7CFF] text-white font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-[#4F7CFF]/20 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Audit Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
