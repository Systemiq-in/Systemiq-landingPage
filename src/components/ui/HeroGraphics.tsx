'use client';

import { motion } from 'framer-motion';

export default function HeroGraphics() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Dynamic Background Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"
        style={{ maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 60%, transparent 100%)' }}
      />
      
      {/* Glowing Orbs for a less moody, more vibrant feel */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#0071E3]/30 via-blue-400/20 to-transparent blur-[100px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, -45, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-[#00A3FF]/30 via-cyan-400/20 to-transparent blur-[100px]"
      />

      {/* Floating Glassmorphism Elements */}
      <div className="absolute inset-0 max-w-7xl mx-auto hidden lg:block">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[10%] w-32 h-32 rounded-3xl bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex items-center justify-center rotate-12"
        >
          <div className="w-16 h-16 rounded-full border-4 border-[#0071E3]/20 border-t-[#0071E3] animate-spin" style={{ animationDuration: '3s' }} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[12%] w-40 h-40 rounded-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex items-center justify-center -rotate-6"
        >
          <div className="grid grid-cols-2 gap-2">
            {[1,2,3,4].map(i => (
              <motion.div 
                key={i}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                className="w-4 h-4 rounded-sm bg-[#0071E3]/60 shadow-[0_0_12px_rgba(0,113,227,0.5)]" 
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] left-[20%] w-48 h-24 rounded-2xl bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-4 flex flex-col gap-3 justify-center"
        >
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden relative">
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#0071E3] to-transparent shadow-[0_0_10px_rgba(0,113,227,0.5)]" 
            />
          </div>
          <div className="h-2 w-3/4 bg-white/10 rounded-full" />
          <div className="h-2 w-1/2 bg-white/10 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}
