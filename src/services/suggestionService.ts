/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mood, Suggestion } from '../types';
import { SUGGESTIONS } from '../constants';

class SuggestionService {
  getSuggestion(mood: Mood | null): Suggestion {
    if (!mood) {
      return this.getRandomSuggestion(SUGGESTIONS);
    }

    if (mood === 'Tired') {
      const relaxing = SUGGESTIONS.filter(s => 
        s.category === 'Mental' || s.category === 'Quick Refresh'
      );
      return this.getRandomSuggestion(relaxing);
    }

    if (mood === 'Distracted') {
      const engaging = SUGGESTIONS.filter(s => 
        s.category === 'Physical' || s.category === 'Quick Refresh'
      );
      return this.getRandomSuggestion(engaging);
    }

    // Default to random
    return this.getRandomSuggestion(SUGGESTIONS);
  }

  private getRandomSuggestion(list: Suggestion[]): Suggestion {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
  }
}

export const suggestionService = new SuggestionService();
