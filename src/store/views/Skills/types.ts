export interface BrowseSkillsState {
  sortOptions: {
    searchString: string;
    location: Locations;
  };
  definition?: string;
  users: User[];
  totalPages?: number;
  currentPage?: number;
  uiState: BrowseSkillsUiStates;
}

export interface User {
  name: string;
  avatarUrl?: string;
  descritpion?: string;
  skills: string[];
  location: string;
  rating?: {
    overall: number;
    value1: number;
    value2: number;
  };
}

export enum Locations {
  All = 'all',
  Stockholm = 'stockholm',
  Berlin = 'berlin',
  NewYork = 'newyork',
}

export enum BrowseSkillsUiStates {
  View = 'view',
  Fetching = 'fetching',
  Error = 'error',
}
