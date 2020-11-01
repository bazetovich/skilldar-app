import { ActionTypes, SkillAction } from './actions';
import { BrowseSkillsState, BrowseSkillsUiStates, Locations } from './types';

const initialState: BrowseSkillsState = {
  sortOptions: {
    searchString: '',
    location: Locations.All,
  },
  data: {
    users: [],
    relatedSearches: [],
  },
  uiState: BrowseSkillsUiStates.View,
};

const reducer = (state = initialState, action: SkillAction): BrowseSkillsState => {
  switch (action.type) {
    case ActionTypes.SetSearchString:
      return {
        ...state,
        sortOptions: {
          ...state.sortOptions,
          searchString: action.payload,
        },
      };
    case ActionTypes.SetUiState:
      return {
        ...state,
        uiState: action.payload,
      };
    case ActionTypes.SetCurrentPage:
      return {
        ...state,
        sortOptions: {
          ...state.sortOptions,
          page: action.payload,
        },
      };
    case ActionTypes.SetLocation:
      return {
        ...state,
        sortOptions: {
          ...state.sortOptions,
          location: action.payload,
        },
      };
    case ActionTypes.FetchUsersSuccess:
      const { users, definition, relatedSearches, totalPages } = action.payload;
      return {
        ...state,
        uiState: BrowseSkillsUiStates.View,
        data: {
          users,
          relatedSearches,
          definition,
          totalPages,
        },
      };
    default:
      return state;
  }
};

export default reducer;
