'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Github, Code2, Bot, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FellowshipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FellowshipModal({ isOpen, onClose }: FellowshipModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    github: '',
    aiExperience: '',
    hardestProject: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#0071E3', '#00A3FF', '#10B981'],
      });

      // Auto close after 3 seconds
      setTimeout(() => {
        onClose();
        setTimeout(() => {
          setStep(1);
          setIsSuccess(false);
          setFormData({ name: '', github: '', aiExperience: '', hardestProject: '' });
        }, 500);
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#090A0C]/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#13151A] rounded-3xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0071E3]/20 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-[#00A3FF]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Systemiq Fellowship</h3>
                <p className="text-xs text-white/50 font-mono">Step {step} of 3</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/5 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 space-y-4"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Application Sent!</h2>
                  <p className="text-white/60">We will review your GitHub and reach out via email within 48 hours.</p>
                </motion.div>
              ) : step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white">Who are you?</h2>
                    <p className="text-sm text-white/50">Let's start with the basics. No resume needed, just your code.</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/70 uppercase mb-2">Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#00A3FF] focus:bg-white/[0.05] transition-colors"
                        placeholder="e.g. Linus Torvalds"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/70 uppercase mb-2">GitHub Profile URL</label>
                      <div className="relative">
                        <Github className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                        <input
                          type="url"
                          value={formData.github}
                          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#00A3FF] focus:bg-white/[0.05] transition-colors"
                          placeholder="https://github.com/username"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : step === 2 ? (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white">How do you code?</h2>
                    <p className="text-sm text-white/50">We look for engineers who use AI to ship faster.</p>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-xs font-semibold text-white/70 uppercase mb-2">Primary AI Agent Experience</label>
                    
                    {[
                      { id: 'claude', name: 'Claude Code', desc: 'Anthropic CLI agent for complex repos.' },
                      { id: 'antigravity', name: 'Antigravity IDE', desc: 'Google agentic coding environment.' },
                      { id: 'cursor', name: 'Cursor / Copilot', desc: 'Inline auto-complete and chat workflows.' },
                      { id: 'none', name: 'None / Manual', desc: 'I write 100% of my code manually.' },
                    ].map((tool) => (
                      <div
                        key={tool.id}
                        onClick={() => setFormData({ ...formData, aiExperience: tool.id })}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4 ${
                          formData.aiExperience === tool.id
                            ? 'bg-[#0071E3]/20 border-[#00A3FF]'
                            : 'bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.05]'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.aiExperience === tool.id ? 'border-[#00A3FF]' : 'border-white/30'}`}>
                          {formData.aiExperience === tool.id && <div className="w-2.5 h-2.5 rounded-full bg-[#00A3FF]" />}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">{tool.name}</h4>
                          <p className="text-xs text-white/50">{tool.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white">What did you build?</h2>
                    <p className="text-sm text-white/50">Tell us about the hardest engineering problem you solved.</p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/70 uppercase mb-2">Project Architecture</label>
                    <textarea
                      rows={5}
                      value={formData.hardestProject}
                      onChange={(e) => setFormData({ ...formData, hardestProject: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:border-[#00A3FF] focus:bg-white/[0.05] transition-colors resize-none"
                      placeholder="I built a real-time multiplayer cursor tracker using WebSockets and Redis..."
                    />
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Footer Actions */}
          {!isSuccess && (
            <div className="p-6 border-t border-white/[0.06] flex items-center justify-between bg-[#090A0C]">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="px-6 py-2.5 rounded-full text-white/70 hover:text-white font-semibold text-sm transition-colors"
                >
                  Back
                </button>
              ) : <div />}

              {step < 3 ? (
                <button
                  onClick={handleNext}
                  disabled={step === 1 && (!formData.name || !formData.github)}
                  className="px-8 py-2.5 rounded-full bg-white text-black hover:bg-[#F5F5F7] font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!formData.hardestProject || isSubmitting}
                  className="px-8 py-2.5 rounded-full bg-[#0071E3] hover:bg-[#00A3FF] text-white font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-[0_0_20px_rgba(0,113,227,0.4)]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Deploying...
                    </span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Sparkles className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
