import { AnyAction } from 'redux';

export enum ActionTypes {
  ToggleFetching = '@browseSkills/TOOGLE_FETCHING',
}

export const toggleFetching = (flag: boolean): ToggleFetchingAction => ({
  type: ActionTypes.ToggleFetching,
  flag,
});

/** types */

interface ToggleFetchingAction extends AnyAction {
  flag: boolean;
}

export type SkillAction = ToggleFetchingAction;
