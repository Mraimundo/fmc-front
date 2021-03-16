import { all, takeEvery, call, put, select } from 'redux-saga/effects';

import { handlerErrors } from 'util/handler-errors';
import {
  fetchBannersService,
  fetchHighlightsService,
  fetchShowcaseProductsService,
} from 'services/home';
import getLuckyNumber from 'services/flying-high/getLuckyNumber';
import * as actions from './actions';
import * as constants from './constants';
import * as selectors from './selectors';
import { Banner, Highlight, ShowcaseProduct } from './types';

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

export function* workerFetchShowcaseProducts() {
  try {
    const participantId = yield select(selectors.getParticipantId);

    const result: ShowcaseProduct[] | null = yield call(
      fetchShowcaseProductsService,
      participantId,
    );

    if (!result) throw new Error('Não foi encontrado nenhum produto');

    yield put(actions.fetchShowcaseSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchShowcaseFailure);
  }
}

export function* workerFetchLuckyNumber() {
  try {
    const luckyNumber: string = yield call(getLuckyNumber);
    yield put(actions.fetchLuckyNumberSuccess(luckyNumber));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchLuckyNumberFailure);
  }
}

export default function* headerSagas() {
  yield all([
    takeEvery(constants.FETCH_BANNERS_ACTION, workerFetchBanners),
    takeEvery(constants.FETCH_HIGHLIGHTS_ACTION, workerFetchHighlights),
    takeEvery(
      constants.FETCH_SHOWCASEPRODUCTS_ACTION,
      workerFetchShowcaseProducts,
    ),
    takeEvery(constants.FETCH_LUCKYNUMBER_ACTION, workerFetchLuckyNumber),
  ]);
}
