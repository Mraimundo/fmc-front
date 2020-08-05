import { all, takeEvery, call, put } from 'redux-saga/effects';

import { handlerErrors } from 'util/handler-errors';
import { fetchCoinQuotationsService, fetchMenuService } from 'services/header';
import * as actions from './actions';
import * as constants from './constants';
import { Coin, MenuItem } from './types';

export function* workerFetchCoinQuotation() {
  try {
    const result: Coin[] | null = yield call(fetchCoinQuotationsService);

    if (!result) throw new Error('Não foi possível obter a cotação das moedas');

    yield put(actions.fetchCoinQuotationSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchCoinQuotationFailure);
  }
}

export function* workerFetchMenu() {
  try {
    const result: MenuItem[] | null = yield call(fetchMenuService);

    if (!result) throw new Error('Não foi encontrado nenhum item para o menu');

    yield put(actions.fetchMenuSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchMenuFailure);
  }
}

export default function* headerSagas() {
  yield all([
    takeEvery(constants.FETCH_COIN_QUOTATION_ACTION, workerFetchCoinQuotation),
    takeEvery(constants.FETCH_MENU_ACTION, workerFetchMenu),
  ]);
}
