import {
  ActionCreator,
  ActionCreatorPayload,
  ActionCreatorFailure,
  ApiErrors,
} from '@types';
import {
  FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION,
  FETCH_TOTAL_POINTS_TO_DISTRIBUTE_FAILURE,
  FETCH_TOTAL_POINTS_TO_DISTRIBUTE_SUCCESS,
  SET_TOTAL_POINTS_TEAM_AWARDS,
  SET_TOTAL_POINTS_COOPERATIVE,
  SET_IS_READY_TO_DISTRIBUTE,
} from './constants';
import { CommonState } from './reducer';

export const fetchTotalPointsToDistribute = (): ActionCreator<
  typeof FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION
> =>
  <const>{
    type: FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION,
  };

export const fetchTotalPointsToDistributeFailure = (
  errors: ApiErrors[],
): ActionCreatorFailure<typeof FETCH_TOTAL_POINTS_TO_DISTRIBUTE_FAILURE> =>
  <const>{
    type: FETCH_TOTAL_POINTS_TO_DISTRIBUTE_FAILURE,
    payload: {
      errors,
    },
  };

export const fetchTotalPointsToDistributeSuccess = (
  totalPointsToDistribute: string,
): ActionCreatorPayload<
  typeof FETCH_TOTAL_POINTS_TO_DISTRIBUTE_SUCCESS,
  Pick<CommonState, 'totalPointsToDistribute'>
> =>
  <const>{
    type: FETCH_TOTAL_POINTS_TO_DISTRIBUTE_SUCCESS,
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

export const setTotalPointsCooperative = (
  totalPointsCooperative: string,
): ActionCreatorPayload<
  typeof SET_TOTAL_POINTS_COOPERATIVE,
  Pick<CommonState, 'totalPointsCooperative'>
> =>
  <const>{
    type: SET_TOTAL_POINTS_COOPERATIVE,
    payload: { totalPointsCooperative },
  };

export const setIsReadyToDistribute = (
  isReadyToDistribute: boolean,
): ActionCreatorPayload<
  typeof SET_IS_READY_TO_DISTRIBUTE,
  Pick<CommonState, 'isReadyToDistribute'>
> =>
  <const>{
    type: SET_IS_READY_TO_DISTRIBUTE,
    payload: { isReadyToDistribute },
  };

export type CommonActions = ReturnType<
  | typeof fetchTotalPointsToDistribute
  | typeof fetchTotalPointsToDistributeFailure
  | typeof fetchTotalPointsToDistributeSuccess
  | typeof setTotalPointsTeamAwards
  | typeof setTotalPointsCooperative
  | typeof setIsReadyToDistribute
>;
