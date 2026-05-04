/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback, useEffect } from 'react';
import Navigation from './components/Navigation';
import Timer from './components/Timer';
import SuggestionCard from './components/SuggestionCard';
import HistoryList from './components/HistoryList';
import DailyStats from './components/DailyStats';
import { useTimer } from './hooks/useTimer';
import { storageService } from './services/storageService';
import { suggestionService } from './services/suggestionService';
import { AppState, Mood, Session, Suggestion } from './types';

export default function App() {
  const [appState, setAppState] = useState<AppState>(() => storageService.getState());
  const [currentMood, setCurrentMood] = useState<Mood>('Focused');
  const [currentSuggestion, setCurrentSuggestion] = useState<Suggestion | null>(null);
  const [isBreakMode, setIsBreakMode] = useState(false);

  const handleSessionComplete = useCallback(() => {
    const durationMins = isBreakMode 
      ? appState.settings.defaultBreakDuration 
      : appState.settings.defaultFocusDuration;

    const newSession: Session = {
      id: Math.random().toString(36).substring(7),
      date: new Date().toISOString(),
      duration: durationMins,
      mood: currentMood,
      type: isBreakMode ? 'break' : 'focus',
      completed: true,
    };

    storageService.addSession(newSession);
    setAppState(storageService.getState());

    if (!isBreakMode) {
      // Transition to break mode
      setIsBreakMode(true);
      const suggestion = suggestionService.getSuggestion(currentMood);
      setCurrentSuggestion(suggestion);
    } else {
      // Back to focus mode
      setIsBreakMode(false);
      setCurrentSuggestion(null);
    }
  }, [isBreakMode, appState.settings, currentMood]);

  const {
    timeLeft,
    progress,
    isRunning,
    startTimer,
    pauseTimer,
    resetTimer
  } = useTimer(
    isBreakMode ? appState.settings.defaultBreakDuration : appState.settings.defaultFocusDuration,
    handleSessionComplete
  );

  const handleNextSuggestion = useCallback(() => {
    setCurrentSuggestion(suggestionService.getSuggestion(currentMood));
  }, [currentMood]);

  const handleDurationChange = useCallback((mins: number) => {
    resetTimer(mins);
  }, [resetTimer]);

  const toggleMood = useCallback((mood: Mood) => {
    setCurrentMood(mood);
  }, []);

  return (
    <div className="bg-background-dark text-slate-200 min-h-screen flex flex-col font-sans select-none antialiased">
      <Navigation />

      <main className="flex-1 flex flex-col lg:flex-row p-8 gap-8 overflow-y-auto">
        {/* Sidebar */}
        <aside className="w-full lg:w-[320px] flex flex-col gap-6 shrink-0">
          <DailyStats state={appState} />

          <div className="bg-surface-dark border border-border-dark rounded-2xl p-6">
            <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Select Mood</h3>
            <div className="flex flex-wrap gap-2">
              {(['Focused', 'Tired', 'Distracted'] as Mood[]).map((m) => (
                <button
                  key={m}
                  onClick={() => toggleMood(m)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    currentMood === m
                      ? 'bg-accent-indigo text-white shadow-lg shadow-accent-indigo/20'
                      : 'bg-background-dark border border-border-dark text-slate-500 hover:text-white'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <HistoryList sessions={appState.history} />
        </aside>

        {/* Main Content */}
        <section className="flex-1 flex flex-col gap-8">
          <Timer
            timeLeft={timeLeft}
            progress={progress}
            isRunning={isRunning}
            onStart={startTimer}
            onPause={pauseTimer}
            onReset={() => resetTimer()}
            durations={[15, 25, 45]}
            currentDuration={isBreakMode ? appState.settings.defaultBreakDuration * 60 : appState.settings.defaultFocusDuration * 60}
            onDurationChange={handleDurationChange}
          />

          <SuggestionCard 
            suggestion={currentSuggestion}
            mood={currentMood}
            onNext={handleNextSuggestion}
          />

          {!currentSuggestion && !isBreakMode && (
            <div className="bg-[#16161A] border border-dashed border-[#232329] rounded-3xl p-8 flex flex-col items-center justify-center text-slate-500 gap-2">
              <span className="text-sm font-medium">Suggestions appear after your focus session</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Stay concentrated</span>
            </div>
          )}
        </section>
      </main>

      <footer className="h-12 border-t border-border-dark bg-surface-dark/30 px-8 flex items-center justify-between text-[11px] font-medium text-slate-500 uppercase tracking-widest backdrop-blur-sm">
        <div className="flex gap-6">
          <span>Storage: Local Active</span>
          <span>Skipped Breaks: {appState.skippedBreaks}</span>
        </div>
        <div className="flex gap-6 items-center">
          <span>Current Mood: {currentMood}</span>
          <div className="flex gap-1">
            <div className={`w-1.5 h-1.5 rounded-full ${currentMood === 'Focused' ? 'bg-accent-indigo' : 'bg-slate-800'}`}></div>
            <div className={`w-1.5 h-1.5 rounded-full ${currentMood === 'Tired' ? 'bg-accent-emerald' : 'bg-slate-800'}`}></div>
            <div className={`w-1.5 h-1.5 rounded-full ${currentMood === 'Distracted' ? 'bg-orange-500' : 'bg-slate-800'}`}></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

