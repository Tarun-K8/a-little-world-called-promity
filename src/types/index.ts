export type HeritageCategory = 
  | 'All'
  | 'Temples' 
  | 'Forts & Palaces' 
  | 'Archaeological Sites' 
  | 'Ancient Learning' 
  | 'UNESCO World Heritage';

export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  location: string;
  state: string;
  coordinates: [number, number]; // [lat, lng]
  category: HeritageCategory;
  additionalCategories: HeritageCategory[];
  architecturalStyle: string;
  historicalEra: string;
  historicalBackground: string;
  architecturalHighlights: string[];
  interestingFact: string;
  unescoStatus?: string;
  visitingEtiquette?: string;
  image: string;
  imageAlt: string;
  caption: string;
}

export type DiscoveryCategory =
  | 'Universities'
  | 'Architecture'
  | 'Excavations'
  | 'Epigraphy & Manuscripts'
  | 'Trade Routes'
  | 'Heritage Preservation';

export interface DiscoveryFact {
  id: string;
  category: DiscoveryCategory;
  title: string;
  period: string;
  keyFinding: string;
  detailedContext: string;
  archaeologicalSignificance: string;
  iconName: string;
  badge: string;
}

export interface SavedPlace {
  id: string;
  name: string;
  location: string;
  coordinates?: [number, number];
  note?: string;
  addedAt: string;
  isCustom: boolean;
  destinationId?: string;
}

export type MoodType = 'peaceful' | 'curious' | 'reflective' | 'energized' | 'grounded' | 'serene';

export interface JournalEntry {
  id: string;
  date: string; // ISO date string YYYY-MM-DD
  formattedDate: string;
  timestamp: number;
  mood: MoodType;
  feltGood: string;
  exploreTomorrow: string;
  intention: string;
}

export interface InterestCard {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  topicsToExplore: string[];
  readingSuggestions: { title: string; authorOrOrg: string; desc: string }[];
  credibleResources: { name: string; url: string; note: string }[];
  thoughtPrompt: string;
}
