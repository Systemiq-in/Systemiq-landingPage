'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Users, BookOpen, Rocket, CheckCircle2, Zap } from 'lucide-react';
import FellowshipModal from '@/components/layout/FellowshipModal';

const principles = [
  {
    title: 'Own a whole module',
    icon: <Target className="w-6 h-6 text-[#00A3FF]" />,
    desc: 'You take a defined module end to end — schema, API and interface — rather than picking off tickets someone else scoped.',
  },
  {
    title: 'Paid per module',
    icon: <Rocket className="w-6 h-6 text-[#00A3FF]" />,
    desc: 'Work is scoped and priced per module before you start. You know what you are building and what it pays.',
  },
  {
    title: 'Use whatever tools you like',
    icon: <Zap className="w-6 h-6 text-[#00A3FF]" />,
    desc: 'Use Claude, ChatGPT or whatever you like. I care about the logic being right and the code being readable, not about who typed the boilerplate.',
  },
  {
    title: 'Real systems, real consequences',
    icon: <BookOpen className="w-6 h-6 text-[#00A3FF]" />,
    desc: 'The systems are real ones businesses run on — billing, inventory, dispatch. Bugs have consequences, which is the part that teaches you the most.',
  },
];

export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-white/90 pt-32 pb-20 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#00A3FF] text-xs font-semibold tracking-widest uppercase">
            Collaborators
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Build with me.
          </h1>
          <p className="text-base sm:text-lg text-white/50 leading-relaxed font-normal max-w-2xl mx-auto">
            Systemiq is a one-person practice, and on larger builds I bring in a small number of developers on a paid, per-module basis. If you can ship production code and want real systems to work on instead of tutorial projects, get in touch.
          </p>
        </motion.div>

        {/* Culture Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              How this works.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", bounce: 0, duration: 0.8, delay: i * 0.1 }}
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", bounce: 0, duration: 0.8 }}
          className="bg-[#13151A]/90 backdrop-blur-xl rounded-[2.5rem] p-10 sm:p-16 border border-white/10 text-center space-y-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#0071E3]/20 blur-[100px] pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Interested?</h2>
            <p className="text-base text-white/60 max-w-xl mx-auto font-normal">
              Skip the résumé. Send a GitHub link and tell me about the hardest thing you have built and what broke along the way.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 pt-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="active-scale w-full sm:w-auto px-8 py-4 rounded-full bg-[#0071E3] hover:bg-[#00A3FF] text-white font-bold text-sm transition-all shadow-[0_0_20px_rgba(0,113,227,0.4)]"
            >
              Get in touch
            </button>
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
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3FF]" />
              <span>AI Engineering</span>
            </div>
          </div>
        </motion.div>
        
      </div>

      <FellowshipModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
