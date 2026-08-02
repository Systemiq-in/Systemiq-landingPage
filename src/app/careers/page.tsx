'use client';

import { motion } from 'framer-motion';
import { Target, Users, BookOpen, Rocket, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const principles = [
  {
    title: 'Autonomy & Mastery',
    icon: <Target className="w-6 h-6 text-[#00A3FF]" />,
    desc: 'You own your modules. We provide the architecture and spec, you write the code. No micro-management.',
  },
  {
    title: 'Bounty-Based Sprints',
    icon: <Rocket className="w-6 h-6 text-[#00A3FF]" />,
    desc: 'Ship production code, get paid per module. High-speed, high-reward execution for talented engineers.',
  },
  {
    title: 'Principal Mentorship',
    icon: <Users className="w-6 h-6 text-[#00A3FF]" />,
    desc: 'Direct code reviews and systems design mentorship from senior architects who have built enterprise ERPs.',
  },
  {
    title: 'Real-World Scale',
    icon: <BookOpen className="w-6 h-6 text-[#00A3FF]" />,
    desc: 'Learn to build software that actually matters. No toy projects. You will build systems that handle millions in transactions.',
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-transparent text-white/90 pt-32 pb-20 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00A3FF] text-xs font-semibold tracking-widest uppercase">
            Systemiq Builder Network
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Engineering Fellowship.
          </h1>
          <p className="text-base sm:text-lg text-white/50 leading-relaxed font-normal max-w-2xl mx-auto">
            The Systemiq Fellowship is an elite network for top-tier student engineers. Ship production features alongside senior architects and get paid for your execution.
          </p>
        </div>

        {/* Culture Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Fellowship Culture.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-[#13151A]/80 rounded-[2rem] p-8 border border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-normal">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Application CTA */}
        <div className="bg-[#13151A]/90 backdrop-blur-xl rounded-[2.5rem] p-10 sm:p-16 border border-white/10 text-center space-y-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#0071E3]/20 blur-[100px] pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Ready to ship code?</h2>
            <p className="text-base text-white/60 max-w-xl mx-auto font-normal">
              We look for raw execution and ability. Leave the resume behind. Link your GitHub and show us the hardest backend system or frontend interface you've built.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 pt-4">
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0071E3] hover:bg-[#00A3FF] text-white font-bold text-sm transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,113,227,0.4)]"
            >
              Apply for Fellowship
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-6 pt-8 text-xs font-medium text-white/40 relative z-10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Next.js / React</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Node.js / Express</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
