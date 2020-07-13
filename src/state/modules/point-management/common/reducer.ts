import { Reducer } from 'redux';

import { FetchState, ActionCreatorFailure } from '@types';
import { CommonActions } from './actions';
import {
  FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION,
  FETCH_TOTAL_POINTS_TO_DISTRIBUTE_FAILURE,
  FETCH_TOTAL_POINTS_TO_DISTRIBUTE_SUCCESS,
  SET_TOTAL_POINTS_TEAM_AWARDS,
  SET_TOTAL_POINTS_COOPERATIVE,
  SET_IS_READY_TO_DISTRIBUTE,
} from './constants';

const emptyFetchState: FetchState = { isFetching: false };
const fetchingState: FetchState = { isFetching: true };
const fetchErrorState = <T extends string>(
  action: ActionCreatorFailure<T>,
): FetchState => ({
  errors: action.payload.errors,
  isFetching: false,
});

export type CommonState = {
  fetchTotalPointsToDistribute: FetchState;
  isReadyToDistribute: boolean;
  totalPointsToDistribute: string;
  totalPointsTeamAwards: string;
  totalPointsCooperative: string;
};

export const initialState: CommonState = {
  fetchTotalPointsToDistribute: emptyFetchState,
  isReadyToDistribute: false,
  totalPointsToDistribute: '',
  totalPointsTeamAwards: '',
  totalPointsCooperative: '',
};

const commonReducer: Reducer<CommonState, CommonActions> = (
  state = initialState,
  action: CommonActions,
): CommonState => {
  switch (action.type) {
    case FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION:
      return { ...state, fetchTotalPointsToDistribute: fetchingState };
    case FETCH_TOTAL_POINTS_TO_DISTRIBUTE_FAILURE:
      return {
        ...state,
        fetchTotalPointsToDistribute: fetchErrorState(action),
      };
    case FETCH_TOTAL_POINTS_TO_DISTRIBUTE_SUCCESS:
      return {
        ...state,
        fetchTotalPointsToDistribute: emptyFetchState,
        totalPointsToDistribute: action.payload.totalPointsToDistribute,
      };

    case SET_TOTAL_POINTS_TEAM_AWARDS:
      return {
        ...state,
        totalPointsTeamAwards: action.payload.totalPointsTeamAwards,
      };

    case SET_TOTAL_POINTS_COOPERATIVE:
      return {
        ...state,
        totalPointsCooperative: action.payload.totalPointsCooperative,
      };

    case SET_IS_READY_TO_DISTRIBUTE:
      return {
        ...state,
        isReadyToDistribute: action.payload.isReadyToDistribute,
      };

    default:
      return state;
  }
};

export default commonReducer;
