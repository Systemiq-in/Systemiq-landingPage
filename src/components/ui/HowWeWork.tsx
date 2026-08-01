'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    icon: <FileSearch className="w-6 h-6 text-[#0071E3]" />,
    description:
      'We sit down with your team to review your current spreadsheets, manual workarounds, and daily pain points.',
  },
  {
    step: '02',
    title: 'System Blueprint',
    subtitle: 'Wireframes & Specs',
    icon: <FileCode2 className="w-6 h-6 text-[#0071E3]" />,
    description:
      'We design visual screen mockups and database architecture before any coding begins so you see the exact UI.',
  },
  {
    step: '03',
    title: 'Development Sprint',
    subtitle: 'Agile 2-Week Builds',
    icon: <Cpu className="w-6 h-6 text-[#0071E3]" />,
    description:
      'Our studio builds your software in focused 2-week sprints. You test real working features every fortnight.',
  },
  {
    step: '04',
    title: 'Staff Training',
    subtitle: 'QA & Onboarding',
    icon: <ShieldCheck className="w-6 h-6 text-[#0071E3]" />,
    description:
      'We test edge cases and onboard your team step-by-step to make software adoption completely frictionless.',
  },
  {
    step: '05',
    title: 'Smooth Go-Live',
    subtitle: 'Data Migration',
    icon: <Rocket className="w-6 h-6 text-[#0071E3]" />,
    description:
      'We import all your historical Excel data and launch your live software system with zero business disruption.',
  },
  {
    step: '06',
    title: 'Continuous Support',
    subtitle: 'SLA & Upgrades',
    icon: <Headphones className="w-6 h-6 text-[#0071E3]" />,
    description:
      'Ongoing technical support, automatic daily cloud backups, and feature upgrades as your SME expands.',
  },
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-transparent border-t border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
            Progressive Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight">
            How We Work.
          </h2>
          <p className="text-[#86868B] text-base font-normal leading-relaxed">
            From spreadsheet audit to live software deployment in focused 2 to 4-week sprint cycles.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mt-12 bg-white rounded-3xl p-6 md:p-10 border border-black/[0.08] shadow-sm">
          {/* Stepper Navigation */}
          <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-3 lg:w-1/3 pb-4 lg:pb-0 scrollbar-hide">
            {steps.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center gap-4 p-4 rounded-2xl text-left transition-all min-w-[240px] lg:min-w-0 flex-shrink-0 ${
                    isActive
                      ? 'bg-[#F5F5F7] border border-black/[0.08] shadow-sm'
                      : 'hover:bg-[#F5F5F7]/50 border border-transparent'
                  }`}
                >
                  <span
                    className={`text-sm font-bold font-mono transition-colors ${
                      isActive ? 'text-[#0071E3]' : 'text-[#86868B]'
                    }`}
                  >
                    {item.step}
                  </span>
                  <div>
                    <span
                      className={`block font-semibold text-sm transition-colors ${
                        isActive ? 'text-[#1D1D1F]' : 'text-[#86868B]'
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stepper Content Display */}
          <div className="lg:w-2/3 bg-[#F5F5F7] rounded-3xl p-8 sm:p-12 border border-black/[0.06] flex items-center shadow-inner relative overflow-hidden min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 max-w-xl z-10"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-center shadow-sm">
                  {steps[activeStep].icon}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight mb-2">
                    {steps[activeStep].title}
                  </h3>
                  <span className="text-sm font-semibold text-[#0071E3] tracking-wide uppercase">
                    {steps[activeStep].subtitle}
                  </span>
                </div>
                <p className="text-base text-[#86868B] leading-relaxed font-normal">
                  {steps[activeStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
            
            {/* Background Watermark */}
            <div className="absolute -bottom-10 -right-10 text-[180px] font-black text-black/[0.02] select-none pointer-events-none">
              {steps[activeStep].step}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
