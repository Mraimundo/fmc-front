import { ApiErrors } from '@types';
import { CommonState } from './reducer';

export const errors: ApiErrors[] = [{ code: '1', message: 'internal error' }];

const state: CommonState = {
  fetchTotalPointsToDistribute: {
    isFetching: false,
    errors: [],
  },
  isReadyToDistribute: false,
  totalPointsCooperative: '10000',
  totalPointsTeamAwards: '5000',
  totalPointsToDistribute: '5000',
};

export default state;
