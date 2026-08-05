'use client';

import { motion, useScroll, useSpring, useVelocity, useTransform } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Smooth the scroll progress for the bar fill
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track velocity to morph the pill container
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  // The faster we scroll, the wider the pill background stretches (max 120px)
  const width = useTransform(smoothVelocity, [-0.05, 0, 0.05], [120, 80, 120]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-none flex items-center justify-center h-8">
      {/* Background container that stretches with velocity */}
      <motion.div 
        style={{ width }}
        className="h-1.5 bg-white/[0.05] backdrop-apple rounded-full overflow-hidden border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.3)] relative"
      >
        {/* The actual progress fill */}
        <motion.div
          className="absolute inset-y-0 left-0 bg-[#00A3FF] origin-left"
          style={{ scaleX, width: '100%' }}
        />
      </motion.div>
    </div>
  );
}
