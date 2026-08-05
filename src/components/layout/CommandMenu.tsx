'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
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
      icon: <Home className="w-4 h-4 text-[#0071E3]" />,
      url: '/',
    },
    {
      id: 'about',
      title: 'About Systemiq Studio',
      category: 'Pages',
      icon: <Info className="w-4 h-4 text-[#0EA5E9]" />,
      url: '/about',
    },
    {
      id: 'solutions',
      title: 'Custom Solutions (ERP, CRM, Portals)',
      category: 'Pages',
      icon: <Layers className="w-4 h-4 text-[#0071E3]" />,
      url: '/solutions',
    },
    {
      id: 'industries',
      title: 'Featured Industries',
      category: 'Pages',
      icon: <Building2 className="w-4 h-4 text-[#0EA5E9]" />,
      url: '/industries',
    },
    {
      id: 'process',
      title: 'Sprint Methodology & Process',
      category: 'Pages',
      icon: <GitBranch className="w-4 h-4 text-[#0071E3]" />,
      url: '/process',
    },
    {
      id: 'case-studies',
      title: 'Case Studies & Metrics',
      category: 'Pages',
      icon: <FolderGit2 className="w-4 h-4 text-[#0EA5E9]" />,
      url: '/case-studies',
    },
    {
      id: 'careers',
      title: 'Careers & Builder Network',
      category: 'Pages',
      icon: <Users className="w-4 h-4 text-[#0071E3]" />,
      url: '/careers',
      badge: 'Fellowship',
    },
    {
      id: 'contact',
      title: 'Contact Engineering Team',
      category: 'Pages',
      icon: <Mail className="w-4 h-4 text-[#0EA5E9]" />,
      url: '/contact',
    },
    {
      id: 'audit-action',
      title: 'Book Free Workflow Audit',
      category: 'Actions',
      icon: <Calendar className="w-4 h-4 text-[#0071E3]" />,
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
      icon: <Terminal className="w-4 h-4 text-white/50" />,
      url: '/solutions#erp',
    },
    {
      id: 'inventory-solution',
      title: 'Inventory & Warehouse Automation',
      category: 'Solutions',
      icon: <FileCode className="w-4 h-4 text-white/50" />,
      url: '/solutions#inventory',
    },
    {
      id: 'dealer-portal',
      title: 'B2B Dealer & Admin Portals',
      category: 'Solutions',
      icon: <Zap className="w-4 h-4 text-white/50" />,
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
      <>
        {isOpen && (
          <div className="fixed inset-0 z-[150] flex items-start justify-center pt-20 sm:pt-28 p-4">
            {/* Backdrop */}
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#090A0C]/80 backdrop-apple"
            />

            {/* Command Palette Card */}
            <div
              className="relative w-full max-w-xl bg-[#13151A]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-10 overflow-hidden"
            >
              {/* Input Header */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08]">
                <Search className="w-4 h-4 text-[#00A3FF]" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search pages or actions... (e.g. ERP, Process, Fellowship)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none font-sans"
                />
                <kbd className="px-2 py-0.5 text-[10px] font-mono text-white/50 bg-white/[0.04] rounded border border-white/10 flex items-center gap-1">
                  <Command className="w-3 h-3" /> K
                </kbd>
              </div>

              {/* Command List */}
              <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/[0.02]">
                {filteredCommands.length === 0 ? (
                  <div className="py-8 text-center text-xs text-white/40 font-sans">
                    No matching commands or pages found.
                  </div>
                ) : (
                  <div className="space-y-1">
                    {filteredCommands.map((cmd) => (
                      <button
                        key={cmd.id}
                        onClick={() => handleSelect(cmd)}
                        className="active-scale w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm text-white/70 hover:text-white hover:bg-white/[0.04] transition group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/10 group-hover:border-[#0071E3]/50 transition">
                            {cmd.icon}
                          </div>
                          <span className="font-semibold">{cmd.title}</span>
                          {cmd.badge && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#0071E3]/10 text-[#00A3FF] border border-[#0071E3]/20">
                              {cmd.badge}
                            </span>
                          )}
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#00A3FF] transition-all -translate-x-1 group-hover:translate-x-0" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div className="px-4 py-3 border-t border-white/[0.08] bg-[#090A0C]/50 flex justify-between items-center text-[11px] text-white/40 font-semibold">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse" />
                  Systemiq Navigation
                </span>
                <span>Press ESC to exit</span>
              </div>
            </div>
          </div>
        )}
      </>

      <WorkflowAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </>
  );
}
