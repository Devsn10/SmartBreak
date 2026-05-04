/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppState, Session, UserSettings } from '../types';
import { DEFAULT_SETTINGS } from '../constants';

const STORAGE_KEY = 'smartbreak_state';

class StorageService {
  private initialState: AppState = {
    history: [],
    settings: DEFAULT_SETTINGS,
    skippedBreaks: 0,
  };

  getState(): AppState {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return this.initialState;
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse storage', e);
      return this.initialState;
    }
  }

  saveState(state: AppState): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  addSession(session: Session): void {
    const state = this.getState();
    state.history = [session, ...state.history];
    this.saveState(state);
  }

  updateSettings(settings: Partial<UserSettings>): void {
    const state = this.getState();
    state.settings = { ...state.settings, ...settings };
    this.saveState(state);
  }

  incrementSkippedBreaks(): void {
    const state = this.getState();
    state.skippedBreaks += 1;
    this.saveState(state);
  }

  clearHistory(): void {
    const state = this.getState();
    state.history = [];
    this.saveState(state);
  }
}

export const storageService = new StorageService();
