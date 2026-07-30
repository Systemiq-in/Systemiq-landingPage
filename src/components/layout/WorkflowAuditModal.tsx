'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Loader2, ArrowLeft, Building2, User, Mail, MessageSquare } from 'lucide-react';
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
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0071E3', '#4F46E5', '#0EA5E9'],
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="fixed inset-0 bg-white/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-white rounded-[2rem] border border-black/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.08)] z-10 flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-black/[0.06]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0071E3]" />
                <span className="text-sm font-semibold text-[#1D1D1F] tracking-wide">
                  Systemiq {defaultTopic}
                </span>
              </div>
              <button
                onClick={resetForm}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] text-[#1D1D1F] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 relative overflow-hidden bg-[#FAFAFA]">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-[#0071E3]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
                      Booking Confirmed
                    </h3>
                    <p className="text-base text-[#86868B] mt-3 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-[#1D1D1F]">{formData.name || 'there'}</span>. A System Architect will review your brief and contact you within 24 hours to schedule the audit.
                    </p>
                  </div>
                  <button
                    onClick={resetForm}
                    className="px-8 py-3 rounded-full bg-[#1D1D1F] hover:bg-black text-white font-semibold text-sm transition-transform hover:scale-[1.02]"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <div className="absolute inset-0 flex flex-col px-8 py-10">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex-1 flex flex-col justify-center space-y-6 max-w-xl mx-auto w-full"
                      >
                        <div className="space-y-2">
                          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D1D1F]">
                            Let's start with the basics.
                          </h2>
                          <p className="text-[#86868B] text-lg">What's your name and email?</p>
                        </div>
                        <div className="space-y-4 pt-4">
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#86868B]" />
                            <input
                              autoFocus
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              onKeyDown={handleKeyDown}
                              placeholder="Your full name"
                              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-black/[0.08] text-lg focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/10 transition-all shadow-sm"
                            />
                          </div>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#86868B]" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onKeyDown={handleKeyDown}
                              placeholder="Your work email"
                              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-black/[0.08] text-lg focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/10 transition-all shadow-sm"
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
                        className="flex-1 flex flex-col justify-center space-y-6 max-w-xl mx-auto w-full"
                      >
                        <div className="space-y-2">
                          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D1D1F]">
                            About your company.
                          </h2>
                          <p className="text-[#86868B] text-lg">Where are you operating from?</p>
                        </div>
                        <div className="space-y-4 pt-4">
                          <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#86868B]" />
                            <input
                              autoFocus
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              onKeyDown={handleKeyDown}
                              placeholder="Company Name"
                              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-black/[0.08] text-lg focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/10 transition-all shadow-sm"
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
                                className={`py-3 rounded-xl border font-semibold text-sm transition-all ${
                                  formData.employees === size
                                    ? 'bg-[#0071E3] text-white border-[#0071E3]'
                                    : 'bg-white text-[#1D1D1F] border-black/[0.08] hover:border-[#0071E3]/50'
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                          <p className="text-xs text-center text-[#86868B] pt-2">Select team size to continue</p>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex-1 flex flex-col justify-center space-y-6 max-w-xl mx-auto w-full"
                      >
                        <div className="space-y-2">
                          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D1D1F]">
                            What's the challenge?
                          </h2>
                          <p className="text-[#86868B] text-lg">Briefly describe your current bottlenecks.</p>
                        </div>
                        <div className="pt-4">
                          <div className="relative">
                            <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-[#86868B]" />
                            <textarea
                              autoFocus
                              rows={4}
                              name="description"
                              value={formData.description}
                              onChange={handleChange}
                              placeholder="e.g. We are stuck using 5 different spreadsheets to manage warehouse inventory and Tally billing..."
                              className="w-full pl-12 pr-4 py-5 rounded-2xl bg-white border border-black/[0.08] text-lg focus:outline-none focus:border-[#0071E3] focus:ring-4 focus:ring-[#0071E3]/10 transition-all shadow-sm resize-none"
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
                        className="flex-1 flex flex-col justify-center items-center text-center space-y-8 max-w-xl mx-auto w-full"
                      >
                        <div className="space-y-4">
                          <div className="w-16 h-16 rounded-2xl bg-[#0071E3]/10 flex items-center justify-center mx-auto mb-6">
                            <span className="text-3xl">🚀</span>
                          </div>
                          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D1D1F]">
                            Ready to transform?
                          </h2>
                          <p className="text-[#86868B] text-lg max-w-md mx-auto">
                            Submit your brief and our architects will prepare a preliminary system diagram before our call.
                          </p>
                        </div>

                        {errorMsg && (
                          <div className="p-3 w-full rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
                            {errorMsg}
                          </div>
                        )}

                        <button
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className="px-10 py-4 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-bold text-lg flex items-center justify-center gap-3 shadow-[0_8px_24px_rgba(0,113,227,0.3)] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:scale-100"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>Sending Brief...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Audit Request</span>
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
              <div className="flex items-center justify-between px-8 py-5 bg-white border-t border-black/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-10 h-1.5 rounded-full transition-colors duration-300 ${
                          i + 1 <= step ? 'bg-[#0071E3]' : 'bg-[#E5E5EA]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#86868B] ml-2 tracking-widest uppercase">
                    Step {step} of {totalSteps}
                  </span>
                </div>

                <div className="flex gap-2">
                  {step > 1 && (
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] text-[#1D1D1F] transition-colors"
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
                      className="px-5 h-10 flex items-center justify-center rounded-full bg-[#1D1D1F] hover:bg-black text-white font-semibold text-sm transition-colors disabled:opacity-30 gap-2"
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
    </AnimatePresence>
  );
}
