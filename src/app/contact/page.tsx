'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          _subject: `Contact Inquiry from ${formData.name} (${formData.company})`,
          type: 'General Contact Inquiry',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#0071E3', '#4F46E5', '#0EA5E9'],
        });
      } else {
        const data = await response.json();
        setErrorMsg(data.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-32 pb-20 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
            Direct Studio Contact
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight">
            Contact Engineering.
          </h1>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-normal">
            Have questions about custom software, system integrations, or sprint quotes? Connect directly with our Senior Engineering Leads.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-6">
              <h2 className="text-2xl font-bold text-[#1D1D1F] tracking-tight">Studio Information</h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#F5F5F7] text-[#0071E3] flex items-center justify-center shrink-0 border border-black/[0.06]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#86868B] block">Studio Location</span>
                    <span className="text-sm font-semibold text-[#1D1D1F]">Global Remote Studio</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#F5F5F7] text-[#0071E3] flex items-center justify-center shrink-0 border border-black/[0.06]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#86868B] block">Email Inquiry</span>
                    <a href="mailto:contact@systemiq.tech" className="text-sm font-semibold text-[#0071E3] underline">
                      contact@systemiq.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#F5F5F7] text-[#0071E3] flex items-center justify-center shrink-0 border border-black/[0.06]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#86868B] block">Phone Line</span>
                    <span className="text-sm font-semibold text-[#1D1D1F]">+1 (800) SYSTEMIQ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-6">
            <h2 className="text-2xl font-bold text-[#1D1D1F] tracking-tight">Send Us a Message</h2>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#1D1D1F]">Message Received!</h3>
                <p className="text-xs sm:text-sm text-[#86868B] max-w-sm mx-auto font-normal">
                  Thank you, <span className="font-semibold text-[#1D1D1F]">{formData.name}</span>. An engineering lead will respond within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#F5F5F7] border border-black/[0.06] text-[#1D1D1F] font-semibold text-xs transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-[#F5F5F7] border border-black/[0.06] text-[#1D1D1F] placeholder-[#86868B] text-sm focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@company.com"
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-[#F5F5F7] border border-black/[0.06] text-[#1D1D1F] placeholder-[#86868B] text-sm focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-[#F5F5F7] border border-black/[0.06] text-[#1D1D1F] placeholder-[#86868B] text-sm focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Industrial"
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-[#F5F5F7] border border-black/[0.06] text-[#1D1D1F] placeholder-[#86868B] text-sm focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">
                    Message / Requirements *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your current business operations or project goals..."
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-[#F5F5F7] border border-black/[0.06] text-[#1D1D1F] placeholder-[#86868B] text-sm focus:outline-none focus:border-[#0071E3] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition disabled:opacity-50 hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
