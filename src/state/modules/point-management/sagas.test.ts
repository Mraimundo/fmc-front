import { fork } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';

import mainSaga from './sagas';

import commonSagas from 'state/modules/point-management/common/sagas';
import teamAwardsSagas from 'state/modules/point-management/team-awards/sagas';

describe('src/state/modules/point-management/sagas', () => {
  test('main saga forks other sagas', () => {
    testSaga(mainSaga)
      .next()
      .all([fork(commonSagas), fork(teamAwardsSagas)])
      .finish()
      .isDone();
  });
});
