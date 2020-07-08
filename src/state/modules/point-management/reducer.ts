import { combineReducers } from 'redux';

import common, { CommonState } from './common/reducer';
import teamAwards, { TeamAwardsState } from './team-awards/reducer';

export type PointManagementState = {
  common: CommonState;
  teamAwards: TeamAwardsState;
};

export default combineReducers<PointManagementState>({
  common,
  teamAwards,
});
