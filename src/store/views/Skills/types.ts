export interface BrowseSkillsState {
  sortOptions: {
    searchString: string;
    location: Locations;
    page?: number;
  };
  data: {
    definition?: string;
    users: User[];
    totalPages?: number;
    relatedSearches: string[];
  };
  uiState: BrowseSkillsUiStates;
}

export interface User {
  id: string;
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

export interface UsersResponse {
  definition: string;
  users: User[];
  totalPages: number;
  relatedSearches: string[];
}
