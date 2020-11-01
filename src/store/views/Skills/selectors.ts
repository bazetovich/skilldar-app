import { createSelector } from 'reselect';

import { AppState } from '../../store';
import { BrowseSkillsUiStates } from './types';

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
