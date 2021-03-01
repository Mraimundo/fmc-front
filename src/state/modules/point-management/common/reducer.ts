import { Reducer } from 'redux';

import { FetchState } from '@types';
import { emptyFetchState, fetchingState, fetchErrorState } from 'state/utils';
import { CommonActions } from './actions';
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
} from './constants';
import { PointsToDistribute, Establishment } from './types';

export const emptyPointsToDistribute: PointsToDistribute = {
  general: null,
  generalPointId: null,
  resaleCooperative: null,
  teamAwards: null,
  savedSetting: {
    data: null,
    date: '',
  },
};

export type CommonState = {
  fetchEstablishments: FetchState;
  fetchPointsToDistribute: FetchState;
  distributePoints: FetchState;
  isReadyToDistribute: boolean;
  pointsToDistribute: PointsToDistribute;
  totalPointsTeamAwards: number;
  totalPointsResaleCooperative: number;
  establishments: Establishment[] | null;
  selectedEstablishment: Establishment | null;
  finishedDistribution: FinishedDistributionPossibilities | null;
  partialDistribution: FetchState;
};

export const initialState: CommonState = {
  fetchEstablishments: emptyFetchState,
  fetchPointsToDistribute: emptyFetchState,
  distributePoints: emptyFetchState,
  isReadyToDistribute: false,
  pointsToDistribute: emptyPointsToDistribute,
  totalPointsTeamAwards: 0,
  totalPointsResaleCooperative: 0,
  establishments: null,
  selectedEstablishment: null,
  finishedDistribution: null,
  partialDistribution: emptyFetchState,
};

const commonReducer: Reducer<CommonState, CommonActions> = (
  state = initialState,
  action: CommonActions,
): CommonState => {
  switch (action.type) {
    case FETCH_ESTABLISHMENTS_ACTION:
      return { ...state, fetchEstablishments: fetchingState };
    case FETCH_ESTABLISHMENTS_FAILURE:
      return {
        ...state,
        fetchEstablishments: fetchErrorState(action),
      };
    case FETCH_ESTABLISHMENTS_SUCCESS:
      return {
        ...state,
        fetchEstablishments: emptyFetchState,
        establishments: action.payload.establishments,
      };

    case FETCH_POINTS_TO_DISTRIBUTE_ACTION:
      return { ...state, fetchPointsToDistribute: fetchingState };
    case FETCH_POINTS_TO_DISTRIBUTE_FAILURE:
      return {
        ...state,
        fetchPointsToDistribute: fetchErrorState(action),
      };
    case FETCH_POINTS_TO_DISTRIBUTE_SUCCESS:
      return {
        ...state,
        fetchPointsToDistribute: emptyFetchState,
        pointsToDistribute: action.payload.pointsToDistribute,
      };

    case SET_TOTAL_POINTS_TEAM_AWARDS:
      return {
        ...state,
        totalPointsTeamAwards: action.payload.totalPointsTeamAwards,
      };

    case SET_TOTAL_POINTS_RESALE_COOPERATIVE:
      return {
        ...state,
        totalPointsResaleCooperative:
          action.payload.totalPointsResaleCooperative,
      };

    case SET_IS_READY_TO_DISTRIBUTE:
      return {
        ...state,
        isReadyToDistribute: action.payload.isReadyToDistribute,
      };

    case SET_SELECTED_ESTABLISHMENT:
      return {
        ...state,
        selectedEstablishment: action.payload.selectedEstablishment,
      };

    case DISTRIBUTE_POINTS_ACTION:
      return { ...state, distributePoints: fetchingState };
    case DISTRIBUTE_POINTS_FINALLY_ACTION:
      return { ...state, distributePoints: fetchingState };
    case DISTRIBUTE_POINTS_FAILURE:
      return { ...state, distributePoints: fetchErrorState(action) };
    case DISTRIBUTE_POINTS_SUCCESS:
      return { ...state, distributePoints: emptyFetchState };

    case SET_FINISHED_DISTRIBUTION:
      return {
        ...state,
        finishedDistribution: action.payload.finishedDistribution,
      };

    case SAVE_PARTIAL_DISTRIBUTION_ACTION:
      return { ...state, partialDistribution: fetchingState };
    case SAVE_PARTIAL_DISTRIBUTION_SUCCESS:
      return { ...state, partialDistribution: emptyFetchState };
    case SAVE_PARTIAL_DISTRIBUTION_FAILURE:
      return { ...state, partialDistribution: fetchErrorState(action) };

    default:
      return state;
  }
};

export default commonReducer;
