'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Code2,
  DollarSign,
  Users,
  CheckCircle2,
  Send,
  Loader2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Terminal,
} from 'lucide-react';
import confetti from 'canvas-confetti';

const fellowshipPerks = [
  {
    title: 'Production Code on Day One',
    desc: 'Ship code directly to production cloud servers handling thousands of daily transactions for real companies.',
    icon: <Terminal className="w-5 h-5 text-blue-600" />,
  },
  {
    title: 'Principal Engineer Mentorship',
    desc: 'Receive 1-on-1 code reviews and system architecture coaching from experienced Principal Engineers.',
    icon: <Users className="w-5 h-5 text-indigo-600" />,
  },
  {
    title: 'Paid Production Sprints',
    desc: 'Get paid competitive stipends for every production module you complete and ship.',
    icon: <DollarSign className="w-5 h-5 text-blue-600" />,
  },
  {
    title: 'Verified Portfolio & CV',
    desc: 'Graduate with production code metrics on your CV that prove real engineering capability.',
    icon: <Award className="w-5 h-5 text-indigo-600" />,
  },
];

const programPhases = [
  { step: '01', title: 'Application Review', desc: 'Submit your GitHub profile and highlight your best project.' },
  { step: '02', title: '60-Min Practical Task', desc: 'Complete a async coding task focused on TypeScript and DB queries.' },
  { step: '03', title: 'Architecture Interview', desc: 'A 30-minute tech discussion with a Senior System Architect.' },
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
          colors: ['#2563EB', '#4F46E5', '#0EA5E9'],
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
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-600">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span>ENGINEERING FELLOWSHIP PROGRAM</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Build Production Systems. <br />
            <span className="text-blue-600">Work With Principal Engineers.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            The Systemiq Builder Network is a paid engineering fellowship for ambitious computer science students. Work on real production architectures, receive 1-on-1 senior code reviews, and ship software that powers growing businesses.
          </p>
        </div>

        {/* 4 Perks Grid */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">Fellowship Structure</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Why Join the Systemiq Builder Network
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fellowshipPerks.map((p) => (
              <div key={p.title} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Selection Process */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">Selection Process</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              4 Steps to Join
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {programPhases.map((phase) => (
              <div key={phase.step} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-2">
                <span className="text-2xl font-extrabold font-mono text-blue-600">{phase.step}</span>
                <h3 className="text-base font-extrabold text-slate-900">{phase.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 max-w-3xl mx-auto space-y-8 shadow-xl">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">Fellowship Application</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Apply to the Builder Network</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Share your GitHub profile and top projects. Applications are reviewed on a rolling basis.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Application Submitted! 🎉</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="text-slate-900 font-bold">{formData.name}</span>. Our engineering leads will review your GitHub profile and contact you via email within 48 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Chen"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@university.edu"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">GitHub / Portfolio URL *</label>
                  <input
                    type="url"
                    name="github"
                    required
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/username"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">University & Graduation Year *</label>
                  <input
                    type="text"
                    name="university"
                    required
                    value={formData.university}
                    onChange={handleChange}
                    placeholder="e.g. BS Computer Science '26"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Primary Tech Stack</label>
                <input
                  type="text"
                  name="techStack"
                  value={formData.techStack}
                  onChange={handleChange}
                  placeholder="e.g. TypeScript, React, Next.js, Node.js, PostgreSQL"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Highlighted Project or Feature</label>
                <textarea
                  name="whyJoin"
                  rows={3}
                  value={formData.whyJoin}
                  onChange={handleChange}
                  placeholder="Briefly describe a project you built or a technical problem you solved..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition disabled:opacity-50"
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
