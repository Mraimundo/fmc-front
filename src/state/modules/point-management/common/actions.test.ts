import { expect } from 'chai';

import {
  fetchEstablishments,
  fetchEstablishmentsFailure,
  fetchEstablishmentsSuccess,
  fetchPointsToDistribute,
  fetchPointsToDistributeFailure,
  fetchPointsToDistributeSuccess,
  setTotalPointsTeamAwards,
  setTotalPointsResaleCooperative,
  setIsReadyToDistribute,
  setSelectedEstablishment,
  distributePoints,
  distributePointsFinally,
  distributePointsFailure,
  distributePointsSuccess,
  setFinishedDistribution,
} from './actions';
import * as constants from './constants';

import {
  error,
  establishments,
  pointsToDistribute,
  selectedEstablishment,
} from './mock';

describe('src/state/modules/point-management/common/actions', () => {
  describe('fetchEstablishments', () => {
    test('should be a function', () => {
      expect(fetchEstablishments).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchEstablishments()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchEstablishments()).to.be.deep.equal({
        type: constants.FETCH_ESTABLISHMENTS_ACTION,
      });
    });
  });

  describe('fetchEstablishmentsFailure', () => {
    test('should be a function', () => {
      expect(fetchEstablishmentsFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchEstablishmentsFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchEstablishmentsFailure(error)).to.be.deep.equal({
        type: constants.FETCH_ESTABLISHMENTS_FAILURE,
        payload: { error },
      });
    });
  });

  describe('fetchEstablishmentsSuccess', () => {
    test('should be a function', () => {
      expect(fetchEstablishmentsSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchEstablishmentsSuccess(establishments)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchEstablishmentsSuccess(establishments)).to.be.deep.equal({
        type: constants.FETCH_ESTABLISHMENTS_SUCCESS,
        payload: { establishments },
      });
    });
  });

  describe('fetchPointsToDistribute', () => {
    test('should be a function', () => {
      expect(fetchPointsToDistribute).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchPointsToDistribute()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchPointsToDistribute()).to.be.deep.equal({
        type: constants.FETCH_POINTS_TO_DISTRIBUTE_ACTION,
      });
    });
  });

  describe('fetchPointsToDistributeFailure', () => {
    test('should be a function', () => {
      expect(fetchPointsToDistributeFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchPointsToDistributeFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchPointsToDistributeFailure(error)).to.be.deep.equal({
        type: constants.FETCH_POINTS_TO_DISTRIBUTE_FAILURE,
        payload: { error },
      });
    });
  });

  describe('fetchPointsToDistributeSuccess', () => {
    test('should be a function', () => {
      expect(fetchPointsToDistributeSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchPointsToDistributeSuccess(pointsToDistribute)).to.be.a(
        'object',
      );
    });

    test('should return a valid object', () => {
      expect(
        fetchPointsToDistributeSuccess(pointsToDistribute),
      ).to.be.deep.equal({
        type: constants.FETCH_POINTS_TO_DISTRIBUTE_SUCCESS,
        payload: { pointsToDistribute },
      });
    });
  });

  describe('setTotalPointsTeamAwards', () => {
    test('should be a function', () => {
      expect(setTotalPointsTeamAwards).to.be.a('function');
    });

    test('should return a object', () => {
      expect(setTotalPointsTeamAwards(5)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(setTotalPointsTeamAwards(5)).to.be.deep.equal({
        type: constants.SET_TOTAL_POINTS_TEAM_AWARDS,
        payload: { totalPointsTeamAwards: 5 },
      });
    });
  });

  describe('setTotalPointsResaleCooperative', () => {
    test('should be a function', () => {
      expect(setTotalPointsResaleCooperative).to.be.a('function');
    });

    test('should return a object', () => {
      expect(setTotalPointsResaleCooperative(5)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(setTotalPointsResaleCooperative(5)).to.be.deep.equal({
        type: constants.SET_TOTAL_POINTS_RESALE_COOPERATIVE,
        payload: { totalPointsResaleCooperative: 5 },
      });
    });
  });

  describe('setIsReadyToDistribute', () => {
    test('should be a function', () => {
      expect(setIsReadyToDistribute).to.be.a('function');
    });

    test('should return a object', () => {
      expect(setIsReadyToDistribute(true)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(setIsReadyToDistribute(true)).to.be.deep.equal({
        type: constants.SET_IS_READY_TO_DISTRIBUTE,
        payload: { isReadyToDistribute: true },
      });
    });
  });

  describe('setSelectedEstablishment', () => {
    test('should be a function', () => {
      expect(setSelectedEstablishment).to.be.a('function');
    });

    test('should return a object', () => {
      expect(setSelectedEstablishment(selectedEstablishment)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(setSelectedEstablishment(selectedEstablishment)).to.be.deep.equal({
        type: constants.SET_SELECTED_ESTABLISHMENT,
        payload: { selectedEstablishment },
      });
    });
  });

  describe('distributePoints', () => {
    const { Rc } = constants.FinishedDistributionPossibilities;

    test('should be a function', () => {
      expect(distributePoints).to.be.a('function');
    });

    test('should return a object', () => {
      expect(distributePoints(Rc)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(distributePoints(Rc)).to.be.deep.equal({
        type: constants.DISTRIBUTE_POINTS_ACTION,
        meta: { finishedDistributionPossibilities: Rc },
      });
    });
  });

  describe('distributePointsFinally', () => {
    const { All } = constants.FinishedDistributionPossibilities;

    test('should be a function', () => {
      expect(distributePointsFinally).to.be.a('function');
    });

    test('should return a object', () => {
      expect(distributePointsFinally(All)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(distributePointsFinally(All)).to.be.deep.equal({
        type: constants.DISTRIBUTE_POINTS_FINALLY_ACTION,
        meta: { finishedDistributionPossibilities: All },
      });
    });
  });

  describe('distributePointsFailure', () => {
    test('should be a function', () => {
      expect(distributePointsFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(distributePointsFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(distributePointsFailure(error)).to.be.deep.equal({
        type: constants.DISTRIBUTE_POINTS_FAILURE,
        payload: { error },
      });
    });
  });

  describe('distributePointsSuccess', () => {
    test('should be a function', () => {
      expect(distributePointsSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(distributePointsSuccess()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(distributePointsSuccess()).to.be.deep.equal({
        type: constants.DISTRIBUTE_POINTS_SUCCESS,
      });
    });
  });

  describe('setFinishedDistribution', () => {
    const { All } = constants.FinishedDistributionPossibilities;

    test('should be a function', () => {
      expect(setFinishedDistribution).to.be.a('function');
    });

    test('should return a object', () => {
      expect(setFinishedDistribution(All)).to.be.a('object');
    });

    test('should return a valid object with defualt param', () => {
      expect(setFinishedDistribution(All)).to.be.deep.equal({
        type: constants.SET_FINISHED_DISTRIBUTION,
        payload: {
          finishedDistribution: All,
        },
      });
    });

    test('should return a valid object with param', () => {
      expect(
        setFinishedDistribution(
          constants.FinishedDistributionPossibilities.All,
        ),
      ).to.be.deep.equal({
        type: constants.SET_FINISHED_DISTRIBUTION,
        payload: {
          finishedDistribution: constants.FinishedDistributionPossibilities.All,
        },
      });
    });
  });
});
