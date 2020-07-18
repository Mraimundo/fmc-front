import { expect } from 'chai';

import {
  fetchTotalPointsToDistribute,
  fetchTotalPointsToDistributeFailure,
  fetchTotalPointsToDistributeSuccess,
  setTotalPointsTeamAwards,
  setTotalPointsCooperative,
} from './actions';
import {
  FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION,
  FETCH_TOTAL_POINTS_TO_DISTRIBUTE_FAILURE,
  FETCH_TOTAL_POINTS_TO_DISTRIBUTE_SUCCESS,
  SET_TOTAL_POINTS_TEAM_AWARDS,
  SET_TOTAL_POINTS_COOPERATIVE,
} from './constants';

import { errors } from './mock';

describe('src/state/modules/point-management/common/actions', () => {
  describe('fetchTotalPointsToDistribute', () => {
    it('should be a function', () => {
      expect(fetchTotalPointsToDistribute).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchTotalPointsToDistribute()).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchTotalPointsToDistribute()).to.be.deep.equal({
        type: FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION,
      });
    });
  });

  describe('fetchTotalPointsToDistributeFailure', () => {
    it('should be a function', () => {
      expect(fetchTotalPointsToDistributeFailure).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchTotalPointsToDistributeFailure(errors)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchTotalPointsToDistributeFailure(errors)).to.be.deep.equal({
        type: FETCH_TOTAL_POINTS_TO_DISTRIBUTE_FAILURE,
        payload: { errors },
      });
    });
  });

  describe('fetchTotalPointsToDistributeSuccess', () => {
    it('should be a function', () => {
      expect(fetchTotalPointsToDistributeSuccess).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchTotalPointsToDistributeSuccess(5000)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchTotalPointsToDistributeSuccess(5000)).to.be.deep.equal({
        type: FETCH_TOTAL_POINTS_TO_DISTRIBUTE_SUCCESS,
        payload: { totalPointsToDistribute: 5000 },
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

  describe('setTotalPointsCooperative', () => {
    it('should be a function', () => {
      expect(setTotalPointsCooperative).to.be.a('function');
    });

    it('should return a object', () => {
      expect(setTotalPointsCooperative(5)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(setTotalPointsCooperative(5)).to.be.deep.equal({
        type: SET_TOTAL_POINTS_COOPERATIVE,
        payload: { totalPointsCooperative: 5 },
      });
    });
  });
});
