'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MouseEvent, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltOffset?: number; // How much inner elements pop out in Z space
}

export default function TiltCard({ children, className = '', tiltOffset = 30 }: TiltCardProps) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  // Rotate between -7.5 and 7.5 degrees based on mouse position
  const rotateX = useTransform(mouseYSpring, [0, 1], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [0, 1], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Only apply hover effects if the user has a fine pointer (mouse)
    if (window.matchMedia('(hover: none)').matches) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative [perspective:1000px] ${className}`}
    >
      <div 
        style={{ transform: `translateZ(${tiltOffset}px)`, transformStyle: "preserve-3d" }} 
        className="h-full w-full"
      >
        {children}
      </div>
    </motion.div>
  );
}
