import { all, takeEvery, call, put, select } from 'redux-saga/effects';

import { handlerErrors } from 'util/handler-errors';
import {
  fetchBannersService,
  fetchHighlightsService,
  fetchShowcaseProductsService,
} from 'services/home';
import getLuckyNumber from 'services/flying-high/getLuckyNumber';
import {
  getStrategies,
  getEngagements,
  getBells,
  getRanking,
  getPerformance,
} from 'services/home/fmc-team/';
import * as actions from './actions';
import * as constants from './constants';
import * as selectors from './selectors';
import {
  Banner,
  Engagement,
  Highlight,
  ShowcaseProduct,
  Strategy,
  Bell,
  Ranking,
  Performance,
} from './types';

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

export function* workerFetchStrategies() {
  try {
    const result: Strategy[] = yield call(getStrategies);

    if (!result) throw new Error('Erro na api');

    yield put(actions.fetchStrategiesSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchStrategiesFailure);
  }
}

export function* workerFetchEngagements() {
  try {
    const result: Engagement[] = yield call(getEngagements);

    if (!result) throw new Error('Erro na api');

    yield put(actions.fetchEngagementsSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchEngagementsFailure);
  }
}

export function* workerFetchBells() {
  try {
    const result: Bell[] = yield call(getBells);

    if (!result) throw new Error('Erro na api');

    yield put(actions.fetchBellsSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchBellsFailure);
  }
}

export function* workerFetchRanking() {
  try {
    const result: Ranking = yield call(getRanking);

    if (!result) throw new Error('Erro na api');

    yield put(actions.fetchRankingSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchRankingFailure);
  }
}

export function* workerFetchPerformance() {
  try {
    const result: Performance = yield call(getPerformance);

    if (!result) throw new Error('Erro na api');

    yield put(actions.fetchPerformanceSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchPerformanceFailure);
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
    takeEvery(constants.FETCH_STRATEGIES_ACTION, workerFetchStrategies),
    takeEvery(constants.FETCH_ENGAGEMENTS_ACTION, workerFetchEngagements),
    takeEvery(constants.FETCH_BELLS_ACTION, workerFetchBells),
    takeEvery(constants.FETCH_RANKING_ACTION, workerFetchRanking),
    takeEvery(constants.FETCH_PERFORMANCE_ACTION, workerFetchPerformance),
  ]);
}
