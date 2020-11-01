import { Dispatch } from 'redux';

import { AppState } from '../../store';
import { setUiState, fetchUsersSuccess } from './actions';
import { BrowseSkillsUiStates, Locations, UsersResponse } from './types';
import { responseBerlin, responseStockholm, responseUSA } from './mocks';

export const fetchUsers = () => {
  return (dispatch: Dispatch, getState: () => AppState) => {
    const state = getState();

    dispatch(setUiState(BrowseSkillsUiStates.Fetching));

    // mock api call

    setTimeout(() => {
      let res: UsersResponse;

      switch (state.browseSkills.sortOptions.location) {
        case Locations.Berlin:
          res = responseBerlin;
          break;
        case Locations.NewYork:
          res = responseUSA;
          break;
        case Locations.Stockholm:
          res = responseStockholm;
          break;
        default:
          res = responseBerlin;
      }

      dispatch(fetchUsersSuccess(res));
    }, 1000);
  };
};
