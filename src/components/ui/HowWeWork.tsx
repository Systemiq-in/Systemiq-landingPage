'use client';

import { motion } from 'framer-motion';
import {
  FileSearch,
  FileCode2,
  Cpu,
  ShieldCheck,
  Rocket,
  Headphones,
  CheckCircle,
} from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Workflow Audit',
    subtitle: 'Process Mapping',
    icon: <FileSearch className="w-5 h-5 text-blue-600" />,
    description:
      'We sit down with your team to review your current spreadsheets, manual workarounds, and daily pain points.',
  },
  {
    step: '02',
    title: 'System Blueprint',
    subtitle: 'Wireframes & Specs',
    icon: <FileCode2 className="w-5 h-5 text-indigo-600" />,
    description:
      'We design visual screen mockups and database architecture before any coding begins so you see the exact UI.',
  },
  {
    step: '03',
    title: 'Development Sprint',
    subtitle: 'Agile 2-Week Builds',
    icon: <Cpu className="w-5 h-5 text-blue-600" />,
    description:
      'Our studio builds your software in focused 2-week sprints. You test real working features every fortnight.',
  },
  {
    step: '04',
    title: 'Staff Training',
    subtitle: 'QA & Onboarding',
    icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
    description:
      'We test edge cases and onboard your team step-by-step to make software adoption completely frictionless.',
  },
  {
    step: '05',
    title: 'Smooth Go-Live',
    subtitle: 'Data Migration',
    icon: <Rocket className="w-5 h-5 text-blue-600" />,
    description:
      'We import all your historical Excel data and launch your live software system with zero business disruption.',
  },
  {
    step: '06',
    title: 'Continuous Support',
    subtitle: 'SLA & Upgrades',
    icon: <Headphones className="w-5 h-5 text-indigo-600" />,
    description:
      'Ongoing technical support, automatic daily cloud backups, and feature upgrades as your SME expands.',
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 bg-[#FAFAFA] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-600">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Predictable 6-Phase Sprint Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Work.
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            From spreadsheet audit to live software deployment in focused 2 to 4-week sprint cycles.
          </p>
        </div>

        {/* High-Density Compact 3x2 Grid (No wasted vertical space) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-md transition-all duration-200 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    Phase {item.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-xs font-bold text-slate-500 block mb-2">
                    {item.subtitle}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
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
