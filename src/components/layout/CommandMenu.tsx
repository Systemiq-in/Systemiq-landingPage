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
      icon: <Home className="w-4 h-4 text-blue-600" />,
      url: '/',
    },
    {
      id: 'about',
      title: 'About Systemiq Studio',
      category: 'Pages',
      icon: <Info className="w-4 h-4 text-indigo-600" />,
      url: '/about',
    },
    {
      id: 'solutions',
      title: 'Custom Solutions (ERP, CRM, Portals)',
      category: 'Pages',
      icon: <Layers className="w-4 h-4 text-blue-600" />,
      url: '/solutions',
    },
    {
      id: 'industries',
      title: 'Featured Industries',
      category: 'Pages',
      icon: <Building2 className="w-4 h-4 text-indigo-600" />,
      url: '/industries',
    },
    {
      id: 'process',
      title: 'Sprint Methodology & Process',
      category: 'Pages',
      icon: <GitBranch className="w-4 h-4 text-blue-600" />,
      url: '/process',
    },
    {
      id: 'case-studies',
      title: 'Case Studies & Metrics',
      category: 'Pages',
      icon: <FolderGit2 className="w-4 h-4 text-indigo-600" />,
      url: '/case-studies',
    },
    {
      id: 'careers',
      title: 'Careers & Builder Network',
      category: 'Pages',
      icon: <Users className="w-4 h-4 text-blue-600" />,
      url: '/careers',
      badge: 'Fellowship',
    },
    {
      id: 'contact',
      title: 'Contact Engineering Team',
      category: 'Pages',
      icon: <Mail className="w-4 h-4 text-indigo-600" />,
      url: '/contact',
    },
    {
      id: 'audit-action',
      title: 'Book Free Workflow Audit',
      category: 'Actions',
      icon: <Calendar className="w-4 h-4 text-blue-600" />,
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
      icon: <Terminal className="w-4 h-4 text-slate-500" />,
      url: '/solutions#erp',
    },
    {
      id: 'inventory-solution',
      title: 'Inventory & Warehouse Automation',
      category: 'Solutions',
      icon: <FileCode className="w-4 h-4 text-slate-500" />,
      url: '/solutions#inventory',
    },
    {
      id: 'dealer-portal',
      title: 'B2B Dealer & Admin Portals',
      category: 'Solutions',
      icon: <Zap className="w-4 h-4 text-slate-500" />,
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
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[150] flex items-start justify-center pt-20 sm:pt-28 p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
            />

            {/* Command Palette Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.15 }}
              className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl z-10 overflow-hidden"
            >
              {/* Input Header */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200">
                <Search className="w-4 h-4 text-blue-600" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search pages or actions... (e.g. ERP, Process, Fellowship)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-sans"
                />
                <kbd className="px-2 py-0.5 text-[10px] font-mono text-slate-500 bg-slate-100 rounded border border-slate-200 flex items-center gap-1">
                  <Command className="w-3 h-3" /> K
                </kbd>
              </div>

              {/* Command List */}
              <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-100">
                {filteredCommands.length === 0 ? (
                  <div className="py-8 text-center text-xs text-slate-400 font-sans">
                    No matching commands or pages found.
                  </div>
                ) : (
                  <div className="space-y-1">
                    {filteredCommands.map((cmd) => (
                      <button
                        key={cmd.id}
                        onClick={() => handleSelect(cmd)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm text-slate-700 hover:text-slate-900 hover:bg-blue-50 transition group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 group-hover:border-blue-300 transition">
                            {cmd.icon}
                          </div>
                          <span className="font-semibold">{cmd.title}</span>
                          {cmd.badge && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                              {cmd.badge}
                            </span>
                          )}
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-blue-600 transition-all -translate-x-1 group-hover:translate-x-0" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div className="px-4 py-2 border-t border-slate-100 bg-slate-50 flex justify-between items-center text-[11px] text-slate-500 font-semibold">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Systemiq Navigation
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
