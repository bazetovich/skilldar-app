import { createSelector } from 'reselect';

import { AppState } from '../../store';
import { BrowseSkillsUiStates, Locations } from './types';

export const selectIsFetching = createSelector(
  (state: AppState) => state.browseSkills,
  (browseSkillsState) => browseSkillsState.uiState === BrowseSkillsUiStates.Fetching
);

export const selectRelatedSearches = createSelector(
  (state: AppState) => state.browseSkills,
  (browseSkillsState) => browseSkillsState.data.relatedSearches
);

export const selectUsers = createSelector(
  (state: AppState) => state.browseSkills,
  (browseSkillsState) => browseSkillsState.data.users
);

export const selectSearchString = createSelector(
  (state: AppState) => state.browseSkills,
  (browseSkillsState) => browseSkillsState.sortOptions.searchString
);

export const selectDefinition = createSelector(
  (state: AppState) => state.browseSkills,
  (browseSkillsState) => browseSkillsState.data.definition || ''
);

export const selectLocation = createSelector(
  (state: AppState) => state.browseSkills,
  (browseSkillsState) => browseSkillsState.sortOptions.location || Locations.All
);

export const selectPagination = createSelector(
  (state: AppState) => state.browseSkills,
  (browseSkillsState) => ({
    currentPage: browseSkillsState.sortOptions.page || 1,
    totalPages: browseSkillsState.data.totalPages,
  })
);
