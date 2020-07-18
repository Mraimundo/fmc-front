import { takeEvery, select } from 'redux-saga/effects';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import {
  fetchSubsidiariesService,
  fetchRolesService,
  fetchParticipantsService,
} from 'services/point-management/team-awards';
import reducer, { initialState } from './reducer';
import * as constants from './constants';
import * as actions from './actions';
import * as selectors from './selectors';
import mainSaga, {
  workerFetchSubsidiaries,
  workerFetchRoles,
  workerFetchParticipants,
  workerAssignPoints,
  workerDistributeEqually,
  workerSetSelectedRolesAll,
} from './sagas';
import {
  subsidiaries,
  roles,
  participants,
  selectedSubsidiaries,
  selectedRoles,
  scoredParticipants,
} from './mock';
import { scoreAllParticipantsEqually, assignPoints } from './utils';
import { ScoredParticipant } from './types';

describe('src/state/modules/generic/sagas', () => {
  describe('workerFetchSubsidiaries', () => {
    it('fetch subsidiaries', async () => {
      await expectSaga(workerFetchSubsidiaries)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[matchers.call.fn(fetchSubsidiariesService), subsidiaries]])
        .put(actions.fetchSubsidiariesSuccess(subsidiaries))
        .dispatch(actions.fetchSubsidiaries())
        .hasFinalState({
          ...initialState,
          subsidiaries,
          fetchSubsidiaries: {
            isFetching: false,
          },
        })
        .run();
    });
  });

  describe('workerFetchRoles', () => {
    it('fetch roles', async () => {
      await expectSaga(workerFetchRoles)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[matchers.call.fn(fetchRolesService), roles]])
        .put(actions.fetchRolesSuccess(roles))
        .dispatch(actions.fetchRoles())
        .hasFinalState({
          ...initialState,
          roles,
          fetchRoles: {
            isFetching: false,
          },
        })
        .run();
    });
  });

  describe('workerFetchParticipants', () => {
    it('fetch participants', async () => {
      await expectSaga(workerFetchParticipants)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getSelectedSubsidiaries), selectedSubsidiaries],
          [select(selectors.getSelectedRoles), selectedRoles],
          [select(selectors.getParticipantFinder), 'Gabriel'],
          [matchers.call.fn(fetchParticipantsService), participants],
        ])
        .put(actions.fetchParticipantsSuccess(participants))
        .dispatch(actions.fetchParticipants())
        .hasFinalState({
          ...initialState,
          participants,
          fetchParticipants: {
            isFetching: false,
          },
        })
        .run();
    });
  });

  describe('workerAssignPoints', () => {
    it('assign points process distributing equally', async () => {
      const pointsToDistributeEqually = '5000';

      await expectSaga(workerAssignPoints)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getDistributeEqually), true],
          [
            select(selectors.getTotalForEachParticipantDistributedEqually),
            pointsToDistributeEqually,
          ],
        ])
        .put(actions.assignPointsSuccess())
        .put(actions.scoreAllParticipantsEqually(pointsToDistributeEqually))
        .dispatch(actions.assignPoints())
        .hasFinalState({
          ...initialState,
          assignPoints: {
            isFetching: false,
          },
          distributeEqually: false,
          pointsToDistribute: '',
          scoredParticipants: scoredParticipants.map(
            (scoredParticipant: ScoredParticipant) => ({
              ...scoredParticipant,
              points: pointsToDistributeEqually,
              assigned: true,
            }),
          ),
        })
        .run();
    });

    it('assign points process without distribute equally', async () => {
      await expectSaga(workerAssignPoints)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[select(selectors.getDistributeEqually), false]])
        .put(actions.assignPointsSuccess())
        .dispatch(actions.assignPoints())
        .hasFinalState({
          ...initialState,
          distributeEqually: false,
          pointsToDistribute: '',
          scoredParticipants: assignPoints(scoredParticipants),
          assignPoints: {
            isFetching: false,
          },
        })
        .run();
    });
  });

  describe('workerDistributeEqually', () => {
    it('distribute equally process with distribute equally checkbox false', async () => {
      await expectSaga(workerDistributeEqually)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[select(selectors.getDistributeEqually), false]])
        .dispatch(actions.toggleDistributeEqually())
        .hasFinalState(initialState)
        .run();
    });

    it('distribute equally process without participants to score', async () => {
      await expectSaga(workerDistributeEqually)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getDistributeEqually), true],
          [select(selectors.getParticipantListTotalWithoutScore), 0],
        ])
        .dispatch(actions.toggleDistributeEqually())
        .hasFinalState(initialState)
        .run();
    });

    it('distribute equally process with participants to score and checkbox distribute equally true', async () => {
      await expectSaga(workerDistributeEqually)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getDistributeEqually), true],
          [select(selectors.getParticipantListTotalWithoutScore), 2],
          [select(selectors.getPointsToDistribute), '5000'],
        ])
        .put(actions.setTotalForEachParticipantDistributedEqually(2500))
        .dispatch(actions.toggleDistributeEqually())
        .hasFinalState({
          ...initialState,
          totalForEachParticipantDistributedEqually: 2500,
        })
        .run();
    });
  });

  it('main saga takes actions', () => {
    testSaga(mainSaga)
      .next()
      .all([
        takeEvery(constants.FETCH_SUBSIDIARIES_ACTION, workerFetchSubsidiaries),
        takeEvery(constants.FETCH_ROLES_ACTION, workerFetchRoles),
        takeEvery(
          [
            constants.FETCH_PARTICIPANTS_ACTION,
            constants.SELECT_SUBSIDIARY,
            constants.SELECT_ROLE,
            constants.SET_PARTICIPANT_FINDER,
          ],
          workerFetchParticipants,
        ),
        takeEvery(constants.ASSIGN_POINTS_ACTION, workerAssignPoints),
        takeEvery(constants.TOGGLE_DISTRIBUTE_EQUALLY, workerDistributeEqually),
        takeEvery(constants.SET_SELECTED_ROLES_ALL, workerSetSelectedRolesAll),
      ])
      .finish()
      .isDone();
  });
});
