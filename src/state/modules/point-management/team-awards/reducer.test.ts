import { expect } from 'chai';

import reducer, { initialState } from './reducer';
import * as actions from './actions';
import {
  scoreParticipant,
  assignPoints,
  scoreAllParticipantsEqually,
  toggleSubsidiarySelection,
  setSelectedRolesAll,
  selectAllParticipants,
  deselectAllParticipants,
} from './utils';
import state, {
  errors,
  subsidiaries,
  roles,
  participants,
  scoredParticipants,
  participant,
  selectedParticipants,
} from './mock';

describe('src/state/modules/point-management/team-awards/reducer', () => {
  it('should be a function', () => {
    expect(reducer).to.be.a('function');
  });

  it('should return a initial state', () => {
    const result = reducer(undefined, { type: 'unknown' });

    expect(result).to.be.deep.equal(initialState);
  });

  it('should can handle FETCH_SUBSIDIARIES_ACTION', () => {
    const result = reducer(undefined, actions.fetchSubsidiaries());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchSubsidiaries: {
        isFetching: true,
      },
    });
  });

  it('should can handle FETCH_SUBSIDIARIES_FAILURE', () => {
    const result = reducer(undefined, actions.fetchSubsidiariesFailure(errors));

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchSubsidiaries: {
        isFetching: false,
        errors,
      },
    });
  });

  it('should can handle FETCH_SUBSIDIARIES_SUCCESS', () => {
    const result = reducer(
      undefined,
      actions.fetchSubsidiariesSuccess(subsidiaries),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchSubsidiaries: {
        isFetching: false,
      },
      subsidiaries,
    });
  });

  it('should can handle FETCH_ROLES_ACTION', () => {
    const result = reducer(undefined, actions.fetchRoles());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchRoles: {
        isFetching: true,
      },
    });
  });

  it('should can handle FETCH_ROLES_FAILURE', () => {
    const result = reducer(undefined, actions.fetchRolesFailure(errors));

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchRoles: {
        isFetching: false,
        errors,
      },
    });
  });

  it('should can handle FETCH_ROLES_SUCCESS', () => {
    const result = reducer(undefined, actions.fetchRolesSuccess(roles));

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchRoles: {
        isFetching: false,
      },
      roles,
    });
  });

  it('should can handle FETCH_PARTICIPANTS_ACTION', () => {
    const result = reducer(undefined, actions.fetchParticipants());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchParticipants: {
        isFetching: true,
      },
    });
  });

  it('should can handle FETCH_PARTICIPANTS_FAILURE', () => {
    const result = reducer(undefined, actions.fetchParticipantsFailure(errors));

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchParticipants: {
        isFetching: false,
        errors,
      },
    });
  });

  it('should can handle FETCH_PARTICIPANTS_SUCCESS', () => {
    const result = reducer(
      undefined,
      actions.fetchParticipantsSuccess(participants),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchParticipants: {
        isFetching: false,
      },
      participants,
    });
  });

  it('should can handle SELECT_SUBSIDIARY', () => {
    const result = reducer(undefined, actions.selectSubsidiary(1));

    expect(result).to.be.deep.equal({
      ...initialState,
      selectedSubsidiaries: toggleSubsidiarySelection(
        initialState.selectedSubsidiaries,
        1,
      ),
    });
  });

  it('should can handle SELECT_ROLE', () => {
    const result = reducer(undefined, actions.selectRole(1));

    expect(result).to.be.deep.equal({
      ...initialState,
      selectedRoles: [1],
    });
  });

  it('should can handle SET_PARTICIPANT_FINDER', () => {
    const result = reducer(undefined, actions.setParticipantFinder('Gabriel'));

    expect(result).to.be.deep.equal({
      ...initialState,
      participantFinder: 'Gabriel',
    });
  });

  it('should can handle SET_POINTS_TO_DISTRIBUTE', () => {
    const result = reducer(undefined, actions.setPointsToDistribute('5000'));

    expect(result).to.be.deep.equal({
      ...initialState,
      pointsToDistribute: '5000',
    });
  });

  it('should can handle TOGGLE_DISTRIBUTE_EQUALLY', () => {
    const result = reducer(undefined, actions.toggleDistributeEqually());

    expect(result).to.be.deep.equal({
      ...initialState,
      distributeEqually: true,
    });
  });

  it('should can handle SCORE_PARTICIPANT', () => {
    const result = reducer(
      undefined,
      actions.scoreParticipant(participant, '200'),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      scoredParticipants: scoreParticipant(
        participant,
        '200',
        scoredParticipants,
      ),
    });
  });

  it('should can handle ASSIGN_POINTS_ACTION', () => {
    const result = reducer(undefined, actions.assignPoints());

    expect(result).to.be.deep.equal({
      ...initialState,
      assignPoints: {
        isFetching: true,
      },
    });
  });

  it('should can handle ASSIGN_POINTS_FAILURE', () => {
    const result = reducer(undefined, actions.assignPointsFailure(errors));

    expect(result).to.be.deep.equal({
      ...initialState,
      assignPoints: {
        isFetching: false,
        errors,
      },
    });
  });

  it('should can handle ASSIGN_POINTS_SUCCESS', () => {
    const result = reducer(undefined, actions.assignPointsSuccess());

    expect(result).to.be.deep.equal({
      ...initialState,
      assignPoints: {
        isFetching: false,
      },
      scoredParticipants: assignPoints(initialState.scoredParticipants),
    });
  });

  it('should can handle SET_TOTAL_FOR_EACH_PARTICIPANT_DISTRIBUTED_EQUALLY', () => {
    const result = reducer(
      undefined,
      actions.setTotalForEachParticipantDistributedEqually(2000),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      totalForEachParticipantDistributedEqually: 2000,
    });
  });

  it('should can handle SCORE_ALL_PARTICIPANTS_EQUALLY', () => {
    const result = reducer(
      undefined,
      actions.scoreAllParticipantsEqually('1000'),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      scoredParticipants: scoreAllParticipantsEqually(
        initialState.scoredParticipants,
        '1000',
      ),
    });
  });

  it('should can handle SET_SELECTED_ROLES_ALL', () => {
    expect(
      reducer(undefined, actions.setSelectedRolesAll(roles[0].name)),
    ).to.be.deep.equal({
      ...initialState,
      selectedRolesAll: setSelectedRolesAll(null, roles[0].name),
    });

    expect(
      reducer(state, actions.setSelectedRolesAll(roles[0].name)),
    ).to.be.deep.equal({
      ...state,
      selectedRolesAll: setSelectedRolesAll(
        state.selectedRolesAll,
        roles[0].name,
      ),
    });
  });

  it('should can handle SELECT_ALL_PARTICIPANTS', () => {
    expect(
      reducer(undefined, actions.selectAllParticipants(roles[0].name)),
    ).to.be.deep.equal({
      ...initialState,
      selectedParticipants: selectAllParticipants(null, roles[0].name),
    });

    expect(
      reducer(state, actions.selectAllParticipants(roles[0].name)),
    ).to.be.deep.equal({
      ...state,
      selectedParticipants: selectAllParticipants(participants, roles[0].name),
    });
  });

  it('should can handle DESELECT_ALL_PARTICIPANTS', () => {
    expect(
      reducer(undefined, actions.deselectAllParticipants(roles[0].name)),
    ).to.be.deep.equal({
      ...initialState,
      selectedParticipants: deselectAllParticipants(null, null, roles[0].name),
    });

    expect(
      reducer(state, actions.deselectAllParticipants(roles[0].name)),
    ).to.be.deep.equal({
      ...state,
      selectedParticipants: deselectAllParticipants(
        selectedParticipants,
        participants,
        roles[0].name,
      ),
    });
  });
});
