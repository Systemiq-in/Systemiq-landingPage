'use client';

import { motion } from 'framer-motion';
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
    icon: <FileSearch className="w-5 h-5 text-[#0071E3]" />,
    description:
      'We sit down with your team to review your current spreadsheets, manual workarounds, and daily pain points.',
  },
  {
    step: '02',
    title: 'System Blueprint',
    subtitle: 'Wireframes & Specs',
    icon: <FileCode2 className="w-5 h-5 text-[#0071E3]" />,
    description:
      'We design visual screen mockups and database architecture before any coding begins so you see the exact UI.',
  },
  {
    step: '03',
    title: 'Development Sprint',
    subtitle: 'Agile 2-Week Builds',
    icon: <Cpu className="w-5 h-5 text-[#0071E3]" />,
    description:
      'Our studio builds your software in focused 2-week sprints. You test real working features every fortnight.',
  },
  {
    step: '04',
    title: 'Staff Training',
    subtitle: 'QA & Onboarding',
    icon: <ShieldCheck className="w-5 h-5 text-[#0071E3]" />,
    description:
      'We test edge cases and onboard your team step-by-step to make software adoption completely frictionless.',
  },
  {
    step: '05',
    title: 'Smooth Go-Live',
    subtitle: 'Data Migration',
    icon: <Rocket className="w-5 h-5 text-[#0071E3]" />,
    description:
      'We import all your historical Excel data and launch your live software system with zero business disruption.',
  },
  {
    step: '06',
    title: 'Continuous Support',
    subtitle: 'SLA & Upgrades',
    icon: <Headphones className="w-5 h-5 text-[#0071E3]" />,
    description:
      'Ongoing technical support, automatic daily cloud backups, and feature upgrades as your SME expands.',
  },
];

export default function HowWeWork() {
  return (
    <section className="py-16 lg:py-20 bg-transparent border-t border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-[#0071E3] tracking-wide uppercase">
            6-Phase Sprint Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight">
            How We Work.
          </h2>
          <p className="text-[#86868B] text-base font-normal leading-relaxed">
            From spreadsheet audit to live software deployment in focused 2 to 4-week sprint cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white rounded-3xl p-8 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-200 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#F5F5F7] border border-black/[0.06] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-[#0071E3] bg-[#F5F5F7] px-3 py-1 rounded-full border border-black/[0.06]">
                    Phase {item.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1D1D1F] tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-xs font-medium text-[#86868B] block mb-2">
                    {item.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
