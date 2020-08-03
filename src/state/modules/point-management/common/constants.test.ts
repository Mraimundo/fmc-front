import { expect } from 'chai';
import {
  FETCH_ESTABLISHMENTS_ACTION,
  FETCH_ESTABLISHMENTS_FAILURE,
  FETCH_ESTABLISHMENTS_SUCCESS,
  FETCH_POINTS_TO_DISTRIBUTE_ACTION,
  FETCH_POINTS_TO_DISTRIBUTE_FAILURE,
  FETCH_POINTS_TO_DISTRIBUTE_SUCCESS,
  SET_TOTAL_POINTS_TEAM_AWARDS,
  SET_TOTAL_POINTS_RESALE_COOPERATIVE,
  SET_IS_READY_TO_DISTRIBUTE,
  SET_SELECTED_ESTABLISHMENT,
  DISTRIBUTE_POINTS_ACTION,
  DISTRIBUTE_POINTS_FINALLY_ACTION,
  DISTRIBUTE_POINTS_FAILURE,
  DISTRIBUTE_POINTS_SUCCESS,
  SET_FINISHED_DISTRIBUTION,
} from './constants';

describe('src/state/modules/point-management/common/constants', () => {
  describe('FETCH_POINTS_TO_DISTRIBUTE_ACTION', () => {
    test('should return a string', () => {
      expect(FETCH_POINTS_TO_DISTRIBUTE_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_POINTS_TO_DISTRIBUTE_ACTION).to.be.equal(
        '@fmc/point-management/common/FETCH_POINTS_TO_DISTRIBUTE_ACTION',
      );
    });
  });

  describe('FETCH_POINTS_TO_DISTRIBUTE_FAILURE', () => {
    test('should return a string', () => {
      expect(FETCH_POINTS_TO_DISTRIBUTE_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_POINTS_TO_DISTRIBUTE_FAILURE).to.be.equal(
        '@fmc/point-management/common/FETCH_POINTS_TO_DISTRIBUTE_FAILURE',
      );
    });
  });

  describe('FETCH_POINTS_TO_DISTRIBUTE_SUCCESS', () => {
    test('should return a string', () => {
      expect(FETCH_POINTS_TO_DISTRIBUTE_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_POINTS_TO_DISTRIBUTE_SUCCESS).to.be.equal(
        '@fmc/point-management/common/FETCH_POINTS_TO_DISTRIBUTE_SUCCESS',
      );
    });
  });

  describe('FETCH_ESTABLISHMENTS_ACTION', () => {
    test('should return a string', () => {
      expect(FETCH_ESTABLISHMENTS_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_ESTABLISHMENTS_ACTION).to.be.equal(
        '@fmc/point-management/common/FETCH_ESTABLISHMENTS_ACTION',
      );
    });
  });

  describe('FETCH_ESTABLISHMENTS_FAILURE', () => {
    test('should return a string', () => {
      expect(FETCH_ESTABLISHMENTS_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_ESTABLISHMENTS_FAILURE).to.be.equal(
        '@fmc/point-management/common/FETCH_ESTABLISHMENTS_FAILURE',
      );
    });
  });

  describe('FETCH_ESTABLISHMENTS_SUCCESS', () => {
    test('should return a string', () => {
      expect(FETCH_ESTABLISHMENTS_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_ESTABLISHMENTS_SUCCESS).to.be.equal(
        '@fmc/point-management/common/FETCH_ESTABLISHMENTS_SUCCESS',
      );
    });
  });

  describe('SET_TOTAL_POINTS_TEAM_AWARDS', () => {
    test('should return a string', () => {
      expect(SET_TOTAL_POINTS_TEAM_AWARDS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(SET_TOTAL_POINTS_TEAM_AWARDS).to.be.equal(
        '@fmc/point-management/common/SET_TOTAL_POINTS_TEAM_AWARDS',
      );
    });
  });

  describe('SET_TOTAL_POINTS_RESALE_COOPERATIVE', () => {
    test('should return a string', () => {
      expect(SET_TOTAL_POINTS_RESALE_COOPERATIVE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(SET_TOTAL_POINTS_RESALE_COOPERATIVE).to.be.equal(
        '@fmc/point-management/common/SET_TOTAL_POINTS_RESALE_COOPERATIVE',
      );
    });
  });

  describe('SET_IS_READY_TO_DISTRIBUTE', () => {
    test('should return a string', () => {
      expect(SET_IS_READY_TO_DISTRIBUTE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(SET_IS_READY_TO_DISTRIBUTE).to.be.equal(
        '@fmc/point-management/common/SET_IS_READY_TO_DISTRIBUTE',
      );
    });
  });

  describe('SET_SELECTED_ESTABLISHMENT', () => {
    test('should return a string', () => {
      expect(SET_SELECTED_ESTABLISHMENT).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(SET_SELECTED_ESTABLISHMENT).to.be.equal(
        '@fmc/point-management/common/SET_SELECTED_ESTABLISHMENT',
      );
    });
  });

  describe('DISTRIBUTE_POINTS_ACTION', () => {
    test('should return a string', () => {
      expect(DISTRIBUTE_POINTS_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(DISTRIBUTE_POINTS_ACTION).to.be.equal(
        '@fmc/point-management/common/DISTRIBUTE_POINTS_ACTION',
      );
    });
  });

  describe('DISTRIBUTE_POINTS_FINALLY_ACTION', () => {
    test('should return a string', () => {
      expect(DISTRIBUTE_POINTS_FINALLY_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(DISTRIBUTE_POINTS_FINALLY_ACTION).to.be.equal(
        '@fmc/point-management/common/DISTRIBUTE_POINTS_FINALLY_ACTION',
      );
    });
  });

  describe('DISTRIBUTE_POINTS_FAILURE', () => {
    test('should return a string', () => {
      expect(DISTRIBUTE_POINTS_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(DISTRIBUTE_POINTS_FAILURE).to.be.equal(
        '@fmc/point-management/common/DISTRIBUTE_POINTS_FAILURE',
      );
    });
  });

  describe('DISTRIBUTE_POINTS_SUCCESS', () => {
    test('should return a string', () => {
      expect(DISTRIBUTE_POINTS_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(DISTRIBUTE_POINTS_SUCCESS).to.be.equal(
        '@fmc/point-management/common/DISTRIBUTE_POINTS_SUCCESS',
      );
    });
  });

  describe('SET_FINISHED_DISTRIBUTION', () => {
    test('should return a string', () => {
      expect(SET_FINISHED_DISTRIBUTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(SET_FINISHED_DISTRIBUTION).to.be.equal(
        '@fmc/point-management/common/SET_FINISHED_DISTRIBUTION',
      );
    });
  });
});
