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
} from './constants';
import {
  errors,
  subsidiaries,
  selectedSubsidiaries,
  roles,
  selectedRoles,
  participants,
} from './mock';

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
      expect(fetchSubsidiariesFailure(errors)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchSubsidiariesFailure(errors)).to.be.deep.equal({
        type: FETCH_SUBSIDIARIES_FAILURE,
        payload: {
          errors,
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
      expect(fetchRolesFailure(errors)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchRolesFailure(errors)).to.be.deep.equal({
        type: FETCH_ROLES_FAILURE,
        payload: {
          errors,
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
      expect(fetchParticipantsFailure(errors)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchParticipantsFailure(errors)).to.be.deep.equal({
        type: FETCH_PARTICIPANTS_FAILURE,
        payload: {
          errors,
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
      expect(selectSubsidiary(selectedSubsidiaries)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(selectSubsidiary(selectedSubsidiaries)).to.be.deep.equal({
        type: SELECT_SUBSIDIARY,
        payload: { selectedSubsidiaries },
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
      expect(setPointsToDistribute('5000')).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(setPointsToDistribute('5000')).to.be.deep.equal({
        type: SET_POINTS_TO_DISTRIBUTE,
        payload: { pointsToDistribute: '5000' },
      });
    });
  });
});
