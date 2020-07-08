import { all, takeEvery, call, put, select } from 'redux-saga/effects';

import { handlerErrors } from 'util/handler-errors';
import {
  fetchSubsidiariesService,
  fetchRolesService,
  fetchParticipantsService,
} from 'services/point-management/team-awards';
import {
  FETCH_SUBSIDIARIES_ACTION,
  FETCH_ROLES_ACTION,
  FETCH_PARTICIPANTS_ACTION,
  SELECT_SUBSIDIARY,
  SELECT_ROLE,
  SET_PARTICIPANT_FINDER,
} from './constants';
import {
  fetchSubsidiariesFailure,
  fetchSubsidiariesSuccess,
  fetchRolesFailure,
  fetchRolesSuccess,
  fetchParticipantsFailure,
  fetchParticipantsSuccess,
} from './actions';
import {
  getSelectedSubsidiaries,
  getSelectedRoles,
  getParticipantFinder,
} from './selectors';
import { Subsidiary, Role, ParticipantsList } from './types';

// remove with api ready to use
import {
  subsidiaries as subsidiariesMock,
  roles as rolesMock,
  participants as participantsMock,
} from './mock';

export function* workerFetchSubsidiaries() {
  try {
    const subsidiaries: Subsidiary[] = yield call(fetchSubsidiariesService);

    yield put(fetchSubsidiariesSuccess(subsidiaries));
  } catch (error) {
    yield put(fetchSubsidiariesSuccess(subsidiariesMock));
    // yield call(handlerErrors, error, fetchSubsidiariesFailure);
  }
}

export function* workerFetchRoles() {
  try {
    const roles: Role[] = yield call(fetchRolesService);

    yield put(fetchRolesSuccess(roles));
  } catch (error) {
    yield put(fetchRolesSuccess(rolesMock));
    // yield call(handlerErrors, error, fetchRolesFailure);
  }
}

export function* workerFetchParticipants() {
  try {
    const subsidiaries = yield select(getSelectedSubsidiaries);
    const roles = yield select(getSelectedRoles);
    const participantFinder = yield select(getParticipantFinder);
    const participants: ParticipantsList = yield call(
      fetchParticipantsService,
      {
        subsidiaries,
        roles,
        participantFinder,
      },
    );

    yield put(fetchParticipantsSuccess(participants));
  } catch (error) {
    yield put(fetchParticipantsSuccess(participantsMock));
    // yield call(handlerErrors, error, fetchParticipantsFailure);
  }
}

export default function* genericSagas() {
  yield all([
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
  ]);
}
