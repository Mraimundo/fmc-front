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
  SET_ESTABLISHMENT_TYPE,
} from './constants';
import { CommonState } from './reducer';
import { PointsToDistribute, Establishment, EstablishmentType } from './types';

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

export const setEstablishmentType = (
  establishmentType: EstablishmentType,
): ActionCreatorPayload<
  typeof SET_ESTABLISHMENT_TYPE,
  Pick<CommonState, 'establishmentType'>
> =>
  <const>{
    type: SET_ESTABLISHMENT_TYPE,
    payload: { establishmentType },
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
  | typeof setEstablishmentType
>;
