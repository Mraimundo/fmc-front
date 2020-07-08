import { expect } from 'chai';

import {
  setTotalPointsToDistribute,
  setTotalPointsTeamAwards,
  setTotalPointsResale,
} from './actions';
import {
  SET_TOTAL_POINTS_TO_DISTRIBUTE,
  SET_TOTAL_POINTS_TEAM_AWARDS,
  SET_TOTAL_POINTS_RESALE,
} from './constants';

describe('src/state/modules/point-management/common/actions', () => {
  describe('setTotalPointsToDistribute', () => {
    it('should be a function', () => {
      expect(setTotalPointsToDistribute).to.be.a('function');
    });

    it('should return a object', () => {
      expect(setTotalPointsToDistribute('10')).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(setTotalPointsToDistribute('10')).to.be.deep.equal({
        type: SET_TOTAL_POINTS_TO_DISTRIBUTE,
        payload: { totalPointsToDistribute: '10' },
      });
    });
  });

  describe('setTotalPointsTeamAwards', () => {
    it('should be a function', () => {
      expect(setTotalPointsTeamAwards).to.be.a('function');
    });

    it('should return a object', () => {
      expect(setTotalPointsTeamAwards('5')).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(setTotalPointsTeamAwards('5')).to.be.deep.equal({
        type: SET_TOTAL_POINTS_TEAM_AWARDS,
        payload: { totalPointsTeamAwards: '5' },
      });
    });
  });

  describe('setTotalPointsResale', () => {
    it('should be a function', () => {
      expect(setTotalPointsResale).to.be.a('function');
    });

    it('should return a object', () => {
      expect(setTotalPointsResale(5)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(setTotalPointsResale(5)).to.be.deep.equal({
        type: SET_TOTAL_POINTS_RESALE,
        payload: { totalPointsResale: 5 },
      });
    });
  });
});
