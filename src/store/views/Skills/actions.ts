import { AnyAction } from 'redux';

import { BrowseSkillsUiStates, Locations, UsersResponse } from './types';

export enum ActionTypes {
  SetUiState = '@browseSkills/SET_UI_STATE',
  SetSearchString = '@browseSkills/SET_SEARCH_STRING',
  SetCurrentPage = '@browseSkills/SET_CURRENT_PAGE',
  SetLocation = '@browseSkills/SET_LOCATION',
  FetchUsersSuccess = '@browseSkills/FETCH_USERS_SUCCESS',
}

export const setUiState = (payload: BrowseSkillsUiStates): SetUiStateAction => ({
  type: ActionTypes.SetUiState,
  payload,
});

export const setSearchString = (payload: string): SetSearchStringAction => ({
  type: ActionTypes.SetSearchString,
  payload,
});

export const setCurrentPage = (payload: number): SetCurrentPageAction => ({
  type: ActionTypes.SetCurrentPage,
  payload,
});

export const setLocation = (payload: Locations): SetLocationAction => ({
  type: ActionTypes.SetLocation,
  payload,
});

export const fetchUsersSuccess = (payload: UsersResponse): FetchUsersSuccessAction => ({
  type: ActionTypes.FetchUsersSuccess,
  payload,
});

/** types */

interface SetUiStateAction extends AnyAction {
  type: ActionTypes.SetUiState;
  payload: BrowseSkillsUiStates;
}

interface SetSearchStringAction extends AnyAction {
  type: ActionTypes.SetSearchString;
  payload: string;
}

interface FetchUsersSuccessAction extends AnyAction {
  type: ActionTypes.FetchUsersSuccess;
  payload: UsersResponse;
}

interface SetCurrentPageAction extends AnyAction {
  type: ActionTypes.SetCurrentPage;
  payload: number;
}

interface SetLocationAction extends AnyAction {
  type: ActionTypes.SetLocation;
  payload: Locations;
}

export type SkillAction =
  | SetUiStateAction
  | SetSearchStringAction
  | FetchUsersSuccessAction
  | SetCurrentPageAction
  | SetLocationAction;
