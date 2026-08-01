'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Menu, X, ArrowUpRight } from 'lucide-react';
import WorkflowAuditModal from './WorkflowAuditModal';

const navLinks = [
  { name: 'Overview', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'Methodology', href: '/process' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerCmdK = () => {
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true,
      bubbles: true,
    });
    window.dispatchEvent(event);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${
          isScrolled
            ? 'glass-apple-nav py-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
            : 'bg-[#F5F5F7]/80 backdrop-blur-md py-4 border-b border-black/[0.06]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link 
            href="/" 
            className={`flex items-center gap-3 group transition-all duration-500 ${!isScrolled && pathname === '/' ? 'opacity-0 -translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}
          >
            <div className="relative w-8 h-8 p-1 rounded-xl bg-white border border-black/[0.08] shadow-sm group-hover:scale-105 transition-transform duration-200 flex items-center justify-center">
              <Image
                src="/logo_without_bg.png"
                alt="Systemiq Logo"
                width={24}
                height={24}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-[#1D1D1F] flex items-center gap-1">
                SYSTEMIQ
                <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3]" />
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors duration-200 rounded-full ${
                    isActive
                      ? 'text-[#0071E3] font-semibold bg-white shadow-sm border border-black/[0.06]'
                      : 'text-[#1D1D1F]/70 hover:text-[#1D1D1F]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={triggerCmdK}
              className="px-3 py-1.5 text-xs font-medium text-[#86868B] hover:text-[#1D1D1F] bg-white border border-black/[0.08] rounded-full flex items-center gap-1.5 transition shadow-sm"
              title="Search Systemiq (Cmd+K)"
            >
              <Command className="w-3.5 h-3.5 text-[#0071E3]" />
              <span className="hidden xl:inline">Search</span>
              <kbd className="text-[10px] text-[#86868B] bg-[#F5F5F7] px-1 rounded border border-black/[0.06]">⌘K</kbd>
            </button>

            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="px-5 py-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-xs font-semibold text-white flex items-center gap-1.5 transition-all shadow-sm hover:scale-[1.02]"
            >
              <span>Book Workflow Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={triggerCmdK}
              className="p-2 text-[#1D1D1F] bg-white rounded-full border border-black/[0.08]"
              aria-label="Search"
            >
              <Command className="w-4 h-4 text-[#0071E3]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1D1D1F] bg-white rounded-full border border-black/[0.08]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-[100] lg:hidden bg-white/98 border-b border-black/[0.08] px-6 py-6 shadow-xl max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2.5 px-3 rounded-xl transition ${
                    pathname === link.href
                      ? 'bg-[#F5F5F7] text-[#0071E3] font-semibold'
                      : 'text-[#1D1D1F] hover:bg-[#F5F5F7]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-black/[0.06] flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsAuditModalOpen(true);
                  }}
                  className="w-full py-3 rounded-full bg-[#0071E3] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Book Free Workflow Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <WorkflowAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </>
  );
}
