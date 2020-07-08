import { expect } from 'chai';
import {
  FETCH_SUBSIDIARIES_ACTION,
  FETCH_SUBSIDIARIES_FAILURE,
  FETCH_SUBSIDIARIES_SUCCESS,
  FETCH_ROLES_ACTION,
  FETCH_ROLES_FAILURE,
  FETCH_ROLES_SUCCESS,
  FETCH_PARTICIPANTS_ACTION,
  FETCH_PARTICIPANTS_FAILURE,
  FETCH_PARTICIPANTS_SUCCESS,
  SELECT_SUBSIDIARY,
  SELECT_ROLE,
  SET_PARTICIPANT_FINDER,
  SET_POINTS_TO_DISTRIBUTE,
  TOGGLE_DISTRIBUTE_EQUALLY,
} from './constants';

describe('src/state/modules/point-management/team-awards/constants', () => {
  describe('FETCH_SUBSIDIARIES_ACTION', () => {
    it('should return a string', () => {
      expect(FETCH_SUBSIDIARIES_ACTION).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(FETCH_SUBSIDIARIES_ACTION).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_SUBSIDIARIES_ACTION',
      );
    });
  });

  describe('FETCH_SUBSIDIARIES_FAILURE', () => {
    it('should return a string', () => {
      expect(FETCH_SUBSIDIARIES_FAILURE).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(FETCH_SUBSIDIARIES_FAILURE).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_SUBSIDIARIES_FAILURE',
      );
    });
  });

  describe('FETCH_SUBSIDIARIES_SUCCESS', () => {
    it('should return a string', () => {
      expect(FETCH_SUBSIDIARIES_SUCCESS).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(FETCH_SUBSIDIARIES_SUCCESS).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_SUBSIDIARIES_SUCCESS',
      );
    });
  });

  describe('FETCH_ROLES_ACTION', () => {
    it('should return a string', () => {
      expect(FETCH_ROLES_ACTION).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(FETCH_ROLES_ACTION).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_ROLES_ACTION',
      );
    });
  });

  describe('FETCH_ROLES_FAILURE', () => {
    it('should return a string', () => {
      expect(FETCH_ROLES_FAILURE).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(FETCH_ROLES_FAILURE).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_ROLES_FAILURE',
      );
    });
  });

  describe('FETCH_ROLES_SUCCESS', () => {
    it('should return a string', () => {
      expect(FETCH_ROLES_SUCCESS).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(FETCH_ROLES_SUCCESS).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_ROLES_SUCCESS',
      );
    });
  });

  describe('FETCH_PARTICIPANTS_ACTION', () => {
    it('should return a string', () => {
      expect(FETCH_PARTICIPANTS_ACTION).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(FETCH_PARTICIPANTS_ACTION).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_PARTICIPANTS_ACTION',
      );
    });
  });

  describe('FETCH_PARTICIPANTS_FAILURE', () => {
    it('should return a string', () => {
      expect(FETCH_PARTICIPANTS_FAILURE).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(FETCH_PARTICIPANTS_FAILURE).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_PARTICIPANTS_FAILURE',
      );
    });
  });

  describe('FETCH_PARTICIPANTS_SUCCESS', () => {
    it('should return a string', () => {
      expect(FETCH_PARTICIPANTS_SUCCESS).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(FETCH_PARTICIPANTS_SUCCESS).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_PARTICIPANTS_SUCCESS',
      );
    });
  });

  describe('SELECT_SUBSIDIARY', () => {
    it('should return a string', () => {
      expect(SELECT_SUBSIDIARY).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(SELECT_SUBSIDIARY).to.be.equal(
        '@fmc/point-management/team-awards/SELECT_SUBSIDIARY',
      );
    });
  });

  describe('SELECT_ROLE', () => {
    it('should return a string', () => {
      expect(SELECT_ROLE).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(SELECT_ROLE).to.be.equal(
        '@fmc/point-management/team-awards/SELECT_ROLE',
      );
    });
  });

  describe('SET_PARTICIPANT_FINDER', () => {
    it('should return a string', () => {
      expect(SET_PARTICIPANT_FINDER).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(SET_PARTICIPANT_FINDER).to.be.equal(
        '@fmc/point-management/team-awards/SET_PARTICIPANT_FINDER',
      );
    });
  });

  describe('SET_POINTS_TO_DISTRIBUTE', () => {
    it('should return a string', () => {
      expect(SET_POINTS_TO_DISTRIBUTE).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(SET_POINTS_TO_DISTRIBUTE).to.be.equal(
        '@fmc/point-management/team-awards/SET_POINTS_TO_DISTRIBUTE',
      );
    });
  });

  describe('TOGGLE_DISTRIBUTE_EQUALLY', () => {
    it('should return a string', () => {
      expect(TOGGLE_DISTRIBUTE_EQUALLY).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(TOGGLE_DISTRIBUTE_EQUALLY).to.be.equal(
        '@fmc/point-management/team-awards/TOGGLE_DISTRIBUTE_EQUALLY',
      );
    });
  });
});
