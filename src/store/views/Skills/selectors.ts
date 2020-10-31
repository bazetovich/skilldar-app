import { createSelector } from 'reselect';

import { AppState } from '../../store';
import { BrowseSkillsUiStates } from './types';

export const isFetching = createSelector(
  (state: AppState) => state.browseSkills,
  (browseSkillsState) => browseSkillsState.uiState === BrowseSkillsUiStates.Fetching
);
