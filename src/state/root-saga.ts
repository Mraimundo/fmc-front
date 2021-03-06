// External
import { all, fork } from 'redux-saga/effects';

// Internal
import pointManagementSagas from 'state/modules/point-management/sagas';
import headerSagas from 'state/modules/header/sagas';
import homeSagas from 'state/modules/home/sagas';
import goalsSagas from 'state/modules/goals/sagas';
import pointsSimulatorSagas from 'state/modules/points-simulator/sagas';
import weatherSagas from 'state/modules/weather/sagas';

export default function* rootSaga() {
  yield all([
    fork(pointManagementSagas),
    fork(headerSagas),
    fork(homeSagas),
    fork(goalsSagas),
    fork(pointsSimulatorSagas),
    fork(weatherSagas),
  ]);
}
