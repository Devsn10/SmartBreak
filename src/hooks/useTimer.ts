/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, useCallback } from 'react';

export interface TimerEngineControls {
  timeLeft: number;
  isRunning: boolean;
  duration: number;
  startTimer: () => void;
  pauseTimer: () => void;
  resumeTimer: () => void;
  stopTimer: () => void;
  resetTimer: (newDuration?: number) => void;
  progress: number;
}

export function useTimer(initialDurationMinutes: number, onComplete: () => void): TimerEngineControls {
  const [duration, setDuration] = useState(initialDurationMinutes * 60);
  const [timeLeft, setTimeLeft] = useState(initialDurationMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const lastTimeRef = useRef<number>(0);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRunning(false);
  }, []);

  const resetTimer = useCallback((newDurationMinutes?: number) => {
    stopTimer();
    const newDuration = (newDurationMinutes ?? initialDurationMinutes) * 60;
    setDuration(newDuration);
    setTimeLeft(newDuration);
  }, [initialDurationMinutes, stopTimer]);

  const startTimer = useCallback(() => {
    if (isRunning) return;
    
    setIsRunning(true);
    lastTimeRef.current = Date.now();
    
    timerRef.current = setInterval(() => {
      const now = Date.now();
      const delta = Math.floor((now - lastTimeRef.current) / 1000);
      
      if (delta >= 1) {
        lastTimeRef.current = now;
        setTimeLeft((prev) => {
          const next = prev - delta;
          if (next <= 0) {
            stopTimer();
            onComplete();
            return 0;
          }
          return next;
        });
      }
    }, 100); // High frequency check for smooth background handling
  }, [isRunning, stopTimer, onComplete]);

  const pauseTimer = useCallback(() => {
    stopTimer();
  }, [stopTimer]);

  const resumeTimer = useCallback(() => {
    startTimer();
  }, [startTimer]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const progress = duration > 0 ? (1 - (timeLeft / duration)) * 100 : 0;

  return {
    timeLeft,
    isRunning,
    duration,
    startTimer,
    pauseTimer,
    resumeTimer,
    stopTimer,
    resetTimer,
    progress,
  };
}
