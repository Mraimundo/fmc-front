import { ActionCreatorPayload } from '@types';
import {
  SET_TOTAL_POINTS_TO_DISTRIBUTE,
  SET_TOTAL_POINTS_TEAM_AWARDS,
  SET_TOTAL_POINTS_RESALE,
} from './constants';
import { CommonState } from './reducer';

export const setTotalPointsToDistribute = (
  totalPointsToDistribute: string,
): ActionCreatorPayload<
  typeof SET_TOTAL_POINTS_TO_DISTRIBUTE,
  Pick<CommonState, 'totalPointsToDistribute'>
> =>
  <const>{
    type: SET_TOTAL_POINTS_TO_DISTRIBUTE,
    payload: { totalPointsToDistribute },
  };

export const setTotalPointsTeamAwards = (
  totalPointsTeamAwards: string,
): ActionCreatorPayload<
  typeof SET_TOTAL_POINTS_TEAM_AWARDS,
  Pick<CommonState, 'totalPointsTeamAwards'>
> =>
  <const>{
    type: SET_TOTAL_POINTS_TEAM_AWARDS,
    payload: { totalPointsTeamAwards },
  };

export const setTotalPointsResale = (
  totalPointsResale: string,
): ActionCreatorPayload<
  typeof SET_TOTAL_POINTS_RESALE,
  Pick<CommonState, 'totalPointsResale'>
> =>
  <const>{
    type: SET_TOTAL_POINTS_RESALE,
    payload: { totalPointsResale },
  };

export type CommonActions = ReturnType<
  | typeof setTotalPointsToDistribute
  | typeof setTotalPointsTeamAwards
  | typeof setTotalPointsResale
>;
