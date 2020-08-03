import { takeEvery } from 'redux-saga/effects';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import isTokenValid from 'services/auth/isTokenValid';
import reducer, { initialState } from './reducer';
import { FETCH_ANYTHING_ACTION } from './constants';
import { fetchAnythingAction, fetchAnythingSuccess } from './actions';
import mainSaga, { workerFetchAnything } from './sagas';

describe('src/state/modules/generic/sagas', () => {
  describe('workerFetchAnything', () => {
    const data = {
      name: 'Gabriel',
      email: 'hi.gabrielferreira@gmail.com',
    };

    test('fetch anything', async () => {
      await expectSaga(workerFetchAnything)
        .withReducer(reducer)
        .provide([[matchers.call.fn(isTokenValid), { data }]])
        .put(fetchAnythingSuccess(data))
        .dispatch(fetchAnythingAction())
        .hasFinalState({
          ...initialState,
          ...data,
          isFetching: false,
        })
        .run();
    });
  });

  test('main saga takes actions', () => {
    testSaga(mainSaga)
      .next()
      .all([takeEvery(FETCH_ANYTHING_ACTION, workerFetchAnything)])
      .finish()
      .isDone();
  });
});
