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
  SCORE_PARTICIPANT,
  ASSIGN_POINTS_ACTION,
  ASSIGN_POINTS_FAILURE,
  ASSIGN_POINTS_SUCCESS,
  SCORE_ALL_PARTICIPANTS_EQUALLY,
  SET_TOTAL_FOR_EACH_PARTICIPANT_DISTRIBUTED_EQUALLY,
  SET_SELECTED_ROLES_ALL,
  SELECT_ALL_PARTICIPANTS,
  DESELECT_ALL_PARTICIPANTS,
  TOGGLE_SELECTED_PARTICIPANT,
  REMOVE_ALL_SCORES,
  SET_TOTAL_PARTICIPANTS,
  TOGGLE_IS_OPEN_MODAL_MISSING_PARTICIPANTS,
} from './constants';

describe('src/state/modules/point-management/team-awards/constants', () => {
  describe('FETCH_SUBSIDIARIES_ACTION', () => {
    test('should return a string', () => {
      expect(FETCH_SUBSIDIARIES_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_SUBSIDIARIES_ACTION).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_SUBSIDIARIES_ACTION',
      );
    });
  });

  describe('FETCH_SUBSIDIARIES_FAILURE', () => {
    test('should return a string', () => {
      expect(FETCH_SUBSIDIARIES_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_SUBSIDIARIES_FAILURE).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_SUBSIDIARIES_FAILURE',
      );
    });
  });

  describe('FETCH_SUBSIDIARIES_SUCCESS', () => {
    test('should return a string', () => {
      expect(FETCH_SUBSIDIARIES_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_SUBSIDIARIES_SUCCESS).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_SUBSIDIARIES_SUCCESS',
      );
    });
  });

  describe('FETCH_ROLES_ACTION', () => {
    test('should return a string', () => {
      expect(FETCH_ROLES_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_ROLES_ACTION).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_ROLES_ACTION',
      );
    });
  });

  describe('FETCH_ROLES_FAILURE', () => {
    test('should return a string', () => {
      expect(FETCH_ROLES_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_ROLES_FAILURE).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_ROLES_FAILURE',
      );
    });
  });

  describe('FETCH_ROLES_SUCCESS', () => {
    test('should return a string', () => {
      expect(FETCH_ROLES_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_ROLES_SUCCESS).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_ROLES_SUCCESS',
      );
    });
  });

  describe('FETCH_PARTICIPANTS_ACTION', () => {
    test('should return a string', () => {
      expect(FETCH_PARTICIPANTS_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_PARTICIPANTS_ACTION).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_PARTICIPANTS_ACTION',
      );
    });
  });

  describe('FETCH_PARTICIPANTS_FAILURE', () => {
    test('should return a string', () => {
      expect(FETCH_PARTICIPANTS_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_PARTICIPANTS_FAILURE).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_PARTICIPANTS_FAILURE',
      );
    });
  });

  describe('FETCH_PARTICIPANTS_SUCCESS', () => {
    test('should return a string', () => {
      expect(FETCH_PARTICIPANTS_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_PARTICIPANTS_SUCCESS).to.be.equal(
        '@fmc/point-management/team-awards/FETCH_PARTICIPANTS_SUCCESS',
      );
    });
  });

  describe('SELECT_SUBSIDIARY', () => {
    test('should return a string', () => {
      expect(SELECT_SUBSIDIARY).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(SELECT_SUBSIDIARY).to.be.equal(
        '@fmc/point-management/team-awards/SELECT_SUBSIDIARY',
      );
    });
  });

  describe('SELECT_ROLE', () => {
    test('should return a string', () => {
      expect(SELECT_ROLE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(SELECT_ROLE).to.be.equal(
        '@fmc/point-management/team-awards/SELECT_ROLE',
      );
    });
  });

  describe('SET_PARTICIPANT_FINDER', () => {
    test('should return a string', () => {
      expect(SET_PARTICIPANT_FINDER).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(SET_PARTICIPANT_FINDER).to.be.equal(
        '@fmc/point-management/team-awards/SET_PARTICIPANT_FINDER',
      );
    });
  });

  describe('SET_POINTS_TO_DISTRIBUTE', () => {
    test('should return a string', () => {
      expect(SET_POINTS_TO_DISTRIBUTE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(SET_POINTS_TO_DISTRIBUTE).to.be.equal(
        '@fmc/point-management/team-awards/SET_POINTS_TO_DISTRIBUTE',
      );
    });
  });

  describe('TOGGLE_DISTRIBUTE_EQUALLY', () => {
    test('should return a string', () => {
      expect(TOGGLE_DISTRIBUTE_EQUALLY).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(TOGGLE_DISTRIBUTE_EQUALLY).to.be.equal(
        '@fmc/point-management/team-awards/TOGGLE_DISTRIBUTE_EQUALLY',
      );
    });
  });

  describe('SCORE_PARTICIPANT', () => {
    test('should return a string', () => {
      expect(SCORE_PARTICIPANT).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(SCORE_PARTICIPANT).to.be.equal(
        '@fmc/point-management/team-awards/SCORE_PARTICIPANT',
      );
    });
  });

  describe('ASSIGN_POINTS_ACTION', () => {
    test('should return a string', () => {
      expect(ASSIGN_POINTS_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(ASSIGN_POINTS_ACTION).to.be.equal(
        '@fmc/point-management/team-awards/ASSIGN_POINTS_ACTION',
      );
    });
  });

  describe('ASSIGN_POINTS_FAILURE', () => {
    test('should return a string', () => {
      expect(ASSIGN_POINTS_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(ASSIGN_POINTS_FAILURE).to.be.equal(
        '@fmc/point-management/team-awards/ASSIGN_POINTS_FAILURE',
      );
    });
  });

  describe('ASSIGN_POINTS_SUCCESS', () => {
    test('should return a string', () => {
      expect(ASSIGN_POINTS_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(ASSIGN_POINTS_SUCCESS).to.be.equal(
        '@fmc/point-management/team-awards/ASSIGN_POINTS_SUCCESS',
      );
    });
  });

  describe('SCORE_ALL_PARTICIPANTS_EQUALLY', () => {
    test('should return a string', () => {
      expect(SCORE_ALL_PARTICIPANTS_EQUALLY).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(SCORE_ALL_PARTICIPANTS_EQUALLY).to.be.equal(
        '@fmc/point-management/team-awards/SCORE_ALL_PARTICIPANTS_EQUALLY',
      );
    });
  });

  describe('SET_TOTAL_FOR_EACH_PARTICIPANT_DISTRIBUTED_EQUALLY', () => {
    test('should return a string', () => {
      expect(SET_TOTAL_FOR_EACH_PARTICIPANT_DISTRIBUTED_EQUALLY).to.be.a(
        'string',
      );
    });

    test('should return correct value', () => {
      expect(SET_TOTAL_FOR_EACH_PARTICIPANT_DISTRIBUTED_EQUALLY).to.be.equal(
        '@fmc/point-management/team-awards/SET_TOTAL_FOR_EACH_PARTICIPANT_DISTRIBUTED_EQUALLY',
      );
    });
  });

  describe('SET_SELECTED_ROLES_ALL', () => {
    test('should return a string', () => {
      expect(SET_SELECTED_ROLES_ALL).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(SET_SELECTED_ROLES_ALL).to.be.equal(
        '@fmc/point-management/team-awards/SET_SELECTED_ROLES_ALL',
      );
    });
  });

  describe('SELECT_ALL_PARTICIPANTS', () => {
    test('should return a string', () => {
      expect(SELECT_ALL_PARTICIPANTS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(SELECT_ALL_PARTICIPANTS).to.be.equal(
        '@fmc/point-management/team-awards/SELECT_ALL_PARTICIPANTS',
      );
    });
  });

  describe('DESELECT_ALL_PARTICIPANTS', () => {
    test('should return a string', () => {
      expect(DESELECT_ALL_PARTICIPANTS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(DESELECT_ALL_PARTICIPANTS).to.be.equal(
        '@fmc/point-management/team-awards/DESELECT_ALL_PARTICIPANTS',
      );
    });
  });

  describe('TOGGLE_SELECTED_PARTICIPANT', () => {
    test('should return a string', () => {
      expect(TOGGLE_SELECTED_PARTICIPANT).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(TOGGLE_SELECTED_PARTICIPANT).to.be.equal(
        '@fmc/point-management/team-awards/TOGGLE_SELECTED_PARTICIPANT',
      );
    });
  });

  describe('REMOVE_ALL_SCORES', () => {
    test('should return a string', () => {
      expect(REMOVE_ALL_SCORES).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(REMOVE_ALL_SCORES).to.be.equal(
        '@fmc/point-management/team-awards/REMOVE_ALL_SCORES',
      );
    });
  });

  describe('SET_TOTAL_PARTICIPANTS', () => {
    test('should return a string', () => {
      expect(SET_TOTAL_PARTICIPANTS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(SET_TOTAL_PARTICIPANTS).to.be.equal(
        '@fmc/point-management/team-awards/SET_TOTAL_PARTICIPANTS',
      );
    });
  });

  describe('TOGGLE_IS_OPEN_MODAL_MISSING_PARTICIPANTS', () => {
    test('should return a string', () => {
      expect(TOGGLE_IS_OPEN_MODAL_MISSING_PARTICIPANTS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(TOGGLE_IS_OPEN_MODAL_MISSING_PARTICIPANTS).to.be.equal(
        '@fmc/point-management/team-awards/TOGGLE_IS_OPEN_MODAL_MISSING_PARTICIPANTS',
      );
    });
  });
});
