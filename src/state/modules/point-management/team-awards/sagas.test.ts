import { takeEvery } from 'redux-saga/effects';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import {
  fetchSubsidiariesService,
  fetchRolesService,
  fetchParticipantsService,
} from 'services/point-management/team-awards';
import reducer, { initialState } from './reducer';
import {
  FETCH_SUBSIDIARIES_ACTION,
  FETCH_ROLES_ACTION,
  FETCH_PARTICIPANTS_ACTION,
  SELECT_SUBSIDIARY,
  SELECT_ROLE,
  SET_PARTICIPANT_FINDER,
} from './constants';
import {
  fetchSubsidiaries,
  fetchSubsidiariesSuccess,
  fetchRoles,
  fetchRolesSuccess,
  fetchParticipantsSuccess,
  fetchParticipants,
} from './actions';
import mainSaga, {
  workerFetchSubsidiaries,
  workerFetchRoles,
  workerFetchParticipants,
} from './sagas';
import state, { subsidiaries, roles, participants } from './mock';

describe('src/state/modules/generic/sagas', () => {
  describe('workerFetchSubsidiaries', () => {
    it('fetch subsidiaries', async () => {
      await expectSaga(workerFetchSubsidiaries)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[matchers.call.fn(fetchSubsidiariesService), subsidiaries]])
        .put(fetchSubsidiariesSuccess(subsidiaries))
        .dispatch(fetchSubsidiaries())
        .hasFinalState({
          ...initialState,
          subsidiaries,
          isFetching: false,
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
        .put(fetchRolesSuccess(roles))
        .dispatch(fetchRoles())
        .hasFinalState({
          ...initialState,
          roles,
          isFetching: false,
        })
        .run();
    });
  });

  describe('workerFetchParticipants', () => {
    it('fetch participants', async () => {
      await expectSaga(workerFetchParticipants)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[matchers.call.fn(fetchParticipantsService), participants]])
        .put(fetchParticipantsSuccess(participants))
        .dispatch(fetchParticipants())
        .hasFinalState({
          ...initialState,
          participants,
          isFetching: false,
        })
        .run();
    });
  });

  it('main saga takes actions', () => {
    testSaga(mainSaga)
      .next()
      .all([
        takeEvery(FETCH_SUBSIDIARIES_ACTION, workerFetchSubsidiaries),
        takeEvery(FETCH_ROLES_ACTION, workerFetchRoles),
        takeEvery(
          [
            FETCH_PARTICIPANTS_ACTION,
            SELECT_SUBSIDIARY,
            SELECT_ROLE,
            SET_PARTICIPANT_FINDER,
          ],
          workerFetchParticipants,
        ),
      ])
      .finish()
      .isDone();
  });
});
