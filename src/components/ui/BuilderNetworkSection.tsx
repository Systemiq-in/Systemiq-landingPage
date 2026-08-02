'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Terminal, Code2, ArrowRight, Zap } from 'lucide-react';

export default function BuilderNetworkSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0A] border-y border-black text-white relative overflow-hidden">
      {/* Advanced Animated Grid & Glowing Orbs */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" style={{ maskImage: 'radial-gradient(circle at center, #000 40%, transparent 100%)' }} />
      
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 60%)', willChange: 'transform, opacity' }}
      />
      
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 60%)', willChange: 'transform, opacity' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#1D1D1F] border border-[#333333] text-xs font-mono text-[#A1A1AA]">
              <Terminal className="w-3.5 h-3.5 text-[#0071E3]" />
              <span>systemiq-fellowship // sys_init</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-white leading-[1.05]">
              Ship real code. <br />
              <span className="text-[#86868B]">Get paid for it.</span>
            </h2>
            
            <p className="text-lg text-[#A1A1AA] font-mono leading-relaxed max-w-lg">
              The Systemiq Builder Network is an invite-only engineering fellowship. We don't do toy projects. You will write, review, and ship production code for active businesses.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/careers"
                className="w-full sm:w-auto px-8 py-4 rounded-md bg-white text-black font-bold text-sm transition-all hover:bg-[#F5F5F7] flex items-center justify-center gap-2 group"
              >
                <span>Apply for Fellowship</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Terminal / Code Visual */}
          <div className="lg:col-span-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="rounded-xl bg-[#111111] border border-[#333333] overflow-hidden shadow-2xl shadow-black/50"
            >
              {/* Mac-style Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1A1A] border-b border-[#333333]">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                <span className="ml-4 text-xs font-mono text-[#666666]">~/systemiq/production</span>
              </div>
              
              {/* Code Body */}
              <div className="p-6 sm:p-8 font-mono text-sm leading-relaxed overflow-x-auto">
                <div className="flex text-[#666666] gap-4">
                  <span className="select-none text-right w-4">1</span>
                  <span className="text-[#EAB308]">async function</span> <span className="text-[#60A5FA]">processOrderModule</span><span className="text-white">(ticket) {'{'}</span>
                </div>
                <div className="flex text-[#666666] gap-4">
                  <span className="select-none text-right w-4">2</span>
                  <span className="text-white ml-4">await <span className="text-[#60A5FA]">verifyStock</span>(ticket.items);</span>
                </div>
                <div className="flex text-[#666666] gap-4">
                  <span className="select-none text-right w-4">3</span>
                  <span className="text-[#10B981] ml-4">// Shipped by Fellowship Dev: @alex_c</span>
                </div>
                <div className="flex text-[#666666] gap-4">
                  <span className="select-none text-right w-4">4</span>
                  <span className="text-white ml-4">await <span className="text-[#60A5FA]">pushToTallyAPI</span>(ticket.invoice);</span>
                </div>
                <div className="flex text-[#666666] gap-4">
                  <span className="select-none text-right w-4">5</span>
                  <span className="text-white">{'}'}</span>
                </div>
                <div className="flex text-[#666666] gap-4 mt-4">
                  <span className="select-none text-right w-4">6</span>
                  <span className="text-[#10B981]">✔ Compilation successful. Deploying to edge...</span>
                </div>
              </div>
            </motion.div>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#333333] bg-[#111111] text-xs font-mono text-[#A1A1AA]">
                <Zap className="w-3.5 h-3.5 text-[#EAB308]" /> Paid Sprints
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#333333] bg-[#111111] text-xs font-mono text-[#A1A1AA]">
                <Code2 className="w-3.5 h-3.5 text-[#60A5FA]" /> Senior Code Reviews
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
