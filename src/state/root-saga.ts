// External
import { all, fork } from 'redux-saga/effects';

// Internal
import genericSagas from 'state/modules/generic/sagas';

export default function* rootSaga() {
  yield all([fork(genericSagas)]);
}
