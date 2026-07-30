'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
import WorkflowAuditModal from './WorkflowAuditModal';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'Process', href: '/process' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
            ? 'glass-header py-3 shadow-2xl shadow-black/50'
            : 'bg-transparent py-5 border-b border-white/[0.04]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F7CFF] to-[#7AE7FF] p-[1px] shadow-lg shadow-[#4F7CFF]/20 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-[#090909] rounded-[7px] flex items-center justify-center">
                <Cpu className="w-4 h-4 text-[#7AE7FF] group-hover:rotate-90 transition-transform duration-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5 font-sans">
                SYSTEMIQ
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4F7CFF] animate-pulse" />
              </span>
              <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase -mt-1">
                Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 glass-panel rounded-full px-4 py-1.5 border border-white/05 bg-[#0d0e12]/60">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-white font-semibold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#4F7CFF] to-[#7AE7FF] rounded-full shadow-[0_0_8px_#7AE7FF]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Tools & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Cmd+K trigger */}
            <button
              onClick={triggerCmdK}
              className="px-2.5 py-1.5 text-xs font-mono text-white/60 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-lg flex items-center gap-1.5 transition"
              title="Search Systemiq (Cmd+K)"
            >
              <Command className="w-3.5 h-3.5 text-[#7AE7FF]" />
              <span className="hidden xl:inline">Search</span>
              <kbd className="text-[10px] text-white/40">⌘K</kbd>
            </button>

            {/* Workflow Audit CTA */}
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="relative group overflow-hidden rounded-lg p-[1px] transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#4F7CFF]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F7CFF] to-[#7AE7FF] opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative px-4 py-2 rounded-[7px] bg-[#090909] text-xs font-medium text-white group-hover:bg-transparent transition-colors flex items-center gap-1.5">
                <span>Book Free Audit</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#7AE7FF] group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={triggerCmdK}
              className="p-2 text-white/60 hover:text-white bg-white/05 rounded-lg border border-white/10"
              aria-label="Search"
            >
              <Command className="w-4 h-4 text-[#7AE7FF]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white bg-white/05 rounded-lg border border-white/10"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-[80] lg:hidden glass-panel bg-[#0d0e12]/95 border-b border-white/10 px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition ${
                    pathname === link.href
                      ? 'bg-[#4F7CFF]/15 text-[#7AE7FF] border border-[#4F7CFF]/30 font-semibold'
                      : 'text-white/70 hover:text-white hover:bg-white/05'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsAuditModalOpen(true);
                  }}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#4F7CFF] to-[#3B62E6] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#4F7CFF]/20"
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
