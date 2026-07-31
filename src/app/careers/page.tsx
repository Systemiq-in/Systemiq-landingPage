'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  DollarSign,
  Users,
  CheckCircle2,
  Send,
  Loader2,
  Terminal,
} from 'lucide-react';
import confetti from 'canvas-confetti';

const fellowshipPerks = [
  {
    title: 'Production Code on Day One',
    desc: 'Ship code directly to production cloud servers handling daily transactions for active businesses.',
    icon: <Terminal className="w-5 h-5 text-[#0071E3]" />,
  },
  {
    title: 'Senior Engineer Mentorship',
    desc: 'Receive 1-on-1 code reviews and system architecture coaching from experienced Senior Leads.',
    icon: <Users className="w-5 h-5 text-[#0071E3]" />,
  },
  {
    title: 'Paid Production Sprints',
    desc: 'Get paid competitive stipends for every production feature module you complete and ship.',
    icon: <DollarSign className="w-5 h-5 text-[#0071E3]" />,
  },
  {
    title: 'Verified Portfolio & CV',
    desc: 'Graduate with production code metrics on your CV that prove real software engineering capability.',
    icon: <Award className="w-5 h-5 text-[#0071E3]" />,
  },
];

const programPhases = [
  { step: '01', title: 'Application Review', desc: 'Submit your GitHub profile and highlight your best project.' },
  { step: '02', title: 'Practical Coding Task', desc: 'Complete an async task focused on TypeScript and database queries.' },
  { step: '03', title: 'Engineering Discussion', desc: 'A 30-minute technical discussion with a Senior System Architect.' },
  { step: '04', title: 'Fellowship Onboarding', desc: 'Get matched with a mentored sprint and start shipping live features.' },
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    university: '',
    techStack: '',
    whyJoin: '',
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
          _subject: `Builder Network Application from ${formData.name}`,
          type: 'Builder Network Application',
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
        setErrorMsg(data.error || 'Failed to submit application. Please try again.');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] pt-32 pb-20 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
            Engineering Fellowship
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#1D1D1F] tracking-tight leading-tight">
            Build Real Production Systems.
          </h1>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-normal">
            The Systemiq Builder Network is a paid engineering fellowship for computer science talent. Work on production software, receive senior code reviews, and ship features that power growing businesses.
          </p>
        </div>

        {/* 4 Perks Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">Fellowship Structure</span>
            <h2 className="text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Why Join the Builder Network
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fellowshipPerks.map((p) => (
              <div key={p.title} className="bg-white rounded-3xl p-6 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F5F5F7] border border-black/[0.06] flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1D1D1F] tracking-tight">{p.title}</h3>
                <p className="text-xs text-[#86868B] leading-relaxed font-normal">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Selection Process */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">Selection Process</span>
            <h2 className="text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              4 Steps to Join
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {programPhases.map((phase) => (
              <div key={phase.step} className="bg-white rounded-3xl p-6 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-2">
                <span className="text-2xl font-bold font-mono text-[#0071E3]">{phase.step}</span>
                <h3 className="text-base font-bold text-[#1D1D1F]">{phase.title}</h3>
                <p className="text-xs text-[#86868B] leading-relaxed font-normal">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/[0.08] max-w-2xl mx-auto space-y-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">Fellowship Application</span>
            <h2 className="text-3xl font-extrabold text-[#1D1D1F] tracking-tight">Apply to the Builder Network</h2>
            <p className="text-xs sm:text-sm text-[#86868B]">
              Share your GitHub profile and top projects. Applications are reviewed on a rolling basis.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#1D1D1F]">Application Submitted! 🎉</h3>
              <p className="text-sm text-[#86868B] max-w-md mx-auto font-normal">
                Thank you, <span className="text-[#1D1D1F] font-semibold">{formData.name}</span>. Our engineering leads will review your application and contact you via email within 48 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-[#F5F5F7] border border-black/[0.06] text-[#1D1D1F] font-semibold text-xs transition"
              >
                Submit Another Application
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
                  <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Chen"
                    className="flex h-11 w-full rounded-md border border-black/[0.08] bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#86868B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]/20 disabled:cursor-not-allowed disabled:opacity-50 transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@university.edu"
                    className="flex h-11 w-full rounded-md border border-black/[0.08] bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#86868B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]/20 disabled:cursor-not-allowed disabled:opacity-50 transition-shadow"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">GitHub / Portfolio URL *</label>
                  <input
                    type="url"
                    name="github"
                    required
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/username"
                    className="flex h-11 w-full rounded-md border border-black/[0.08] bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#86868B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]/20 disabled:cursor-not-allowed disabled:opacity-50 transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">University & Graduation Year *</label>
                  <input
                    type="text"
                    name="university"
                    required
                    value={formData.university}
                    onChange={handleChange}
                    placeholder="e.g. BS Computer Science '26"
                    className="flex h-11 w-full rounded-md border border-black/[0.08] bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#86868B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]/20 disabled:cursor-not-allowed disabled:opacity-50 transition-shadow"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">Primary Tech Stack</label>
                <input
                  type="text"
                  name="techStack"
                  value={formData.techStack}
                  onChange={handleChange}
                  placeholder="e.g. TypeScript, React, Next.js, Node.js, PostgreSQL"
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-[#F5F5F7] border border-black/[0.06] text-[#1D1D1F] placeholder-[#86868B] text-sm focus:outline-none focus:border-[#0071E3]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1D1D1F] mb-1">Highlighted Project or Feature</label>
                <textarea
                  name="whyJoin"
                  rows={3}
                  value={formData.whyJoin}
                  onChange={handleChange}
                  placeholder="Briefly describe a project you built or a technical problem you solved..."
                  className="flex min-h-[80px] w-full rounded-md border border-black/[0.08] bg-white px-3 py-2 text-sm placeholder:text-[#86868B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]/20 disabled:cursor-not-allowed disabled:opacity-50 transition-shadow resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]/20 disabled:pointer-events-none disabled:opacity-50 bg-[#1D1D1F] text-white hover:bg-black h-11 px-8 w-full gap-2 shadow-sm"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Fellowship Application</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
