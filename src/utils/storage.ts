import { JournalEntry, SavedPlace } from '../types';

const SAVED_DESTINATIONS_KEY = 'promity_saved_destinations_v1';
const CUSTOM_PLACES_KEY = 'promity_custom_places_v1';
const JOURNAL_ENTRIES_KEY = 'promity_journal_entries_v1';

// Default initial saved destinations (e.g. Kashi & Hampi)
export const DEFAULT_SAVED_IDS = ['kashi-vishwanath', 'hampi'];

export const getSavedDestinationIds = (): string[] => {
  try {
    const item = localStorage.getItem(SAVED_DESTINATIONS_KEY);
    if (!item) return DEFAULT_SAVED_IDS;
    const parsed = JSON.parse(item);
    return Array.isArray(parsed) ? parsed : DEFAULT_SAVED_IDS;
  } catch (err) {
    console.warn('Could not read saved destinations from localStorage:', err);
    return DEFAULT_SAVED_IDS;
  }
};

export const saveDestinationIds = (ids: string[]): void => {
  try {
    localStorage.setItem(SAVED_DESTINATIONS_KEY, JSON.stringify(ids));
  } catch (err) {
    console.warn('Could not write saved destinations to localStorage:', err);
  }
};

export const toggleSavedDestinationId = (id: string): { saved: boolean; ids: string[] } => {
  const current = getSavedDestinationIds();
  const exists = current.includes(id);
  const next = exists ? current.filter(item => item !== id) : [...current, id];
  saveDestinationIds(next);
  return { saved: !exists, ids: next };
};

export const getCustomPlaces = (): SavedPlace[] => {
  try {
    const item = localStorage.getItem(CUSTOM_PLACES_KEY);
    if (!item) return [];
    const parsed = JSON.parse(item);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn('Could not read custom places from localStorage:', err);
    return [];
  }
};

export const saveCustomPlaces = (places: SavedPlace[]): void => {
  try {
    localStorage.setItem(CUSTOM_PLACES_KEY, JSON.stringify(places));
  } catch (err) {
    console.warn('Could not write custom places to localStorage:', err);
  }
};

export const addCustomPlace = (place: Omit<SavedPlace, 'id' | 'addedAt' | 'isCustom'>): SavedPlace => {
  const current = getCustomPlaces();
  const newPlace: SavedPlace = {
    ...place,
    id: `custom-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    addedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    isCustom: true
  };
  const updated = [newPlace, ...current];
  saveCustomPlaces(updated);
  return newPlace;
};

export const removeCustomPlace = (id: string): SavedPlace[] => {
  const current = getCustomPlaces();
  const updated = current.filter(p => p.id !== id);
  saveCustomPlaces(updated);
  return updated;
};

export const getJournalEntries = (): JournalEntry[] => {
  try {
    const item = localStorage.getItem(JOURNAL_ENTRIES_KEY);
    if (!item) {
      // Provide one warm sample entry so the visitor immediately understands the journal feel
      const sampleEntry: JournalEntry = {
        id: 'sample-welcome-entry',
        date: new Date().toISOString().split('T')[0],
        formattedDate: new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        }),
        timestamp: Date.now(),
        mood: 'peaceful',
        feltGood: 'The quiet evening breeze and learning a bit more about ancient stone architecture.',
        exploreTomorrow: 'Reading about the rock-cut caves of Ajanta and taking an unhurried morning walk.',
        intention: 'To remember that small steps still carry me forward.'
      };
      return [sampleEntry];
    }
    const parsed = JSON.parse(item);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn('Could not read journal entries from localStorage:', err);
    return [];
  }
};

export const saveJournalEntries = (entries: JournalEntry[]): void => {
  try {
    localStorage.setItem(JOURNAL_ENTRIES_KEY, JSON.stringify(entries));
  } catch (err) {
    console.warn('Could not write journal entries to localStorage:', err);
  }
};

export const addJournalEntry = (
  entry: Omit<JournalEntry, 'id' | 'formattedDate' | 'timestamp'>
): JournalEntry => {
  const current = getJournalEntries();
  const now = new Date();
  const newEntry: JournalEntry = {
    ...entry,
    id: `journal-${Date.now()}`,
    timestamp: Date.now(),
    formattedDate: now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  };
  const updated = [newEntry, ...current];
  saveJournalEntries(updated);
  return newEntry;
};

export const updateJournalEntry = (updatedEntry: JournalEntry): JournalEntry[] => {
  const current = getJournalEntries();
  const next = current.map(item => (item.id === updatedEntry.id ? updatedEntry : item));
  saveJournalEntries(next);
  return next;
};

export const deleteJournalEntry = (id: string): JournalEntry[] => {
  const current = getJournalEntries();
  const next = current.filter(item => item.id !== id);
  saveJournalEntries(next);
  return next;
};

export const resetAllSavedData = (): void => {
  try {
    localStorage.removeItem(SAVED_DESTINATIONS_KEY);
    localStorage.removeItem(CUSTOM_PLACES_KEY);
    localStorage.removeItem(JOURNAL_ENTRIES_KEY);
  } catch (err) {
    console.warn('Could not reset localStorage data:', err);
  }
};
