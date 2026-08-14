'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

export default function HeroGraphics() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Advanced Animated Mesh Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px]"
        style={{ maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, #000 40%, transparent 100%)' }}
      />
      
      {/* Complex Glow Effects */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] sm:-top-[20%] sm:-left-[10%] w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0, 113, 227, 0.25) 0%, rgba(0, 163, 255, 0.05) 50%, transparent 80%)', filter: 'blur(80px)', willChange: 'transform, opacity' }}
      />
      
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[10%] -right-[10%] sm:top-[0%] sm:-right-[10%] w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0, 163, 255, 0.2) 0%, rgba(0, 255, 255, 0.05) 50%, transparent 80%)', filter: 'blur(80px)', willChange: 'transform, opacity' }}
      />

      {/* Brand watermark — the { / } mark sitting behind the headline.
          The braces are near-black, so the mark is inverted to a white
          silhouette and dropped to a few percent opacity. A blue bloom sits
          behind it so the brand colour still reads at this scale. */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          aria-hidden="true"
          animate={reduceMotion ? undefined : { scale: [1, 1.035, 1], opacity: [1, 0.82, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-[min(150vw,1680px)] aspect-square"
          style={{ willChange: 'transform, opacity' }}
        >
          <div
            className="absolute inset-[26%] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(0,113,227,0.22) 0%, rgba(0,163,255,0.07) 45%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          <Image
            src="/logo_without_bg.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 150vw, 1680px"
            className="object-contain"
            style={{ filter: 'brightness(0) invert(1)', opacity: 0.075 }}
          />
        </motion.div>
      </div>

      {/* Floating Glassmorphism Elements (Desktop Only for Performance) */}
      <div className="absolute inset-0 max-w-7xl mx-auto hidden lg:block">
        {/* Top Left Spinner */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] left-[8%] w-28 h-28 rounded-[2rem] bg-[#13151A]/80 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex items-center justify-center rotate-12 group hover:border-[#0071E3]/50 transition-colors"
        >
          <div className="w-14 h-14 rounded-full border-[3px] border-[#0071E3]/20 border-t-[#00A3FF] animate-spin" style={{ animationDuration: '4s' }} />
        </motion.div>

        {/* Right Data Grid */}
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[10%] w-36 h-36 rounded-full bg-[#13151A]/80 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex items-center justify-center -rotate-6"
        >
          <div className="grid grid-cols-2 gap-2">
            {[1,2,3,4].map(i => (
              <motion.div 
                key={i}
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                className="w-4 h-4 rounded-[4px] bg-[#00A3FF]/60 shadow-[0_0_15px_rgba(0,163,255,0.5)]" 
              />
            ))}
          </div>
        </motion.div>
        
        {/* Bottom Left Status Bar */}
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[22%] left-[15%] w-48 h-20 rounded-2xl bg-[#13151A]/80 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-4 flex flex-col justify-center gap-2.5"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse" />
            <div className="h-1.5 w-16 bg-white/20 rounded-full" />
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden relative">
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#00A3FF] to-transparent" 
            />
          </div>
          <div className="h-1.5 w-3/4 bg-white/10 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}
