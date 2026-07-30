'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070708] border-t border-white/[0.08] text-white/60 text-sm relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Studio Info Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 p-1 rounded-lg bg-white/90 border border-white/30 flex items-center justify-center">
                <Image
                  src="/logo_without_bg.png"
                  alt="Systemiq Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                SYSTEMIQ
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Engineering systems that scale businesses. We replace manual spreadsheets and disconnected tools with custom software built specifically for how your SME runs.
            </p>
            <div className="flex items-center gap-3 pt-1">
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
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/40">
              Custom Software
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solutions#erp" className="hover:text-white transition">
                  Custom ERP Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions#inventory" className="hover:text-white transition">
                  Inventory & Warehouses
                </Link>
              </li>
              <li>
                <Link href="/solutions#portals" className="hover:text-white transition">
                  B2B Dealer Portals
                </Link>
              </li>
              <li>
                <Link href="/solutions#crm" className="hover:text-white transition">
                  Sales & Quotation Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions#integrations" className="hover:text-white transition">
                  WhatsApp & Tally Integration
                </Link>
              </li>
              <li>
                <Link href="/solutions#dashboards" className="hover:text-white transition">
                  Executive Dashboards
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio & Process */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/40">
              Studio & Careers
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
                  Client Case Studies
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
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/40">
              Studio Contact
            </h4>
            <ul className="space-y-3 text-sm font-mono text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#7AE7FF] shrink-0 mt-0.5" />
                <span>Business Systems Studio · Global Remote</span>
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
              <li className="pt-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 text-[#7AE7FF] text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Now Booking Q3 SME Sprints</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © {new Date().getFullYear()} Systemiq Technologies. All rights reserved.
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
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
