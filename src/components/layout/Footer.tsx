'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#080B12] text-slate-300 text-sm relative z-10 overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Studio Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 p-1 rounded-xl bg-white flex items-center justify-center shadow-md">
                <Image
                  src="/logo_without_bg.png"
                  alt="Systemiq Logo"
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                SYSTEMIQ
              </span>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Engineering systems that scale businesses. We replace manual spreadsheets and disconnected tools with custom software built specifically for how your SME runs.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Custom Software
            </h4>
            <ul className="space-y-2 text-xs">
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
            </ul>
          </div>

          {/* Column 3: Studio & Process */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Studio & Careers
            </h4>
            <ul className="space-y-2 text-xs">
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
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold">
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
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Studio Contact
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Global Remote Studio</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a
                  href="mailto:contact@systemiq.tech"
                  className="hover:text-white transition underline underline-offset-4 decoration-slate-600"
                >
                  contact@systemiq.tech
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>+1 (800) SYSTEMIQ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Systemiq Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px]">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">⌘K</kbd>
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
