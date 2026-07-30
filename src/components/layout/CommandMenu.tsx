'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Home,
  Info,
  Layers,
  Building2,
  GitBranch,
  FolderGit2,
  Users,
  Mail,
  Calendar,
  Command,
  ArrowRight,
  Terminal,
  FileCode,
  Zap,
} from 'lucide-react';
import WorkflowAuditModal from './WorkflowAuditModal';

interface NavCommand {
  id: string;
  title: string;
  category: 'Pages' | 'Solutions' | 'Actions';
  icon: React.ReactNode;
  url?: string;
  action?: () => void;
  badge?: string;
}

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const commands: NavCommand[] = [
    {
      id: 'home',
      title: 'Home Page',
      category: 'Pages',
      icon: <Home className="w-4 h-4 text-[#7AE7FF]" />,
      url: '/',
    },
    {
      id: 'about',
      title: 'About Systemiq Studio',
      category: 'Pages',
      icon: <Info className="w-4 h-4 text-[#4F7CFF]" />,
      url: '/about',
    },
    {
      id: 'solutions',
      title: 'Custom Solutions (ERP, CRM, Portals)',
      category: 'Pages',
      icon: <Layers className="w-4 h-4 text-[#7AE7FF]" />,
      url: '/solutions',
    },
    {
      id: 'industries',
      title: 'Featured Industries',
      category: 'Pages',
      icon: <Building2 className="w-4 h-4 text-[#4F7CFF]" />,
      url: '/industries',
    },
    {
      id: 'process',
      title: 'Sprint Methodology & Process',
      category: 'Pages',
      icon: <GitBranch className="w-4 h-4 text-[#7AE7FF]" />,
      url: '/process',
    },
    {
      id: 'case-studies',
      title: 'Case Studies & Production Metrics',
      category: 'Pages',
      icon: <FolderGit2 className="w-4 h-4 text-[#4F7CFF]" />,
      url: '/case-studies',
    },
    {
      id: 'careers',
      title: 'Careers & Builder Network',
      category: 'Pages',
      icon: <Users className="w-4 h-4 text-[#7AE7FF]" />,
      url: '/careers',
      badge: 'Hiring',
    },
    {
      id: 'contact',
      title: 'Contact Engineering Team',
      category: 'Pages',
      icon: <Mail className="w-4 h-4 text-[#4F7CFF]" />,
      url: '/contact',
    },
    {
      id: 'audit-action',
      title: 'Book Free Workflow Audit',
      category: 'Actions',
      icon: <Calendar className="w-4 h-4 text-[#7AE7FF]" />,
      action: () => {
        setIsOpen(false);
        setIsAuditModalOpen(true);
      },
      badge: 'Free',
    },
    {
      id: 'erp-solution',
      title: 'Custom ERP Systems',
      category: 'Solutions',
      icon: <Terminal className="w-4 h-4 text-white/60" />,
      url: '/solutions#erp',
    },
    {
      id: 'inventory-solution',
      title: 'Inventory & Warehouse Automation',
      category: 'Solutions',
      icon: <FileCode className="w-4 h-4 text-white/60" />,
      url: '/solutions#inventory',
    },
    {
      id: 'dealer-portal',
      title: 'B2B Dealer & Admin Portals',
      category: 'Solutions',
      icon: <Zap className="w-4 h-4 text-white/60" />,
      url: '/solutions#portals',
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (cmd: NavCommand) => {
    setIsOpen(false);
    setQuery('');
    if (cmd.action) {
      cmd.action();
    } else if (cmd.url) {
      router.push(cmd.url);
    }
  };

  return (
    <>
      {/* Global Shortcut Button Trigger (In header or footer if needed) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[150] flex items-start justify-center pt-20 sm:pt-28 p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Command Palette Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.15 }}
              className="relative w-full max-w-xl glass-panel bg-[#0c0d10]/95 border border-white/10 rounded-2xl shadow-2xl z-10 overflow-hidden"
            >
              {/* Input Header */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
                <Search className="w-4 h-4 text-[#7AE7FF]" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Type a command or search pages... (e.g. ERP, Process, Careers)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
                />
                <kbd className="px-2 py-0.5 text-[10px] font-mono text-white/50 bg-white/10 rounded border border-white/10 flex items-center gap-1">
                  <Command className="w-3 h-3" /> K
                </kbd>
              </div>

              {/* Command List */}
              <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/[0.04]">
                {filteredCommands.length === 0 ? (
                  <div className="py-8 text-center text-xs text-white/40 font-mono">
                    No matching commands or pages found.
                  </div>
                ) : (
                  <div>
                    {filteredCommands.map((cmd) => (
                      <button
                        key={cmd.id}
                        onClick={() => handleSelect(cmd)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm text-white/80 hover:text-white hover:bg-white/[0.06] transition group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 rounded-md bg-white/[0.04] border border-white/05 group-hover:border-[#4F7CFF]/40 transition">
                            {cmd.icon}
                          </div>
                          <span>{cmd.title}</span>
                          {cmd.badge && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#4F7CFF]/20 text-[#7AE7FF] border border-[#4F7CFF]/30">
                              {cmd.badge}
                            </span>
                          )}
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#7AE7FF] transition-all -translate-x-1 group-hover:translate-x-0" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div className="px-4 py-2 border-t border-white/05 bg-white/[0.02] flex justify-between items-center text-[11px] text-white/40 font-mono">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Systemiq Command Center
                </span>
                <span>Press ESC to exit</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <WorkflowAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </>
  );
}
