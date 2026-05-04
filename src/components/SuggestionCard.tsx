/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Zap, ChevronRight } from 'lucide-react';
import { Suggestion, Mood } from '../types';

interface SuggestionCardProps {
  suggestion: Suggestion | null;
  mood: Mood | null;
  onNext: () => void;
}

export default function SuggestionCard({ suggestion, mood, onNext }: SuggestionCardProps) {
  if (!suggestion) return null;

  return (
    <div className="bg-gradient-to-br from-surface-dark to-background-dark border border-border-dark rounded-3xl p-8 flex items-center gap-8 group transition-all hover:border-accent-emerald/30">
      <div className="w-20 h-20 bg-accent-emerald/10 rounded-2xl flex items-center justify-center border border-accent-emerald/20 group-hover:bg-accent-emerald/20 transition-all">
        <Zap className="w-10 h-10 text-accent-emerald" />
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] uppercase font-bold text-accent-emerald tracking-wider bg-accent-emerald/10 px-2 py-0.5 rounded">
            {suggestion.category} Break
          </span>
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest leading-none">
            Next Suggestion
          </span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          {suggestion.title}
        </h2>
        <p className="text-slate-400 text-sm mt-1 leading-relaxed">
          {mood ? `Ideal for your current "${mood}" state. ` : ''}
          {suggestion.description}
        </p>
      </div>

      <button 
        onClick={onNext}
        className="p-4 bg-border-dark rounded-2xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all active:scale-90"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
