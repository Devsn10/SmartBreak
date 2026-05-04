/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Session } from '../types';

interface HistoryListProps {
  sessions: Session[];
}

export default function HistoryList({ sessions }: HistoryListProps) {
  return (
    <div className="flex-1 bg-surface-dark border border-border-dark rounded-2xl p-6 overflow-y-auto max-h-[400px]">
      <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {sessions.length === 0 ? (
          <div className="text-center py-8 text-slate-600 text-sm italic">
            No sessions completed yet.
          </div>
        ) : (
          sessions.map((session) => (
            <div 
              key={session.id}
              className={`flex items-center gap-3 p-3 bg-background-dark rounded-xl border border-border-dark transition-all ${
                session.completed ? 'opacity-100' : 'opacity-60'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${
                session.type === 'focus' ? 'bg-accent-indigo' : 'bg-accent-emerald'
              }`} />
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-200">
                  {session.type === 'focus' ? 'Deep Work Session' : 'Refresh Break'}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {session.duration} mins • {session.mood || 'Standard'} Mood
                </div>
              </div>
              <div className="text-[10px] font-bold text-slate-600">
                {new Date(session.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
