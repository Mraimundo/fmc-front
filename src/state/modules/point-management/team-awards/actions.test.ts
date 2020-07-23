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
  distributePoints,
  distributePointsFailure,
  distributePointsSuccess,
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
  DISTRIBUTE_POINTS_ACTION,
  DISTRIBUTE_POINTS_FAILURE,
  DISTRIBUTE_POINTS_SUCCESS,
} from './constants';
import { error, subsidiaries, roles, participant, participants } from './mock';

describe('src/state/modules/point-management/team-awards/actions', () => {
  describe('fetchSubsidiaries', () => {
    it('should be a function', () => {
      expect(fetchSubsidiaries).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchSubsidiaries()).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchSubsidiaries()).to.be.deep.equal({
        type: FETCH_SUBSIDIARIES_ACTION,
      });
    });
  });

  describe('fetchSubsidiariesFailure', () => {
    it('should be a function', () => {
      expect(fetchSubsidiariesFailure).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchSubsidiariesFailure(error)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchSubsidiariesFailure(error)).to.be.deep.equal({
        type: FETCH_SUBSIDIARIES_FAILURE,
        payload: {
          error,
        },
      });
    });
  });

  describe('fetchSubsidiariesSuccess', () => {
    it('should be a function', () => {
      expect(fetchSubsidiariesSuccess).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchSubsidiariesSuccess(subsidiaries)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchSubsidiariesSuccess(subsidiaries)).to.be.deep.equal({
        type: FETCH_SUBSIDIARIES_SUCCESS,
        payload: { subsidiaries },
      });
    });
  });

  describe('fetchRoles', () => {
    it('should be a function', () => {
      expect(fetchRoles).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchRoles()).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchRoles()).to.be.deep.equal({
        type: FETCH_ROLES_ACTION,
      });
    });
  });

  describe('fetchRolesFailure', () => {
    it('should be a function', () => {
      expect(fetchRolesFailure).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchRolesFailure(error)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchRolesFailure(error)).to.be.deep.equal({
        type: FETCH_ROLES_FAILURE,
        payload: {
          error,
        },
      });
    });
  });

  describe('fetchRolesSuccess', () => {
    it('should be a function', () => {
      expect(fetchRolesSuccess).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchRolesSuccess(roles)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchRolesSuccess(roles)).to.be.deep.equal({
        type: FETCH_ROLES_SUCCESS,
        payload: { roles },
      });
    });
  });

  describe('fetchParticipants', () => {
    it('should be a function', () => {
      expect(fetchParticipants).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchParticipants()).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchParticipants()).to.be.deep.equal({
        type: FETCH_PARTICIPANTS_ACTION,
      });
    });
  });

  describe('fetchParticipantsFailure', () => {
    it('should be a function', () => {
      expect(fetchParticipantsFailure).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchParticipantsFailure(error)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchParticipantsFailure(error)).to.be.deep.equal({
        type: FETCH_PARTICIPANTS_FAILURE,
        payload: {
          error,
        },
      });
    });
  });

  describe('fetchParticipantsSuccess', () => {
    it('should be a function', () => {
      expect(fetchParticipantsSuccess).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchParticipantsSuccess(participants)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchParticipantsSuccess(participants)).to.be.deep.equal({
        type: FETCH_PARTICIPANTS_SUCCESS,
        payload: { participants },
      });
    });
  });

  describe('selectSubsidiary', () => {
    it('should be a function', () => {
      expect(selectSubsidiary).to.be.a('function');
    });

    it('should return a object', () => {
      expect(selectSubsidiary(1)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(selectSubsidiary(1)).to.be.deep.equal({
        type: SELECT_SUBSIDIARY,
        meta: { subsidiaryId: 1 },
      });
    });
  });

  describe('selectRole', () => {
    it('should be a function', () => {
      expect(selectRole).to.be.a('function');
    });

    it('should return a object', () => {
      expect(selectRole(1)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(selectRole(1)).to.be.deep.equal({
        type: SELECT_ROLE,
        meta: { roleId: 1 },
      });
    });
  });

  describe('setParticipantFinder', () => {
    it('should be a function', () => {
      expect(setParticipantFinder).to.be.a('function');
    });

    it('should return a object', () => {
      expect(setParticipantFinder('Gabriel')).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(setParticipantFinder('Gabriel')).to.be.deep.equal({
        type: SET_PARTICIPANT_FINDER,
        payload: { participantFinder: 'Gabriel' },
      });
    });
  });

  describe('setPointsToDistribute', () => {
    it('should be a function', () => {
      expect(setPointsToDistribute).to.be.a('function');
    });

    it('should return a object', () => {
      expect(setPointsToDistribute(5000)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(setPointsToDistribute(5000)).to.be.deep.equal({
        type: SET_POINTS_TO_DISTRIBUTE,
        payload: { pointsToDistribute: 5000 },
      });
    });
  });

  describe('toggleDistributeEqually', () => {
    it('should be a function', () => {
      expect(toggleDistributeEqually).to.be.a('function');
    });

    it('should return a object', () => {
      expect(toggleDistributeEqually()).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(toggleDistributeEqually()).to.be.deep.equal({
        type: TOGGLE_DISTRIBUTE_EQUALLY,
      });
    });
  });

  describe('scoreParticipant', () => {
    it('should be a function', () => {
      expect(scoreParticipant).to.be.a('function');
    });

    it('should return a object', () => {
      expect(scoreParticipant(participant, 200)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(scoreParticipant(participant, 200)).to.be.deep.equal({
        type: SCORE_PARTICIPANT,
        meta: { participant, points: 200 },
      });
    });
  });

  describe('assignPoints', () => {
    it('should be a function', () => {
      expect(assignPoints).to.be.a('function');
    });

    it('should return a object', () => {
      expect(assignPoints()).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(assignPoints()).to.be.deep.equal({
        type: ASSIGN_POINTS_ACTION,
      });
    });
  });

  describe('assignPointsFailure', () => {
    it('should be a function', () => {
      expect(assignPointsFailure).to.be.a('function');
    });

    it('should return a object', () => {
      expect(assignPointsFailure(error)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(assignPointsFailure(error)).to.be.deep.equal({
        type: ASSIGN_POINTS_FAILURE,
        payload: { error },
      });
    });
  });

  describe('assignPointsSuccess', () => {
    it('should be a function', () => {
      expect(assignPointsSuccess).to.be.a('function');
    });

    it('should return a object', () => {
      expect(assignPointsSuccess()).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(assignPointsSuccess()).to.be.deep.equal({
        type: ASSIGN_POINTS_SUCCESS,
      });
    });
  });

  describe('setTotalForEachParticipantDistributedEqually', () => {
    it('should be a function', () => {
      expect(setTotalForEachParticipantDistributedEqually).to.be.a('function');
    });

    it('should return a object', () => {
      expect(setTotalForEachParticipantDistributedEqually(1500)).to.be.a(
        'object',
      );
    });

    it('should return a valid object', () => {
      expect(
        setTotalForEachParticipantDistributedEqually(10000),
      ).to.be.deep.equal({
        type: SET_TOTAL_FOR_EACH_PARTICIPANT_DISTRIBUTED_EQUALLY,
        payload: { totalForEachParticipantDistributedEqually: 10000 },
      });
    });
  });

  describe('scoreAllParticipantsEqually', () => {
    it('should be a function', () => {
      expect(scoreAllParticipantsEqually).to.be.a('function');
    });

    it('should return a object', () => {
      expect(scoreAllParticipantsEqually(1500)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(scoreAllParticipantsEqually(1500)).to.be.deep.equal({
        type: SCORE_ALL_PARTICIPANTS_EQUALLY,
        meta: { points: 1500 },
      });
    });
  });

  describe('setSelectedRolesAll', () => {
    it('should be a function', () => {
      expect(setSelectedRolesAll).to.be.a('function');
    });

    it('should return a object', () => {
      expect(setSelectedRolesAll(roles[0].name)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(setSelectedRolesAll(roles[0].name)).to.be.deep.equal({
        type: SET_SELECTED_ROLES_ALL,
        meta: { role: roles[0].name },
      });
    });
  });

  describe('selectAllParticipants', () => {
    it('should be a function', () => {
      expect(selectAllParticipants).to.be.a('function');
    });

    it('should return a object', () => {
      expect(selectAllParticipants(roles[0].name)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(selectAllParticipants(roles[0].name)).to.be.deep.equal({
        type: SELECT_ALL_PARTICIPANTS,
        meta: { role: roles[0].name },
      });
    });
  });

  describe('deselectAllParticipants', () => {
    it('should be a function', () => {
      expect(deselectAllParticipants).to.be.a('function');
    });

    it('should return a object', () => {
      expect(deselectAllParticipants(roles[0].name)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(deselectAllParticipants(roles[0].name)).to.be.deep.equal({
        type: DESELECT_ALL_PARTICIPANTS,
        meta: { role: roles[0].name },
      });
    });
  });

  describe('toggleSelectedParticipant', () => {
    it('should be a function', () => {
      expect(toggleSelectedParticipant).to.be.a('function');
    });

    it('should return a object', () => {
      expect(toggleSelectedParticipant(1)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(toggleSelectedParticipant(1)).to.be.deep.equal({
        type: TOGGLE_SELECTED_PARTICIPANT,
        meta: { participantId: 1 },
      });
    });
  });

  describe('removeAllScores', () => {
    it('should be a function', () => {
      expect(removeAllScores).to.be.a('function');
    });

    it('should return a object', () => {
      expect(removeAllScores()).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(removeAllScores()).to.be.deep.equal({
        type: REMOVE_ALL_SCORES,
      });
    });
  });

  describe('distributePoints', () => {
    it('should be a function', () => {
      expect(distributePoints).to.be.a('function');
    });

    it('should return a object', () => {
      expect(distributePoints()).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(distributePoints()).to.be.deep.equal({
        type: DISTRIBUTE_POINTS_ACTION,
      });
    });
  });

  describe('distributePointsFailure', () => {
    it('should be a function', () => {
      expect(distributePointsFailure).to.be.a('function');
    });

    it('should return a object', () => {
      expect(distributePointsFailure(error)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(distributePointsFailure(error)).to.be.deep.equal({
        type: DISTRIBUTE_POINTS_FAILURE,
        payload: { error },
      });
    });
  });

  describe('distributePointsSuccess', () => {
    it('should be a function', () => {
      expect(distributePointsSuccess).to.be.a('function');
    });

    it('should return a object', () => {
      expect(distributePointsSuccess()).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(distributePointsSuccess()).to.be.deep.equal({
        type: DISTRIBUTE_POINTS_SUCCESS,
      });
    });
  });
});
