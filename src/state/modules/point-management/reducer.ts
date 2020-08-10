import { combineReducers } from 'redux';

import common, { CommonState } from './common/reducer';
import resaleCooperative, {
  ResaleCooperativeState,
} from './resale-cooperative/reducer';
import teamAwards, { TeamAwardsState } from './team-awards/reducer';

export type PointManagementState = {
  common: CommonState;
  resaleCooperative: ResaleCooperativeState;
  teamAwards: TeamAwardsState;
};

export default combineReducers<PointManagementState>({
  common,
  resaleCooperative,
  teamAwards,
});
