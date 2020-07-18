import { expect } from 'chai';
import {
  FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION,
  FETCH_TOTAL_POINTS_TO_DISTRIBUTE_FAILURE,
  FETCH_TOTAL_POINTS_TO_DISTRIBUTE_SUCCESS,
  SET_TOTAL_POINTS_TEAM_AWARDS,
  SET_TOTAL_POINTS_COOPERATIVE,
  SET_IS_READY_TO_DISTRIBUTE,
} from './constants';

describe('src/state/modules/point-management/common/constants', () => {
  describe('SET_TOTAL_POINTS_TEAM_AWARDS', () => {
    it('should return a string', () => {
      expect(SET_TOTAL_POINTS_TEAM_AWARDS).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(SET_TOTAL_POINTS_TEAM_AWARDS).to.be.equal(
        '@fmc/point-management/common/SET_TOTAL_POINTS_TEAM_AWARDS',
      );
    });
  });

  describe('FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION', () => {
    it('should return a string', () => {
      expect(FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION).to.be.equal(
        '@fmc/point-management/common/FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION',
      );
    });
  });

  describe('FETCH_TOTAL_POINTS_TO_DISTRIBUTE_FAILURE', () => {
    it('should return a string', () => {
      expect(FETCH_TOTAL_POINTS_TO_DISTRIBUTE_FAILURE).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(FETCH_TOTAL_POINTS_TO_DISTRIBUTE_FAILURE).to.be.equal(
        '@fmc/point-management/common/FETCH_TOTAL_POINTS_TO_DISTRIBUTE_FAILURE',
      );
    });
  });

  describe('FETCH_TOTAL_POINTS_TO_DISTRIBUTE_SUCCESS', () => {
    it('should return a string', () => {
      expect(FETCH_TOTAL_POINTS_TO_DISTRIBUTE_SUCCESS).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(FETCH_TOTAL_POINTS_TO_DISTRIBUTE_SUCCESS).to.be.equal(
        '@fmc/point-management/common/FETCH_TOTAL_POINTS_TO_DISTRIBUTE_SUCCESS',
      );
    });
  });

  describe('SET_TOTAL_POINTS_COOPERATIVE', () => {
    it('should return a string', () => {
      expect(SET_TOTAL_POINTS_COOPERATIVE).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(SET_TOTAL_POINTS_COOPERATIVE).to.be.equal(
        '@fmc/point-management/common/SET_TOTAL_POINTS_COOPERATIVE',
      );
    });
  });

  describe('SET_IS_READY_TO_DISTRIBUTE', () => {
    it('should return a string', () => {
      expect(SET_IS_READY_TO_DISTRIBUTE).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(SET_IS_READY_TO_DISTRIBUTE).to.be.equal(
        '@fmc/point-management/common/SET_IS_READY_TO_DISTRIBUTE',
      );
    });
  });
});
