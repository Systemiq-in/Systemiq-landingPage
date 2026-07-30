'use client';

import { ShieldCheck, CheckCircle } from 'lucide-react';

const partners = [
  { name: 'Apex Industrial', category: 'Manufacturing SME', metric: '+340% throughput' },
  { name: 'OmniWholesale', category: 'Distribution', metric: '0% Stock Drift' },
  { name: 'Vertex Metals', category: 'Heavy Equipment', metric: '6-Sprint ERP Deploy' },
  { name: 'CareCore Supply', category: 'Pharma & Healthcare', metric: '100% Audit Ready' },
  { name: 'Horizon Logistics', category: 'Freight & Fleet', metric: '12K Monthly Bills' },
  { name: 'Strata Retail', category: 'Multi-Store B2B', metric: '$18M Order Volume' },
];

export default function TrustedSection() {
  return (
    <section className="py-16 bg-[#090909] border-y border-white/[0.06] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-mono tracking-widest text-white/40 uppercase flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#7AE7FF]" />
            Trusted by Growing Mid-Market Businesses & SMEs
          </p>
        </div>

        {/* Minimal Enterprise Logo / Partner Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="glass-card rounded-xl p-4 text-center border border-white/05 hover:border-[#4F7CFF]/40 transition group flex flex-col justify-center items-center"
            >
              <div className="flex items-center gap-1.5 mb-1 text-white font-bold text-sm group-hover:text-[#7AE7FF] transition-colors">
                <CheckCircle className="w-3.5 h-3.5 text-[#4F7CFF] shrink-0" />
                <span>{partner.name}</span>
              </div>
              <span className="text-[10px] font-mono text-white/40 block">
                {partner.category}
              </span>
              <span className="text-[10px] font-mono text-[#7AE7FF]/80 mt-1 block">
                {partner.metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
