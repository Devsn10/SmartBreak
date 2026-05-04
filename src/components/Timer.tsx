/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { formatTime } from '../lib/utils';

interface TimerProps {
  timeLeft: number;
  progress: number;
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  durations: number[];
  currentDuration: number;
  onDurationChange: (duration: number) => void;
}

export default function Timer({ 
  timeLeft, 
  progress, 
  isRunning, 
  onStart, 
  onPause, 
  onReset,
  durations,
  currentDuration,
  onDurationChange
}: TimerProps) {
  return (
    <div className="bg-surface-dark border border-border-dark rounded-3xl p-12 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
      {/* Progress Bar at the top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent-indigo/10">
        <div 
          className="h-full bg-accent-indigo transition-all duration-300 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Timer Display */}
      <div className="text-[8rem] sm:text-[12rem] font-black leading-none tracking-tighter text-white font-mono drop-shadow-2xl">
        {formatTime(timeLeft)}
      </div>

      {/* Primary Controls */}
      <div className="flex gap-4 mt-8">
        <button 
          onClick={isRunning ? onPause : onStart}
          className="px-12 py-4 bg-accent-indigo hover:bg-accent-indigo/90 text-white font-bold rounded-2xl shadow-lg shadow-accent-indigo/20 transition-all active:scale-95"
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button 
          onClick={onReset}
          className="px-12 py-4 bg-border-dark hover:bg-slate-800 text-white font-bold rounded-2xl transition-all active:scale-95"
        >
          Reset
        </button>
      </div>

      {/* Duration Selector */}
      <div className="flex gap-2 mt-8">
        {durations.map((d) => (
          <button 
            key={d}
            onClick={() => onDurationChange(d)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              currentDuration === d * 60 
                ? 'bg-accent-indigo/10 border border-accent-indigo/50 text-accent-indigo font-bold' 
                : 'bg-background-dark border border-border-dark text-slate-400 hover:text-white'
            }`}
          >
            {d}m
          </button>
        ))}
      </div>
    </div>
  );
}
