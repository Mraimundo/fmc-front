import { Reducer } from 'redux';

import { CommonActions } from './actions';
import {
  SET_TOTAL_POINTS_TO_DISTRIBUTE,
  SET_TOTAL_POINTS_TEAM_AWARDS,
  SET_TOTAL_POINTS_RESALE,
} from './constants';

export type CommonState = {
  totalPointsToDistribute: string | null;
  totalPointsTeamAwards: string | null;
  totalPointsResale: string | null;
};

export const initialState: CommonState = {
  totalPointsToDistribute: null,
  totalPointsTeamAwards: null,
  totalPointsResale: null,
};

const commonReducer: Reducer<CommonState, CommonActions> = (
  state = initialState,
  action: CommonActions,
): CommonState => {
  switch (action.type) {
    case SET_TOTAL_POINTS_TO_DISTRIBUTE:
      return {
        ...state,
        totalPointsToDistribute: action.payload.totalPointsToDistribute,
      };

    case SET_TOTAL_POINTS_TEAM_AWARDS:
      return {
        ...state,
        totalPointsTeamAwards: action.payload.totalPointsTeamAwards,
      };

    case SET_TOTAL_POINTS_RESALE:
      return {
        ...state,
        totalPointsResale: action.payload.totalPointsResale,
      };

    default:
      return state;
  }
};

export default commonReducer;
