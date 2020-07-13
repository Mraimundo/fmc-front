import { expect } from 'chai';

import reducer, { initialState } from './reducer';
import {
  FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION,
  FETCH_TOTAL_POINTS_TO_DISTRIBUTE_FAILURE,
  FETCH_TOTAL_POINTS_TO_DISTRIBUTE_SUCCESS,
  SET_TOTAL_POINTS_TEAM_AWARDS,
  SET_TOTAL_POINTS_COOPERATIVE,
} from './constants';
import { errors } from './mock';

describe('src/state/modules/point-management/common/reducer', () => {
  it('should be a function', () => {
    expect(reducer).to.be.a('function');
  });

  it('should return a initial state', () => {
    const result = reducer(undefined, { type: 'unknown' });

    expect(result).to.be.deep.equal(initialState);
  });

  it('should can handle FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION', () => {
    const result = reducer(undefined, {
      type: FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION,
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchTotalPointsToDistribute: {
        isFetching: true,
      },
    });
  });

  it('should can handle FETCH_TOTAL_POINTS_TO_DISTRIBUTE_FAILURE', () => {
    const result = reducer(undefined, {
      type: FETCH_TOTAL_POINTS_TO_DISTRIBUTE_FAILURE,
      payload: { errors },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchTotalPointsToDistribute: {
        isFetching: false,
        errors,
      },
    });
  });

  it('should can handle FETCH_TOTAL_POINTS_TO_DISTRIBUTE_SUCCESS', () => {
    const result = reducer(undefined, {
      type: FETCH_TOTAL_POINTS_TO_DISTRIBUTE_SUCCESS,
      payload: { totalPointsToDistribute: 5000 },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      totalPointsToDistribute: 5000,
      fetchTotalPointsToDistribute: {
        isFetching: false,
      },
    });
  });

  it('should can handle SET_TOTAL_POINTS_TEAM_AWARDS', () => {
    const result = reducer(undefined, {
      type: SET_TOTAL_POINTS_TEAM_AWARDS,
      payload: { totalPointsTeamAwards: '10' },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      totalPointsTeamAwards: '10',
    });
  });

  it('should can handle SET_TOTAL_POINTS_COOPERATIVE', () => {
    const result = reducer(undefined, {
      type: SET_TOTAL_POINTS_COOPERATIVE,
      payload: { totalPointsCooperative: '10' },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      totalPointsCooperative: '10',
    });
  });
});
