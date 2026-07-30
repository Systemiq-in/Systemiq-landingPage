'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (documentHeight - windowHeight > 0) {
        const percentage = (scrollTop / (documentHeight - windowHeight)) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, percentage)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-[100] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#4F7CFF] via-[#7AE7FF] to-[#4F7CFF] transition-all duration-150 ease-out shadow-[0_0_12px_#7AE7FF]"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
