import { all, takeEvery, call, put } from 'redux-saga/effects';

import { handlerErrors } from 'util/handler-errors';
import { fetchTotalPointsToDistributeService } from 'services/point-management/common';
import { FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION } from './constants';
import {
  fetchTotalPointsToDistributeFailure,
  fetchTotalPointsToDistributeSuccess,
} from './actions';

export function* workerFetchTotalPointsToDistribute() {
  try {
    const totalPointsToDistribute = yield call(
      fetchTotalPointsToDistributeService,
    );

    yield put(fetchTotalPointsToDistributeSuccess(totalPointsToDistribute));
  } catch (error) {
    yield put(fetchTotalPointsToDistributeSuccess('50000'));
    // yield call(handlerErrors, error, fetchTotalPointsToDistributeFailure);
  }
}

export default function* commonSagas() {
  yield all([
    takeEvery(
      FETCH_TOTAL_POINTS_TO_DISTRIBUTE_ACTION,
      workerFetchTotalPointsToDistribute,
    ),
  ]);
}
