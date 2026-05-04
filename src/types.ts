/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Mood = 'Focused' | 'Tired' | 'Distracted';

export type SuggestionCategory = 'Physical' | 'Mental' | 'Quick Refresh';

export interface Suggestion {
  id: string;
  category: SuggestionCategory;
  title: string;
  description: string;
  type: string;
}

export interface Session {
  id: string;
  date: string;
  duration: number; // minutes
  mood: Mood | null;
  type: 'focus' | 'break';
  completed: boolean;
}

export interface UserSettings {
  theme: 'light' | 'dark' | 'auto';
  defaultFocusDuration: number;
  defaultBreakDuration: number;
  notificationsEnabled: boolean;
}

export interface AppState {
  history: Session[];
  settings: UserSettings;
  skippedBreaks: number;
}
