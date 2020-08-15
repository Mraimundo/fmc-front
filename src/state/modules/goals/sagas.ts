import { all, takeEvery, call, put } from 'redux-saga/effects';

import { handlerErrors } from 'util/handler-errors';
import {
  fetchCampaignsService,
  fetchBillingPogService,
  fetchPotentializersService,
  fetchInfosService,
  fetchTopPurchasingProductsService,
  fetchTopSellingProductsService,
} from 'services/goals';
import * as actions from './actions';
import * as constants from './constants';
import { Product, BillingPog, Campaign, Potentializer, Infos } from './types';

export function* workerFetchCampaigns() {
  try {
    const result: Campaign[] | null = yield call(fetchCampaignsService);

    if (!result) throw new Error('Não foi possível obter as campanhas');

    yield put(actions.fetchCampaignsSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchCampaignsFailure);
  }
}

export function* workerFetchBillingPog() {
  try {
    const result: BillingPog | null = yield call(fetchBillingPogService);

    if (!result)
      throw new Error('Não foi possível obter o faturamento, POG e devolução');

    yield put(actions.fetchBillingPogSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchBillingPogFailure);
  }
}

export function* workerFetchPotentializers() {
  try {
    const result: Potentializer[] | null = yield call(
      fetchPotentializersService,
    );

    if (!result) throw new Error('Não foi possível obter os potencializadores');

    yield put(actions.fetchPotentializersSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchPotentializersFailure);
  }
}

export function* workerFetchInfos() {
  try {
    const result: Infos | null = yield call(fetchInfosService);

    if (!result) throw new Error('Não foi possível obter as informações');

    yield put(actions.fetchInfosSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchInfosFailure);
  }
}

export function* workerFetchTopPurchasingProducts() {
  try {
    const result: Product[] | null = yield call(
      fetchTopPurchasingProductsService,
    );

    if (!result)
      throw new Error('Não foi possível obter os produtos mais comprados');

    yield put(actions.fetchTopPurchasingProductsSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchTopPurchasingProductsFailure);
  }
}

export function* workerFetchTopSellingProducts() {
  try {
    const result: Product[] | null = yield call(fetchTopSellingProductsService);

    if (!result)
      throw new Error('Não foi possível obter os produtos mais vendidos');

    yield put(actions.fetchTopSellingProductsSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchTopSellingProductsFailure);
  }
}

export default function* headerSagas() {
  yield all([
    takeEvery(constants.FETCH_CAMPAIGNS_ACTION, workerFetchCampaigns),
    takeEvery(constants.FETCH_BILLING_POG_ACTION, workerFetchBillingPog),
    takeEvery(constants.FETCH_POTENTIALIZERS_ACTION, workerFetchPotentializers),
    takeEvery(constants.FETCH_INFOS_ACTION, workerFetchInfos),
    takeEvery(
      constants.FETCH_TOP_PURCHASING_PRODUCTS_ACTION,
      workerFetchTopPurchasingProducts,
    ),
    takeEvery(
      constants.FETCH_TOP_SELLING_PRODUCTS_ACTION,
      workerFetchTopSellingProducts,
    ),
  ]);
}
