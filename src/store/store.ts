import { combineReducers } from 'redux';

import browseSkills from './views/Skills/reducers';
import { BrowseSkillsState } from './views/Skills/types';

export const reducer = combineReducers({
  browseSkills,
});

export interface AppState {
  browseSkills: BrowseSkillsState;
}

export * from './views/Skills';
