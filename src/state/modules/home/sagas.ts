import { all, takeEvery, call, put } from 'redux-saga/effects';

import { handlerErrors } from 'util/handler-errors';
import { fetchBannersService, fetchHighlightsService } from 'services/home';
import * as actions from './actions';
import * as constants from './constants';
import { Banner, Highlight } from './types';

export function* workerFetchBanners() {
  try {
    const result: Banner[] | null = yield call(fetchBannersService);

    if (!result) throw new Error('Não foi encontrado nenhum banner');

    yield put(actions.fetchBannersSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchBannersFailure);
  }
}

export function* workerFetchHighlights() {
  try {
    const result: Highlight[] | null = yield call(fetchHighlightsService);

    if (!result) throw new Error('Não foi encontrado nenhum destaque');

    yield put(actions.fetchHighlightsSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchHighlightsFailure);
  }
}

export default function* headerSagas() {
  yield all([
    takeEvery(constants.FETCH_BANNERS_ACTION, workerFetchBanners),
    takeEvery(constants.FETCH_HIGHLIGHTS_ACTION, workerFetchHighlights),
  ]);
}
