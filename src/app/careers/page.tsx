'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Code2,
  DollarSign,
  Users,
  CheckCircle2,
  Terminal,
  ArrowRight,
  Loader2,
  Sparkles,
  ShieldCheck,
  Send,
} from 'lucide-react';
import confetti from 'canvas-confetti';

const benefits = [
  {
    title: 'Senior Mentorship',
    desc: 'Work 1-on-1 with Principal Architects with 10+ years of experience in distributed systems and cloud databases.',
    icon: <Users className="w-5 h-5 text-[#7AE7FF]" />,
  },
  {
    title: 'Paid Production Sprints',
    desc: 'Get paid competitive compensation for every production sprint module you deliver for real enterprise SME clients.',
    icon: <DollarSign className="w-5 h-5 text-[#4F7CFF]" />,
  },
  {
    title: 'Real-World Stack',
    desc: 'Build with Next.js 15, TypeScript, Tailwind CSS, PostgreSQL, Docker, WebSockets, and Meta APIs—zero outdated frameworks.',
    icon: <Code2 className="w-5 h-5 text-[#7AE7FF]" />,
  },
  {
    title: 'Fast-Track Career Acceleration',
    desc: 'Graduate with verified production experience, code review portfolios, and direct hiring intros to high-growth tech firms.',
    icon: <Award className="w-5 h-5 text-[#4F7CFF]" />,
  },
];

const hiringSteps = [
  { step: '01', title: 'Code Review & Application', desc: 'Submit your GitHub profile, top project repo, and technical background.' },
  { step: '02', title: 'Architecture Assessment', desc: 'Complete a async 60-minute practical coding challenge evaluating TypeScript & SQL.' },
  { step: '03', title: 'Senior Architect Interview', desc: '30-minute technical interview discussing systems design and engineering principles.' },
  { step: '04', title: 'Network Onboarding', desc: 'Join the Systemiq Builder Network and receive your first mentored sprint assignment.' },
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
          _subject: `New Builder Network Application from ${formData.name}`,
          type: 'Builder Network Application',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#4F7CFF', '#7AE7FF', '#ffffff'],
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
    <div className="min-h-screen bg-[#090909] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7AE7FF]/10 border border-[#7AE7FF]/30 text-xs font-mono text-[#7AE7FF]">
            <GraduationCap className="w-4 h-4" />
            <span>The Systemiq Builder Network</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Building Software. <br />
            <span className="text-gradient">Building Engineers.</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Are you a passionate engineering student ready to build production software systems for real businesses under principal architect mentorship? Join the Systemiq Builder Network.
          </p>
        </div>

        {/* Why Join Grid */}
        <div className="space-y-8">
          <div>
            <span className="tech-tag">Network Benefits</span>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-2">Why Join Systemiq Builder Network?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
                <div className="p-3 w-max rounded-xl bg-white/05 border border-white/10">{b.icon}</div>
                <h3 className="text-lg font-bold text-white">{b.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Process */}
        <div className="space-y-8">
          <div>
            <span className="tech-tag">Selection Lifecycle</span>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-2">Hiring Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {hiringSteps.map((hs) => (
              <div key={hs.step} className="glass-card rounded-2xl p-6 border border-white/10 space-y-3 relative">
                <span className="text-2xl font-bold font-mono text-[#7AE7FF]">{hs.step}</span>
                <h3 className="text-base font-bold text-white">{hs.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{hs.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form (Formspree) */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 bg-[#0d0e12] max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="tech-tag">Online Application</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">Apply to the Builder Network</h2>
            <p className="text-xs sm:text-sm text-white/60">
              Fill out the details below. Our senior engineering leads review applications on a rolling basis.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#4F7CFF]/20 border border-[#4F7CFF]/40 text-[#7AE7FF] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Application Submitted!</h3>
              <p className="text-sm text-white/60 max-w-md mx-auto">
                Thank you, <span className="text-white font-medium">{formData.name}</span>. Our senior architect team will review your GitHub and reach out via email within 48 hours for stage 2 assessment.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition"
              >
                Submit Another Application
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
                  <label className="block text-xs font-mono text-white/70 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Verma"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/70 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@university.edu"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-white/70 mb-1">GitHub / Portfolio Link *</label>
                  <input
                    type="url"
                    name="github"
                    required
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/username"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/70 mb-1">University / Degree *</label>
                  <input
                    type="text"
                    name="university"
                    required
                    value={formData.university}
                    onChange={handleChange}
                    placeholder="e.g. B.Tech Computer Science (3rd Year)"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-white/70 mb-1">Primary Tech Stack & Familiarity</label>
                <input
                  type="text"
                  name="techStack"
                  value={formData.techStack}
                  onChange={handleChange}
                  placeholder="e.g. TypeScript, React, Next.js, PostgreSQL, Node.js"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-white/70 mb-1">Why do you want to build systems with Systemiq?</label>
                <textarea
                  name="whyJoin"
                  rows={3}
                  value={formData.whyJoin}
                  onChange={handleChange}
                  placeholder="Briefly describe your interest in building real SME software systems..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#4F7CFF] to-[#7AE7FF] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Network Application</span>
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
