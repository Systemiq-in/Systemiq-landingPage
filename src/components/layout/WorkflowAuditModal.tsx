'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useScrollLock } from '@/hooks/useScrollLock';
import { X, CheckCircle2, ArrowRight, Loader2, ArrowLeft, Building2, User, Mail, MessageSquare, Rocket } from 'lucide-react';

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
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useScrollLock(isOpen);

  // `main` sets `relative z-20`, which caps any z-index inside it. Portal to
  // body so the overlay actually sits above the navbar and floating CTA.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => setStep((s) => Math.min(s + 1, totalSteps));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
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
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      employees: '',
      description: '',
    });
    onClose();
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && step < totalSteps) {
      e.preventDefault();
      handleNext();
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="fixed inset-0 bg-[#05060A]/80 backdrop-apple"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            role="dialog"
            aria-modal="true"
            aria-label="Book a workflow audit"
            className="relative w-full max-w-2xl bg-[#0E1014] rounded-[1.75rem] sm:rounded-[2rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.6)] z-10 flex flex-col max-h-[92dvh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 border-b border-white/[0.08] shrink-0">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0071E3]" />
                <span className="text-sm font-semibold text-white tracking-wide">
                  Book a workflow audit
                </span>
              </div>
              <button
                onClick={resetForm}
                className="active-scale w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white/80 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain bg-[#0E1014]">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-full flex-col items-center justify-center text-center p-6 sm:p-8 space-y-5 sm:space-y-6"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0071E3]/15 border border-[#0071E3]/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#0071E3]" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Brief received
                    </h3>
                    <p className="text-sm sm:text-base text-white/55 mt-3 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-white">{formData.name || 'there'}</span>. I will read your brief and get back to you within one business day to set up the call.
                    </p>
                  </div>
                  <button
                    onClick={resetForm}
                    className="active-scale px-8 py-3 rounded-full bg-white hover:bg-white/90 text-black font-semibold text-sm transition-transform"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <div className="flex min-h-full flex-col px-5 py-7 sm:px-8 sm:py-10">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex-1 flex flex-col justify-center space-y-5 sm:space-y-6 max-w-xl mx-auto w-full"
                      >
                        <div className="space-y-2">
                          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white text-balance">
                            First, who are you?
                          </h2>
                          <p className="text-white/50 text-base sm:text-lg">Name and email so I can reply.</p>
                        </div>
                        <div className="space-y-4 pt-4">
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/35" />
                            <input
                              autoFocus
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              onKeyDown={handleKeyDown}
                              placeholder="Your full name"
                              className="w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/35 text-base sm:text-lg focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/15 transition-all"
                            />
                          </div>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/35" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onKeyDown={handleKeyDown}
                              placeholder="Your work email"
                              className="w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/35 text-base sm:text-lg focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/15 transition-all"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex-1 flex flex-col justify-center space-y-5 sm:space-y-6 max-w-xl mx-auto w-full"
                      >
                        <div className="space-y-2">
                          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white text-balance">
                            About your company.
                          </h2>
                          <p className="text-white/50 text-base sm:text-lg">Company name and rough team size.</p>
                        </div>
                        <div className="space-y-4 pt-4">
                          <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/35" />
                            <input
                              autoFocus
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              onKeyDown={handleKeyDown}
                              placeholder="Company Name"
                              className="w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/35 text-base sm:text-lg focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/15 transition-all"
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                            {['1-10', '11-50', '51-200', '200+'].map((size) => (
                              <button
                                key={size}
                                onClick={() => {
                                  setFormData({ ...formData, employees: size });
                                  setTimeout(handleNext, 300);
                                }}
                                className={`active-scale py-3 rounded-xl border font-semibold text-sm transition-all ${
                                  formData.employees === size
                                    ? 'bg-[#0071E3] text-white border-[#0071E3]'
                                    : 'bg-white/[0.04] text-white/80 border-white/10 hover:border-[#0071E3]/60 hover:text-white'
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                          <p className="text-xs text-center text-white/40 pt-2">Pick a team size to continue</p>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex-1 flex flex-col justify-center space-y-5 sm:space-y-6 max-w-xl mx-auto w-full"
                      >
                        <div className="space-y-2">
                          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white text-balance">
                            What's slowing you down?
                          </h2>
                          <p className="text-white/50 text-base sm:text-lg">A couple of sentences is plenty.</p>
                        </div>
                        <div className="pt-4">
                          <div className="relative">
                            <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-white/35" />
                            <textarea
                              autoFocus
                              rows={4}
                              name="description"
                              value={formData.description}
                              onChange={handleChange}
                              placeholder="e.g. Stock lives in three spreadsheets and we re-key every order into Tally by hand."
                              className="w-full pl-12 pr-4 py-4 sm:py-5 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/35 text-base sm:text-lg focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/15 transition-all resize-none"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex-1 flex flex-col justify-center items-center text-center space-y-6 sm:space-y-8 max-w-xl mx-auto w-full"
                      >
                        <div className="space-y-4">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0071E3]/15 border border-[#0071E3]/30 flex items-center justify-center mx-auto mb-5 sm:mb-6">
                            <Rocket className="w-7 h-7 sm:w-8 sm:h-8 text-[#0071E3]" />
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white text-balance">
                            That's everything.
                          </h2>
                          <p className="text-white/50 text-base sm:text-lg max-w-md mx-auto">
                            Send your brief and I will sketch a preliminary system diagram before we speak.
                          </p>
                        </div>

                        {errorMsg && (
                          <div className="p-3 w-full rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm font-medium">
                            {errorMsg}
                          </div>
                        )}

                        <button
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className="active-scale w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-[0_8px_24px_rgba(0,113,227,0.3)] transition-all disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>Sending…</span>
                            </>
                          ) : (
                            <>
                              <span>Send my brief</span>
                              <ArrowRight className="w-5 h-5" />
                            </>
                          )}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer Navigation */}
            {!isSubmitted && (
              <div className="flex items-center justify-between gap-3 px-5 py-4 sm:px-8 sm:py-5 bg-[#0B0D11] border-t border-white/[0.08] shrink-0">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-6 sm:w-10 h-1.5 rounded-full transition-colors duration-300 ${
                          i + 1 <= step ? 'bg-[#0071E3]' : 'bg-white/15'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="hidden sm:inline text-xs font-semibold text-white/40 ml-2 tracking-widest uppercase">
                    Step {step} of {totalSteps}
                  </span>
                </div>

                <div className="flex gap-2">
                  {step > 1 && (
                    <button
                      onClick={handlePrev}
                      className="active-scale w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  )}
                  {step < totalSteps && (
                    <button
                      onClick={handleNext}
                      disabled={
                        (step === 1 && (!formData.name || !formData.email)) ||
                        (step === 2 && !formData.company)
                      }
                      className="active-scale px-5 h-10 flex items-center justify-center rounded-full bg-white hover:bg-white/90 text-black font-semibold text-sm transition-colors disabled:opacity-25 gap-2"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
