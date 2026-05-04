import { Suggestion } from './types';

export const SUGGESTIONS: Suggestion[] = [
  {
    id: '1',
    category: 'Physical',
    title: 'Dynamic Stretching',
    description: '5 minutes to release tension in your shoulders and back.',
    type: 'stretch'
  },
  {
    id: '2',
    category: 'Physical',
    title: 'Brisk Office Walk',
    description: 'Take a quick lap around the floor to boost circulation.',
    type: 'walk'
  },
  {
    id: '3',
    category: 'Mental',
    title: 'Guided Breathing',
    description: 'Box breathing technique to lower heart rate and reduce stress.',
    type: 'breath'
  },
  {
    id: '4',
    category: 'Mental',
    title: 'Soundscape Immersion',
    description: 'Listen to 10 minutes of binaural beats to restore deep focus.',
    type: 'audio'
  },
  {
    id: '5',
    category: 'Quick Refresh',
    title: 'Hydrate',
    description: 'Drink a full glass of water. Essential for cognitive function.',
    type: 'water'
  },
  {
    id: '6',
    category: 'Quick Refresh',
    title: '20-20-20 Rule',
    description: 'Look at something 20 feet away for 20 seconds to rest your eyes.',
    type: 'eyes'
  },
  // Adding more for variety
  {
    id: '7',
    category: 'Physical',
    title: 'Squat Set',
    description: '10 controlled squats to wake up your lower body and core.',
    type: 'exercise'
  },
  {
    id: '8',
    category: 'Mental',
    title: 'Mind Reset',
    description: 'Stare at a non-digital object for 2 minutes and observe its details.',
    type: 'observation'
  }
];

export const DEFAULT_SETTINGS = {
  theme: 'dark' as const,
  defaultFocusDuration: 25,
  defaultBreakDuration: 5,
  notificationsEnabled: true,
};
