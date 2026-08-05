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
              ? 'bg-[#090A0C]/40 backdrop-apple shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 border border-white/[0.08]' 
              : 'bg-[#090A0C]/60 backdrop-blur-md shadow-xl rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 border border-white/[0.05]'
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group mr-8">
            <div className="relative group-hover:scale-105 transition-transform duration-200 bg-white p-1 rounded-md">
              <Image
                src="/logo_without_bg.png"
                alt="Systemiq Logo"
                width={20}
                height={20}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-[14px] tracking-tight text-white flex items-center gap-1 hidden sm:flex">
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
                      ? 'text-white font-semibold bg-white/10 shadow-sm border border-white/5'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
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
              className="active-scale px-3 py-2 text-xs font-medium text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full flex items-center gap-2 transition-all shadow-sm border border-transparent hover:border-white/5"
              title="Search Systemiq (Cmd+K)"
            >
              <Command className="w-3.5 h-3.5 text-[#00A3FF]" />
              <span className="hidden xl:inline">Search</span>
              <kbd className="text-[10px] text-white/40 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">⌘K</kbd>
            </button>

            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="active-scale px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0071E3] to-[#00A3FF] text-xs font-semibold text-white flex items-center gap-1.5 shadow-[0_4px_20px_rgba(0,113,227,0.3)] hover:shadow-[0_8px_30px_rgba(0,113,227,0.5)]"
            >
              <span>Book Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={triggerCmdK}
              className="active-scale p-2 text-white/80 hover:text-white bg-white/5 rounded-full"
              aria-label="Search"
            >
              <Command className="w-4 h-4 text-[#00A3FF]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="active-scale p-2 text-white/80 hover:text-white bg-white/5 rounded-full"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[60px] z-[100] lg:hidden bg-[#090A0C]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-4">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                className="flex flex-col space-y-2"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`active-scale block text-lg font-semibold py-3 px-4 rounded-xl transition-all ${
                        pathname === link.href
                          ? 'bg-white/[0.05] text-[#00A3FF] border border-white/10'
                          : 'text-white/80 hover:bg-white/[0.03] hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6 mt-2 border-t border-white/[0.06] flex flex-col gap-3"
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsAuditModalOpen(true);
                  }}
                  className="active-scale w-full py-4 rounded-full bg-white text-black text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Book Free Workflow Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
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
