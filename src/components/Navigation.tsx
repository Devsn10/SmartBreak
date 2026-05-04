/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Layout, History, BarChart3, Settings } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="h-16 px-8 flex items-center justify-between border-b border-border-dark bg-surface-dark/50 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-accent-indigo rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
        </div>
        <span className="text-xl font-bold tracking-tight text-white font-sans">SmartBreak</span>
      </div>
      
      <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
        <button className="flex items-center gap-2 hover:text-white transition-colors">
          <Layout className="w-4 h-4" />
          <span className="hidden sm:inline">Sessions</span>
        </button>
        <button className="flex items-center gap-2 hover:text-white transition-colors">
          <BarChart3 className="w-4 h-4" />
          <span className="hidden sm:inline">Analytics</span>
        </button>
        <button className="flex items-center gap-2 hover:text-white transition-colors">
          <Settings className="w-4 h-4" />
          <span className="hidden sm:inline">Settings</span>
        </button>
        <div className="w-9 h-9 rounded-full bg-border-dark border border-slate-800 flex items-center justify-center text-xs font-bold text-slate-300">
          JD
        </div>
      </div>
    </nav>
  );
}
