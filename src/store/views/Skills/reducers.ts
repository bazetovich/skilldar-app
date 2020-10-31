import { SkillAction } from './actions';
import { BrowseSkillsState, BrowseSkillsUiStates, Locations } from './types';

const initialState: BrowseSkillsState = {
  sortOptions: {
    searchString: '',
    location: Locations.All,
  },
  users: [],
  uiState: BrowseSkillsUiStates.View,
};

const reducer = (state = initialState, action: SkillAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
