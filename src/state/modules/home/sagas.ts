import { all, takeEvery, call, put } from 'redux-saga/effects';

import { handlerErrors } from 'util/handler-errors';
import { fetchBannersService } from 'services/home';
import * as actions from './actions';
import * as constants from './constants';
import { Banner } from './types';

export function* workerFetchBanners() {
  try {
    const result: Banner[] | null = yield call(fetchBannersService);

    if (!result) throw new Error('Não foi encontrado nenhum banner');

    yield put(actions.fetchBannersSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchBannersFailure);
  }
}

export default function* headerSagas() {
  yield all([takeEvery(constants.FETCH_BANNERS_ACTION, workerFetchBanners)]);
}
