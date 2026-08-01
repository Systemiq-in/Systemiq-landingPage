'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, Zap, Rocket, TerminalSquare, Coffee } from 'lucide-react';
import confetti from 'canvas-confetti';

const terminalSteps = [
  { id: 'name', prompt: '~/systemiq/fellowship/apply > enter_name', type: 'text' },
  { id: 'github', prompt: '~/systemiq/fellowship/apply > link_github', type: 'url' },
  { id: 'stack', prompt: '~/systemiq/fellowship/apply > set_tech_stack', type: 'text' },
];

export default function VibeCodingCareersPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', github: '', stack: '' });
  const [inputValue, setInputValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [logs, setLogs] = useState<string[]>(['[SYSTEM] Initializing Fellowship protocol...', '[SYSTEM] Awaiting candidate connection.']);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      const step = terminalSteps[currentStep];
      setFormData({ ...formData, [step.id]: inputValue.trim() });
      setLogs((prev) => [...prev, `${step.prompt}: ${inputValue.trim()}`, '[SYSTEM] Verified.']);
      setInputValue('');
      
      if (currentStep < terminalSteps.length - 1) {
        setCurrentStep(c => c + 1);
      } else {
        submitApplication();
      }
    }
  };

  const submitApplication = () => {
    setIsSubmitting(true);
    setLogs((prev) => [...prev, '[SYSTEM] Compiling candidate profile...', '[SYSTEM] Uploading to edge network...']);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#0071E3', '#4F46E5', '#10B981'],
      });
      setLogs((prev) => [...prev, '[SUCCESS] Pipeline deployed. We will DM you within 48h.']);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-transparent text-white pt-32 pb-20 antialiased selection:bg-[#00A3FF] selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Vibe Header */}
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Zap className="w-4 h-4" />
            <span>Vibecoding Enabled</span>
          </motion.div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-white leading-none">
            Ship Code. <br className="sm:hidden"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Get Paid.
            </span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-mono">
            No toy projects. No leetcode grinding. The Systemiq Fellowship is for GenZ engineers who actually build. You ship production features, you collect bounties.
          </p>
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Raw Execution", desc: "We don't care about your GPA. Link your Github, show us the hardest thing you've deployed.", icon: <Code2 className="w-6 h-6 text-emerald-400" /> },
            { title: "Bounty Based", desc: "Every module you ship has a bounty attached. Build it fast, build it right, get paid.", icon: <TerminalSquare className="w-6 h-6 text-blue-400" /> },
            { title: "Asynchronous", desc: "Work when you want. Vibe code at 3 AM with a coffee. Just hit the sprint deadlines.", icon: <Coffee className="w-6 h-6 text-amber-400" /> }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-white/50 font-mono leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Terminal Application */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl shadow-blue-500/10">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="ml-2 text-xs font-mono text-white/40">systemiq-cli — node</span>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm sm:text-base space-y-4">
              <div className="space-y-2 text-white/70">
                {logs.map((log, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                    {log.startsWith('[SUCCESS]') ? <span className="text-emerald-400">{log}</span> : log}
                  </motion.div>
                ))}
              </div>

              {!isSubmitted && !isSubmitting && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-blue-400 pt-4">
                  <span className="shrink-0">{terminalSteps[currentStep].prompt}</span>
                  <input
                    type={terminalSteps[currentStep].type}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 placeholder-white/20"
                    placeholder="Type and press Enter..."
                  />
                </div>
              )}
              
              {isSubmitting && (
                <div className="flex items-center gap-3 text-white/50 pt-4">
                  <div className="w-2 h-4 bg-white/50 animate-pulse" />
                  Processing...
                </div>
              )}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
