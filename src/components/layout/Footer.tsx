'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F7] text-[#86868B] text-xs relative z-10 border-t border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Studio Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 p-1 rounded-xl bg-white flex items-center justify-center border border-black/[0.08] shadow-sm">
                <Image
                  src="/logo_without_bg.png"
                  alt="Systemiq Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-base text-[#1D1D1F] tracking-tight">
                SYSTEMIQ
              </span>
            </Link>
            <p className="text-[#86868B] text-xs leading-relaxed max-w-sm font-normal">
              Engineering systems that scale businesses. We replace manual spreadsheets and disconnected tools with custom software built specifically for how your SME runs.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-black/[0.08] hover:border-[#0071E3] text-[#1D1D1F] flex items-center justify-center transition shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-black/[0.08] hover:border-[#0071E3] text-[#1D1D1F] flex items-center justify-center transition shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-black/[0.08] hover:border-[#0071E3] text-[#1D1D1F] flex items-center justify-center transition shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F]">
              Custom Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/solutions#erp" className="hover:text-[#1D1D1F] transition">
                  Custom ERP Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions#inventory" className="hover:text-[#1D1D1F] transition">
                  Inventory & Warehouses
                </Link>
              </li>
              <li>
                <Link href="/solutions#portals" className="hover:text-[#1D1D1F] transition">
                  B2B Dealer Portals
                </Link>
              </li>
              <li>
                <Link href="/solutions#crm" className="hover:text-[#1D1D1F] transition">
                  Sales & Quotation Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions#integrations" className="hover:text-[#1D1D1F] transition">
                  WhatsApp & Tally Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio & Careers */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F]">
              Company & Process
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#1D1D1F] transition">
                  About Systemiq
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-[#1D1D1F] transition">
                  Sprint Methodology
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-[#1D1D1F] transition">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#1D1D1F] transition">
                  Careers Network
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1D1D1F] transition">
                  Contact Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F]">
              Studio Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0071E3] shrink-0 mt-0.5" />
                <span>Global Remote Studio</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0071E3] shrink-0" />
                <a href="mailto:contact@systemiq.tech" className="hover:text-[#1D1D1F] transition underline">
                  contact@systemiq.tech
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0071E3] shrink-0" />
                <span>+1 (800) SYSTEMIQ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-black/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#86868B]">
          <div>
            © {new Date().getFullYear()} Systemiq Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#1D1D1F] transition">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#1D1D1F] transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
