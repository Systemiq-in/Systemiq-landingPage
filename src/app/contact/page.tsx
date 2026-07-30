'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  Calendar,
  Terminal,
  ShieldCheck,
  Building2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import WorkflowAuditModal from '@/components/layout/WorkflowAuditModal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

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
          _subject: `Contact Form Submission from ${formData.company || formData.name}`,
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
        setErrorMsg(data.error || 'Submission failed. Please try again.');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#090909] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#7AE7FF]">
            <Terminal className="w-3.5 h-3.5" />
            <span>Direct Engineering Communication</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Initiate System <br />
            <span className="text-gradient">Architect Consultation.</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Reach out directly to our principal software architecture team. Whether you need a full ERP system blueprint or a quick technical feasibility check, we respond within 24 hours.
          </p>
        </div>

        {/* Split Layout: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Business Info & Discovery Call CTA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6 bg-[#0d0e12]">
              <h2 className="text-2xl font-bold text-white tracking-tight">Studio Headquarters</h2>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin className="w-4 h-4 text-[#7AE7FF] shrink-0 mt-1" />
                  <div>
                    <span className="text-white font-bold block">Global Business Systems Studio</span>
                    <span className="text-white/50">Remote-First Engineering Center · US & APAC</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white/80">
                  <Mail className="w-4 h-4 text-[#4F7CFF] shrink-0" />
                  <a
                    href="mailto:contact@systemiq.tech"
                    className="hover:text-white transition underline underline-offset-4 decoration-white/20"
                  >
                    contact@systemiq.tech
                  </a>
                </div>

                <div className="flex items-center gap-3 text-white/80">
                  <Phone className="w-4 h-4 text-[#7AE7FF] shrink-0" />
                  <span>+1 (800) SYSTEMIQ / +91 (800) 797-8364</span>
                </div>

                <div className="flex items-center gap-3 text-white/80">
                  <Clock className="w-4 h-4 text-[#4F7CFF] shrink-0" />
                  <span>Architecture Desk Hours: Mon - Fri (09:00 - 18:00 EST)</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/05 space-y-3">
                <span className="text-xs font-mono text-[#7AE7FF] block">Instant Discovery Booking</span>
                <p className="text-xs text-white/60">
                  Prefer a calendar slot directly with a Senior System Architect?
                </p>
                <button
                  onClick={() => setIsAuditModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#4F7CFF] to-[#7AE7FF] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book 45-Min Discovery Call</span>
                </button>
              </div>
            </div>

            {/* Interactive Google Maps Wireframe Placeholder */}
            <div className="glass-panel rounded-3xl p-6 border border-white/10 bg-[#0d0e12] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                  Engineered Location Hub
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Wireframe Map Representation */}
              <div className="relative h-44 rounded-2xl bg-[#08080a] border border-white/10 flex flex-col items-center justify-center p-4 text-center overflow-hidden bg-grid-pattern">
                <div className="w-10 h-10 rounded-full bg-[#4F7CFF]/20 border border-[#4F7CFF]/40 text-[#7AE7FF] flex items-center justify-center mb-2 animate-bounce">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-white">Systemiq Digital HQ Matrix</span>
                <span className="text-[10px] font-mono text-white/40 mt-0.5">
                  Lat 37.7749° N, Long 122.4194° W · Secure Cloud Node
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Formspree) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 bg-[#0d0e12] space-y-6">
              <div>
                <span className="tech-tag">Inquiry Protocol</span>
                <h2 className="text-2xl font-bold text-white tracking-tight mt-1">Send a Message</h2>
                <p className="text-xs text-white/60">
                  Every inquiry is evaluated directly by our principal engineering leads under strict NDA.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#4F7CFF]/20 border border-[#4F7CFF]/40 text-[#7AE7FF] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Dispatched</h3>
                  <p className="text-sm text-white/60 max-w-md mx-auto">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Your message has been received by our senior engineering desk. We will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Marcus Vance"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="marcus@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Vance Logistics Corp"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-1">Inquiry Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#111113] border border-white/10 text-white text-sm focus:outline-none focus:border-[#4F7CFF]"
                    >
                      <option value="Custom ERP Systems">Custom ERP Systems</option>
                      <option value="Inventory Automation">Inventory Automation</option>
                      <option value="B2B Dealer Portals">B2B Dealer Portals</option>
                      <option value="Tally / WhatsApp Integration">Tally / WhatsApp Integration</option>
                      <option value="General Engineering Inquiry">General Engineering Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-1">Message / Requirements *</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your current system challenges, team size, and desired software timeline..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-white/40 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Guaranteed 24-hr response
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#4F7CFF] to-[#7AE7FF] text-white font-bold text-sm flex items-center gap-2 shadow-lg hover:opacity-90 transition disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <WorkflowAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        defaultTopic="Discovery Call"
      />
    </div>
  );
}
