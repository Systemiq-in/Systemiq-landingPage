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
  Zap,
  Rocket,
  Flame,
  Laugh,
} from 'lucide-react';
import confetti from 'canvas-confetti';

const benefits = [
  {
    title: 'Senior Mentorship',
    desc: 'Work 1-on-1 with Principal Architects. Get real code reviews that actually level up your software engineering skills.',
    icon: <Users className="w-5 h-5 text-[#7AE7FF]" />,
  },
  {
    title: 'Paid Production Sprints',
    desc: 'Get paid competitive stipends for every production sprint module you deliver for real business clients. No unpaid labor.',
    icon: <DollarSign className="w-5 h-5 text-[#4F7CFF]" />,
  },
  {
    title: 'Modern Stack (Zero Legacy)',
    desc: 'Build with Next.js 15, TypeScript, Tailwind CSS, PostgreSQL, Docker, and Meta APIs—zero outdated 2010 frameworks.',
    icon: <Code2 className="w-5 h-5 text-[#7AE7FF]" />,
  },
  {
    title: 'Resume Flex That Works',
    desc: 'Graduate with verified production code used by real companies. Put actual business impact metrics on your CV.',
    icon: <Award className="w-5 h-5 text-[#4F7CFF]" />,
  },
];

const cultureHighlights = [
  {
    emoji: '🚫☕',
    title: 'Zero Coffee Runs',
    desc: 'You build production features on day one. We don’t ask you to format slides or make coffee.',
  },
  {
    emoji: '🔥⚡',
    title: 'Ship Real Code',
    desc: 'Your code runs in live cloud servers handling thousands of actual business operations every single week.',
  },
  {
    emoji: '🤝🧠',
    title: 'No Corporate BS',
    desc: 'Direct access to senior leads. We care about clean code, problem-solving, and shipping fast.',
  },
];

const hiringSteps = [
  { step: '01', title: 'Submit GitHub & Apply', desc: 'Fill out the application form with your GitHub link and top projects.' },
  { step: '02', title: 'Practical Coding Challenge', desc: 'Take a quick 60-min async coding task evaluating TypeScript & database basics.' },
  { step: '03', title: 'Architect Chat', desc: '30-minute casual tech conversation with our Principal Lead.' },
  { step: '04', title: 'Join the Network', desc: 'Get onboarded and start your first mentored production sprint!' },
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7AE7FF]/10 border border-[#7AE7FF]/30 text-xs font-mono text-[#7AE7FF]">
            <Flame className="w-4 h-4 text-[#7AE7FF]" />
            <span>STUDENT ENGINEER NETWORK</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Escape Boring Theory. <br />
            <span className="text-gradient">Ship Real Code.</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            The Systemiq Builder Network connects top student developers with Senior System Architects to engineer production software for growing companies. Build real skills, get paid, and flex a production portfolio.
          </p>
        </div>

        {/* GenZ Culture Vibe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cultureHighlights.map((ch) => (
            <div key={ch.title} className="glass-card rounded-2xl p-6 border border-white/10 space-y-2">
              <span className="text-3xl">{ch.emoji}</span>
              <h3 className="text-xl font-bold text-white tracking-tight">{ch.title}</h3>
              <p className="text-xs text-white/60 leading-relaxed">{ch.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Join Grid */}
        <div className="space-y-8">
          <div>
            <span className="tech-tag">Network Perks</span>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-2">Why Student Devs Love Systemiq</h2>
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
            <span className="tech-tag">Selection Steps</span>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-2">How to Join</h2>
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
            <span className="tech-tag">Fast Application</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">Apply to Builder Network</h2>
            <p className="text-xs sm:text-sm text-white/60">
              No long cover letters required. Show us your GitHub, tell us what you love building, and let’s talk.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#4F7CFF]/20 border border-[#4F7CFF]/40 text-[#7AE7FF] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Application Received! 🎉</h3>
              <p className="text-sm text-white/60 max-w-md mx-auto">
                Awesome, <span className="text-white font-medium">{formData.name}</span>. Our senior team will check out your GitHub and get back to you via email within 48 hours.
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
                  <label className="block text-xs font-mono text-white/70 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Chen"
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
                    placeholder="alex@university.edu"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-white/70 mb-1">GitHub / Portfolio URL *</label>
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
                  <label className="block text-xs font-mono text-white/70 mb-1">College / University & Year *</label>
                  <input
                    type="text"
                    name="university"
                    required
                    value={formData.university}
                    onChange={handleChange}
                    placeholder="e.g. CS 3rd Year @ State Uni"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-white/70 mb-1">Tech Stack You Love Using</label>
                <input
                  type="text"
                  name="techStack"
                  value={formData.techStack}
                  onChange={handleChange}
                  placeholder="e.g. TypeScript, Next.js, React, Node, Tailwind, PostgreSQL"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#4F7CFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-white/70 mb-1">What’s a cool project or feature you’ve built recently?</label>
                <textarea
                  name="whyJoin"
                  rows={3}
                  value={formData.whyJoin}
                  onChange={handleChange}
                  placeholder="Tell us briefly about a project you worked on or what gets you excited about software..."
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
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Builder Application</span>
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
