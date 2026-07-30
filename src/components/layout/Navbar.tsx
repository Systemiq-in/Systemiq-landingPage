'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Menu, X, ArrowUpRight } from 'lucide-react';
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
            ? 'glass-header-studio py-3 shadow-xl'
            : 'bg-[#0B0F17]/80 backdrop-blur-md py-4 border-b border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 p-1 rounded-xl bg-white border border-slate-200 shadow-md group-hover:scale-105 transition-transform duration-200 flex items-center justify-center">
              <Image
                src="/logo_without_bg.png"
                alt="Systemiq Technologies Logo"
                width={28}
                height={28}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5 font-sans">
                SYSTEMIQ
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              </span>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-1 font-semibold">
                Business Systems Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-900/90 rounded-full px-4 py-1.5 border border-slate-800">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs xl:text-sm font-semibold transition-colors duration-200 ${
                    isActive ? 'text-blue-400 font-bold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderlineStudio"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-blue-500 rounded-full"
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
              className="px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg flex items-center gap-1.5 transition font-semibold"
              title="Search Systemiq (Cmd+K)"
            >
              <Command className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden xl:inline">Search</span>
              <kbd className="text-[10px] text-slate-400 bg-slate-800 px-1 rounded border border-slate-700">⌘K</kbd>
            </button>

            {/* Workflow Audit CTA */}
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-extrabold text-white flex items-center gap-1.5 transition-all shadow-lg shadow-blue-600/30 hover:scale-[1.02]"
            >
              <span>Book Free Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={triggerCmdK}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
              aria-label="Search"
            >
              <Command className="w-4 h-4 text-blue-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white bg-slate-900 rounded-lg border border-slate-800"
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
            className="fixed inset-x-0 top-[65px] z-[80] lg:hidden bg-[#0B0F17] border-b border-slate-800 px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold py-2.5 px-3 rounded-lg transition ${
                    pathname === link.href
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsAuditModalOpen(true);
                  }}
                  className="w-full py-3 rounded-xl bg-blue-600 text-white text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg"
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
