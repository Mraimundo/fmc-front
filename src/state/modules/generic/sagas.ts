import { all, takeEvery, call, put } from 'redux-saga/effects';

import { handlerErrors } from 'util/handler-errors';
import isTokenValid from 'services/auth/isTokenValid';
import { FETCH_ANYTHING_ACTION } from './constants';
import { fetchAnythingFailure, fetchAnythingSuccess } from './actions';

export function* workerFetchAnything() {
  try {
    const { data } = yield call(isTokenValid);

    yield put(fetchAnythingSuccess(data));
  } catch (error) {
    yield call(handlerErrors, error, fetchAnythingFailure);
  }
}

export default function* genericSagas() {
  yield all([takeEvery(FETCH_ANYTHING_ACTION, workerFetchAnything)]);
}
