'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Menu, X, ArrowUpRight } from 'lucide-react';
import WorkflowAuditModal from './WorkflowAuditModal';

const navLinks = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Methodology', href: '/process' },
  { name: 'Fellowship', href: '/careers' },
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
      <div className="fixed top-0 sm:top-4 inset-x-0 z-[100] flex justify-center px-4 transition-all duration-500">
        <div 
          className={`flex items-center justify-between w-full lg:w-auto transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 border border-white/20' 
              : 'bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 border border-white/10'
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group mr-8">
            <div className="relative group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo_without_bg.png"
                alt="Systemiq Logo"
                width={22}
                height={22}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-[14px] tracking-tight text-[#1D1D1F] flex items-center gap-1 hidden sm:flex">
              SYSTEMIQ
              <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3]" />
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 mr-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-[13px] font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-[#0071E3] font-semibold bg-black/5 shadow-sm'
                      : 'text-[#1D1D1F]/70 hover:text-[#1D1D1F] hover:bg-black/5'
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
              className="px-3 py-2 text-xs font-medium text-[#1D1D1F]/60 hover:text-[#1D1D1F] bg-black/5 hover:bg-black/10 rounded-full flex items-center gap-2 transition-all shadow-sm"
              title="Search Systemiq (Cmd+K)"
            >
              <Command className="w-3.5 h-3.5 text-[#0071E3]" />
              <span className="hidden xl:inline">Search</span>
              <kbd className="text-[10px] text-[#1D1D1F]/50 bg-black/10 px-1.5 py-0.5 rounded">⌘K</kbd>
            </button>

            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0071E3] to-[#00A3FF] text-xs font-semibold text-white flex items-center gap-1.5 transition-all shadow-[0_4px_20px_rgba(0,113,227,0.3)] hover:shadow-[0_8px_30px_rgba(0,113,227,0.5)] hover:scale-105"
            >
              <span>Book Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={triggerCmdK}
              className="p-2 text-[#1D1D1F] bg-black/5 rounded-full"
              aria-label="Search"
            >
              <Command className="w-4 h-4 text-[#0071E3]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1D1D1F] bg-black/5 rounded-full"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-[100] lg:hidden bg-[#090A0C]/98 backdrop-blur-3xl border-b border-white/[0.08] px-6 py-6 shadow-xl max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2.5 px-3 rounded-xl transition ${
                    pathname === link.href
                      ? 'bg-[#13151A] text-[#0071E3] font-semibold border border-white/[0.08]'
                      : 'text-white/80 hover:bg-[#13151A]/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-3">
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
