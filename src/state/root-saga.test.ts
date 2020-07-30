import { fork } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';

import rootSaga from './root-saga';

import pointManagementSagas from 'state/modules/point-management/sagas';

describe('src/state/root-saga', () => {
  it('root saga forks other sagas', () => {
    testSaga(rootSaga)
      .next()
      .all([fork(pointManagementSagas)])
      .finish()
      .isDone();
  });
});
