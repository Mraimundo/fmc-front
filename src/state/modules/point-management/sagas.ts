// External
import { all, fork } from 'redux-saga/effects';

// Internal
import teamAwardsSagas from 'state/modules/point-management/team-awards/sagas';

export default function* rootSaga() {
  yield all([fork(teamAwardsSagas)]);
}
