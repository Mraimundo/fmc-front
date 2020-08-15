import { fork } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';

import pointManagementSagas from 'state/modules/point-management/sagas';
import headerSagas from 'state/modules/header/sagas';
import homeSagas from 'state/modules/home/sagas';
import goalsSagas from 'state/modules/goals/sagas';
import rootSaga from './root-saga';

describe('src/state/root-saga', () => {
  test('root saga forks other sagas', () => {
    testSaga(rootSaga)
      .next()
      .all([
        fork(pointManagementSagas),
        fork(headerSagas),
        fork(homeSagas),
        fork(goalsSagas),
      ])
      .finish()
      .isDone();
  });
});
