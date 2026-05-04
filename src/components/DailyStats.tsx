/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppState } from '../types';

interface DailyStatsProps {
  state: AppState;
}

export default function DailyStats({ state }: DailyStatsProps) {
  const totalMinutes = state.history.reduce((acc, s) => acc + s.duration, 0);
  const totalSessions = state.history.filter(s => s.type === 'focus').length;
  
  // Simulated goal of 8 focus sessions or 200 minutes
  const progress = Math.min(Math.round((totalMinutes / 200) * 100), 100);

  return (
    <div className="bg-surface-dark border border-border-dark rounded-2xl p-6 shadow-sm">
      <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Daily Progress</h3>
      <div className="flex items-end gap-2 mb-2">
        <span className="text-4xl font-bold text-white">{progress}%</span>
        <span className="text-sm text-accent-emerald mb-1 font-medium">+12% vs yesterday</span>
      </div>
      <div className="w-full bg-border-dark h-2 rounded-full overflow-hidden">
        <div 
          className="bg-accent-indigo h-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-background-dark p-3 rounded-xl border border-border-dark">
          <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Sessions</div>
          <div className="text-lg font-bold text-white">{totalSessions.toString().padStart(2, '0')}</div>
        </div>
        <div className="bg-background-dark p-3 rounded-xl border border-border-dark">
          <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Minutes</div>
          <div className="text-lg font-bold text-white">{totalMinutes}</div>
        </div>
      </div>
    </div>
  );
}
