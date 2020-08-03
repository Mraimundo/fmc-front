import { expect } from 'chai';

import {
  fetchSubsidiaries,
  fetchSubsidiariesFailure,
  fetchSubsidiariesSuccess,
  fetchRoles,
  fetchRolesFailure,
  fetchRolesSuccess,
  fetchParticipants,
  fetchParticipantsFailure,
  fetchParticipantsSuccess,
  selectSubsidiary,
  selectRole,
  setParticipantFinder,
  setPointsToDistribute,
  toggleDistributeEqually,
  scoreParticipant,
  assignPoints,
  assignPointsFailure,
  assignPointsSuccess,
  setTotalForEachParticipantDistributedEqually,
  scoreAllParticipantsEqually,
  setSelectedRolesAll,
  selectAllParticipants,
  deselectAllParticipants,
  toggleSelectedParticipant,
  removeAllScores,
  setTotalParticipants,
  toggleIsOpenModalMissingParticipants,
} from './actions';
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
  SET_TOTAL_FOR_EACH_PARTICIPANT_DISTRIBUTED_EQUALLY,
  SCORE_ALL_PARTICIPANTS_EQUALLY,
  SET_SELECTED_ROLES_ALL,
  SELECT_ALL_PARTICIPANTS,
  DESELECT_ALL_PARTICIPANTS,
  TOGGLE_SELECTED_PARTICIPANT,
  REMOVE_ALL_SCORES,
  SET_TOTAL_PARTICIPANTS,
  TOGGLE_IS_OPEN_MODAL_MISSING_PARTICIPANTS,
} from './constants';
import { error, subsidiaries, roles, participant, participants } from './mock';

describe('src/state/modules/point-management/team-awards/actions', () => {
  describe('fetchSubsidiaries', () => {
    test('should be a function', () => {
      expect(fetchSubsidiaries).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchSubsidiaries()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchSubsidiaries()).to.be.deep.equal({
        type: FETCH_SUBSIDIARIES_ACTION,
      });
    });
  });

  describe('fetchSubsidiariesFailure', () => {
    test('should be a function', () => {
      expect(fetchSubsidiariesFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchSubsidiariesFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchSubsidiariesFailure(error)).to.be.deep.equal({
        type: FETCH_SUBSIDIARIES_FAILURE,
        payload: {
          error,
        },
      });
    });
  });

  describe('fetchSubsidiariesSuccess', () => {
    test('should be a function', () => {
      expect(fetchSubsidiariesSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchSubsidiariesSuccess(subsidiaries)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchSubsidiariesSuccess(subsidiaries)).to.be.deep.equal({
        type: FETCH_SUBSIDIARIES_SUCCESS,
        payload: { subsidiaries },
      });
    });
  });

  describe('fetchRoles', () => {
    test('should be a function', () => {
      expect(fetchRoles).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchRoles()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchRoles()).to.be.deep.equal({
        type: FETCH_ROLES_ACTION,
      });
    });
  });

  describe('fetchRolesFailure', () => {
    test('should be a function', () => {
      expect(fetchRolesFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchRolesFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchRolesFailure(error)).to.be.deep.equal({
        type: FETCH_ROLES_FAILURE,
        payload: {
          error,
        },
      });
    });
  });

  describe('fetchRolesSuccess', () => {
    test('should be a function', () => {
      expect(fetchRolesSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchRolesSuccess(roles)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchRolesSuccess(roles)).to.be.deep.equal({
        type: FETCH_ROLES_SUCCESS,
        payload: { roles },
      });
    });
  });

  describe('fetchParticipants', () => {
    test('should be a function', () => {
      expect(fetchParticipants).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchParticipants()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchParticipants()).to.be.deep.equal({
        type: FETCH_PARTICIPANTS_ACTION,
      });
    });
  });

  describe('fetchParticipantsFailure', () => {
    test('should be a function', () => {
      expect(fetchParticipantsFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchParticipantsFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchParticipantsFailure(error)).to.be.deep.equal({
        type: FETCH_PARTICIPANTS_FAILURE,
        payload: {
          error,
        },
      });
    });
  });

  describe('fetchParticipantsSuccess', () => {
    test('should be a function', () => {
      expect(fetchParticipantsSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchParticipantsSuccess(participants)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchParticipantsSuccess(participants)).to.be.deep.equal({
        type: FETCH_PARTICIPANTS_SUCCESS,
        payload: { participants },
      });
    });
  });

  describe('selectSubsidiary', () => {
    test('should be a function', () => {
      expect(selectSubsidiary).to.be.a('function');
    });

    test('should return a object', () => {
      expect(selectSubsidiary(1)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(selectSubsidiary(1)).to.be.deep.equal({
        type: SELECT_SUBSIDIARY,
        meta: { subsidiaryId: 1 },
      });
    });
  });

  describe('selectRole', () => {
    test('should be a function', () => {
      expect(selectRole).to.be.a('function');
    });

    test('should return a object', () => {
      expect(selectRole(1)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(selectRole(1)).to.be.deep.equal({
        type: SELECT_ROLE,
        meta: { roleId: 1 },
      });
    });
  });

  describe('setParticipantFinder', () => {
    test('should be a function', () => {
      expect(setParticipantFinder).to.be.a('function');
    });

    test('should return a object', () => {
      expect(setParticipantFinder('Gabriel')).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(setParticipantFinder('Gabriel')).to.be.deep.equal({
        type: SET_PARTICIPANT_FINDER,
        payload: { participantFinder: 'Gabriel' },
      });
    });
  });

  describe('setPointsToDistribute', () => {
    test('should be a function', () => {
      expect(setPointsToDistribute).to.be.a('function');
    });

    test('should return a object', () => {
      expect(setPointsToDistribute(5000)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(setPointsToDistribute(5000)).to.be.deep.equal({
        type: SET_POINTS_TO_DISTRIBUTE,
        payload: { pointsToDistribute: 5000 },
      });
    });
  });

  describe('toggleDistributeEqually', () => {
    test('should be a function', () => {
      expect(toggleDistributeEqually).to.be.a('function');
    });

    test('should return a object', () => {
      expect(toggleDistributeEqually()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(toggleDistributeEqually()).to.be.deep.equal({
        type: TOGGLE_DISTRIBUTE_EQUALLY,
      });
    });
  });

  describe('scoreParticipant', () => {
    test('should be a function', () => {
      expect(scoreParticipant).to.be.a('function');
    });

    test('should return a object', () => {
      expect(scoreParticipant(participant, 200)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(scoreParticipant(participant, 200)).to.be.deep.equal({
        type: SCORE_PARTICIPANT,
        meta: { participant, points: 200 },
      });
    });
  });

  describe('assignPoints', () => {
    test('should be a function', () => {
      expect(assignPoints).to.be.a('function');
    });

    test('should return a object', () => {
      expect(assignPoints()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(assignPoints()).to.be.deep.equal({
        type: ASSIGN_POINTS_ACTION,
      });
    });
  });

  describe('assignPointsFailure', () => {
    test('should be a function', () => {
      expect(assignPointsFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(assignPointsFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(assignPointsFailure(error)).to.be.deep.equal({
        type: ASSIGN_POINTS_FAILURE,
        payload: { error },
      });
    });
  });

  describe('assignPointsSuccess', () => {
    test('should be a function', () => {
      expect(assignPointsSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(assignPointsSuccess()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(assignPointsSuccess()).to.be.deep.equal({
        type: ASSIGN_POINTS_SUCCESS,
      });
    });
  });

  describe('setTotalForEachParticipantDistributedEqually', () => {
    test('should be a function', () => {
      expect(setTotalForEachParticipantDistributedEqually).to.be.a('function');
    });

    test('should return a object', () => {
      expect(setTotalForEachParticipantDistributedEqually(1500)).to.be.a(
        'object',
      );
    });

    test('should return a valid object', () => {
      expect(
        setTotalForEachParticipantDistributedEqually(10000),
      ).to.be.deep.equal({
        type: SET_TOTAL_FOR_EACH_PARTICIPANT_DISTRIBUTED_EQUALLY,
        payload: { totalForEachParticipantDistributedEqually: 10000 },
      });
    });
  });

  describe('scoreAllParticipantsEqually', () => {
    test('should be a function', () => {
      expect(scoreAllParticipantsEqually).to.be.a('function');
    });

    test('should return a object', () => {
      expect(scoreAllParticipantsEqually(1500)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(scoreAllParticipantsEqually(1500)).to.be.deep.equal({
        type: SCORE_ALL_PARTICIPANTS_EQUALLY,
        meta: { points: 1500 },
      });
    });
  });

  describe('setSelectedRolesAll', () => {
    test('should be a function', () => {
      expect(setSelectedRolesAll).to.be.a('function');
    });

    test('should return a object', () => {
      expect(setSelectedRolesAll(roles[0].name)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(setSelectedRolesAll(roles[0].name)).to.be.deep.equal({
        type: SET_SELECTED_ROLES_ALL,
        meta: { role: roles[0].name },
      });
    });
  });

  describe('selectAllParticipants', () => {
    test('should be a function', () => {
      expect(selectAllParticipants).to.be.a('function');
    });

    test('should return a object', () => {
      expect(selectAllParticipants(roles[0].name)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(selectAllParticipants(roles[0].name)).to.be.deep.equal({
        type: SELECT_ALL_PARTICIPANTS,
        meta: { role: roles[0].name },
      });
    });
  });

  describe('deselectAllParticipants', () => {
    test('should be a function', () => {
      expect(deselectAllParticipants).to.be.a('function');
    });

    test('should return a object', () => {
      expect(deselectAllParticipants(roles[0].name)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(deselectAllParticipants(roles[0].name)).to.be.deep.equal({
        type: DESELECT_ALL_PARTICIPANTS,
        meta: { role: roles[0].name },
      });
    });
  });

  describe('toggleSelectedParticipant', () => {
    test('should be a function', () => {
      expect(toggleSelectedParticipant).to.be.a('function');
    });

    test('should return a object', () => {
      expect(toggleSelectedParticipant(1)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(toggleSelectedParticipant(1)).to.be.deep.equal({
        type: TOGGLE_SELECTED_PARTICIPANT,
        meta: { participantId: 1 },
      });
    });
  });

  describe('removeAllScores', () => {
    test('should be a function', () => {
      expect(removeAllScores).to.be.a('function');
    });

    test('should return a object', () => {
      expect(removeAllScores()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(removeAllScores()).to.be.deep.equal({
        type: REMOVE_ALL_SCORES,
      });
    });
  });

  describe('setTotalParticipants', () => {
    test('should be a function', () => {
      expect(setTotalParticipants).to.be.a('function');
    });

    test('should return a object', () => {
      expect(setTotalParticipants(3)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(setTotalParticipants(3)).to.be.deep.equal({
        type: SET_TOTAL_PARTICIPANTS,
        payload: { totalParticipants: 3 },
      });
    });
  });

  describe('toggleIsOpenModalMissingParticipants', () => {
    test('should be a function', () => {
      expect(toggleIsOpenModalMissingParticipants).to.be.a('function');
    });

    test('should return a object', () => {
      expect(toggleIsOpenModalMissingParticipants()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(toggleIsOpenModalMissingParticipants()).to.be.deep.equal({
        type: TOGGLE_IS_OPEN_MODAL_MISSING_PARTICIPANTS,
      });
    });
  });
});
