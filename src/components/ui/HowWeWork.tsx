'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FileSearch,
  FileCode2,
  Cpu,
  ShieldCheck,
  Rocket,
  Headphones,
} from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Workflow Audit',
    subtitle: 'Process Mapping',
    icon: <FileSearch className="w-6 h-6 text-[#00A3FF]" />,
    description:
      'We sit down with your team to review your current spreadsheets, manual workarounds, and daily pain points.',
  },
  {
    step: '02',
    title: 'System Blueprint',
    subtitle: 'Wireframes & Specs',
    icon: <FileCode2 className="w-6 h-6 text-[#00A3FF]" />,
    description:
      'We design visual screen mockups and database architecture before any coding begins so you see the exact UI.',
  },
  {
    step: '03',
    title: 'Development Sprint',
    subtitle: 'Agile 2-Week Builds',
    icon: <Cpu className="w-6 h-6 text-[#00A3FF]" />,
    description:
      'Our studio builds your software in focused 2-week sprints. You test real working features every fortnight.',
  },
  {
    step: '04',
    title: 'Staff Training',
    subtitle: 'QA & Onboarding',
    icon: <ShieldCheck className="w-6 h-6 text-[#00A3FF]" />,
    description:
      'We test edge cases and onboard your team step-by-step to make software adoption completely frictionless.',
  },
  {
    step: '05',
    title: 'Smooth Go-Live',
    subtitle: 'Data Migration',
    icon: <Rocket className="w-6 h-6 text-[#00A3FF]" />,
    description:
      'We import all your historical Excel data and launch your live software system with zero business disruption.',
  },
  {
    step: '06',
    title: 'Continuous Support',
    subtitle: 'SLA & Upgrades',
    icon: <Headphones className="w-6 h-6 text-[#00A3FF]" />,
    description:
      'Ongoing technical support, automatic daily cloud backups, and feature upgrades as your SME expands.',
  },
];

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Sticky Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", bounce: 0, duration: 0.8 }}
            className="lg:w-1/3 lg:sticky lg:top-40 h-fit space-y-6 z-10"
          >
            <span className="text-xs font-semibold text-[#00A3FF] tracking-widest uppercase block">
              Progressive Methodology
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              How We Work.
            </h2>
            <p className="text-white/50 text-base font-normal leading-relaxed">
              From spreadsheet audit to live software deployment in focused sprint cycles. 
              Scroll down to explore our precise engineering process.
            </p>
          </motion.div>

          {/* Scrolling Right Column (Timeline) */}
          <div className="lg:w-2/3 relative pt-10 lg:pt-0">
            {/* Timeline Line (Background) */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-white/[0.05] hidden md:block" />
            
            {/* Timeline Line (Animated Fill) */}
            <motion.div 
              className="absolute left-8 top-0 w-[2px] bg-gradient-to-b from-[#0071E3] to-[#0EA5E9] hidden md:block origin-top"
              style={{ height: lineHeight }}
            />

            <div className="space-y-16 lg:space-y-32">
              {steps.map((item, index) => (
                <StepCard key={item.step} item={item} index={index} />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function StepCard({ item, index }: { item: typeof steps[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 80%', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const xOffset = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, x: xOffset }}
      className="relative flex items-start gap-8"
    >
      {/* Node on Timeline */}
      <div className="hidden md:flex relative z-10 flex-col items-center justify-center shrink-0 mt-6">
        <motion.div 
          style={{ opacity, scale }}
          className="w-16 h-16 rounded-full bg-[#13151A] border-2 border-[#0071E3] shadow-[0_0_20px_rgba(0,113,227,0.3)] flex items-center justify-center"
        >
          <span className="text-[#00A3FF] font-mono font-bold">{item.step}</span>
        </motion.div>
      </div>

      {/* Card Content */}
      <div className="flex-1 bg-[#13151A]/80 rounded-3xl p-8 sm:p-10 border border-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-white/10 transition-colors group relative overflow-hidden">
        {/* Background Number */}
        <div className="absolute -right-4 -bottom-6 text-[120px] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-white/[0.04] transition-colors">
          {item.step}
        </div>
        
        <div className="space-y-6 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-sm">
            {item.icon}
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
              {item.title}
            </h3>
            <span className="text-xs font-semibold text-[#00A3FF] tracking-widest uppercase block mb-4">
              {item.subtitle}
            </span>
            <p className="text-base text-white/60 leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
