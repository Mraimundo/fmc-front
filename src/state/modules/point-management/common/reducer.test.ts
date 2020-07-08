import { expect } from 'chai';

import reducer, { initialState } from './reducer';
import {
  SET_TOTAL_POINTS_TO_DISTRIBUTE,
  SET_TOTAL_POINTS_TEAM_AWARDS,
  SET_TOTAL_POINTS_RESALE,
} from './constants';

describe('src/state/modules/point-management/common/reducer', () => {
  it('should be a function', () => {
    expect(reducer).to.be.a('function');
  });

  it('should return a initial state', () => {
    const result = reducer(undefined, { type: 'unknown' });

    expect(result).to.be.deep.equal(initialState);
  });

  it('should can handle SET_TOTAL_POINTS_TO_DISTRIBUTE', () => {
    const result = reducer(undefined, {
      type: SET_TOTAL_POINTS_TO_DISTRIBUTE,
      payload: { totalPointsToDistribute: '10' },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      totalPointsToDistribute: '10',
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

  it('should can handle SET_TOTAL_POINTS_RESALE', () => {
    const result = reducer(undefined, {
      type: SET_TOTAL_POINTS_RESALE,
      payload: { totalPointsResale: '10' },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      totalPointsResale: '10',
    });
  });
});
