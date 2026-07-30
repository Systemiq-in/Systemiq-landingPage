'use client';

import Link from 'next/link';
import { Terminal, Home, ArrowLeft, Cpu, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#090909] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4F7CFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full glass-panel rounded-3xl p-8 border border-white/10 bg-[#0d0e12]/95 text-center space-y-6 relative z-10 shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="tech-tag text-red-400 bg-red-500/10 border-red-500/30">
            Error 404 · Route Not Found
          </span>
          <h1 className="text-3xl font-bold text-white tracking-tight">System Segment Missing</h1>
          <p className="text-xs sm:text-sm text-white/60">
            The target URL endpoint you requested does not exist on Systemiq Studio servers.
          </p>
        </div>

        {/* Terminal Diagnostic Block */}
        <div className="p-4 rounded-xl bg-black/80 border border-white/10 text-left font-mono text-xs space-y-1 text-white/70">
          <div className="flex justify-between text-white/40 border-b border-white/10 pb-1 mb-2">
            <span>Terminal Diagnostic</span>
            <span className="text-red-400">HTTP 404</span>
          </div>
          <p><span className="text-[#7AE7FF]">systemiq-cli:~$</span> route --check</p>
          <p><span className="text-red-400">[ERR_NOT_FOUND]:</span> Requested path returned null reference pointer.</p>
          <p><span className="text-[#4F7CFF]">Action:</span> Redirect to primary index recommended.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#4F7CFF] to-[#7AE7FF] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return to Studio Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/05 hover:bg-white/10 border border-white/10 text-white font-medium text-xs flex items-center justify-center gap-2 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
