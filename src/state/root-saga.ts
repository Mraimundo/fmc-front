// External
import { all, fork } from 'redux-saga/effects';

// Internal
import pointManagementSagas from 'state/modules/point-management/sagas';

export default function* rootSaga() {
  yield all([fork(pointManagementSagas)]);
}
