import {
  ActionCreator,
  ActionCreatorPayload,
  ActionCreatorFailure,
} from '@types';
import {
  FETCH_ESTABLISHMENTS_ACTION,
  FETCH_ESTABLISHMENTS_FAILURE,
  FETCH_ESTABLISHMENTS_SUCCESS,
  FETCH_POINTS_TO_DISTRIBUTE_ACTION,
  FETCH_POINTS_TO_DISTRIBUTE_FAILURE,
  FETCH_POINTS_TO_DISTRIBUTE_SUCCESS,
  SET_TOTAL_POINTS_TEAM_AWARDS,
  SET_TOTAL_POINTS_RESALE_COOPERATIVE,
  SET_IS_READY_TO_DISTRIBUTE,
  SET_SELECTED_ESTABLISHMENT,
  DISTRIBUTE_POINTS_ACTION,
  DISTRIBUTE_POINTS_FINALLY_ACTION,
  DISTRIBUTE_POINTS_FAILURE,
  DISTRIBUTE_POINTS_SUCCESS,
  SET_FINISHED_DISTRIBUTION,
  FinishedDistributionPossibilities,
  SAVE_PARTIAL_DISTRIBUTION_ACTION,
  SAVE_PARTIAL_DISTRIBUTION_SUCCESS,
  SAVE_PARTIAL_DISTRIBUTION_FAILURE,
  SET_DISTRIBUTION_WITH_SAVED_SETTINGS,
} from './constants';
import { CommonState } from './reducer';
import { PointsToDistribute, Establishment } from './types';

export const fetchEstablishments = (): ActionCreator<
  typeof FETCH_ESTABLISHMENTS_ACTION
> =>
  <const>{
    type: FETCH_ESTABLISHMENTS_ACTION,
  };

export const fetchEstablishmentsFailure = (
  error: string,
): ActionCreatorFailure<typeof FETCH_ESTABLISHMENTS_FAILURE> =>
  <const>{
    type: FETCH_ESTABLISHMENTS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchEstablishmentsSuccess = (
  establishments: Establishment[] | null,
): ActionCreatorPayload<
  typeof FETCH_ESTABLISHMENTS_SUCCESS,
  Pick<CommonState, 'establishments'>
> =>
  <const>{
    type: FETCH_ESTABLISHMENTS_SUCCESS,
    payload: { establishments },
  };

export const fetchPointsToDistribute = (): ActionCreator<
  typeof FETCH_POINTS_TO_DISTRIBUTE_ACTION
> =>
  <const>{
    type: FETCH_POINTS_TO_DISTRIBUTE_ACTION,
  };

export const fetchPointsToDistributeFailure = (
  error: string,
): ActionCreatorFailure<typeof FETCH_POINTS_TO_DISTRIBUTE_FAILURE> =>
  <const>{
    type: FETCH_POINTS_TO_DISTRIBUTE_FAILURE,
    payload: {
      error,
    },
  };

export const fetchPointsToDistributeSuccess = (
  pointsToDistribute: PointsToDistribute,
): ActionCreatorPayload<
  typeof FETCH_POINTS_TO_DISTRIBUTE_SUCCESS,
  Pick<CommonState, 'pointsToDistribute'>
> =>
  <const>{
    type: FETCH_POINTS_TO_DISTRIBUTE_SUCCESS,
    payload: { pointsToDistribute },
  };

export const setTotalPointsTeamAwards = (
  totalPointsTeamAwards: number,
): ActionCreatorPayload<
  typeof SET_TOTAL_POINTS_TEAM_AWARDS,
  Pick<CommonState, 'totalPointsTeamAwards'>
> =>
  <const>{
    type: SET_TOTAL_POINTS_TEAM_AWARDS,
    payload: { totalPointsTeamAwards },
  };

export const setTotalPointsResaleCooperative = (
  totalPointsResaleCooperative: number,
): ActionCreatorPayload<
  typeof SET_TOTAL_POINTS_RESALE_COOPERATIVE,
  Pick<CommonState, 'totalPointsResaleCooperative'>
> =>
  <const>{
    type: SET_TOTAL_POINTS_RESALE_COOPERATIVE,
    payload: { totalPointsResaleCooperative },
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

export const setSelectedEstablishment = (
  selectedEstablishment: Establishment,
): ActionCreatorPayload<
  typeof SET_SELECTED_ESTABLISHMENT,
  Pick<CommonState, 'selectedEstablishment'>
> =>
  <const>{
    type: SET_SELECTED_ESTABLISHMENT,
    payload: { selectedEstablishment },
  };

export const distributePoints = (
  finishedDistributionPossibilities: FinishedDistributionPossibilities,
): ActionCreator<typeof DISTRIBUTE_POINTS_ACTION> =>
  <const>{
    type: DISTRIBUTE_POINTS_ACTION,
    meta: { finishedDistributionPossibilities },
  };

export const distributePointsFinally = (
  finishedDistributionPossibilities: FinishedDistributionPossibilities,
): ActionCreator<typeof DISTRIBUTE_POINTS_FINALLY_ACTION> =>
  <const>{
    type: DISTRIBUTE_POINTS_FINALLY_ACTION,
    meta: { finishedDistributionPossibilities },
  };

export const distributePointsFailure = (
  error: string,
): ActionCreatorFailure<typeof DISTRIBUTE_POINTS_FAILURE> =>
  <const>{
    type: DISTRIBUTE_POINTS_FAILURE,
    payload: {
      error,
    },
  };

export const distributePointsSuccess = (): ActionCreator<
  typeof DISTRIBUTE_POINTS_SUCCESS
> =>
  <const>{
    type: DISTRIBUTE_POINTS_SUCCESS,
  };

export const setFinishedDistribution = (
  finishedDistribution: FinishedDistributionPossibilities,
): ActionCreatorPayload<
  typeof SET_FINISHED_DISTRIBUTION,
  Pick<CommonState, 'finishedDistribution'>
> =>
  <const>{
    type: SET_FINISHED_DISTRIBUTION,
    payload: {
      finishedDistribution,
    },
  };

export const savePartialDistribution = (): ActionCreator<
  typeof SAVE_PARTIAL_DISTRIBUTION_ACTION
> =>
  <const>{
    type: SAVE_PARTIAL_DISTRIBUTION_ACTION,
  };

export const savePartialDistributionFailure = (
  error: string,
): ActionCreatorFailure<typeof SAVE_PARTIAL_DISTRIBUTION_FAILURE> =>
  <const>{
    type: SAVE_PARTIAL_DISTRIBUTION_FAILURE,
    payload: {
      error,
    },
  };

export const savePartialDistributionSuccess = (): ActionCreator<
  typeof SAVE_PARTIAL_DISTRIBUTION_SUCCESS
> =>
  <const>{
    type: SAVE_PARTIAL_DISTRIBUTION_SUCCESS,
  };

export const setDistributionWithSavedSettings = (): ActionCreator<
  typeof SET_DISTRIBUTION_WITH_SAVED_SETTINGS
> =>
  <const>{
    type: SET_DISTRIBUTION_WITH_SAVED_SETTINGS,
  };

export type CommonActions = ReturnType<
  | typeof fetchEstablishments
  | typeof fetchEstablishmentsFailure
  | typeof fetchEstablishmentsSuccess
  | typeof fetchPointsToDistribute
  | typeof fetchPointsToDistributeFailure
  | typeof fetchPointsToDistributeSuccess
  | typeof setTotalPointsTeamAwards
  | typeof setTotalPointsResaleCooperative
  | typeof setIsReadyToDistribute
  | typeof setSelectedEstablishment
  | typeof distributePoints
  | typeof distributePointsFinally
  | typeof distributePointsFailure
  | typeof distributePointsSuccess
  | typeof setFinishedDistribution
  | typeof savePartialDistribution
  | typeof savePartialDistributionFailure
  | typeof savePartialDistributionSuccess
  | typeof setDistributionWithSavedSettings
>;
