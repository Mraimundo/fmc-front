import { expect } from 'chai';

import reducer, { initialState } from './reducer';
import * as actions from './actions';
import {
  scoreParticipant,
  scoreAllParticipantsEqually,
  toggleSubsidiarySelection,
  setSelectedRolesAll,
  deselectAllParticipants,
  migrateWaitingScoredToScored,
  selectAllParticipantsByRole,
  toggleSelectedParticipant,
} from './utils';
import {
  error,
  subsidiaries,
  roles,
  participants,
  scoredParticipants,
  participant,
  waitingScoredParticipants,
  selectedParticipants,
} from './mock';

describe('src/state/modules/point-management/team-awards/reducer', () => {
  test('should be a function', () => {
    expect(reducer).to.be.a('function');
  });

  test('should return a initial state', () => {
    const result = reducer(undefined, { type: 'unknown' });

    expect(result).to.be.deep.equal(initialState);
  });

  test('should can handle FETCH_SUBSIDIARIES_ACTION', () => {
    const result = reducer(undefined, actions.fetchSubsidiaries());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchSubsidiaries: {
        isFetching: true,
      },
    });
  });

  test('should can handle FETCH_SUBSIDIARIES_FAILURE', () => {
    const result = reducer(undefined, actions.fetchSubsidiariesFailure(error));

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchSubsidiaries: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle FETCH_SUBSIDIARIES_SUCCESS', () => {
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

  test('should can handle FETCH_ROLES_ACTION', () => {
    const result = reducer(undefined, actions.fetchRoles());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchRoles: {
        isFetching: true,
      },
    });
  });

  test('should can handle FETCH_ROLES_FAILURE', () => {
    const result = reducer(undefined, actions.fetchRolesFailure(error));

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchRoles: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle FETCH_ROLES_SUCCESS', () => {
    const result = reducer(undefined, actions.fetchRolesSuccess(roles));

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchRoles: {
        isFetching: false,
      },
      roles,
    });
  });

  test('should can handle FETCH_PARTICIPANTS_ACTION', () => {
    const result = reducer(undefined, actions.fetchParticipants());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchParticipants: {
        isFetching: true,
      },
    });
  });

  test('should can handle FETCH_PARTICIPANTS_FAILURE', () => {
    const result = reducer(undefined, actions.fetchParticipantsFailure(error));

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchParticipants: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle FETCH_PARTICIPANTS_SUCCESS', () => {
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

  test('should can handle SELECT_SUBSIDIARY', () => {
    const result = reducer(undefined, actions.selectSubsidiary(1));

    expect(result).to.be.deep.equal({
      ...initialState,
      selectedSubsidiaries: toggleSubsidiarySelection(
        initialState.selectedSubsidiaries,
        1,
      ),
      fetchParticipants: {
        isFetching: true,
      },
    });
  });

  test('should can handle SELECT_ROLE', () => {
    const result = reducer(undefined, actions.selectRole(1));

    expect(result).to.be.deep.equal({
      ...initialState,
      selectedRoles: [1],
      fetchParticipants: {
        isFetching: true,
      },
    });
  });

  test('should can handle SET_PARTICIPANT_FINDER', () => {
    const result = reducer(undefined, actions.setParticipantFinder('Gabriel'));

    expect(result).to.be.deep.equal({
      ...initialState,
      participantFinder: 'Gabriel',
      fetchParticipants: {
        isFetching: true,
      },
    });
  });

  test('should can handle SET_POINTS_TO_DISTRIBUTE', () => {
    const result = reducer(undefined, actions.setPointsToDistribute(5000));

    expect(result).to.be.deep.equal({
      ...initialState,
      pointsToDistribute: 5000,
      distributeEqually: false,
      totalForEachParticipantDistributedEqually: null,
    });
  });

  test('should can handle TOGGLE_DISTRIBUTE_EQUALLY', () => {
    const result = reducer(undefined, actions.toggleDistributeEqually());

    expect(result).to.be.deep.equal({
      ...initialState,
      distributeEqually: true,
    });
  });

  test('should can handle SCORE_PARTICIPANT', () => {
    const result = reducer(
      undefined,
      actions.scoreParticipant(participant, 200),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      waitingScoredParticipants: scoreParticipant(
        participant,
        200,
        waitingScoredParticipants,
      ),
    });
  });

  test('should can handle ASSIGN_POINTS_ACTION', () => {
    const result = reducer(undefined, actions.assignPoints());

    expect(result).to.be.deep.equal({
      ...initialState,
      assignPoints: {
        isFetching: true,
      },
    });
  });

  test('should can handle ASSIGN_POINTS_FAILURE', () => {
    const result = reducer(undefined, actions.assignPointsFailure(error));

    expect(result).to.be.deep.equal({
      ...initialState,
      assignPoints: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle ASSIGN_POINTS_SUCCESS', () => {
    const result = reducer(undefined, actions.assignPointsSuccess());

    expect(result).to.be.deep.equal({
      ...initialState,
      distributeEqually: false,
      pointsToDistribute: 0,
      selectedParticipants: null,
      selectedRolesAll: null,
      totalForEachParticipantDistributedEqually: null,
      scoredParticipants: migrateWaitingScoredToScored(
        waitingScoredParticipants,
        scoredParticipants,
      ),
      waitingScoredParticipants: null,
      assignPoints: {
        isFetching: false,
      },
    });
  });

  test('should can handle SET_TOTAL_FOR_EACH_PARTICIPANT_DISTRIBUTED_EQUALLY', () => {
    const result = reducer(
      undefined,
      actions.setTotalForEachParticipantDistributedEqually(2000),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      totalForEachParticipantDistributedEqually: 2000,
    });
  });

  test('should can handle SCORE_ALL_PARTICIPANTS_EQUALLY', () => {
    const result = reducer(
      undefined,
      actions.scoreAllParticipantsEqually(1000),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      waitingScoredParticipants: scoreAllParticipantsEqually({
        participants,
        points: 1000,
        waitingScoredParticipants,
        selectedParticipants,
      }),
    });
  });

  test('should can handle SET_SELECTED_ROLES_ALL', () => {
    expect(
      reducer(undefined, actions.setSelectedRolesAll(roles[0].name)),
    ).to.be.deep.equal({
      ...initialState,
      selectedRolesAll: setSelectedRolesAll(null, roles[0].name),
    });
  });

  test('should can handle SELECT_ALL_PARTICIPANTS', () => {
    expect(
      reducer(undefined, actions.selectAllParticipants(roles[0].name)),
    ).to.be.deep.equal({
      ...initialState,
      selectedParticipants: selectAllParticipantsByRole({
        participants,
        role: roles[0].name,
        scoredParticipants,
        selectedParticipants,
      }),
    });
  });

  test('should can handle DESELECT_ALL_PARTICIPANTS', () => {
    expect(
      reducer(undefined, actions.deselectAllParticipants(roles[0].name)),
    ).to.be.deep.equal({
      ...initialState,
      selectedParticipants: deselectAllParticipants(
        selectedParticipants,
        participants,
        roles[0].name,
      ),
    });
  });

  test('should can handle TOGGLE_SELECTED_PARTICIPANT', () => {
    expect(
      reducer(undefined, actions.toggleSelectedParticipant(1)),
    ).to.be.deep.equal({
      ...initialState,
      selectedParticipants: toggleSelectedParticipant(selectedParticipants, 1),
    });
  });

  test('should can handle REMOVE_ALL_SCORES', () => {
    expect(reducer(undefined, actions.removeAllScores())).to.be.deep.equal({
      ...initialState,
      scoredParticipants: null,
    });
  });

  test('should can handle SET_TOTAL_PARTICIPANTS', () => {
    expect(
      reducer(undefined, actions.setTotalParticipants(1)),
    ).to.be.deep.equal({
      ...initialState,
      totalParticipants: 1,
    });
  });

  test('should can handle TOGGLE_IS_OPEN_MODAL_MISSING_PARTICIPANTS', () => {
    expect(
      reducer(undefined, actions.toggleIsOpenModalMissingParticipants()),
    ).to.be.deep.equal({
      ...initialState,
      isOpenModalMissingParticipants: true,
    });
  });
});
