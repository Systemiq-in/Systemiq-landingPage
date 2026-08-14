'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin } from 'lucide-react';
import { site } from '@/content/site';

export default function Footer() {
  return (
    <footer className="bg-[#090A0C] text-white/50 text-xs relative z-10 border-t border-white/[0.08]">
      {/* Horizontal Branding Strip for Logo */}
      <div className="w-full bg-[#F5F5F7] border-b border-black/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo_without_bg.png"
                alt="Systemiq Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-[#1D1D1F] flex items-center gap-1">
              SYSTEMIQ
              <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3]" />
            </span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Studio Info */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-bold text-base text-white tracking-tight uppercase">
              Business Systems Studio
            </h3>
            <p className="text-white/50 text-xs leading-relaxed max-w-sm font-normal">
              {site.tagline} I replace manual spreadsheets and disconnected tools with software
              built around how your business actually runs.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={site.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-8 px-4 rounded-full bg-[#13151A] border border-white/[0.08] hover:border-emerald-500/50 hover:bg-emerald-500/10 text-white/80 hover:text-white transition shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold">WhatsApp</span>
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center gap-2 h-8 px-4 rounded-full bg-[#13151A] border border-white/[0.08] hover:border-[#0071E3] hover:bg-[#0071E3]/10 text-white/80 hover:text-white transition shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold">Email</span>
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-8 px-4 rounded-full bg-[#13151A] border border-white/[0.08] hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 text-white/80 hover:text-white transition shadow-sm"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold">LinkedIn</span>
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-8 px-4 rounded-full bg-[#13151A] border border-white/[0.08] hover:border-[#E1306C]/60 hover:bg-[#E1306C]/10 text-white/80 hover:text-white transition shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold">Instagram</span>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Custom Solutions
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

          {/* Studio & Careers */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Company & Process
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
                <Link href="/careers" className="hover:text-white transition">
                  Collaborate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0071E3] shrink-0 mt-0.5" />
                <span>{site.contact.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0071E3] shrink-0" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-white transition break-all"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0071E3] shrink-0" />
                <a href={`tel:${site.contact.phoneRaw}`} className="hover:text-white transition">
                  {site.contact.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} {site.name}. Built and run by {site.operator.name}.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
