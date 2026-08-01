'use client';

import { motion } from 'framer-motion';

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#090A0C]">
      {/* Dynamic Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{ maskImage: 'radial-gradient(ellipse 100% 100% at 50% 0%, #000 30%, transparent 100%)' }}
      />
      
      {/* Sweeping Gradient Mesh */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 100%', '100% 0%', '0% 0%'],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 113, 227, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 163, 255, 0.15) 0%, transparent 40%)',
          backgroundSize: '200% 200%'
        }}
      />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#0071E3]/20 to-transparent blur-[120px]"
      />
      
      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tl from-[#00A3FF]/15 to-transparent blur-[120px]"
      />
    </div>
  );
}
