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
  setEstablishmentType,
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
    it('should be a function', () => {
      expect(fetchEstablishments).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchEstablishments()).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchEstablishments()).to.be.deep.equal({
        type: constants.FETCH_ESTABLISHMENTS_ACTION,
      });
    });
  });

  describe('fetchEstablishmentsFailure', () => {
    it('should be a function', () => {
      expect(fetchEstablishmentsFailure).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchEstablishmentsFailure(error)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchEstablishmentsFailure(error)).to.be.deep.equal({
        type: constants.FETCH_ESTABLISHMENTS_FAILURE,
        payload: { error },
      });
    });
  });

  describe('fetchEstablishmentsSuccess', () => {
    it('should be a function', () => {
      expect(fetchEstablishmentsSuccess).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchEstablishmentsSuccess(establishments)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchEstablishmentsSuccess(establishments)).to.be.deep.equal({
        type: constants.FETCH_ESTABLISHMENTS_SUCCESS,
        payload: { establishments },
      });
    });
  });

  describe('fetchPointsToDistribute', () => {
    it('should be a function', () => {
      expect(fetchPointsToDistribute).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchPointsToDistribute()).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchPointsToDistribute()).to.be.deep.equal({
        type: constants.FETCH_POINTS_TO_DISTRIBUTE_ACTION,
      });
    });
  });

  describe('fetchPointsToDistributeFailure', () => {
    it('should be a function', () => {
      expect(fetchPointsToDistributeFailure).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchPointsToDistributeFailure(error)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchPointsToDistributeFailure(error)).to.be.deep.equal({
        type: constants.FETCH_POINTS_TO_DISTRIBUTE_FAILURE,
        payload: { error },
      });
    });
  });

  describe('fetchPointsToDistributeSuccess', () => {
    it('should be a function', () => {
      expect(fetchPointsToDistributeSuccess).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchPointsToDistributeSuccess(pointsToDistribute)).to.be.a(
        'object',
      );
    });

    it('should return a valid object', () => {
      expect(
        fetchPointsToDistributeSuccess(pointsToDistribute),
      ).to.be.deep.equal({
        type: constants.FETCH_POINTS_TO_DISTRIBUTE_SUCCESS,
        payload: { pointsToDistribute },
      });
    });
  });

  describe('setTotalPointsTeamAwards', () => {
    it('should be a function', () => {
      expect(setTotalPointsTeamAwards).to.be.a('function');
    });

    it('should return a object', () => {
      expect(setTotalPointsTeamAwards(5)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(setTotalPointsTeamAwards(5)).to.be.deep.equal({
        type: constants.SET_TOTAL_POINTS_TEAM_AWARDS,
        payload: { totalPointsTeamAwards: 5 },
      });
    });
  });

  describe('setTotalPointsResaleCooperative', () => {
    it('should be a function', () => {
      expect(setTotalPointsResaleCooperative).to.be.a('function');
    });

    it('should return a object', () => {
      expect(setTotalPointsResaleCooperative(5)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(setTotalPointsResaleCooperative(5)).to.be.deep.equal({
        type: constants.SET_TOTAL_POINTS_RESALE_COOPERATIVE,
        payload: { totalPointsResaleCooperative: 5 },
      });
    });
  });

  describe('setIsReadyToDistribute', () => {
    it('should be a function', () => {
      expect(setIsReadyToDistribute).to.be.a('function');
    });

    it('should return a object', () => {
      expect(setIsReadyToDistribute(true)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(setIsReadyToDistribute(true)).to.be.deep.equal({
        type: constants.SET_IS_READY_TO_DISTRIBUTE,
        payload: { isReadyToDistribute: true },
      });
    });
  });

  describe('setSelectedEstablishment', () => {
    it('should be a function', () => {
      expect(setSelectedEstablishment).to.be.a('function');
    });

    it('should return a object', () => {
      expect(setSelectedEstablishment(selectedEstablishment)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(setSelectedEstablishment(selectedEstablishment)).to.be.deep.equal({
        type: constants.SET_SELECTED_ESTABLISHMENT,
        payload: { selectedEstablishment },
      });
    });
  });

  describe('setEstablishmentType', () => {
    it('should be a function', () => {
      expect(setEstablishmentType).to.be.a('function');
    });

    it('should return a object', () => {
      expect(setEstablishmentType('Revenda')).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(setEstablishmentType('Revenda')).to.be.deep.equal({
        type: constants.SET_ESTABLISHMENT_TYPE,
        payload: { establishmentType: 'Revenda' },
      });
    });
  });
});
