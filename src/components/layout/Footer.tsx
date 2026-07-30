'use client';

import Link from 'next/link';
import { Cpu, Github, Linkedin, Twitter, ArrowUpRight, Mail, Phone, MapPin, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070708] border-t border-white/[0.08] text-white/60 text-sm relative z-10 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#4F7CFF]/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4F7CFF]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Studio Info Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F7CFF] to-[#7AE7FF] p-[1px]">
                <div className="w-full h-full bg-[#090909] rounded-[7px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-[#7AE7FF]" />
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                SYSTEMIQ
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Engineering systems that scale businesses. We replace manual spreadsheets and fragmented tools with bespoke, enterprise-grade software built for growing SMEs.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 hover:border-[#4F7CFF]/50 hover:bg-[#4F7CFF]/10 text-white/70 hover:text-white flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 hover:border-[#4F7CFF]/50 hover:bg-[#4F7CFF]/10 text-white/70 hover:text-white flex items-center justify-center transition"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 hover:border-[#4F7CFF]/50 hover:bg-[#4F7CFF]/10 text-white/70 hover:text-white flex items-center justify-center transition"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/40">
              Systems Studio
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solutions#erp" className="hover:text-white transition">
                  Custom ERP Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions#inventory" className="hover:text-white transition">
                  Inventory & Warehouse
                </Link>
              </li>
              <li>
                <Link href="/solutions#portals" className="hover:text-white transition">
                  B2B Dealer Portals
                </Link>
              </li>
              <li>
                <Link href="/solutions#crm" className="hover:text-white transition">
                  Sales & CRM Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions#integrations" className="hover:text-white transition">
                  WhatsApp & Tally Integration
                </Link>
              </li>
              <li>
                <Link href="/solutions#dashboards" className="hover:text-white transition">
                  Admin Command Dashboards
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio & Process */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/40">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Systemiq
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition">
                  Sprint Methodology
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition">
                  Case Studies & Metrics
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  Builder Network
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#4F7CFF]/20 text-[#7AE7FF]">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/40">
              Studio Headquarters
            </h4>
            <ul className="space-y-3 text-sm font-mono text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#7AE7FF] shrink-0 mt-0.5" />
                <span>Global SME Systems Studio · Remote-First</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#4F7CFF] shrink-0" />
                <a
                  href="mailto:contact@systemiq.tech"
                  className="hover:text-white transition underline underline-offset-4 decoration-white/20"
                >
                  contact@systemiq.tech
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#7AE7FF] shrink-0" />
                <span>+1 (800) SYSTEMIQ</span>
              </li>
              <li className="pt-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 text-[#7AE7FF] text-[11px]">
                  <Terminal className="w-3 h-3" />
                  <span>Sprint Status: Accepting Q3 SME Cohort</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Systemiq Technologies Studio. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px]">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10 text-white/70">⌘K</kbd>
              <span>Command Palette</span>
            </span>
            <Link href="/contact" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
