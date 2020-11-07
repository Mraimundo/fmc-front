import { all, takeEvery, call, put } from 'redux-saga/effects';
import { ActionCreatorPayload } from '@types';

import { handlerErrors } from 'util/handler-errors';
import { getChannel, getProducts } from 'services/points-simulator';
import {
  Channel as ChannelApi,
  Product as ProductApi,
} from 'services/points-simulator/interfaces/api-interface';
import { channelApiToChannel, productsApiToProducts } from './transformers';

import * as actions from './actions';
import * as constants from './constants';

export function* fetchChannel({
  payload,
}: ActionCreatorPayload<typeof constants.FETCH_CHANNEL_ACTION, number>) {
  try {
    const result: ChannelApi = yield call(getChannel, payload);

    if (!result?.id) throw new Error('Falha ao buscar canal');

    yield put(actions.fetchChannelSuccess(channelApiToChannel(result)));

    yield put(actions.fetchProducts(result.id));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchChannelFailure);
  }
}

export function* fetchProducts() {
  try {
    const result: ProductApi[] = yield call(getProducts);

    yield put(actions.fetchProductsSuccess(productsApiToProducts(result)));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchChannelFailure);
  }
}

export default function* pointsSimulatorSagas() {
  yield all([
    takeEvery(constants.FETCH_CHANNEL_ACTION, fetchChannel),
    takeEvery(constants.FETCH_PRODUCTS_ACTION, fetchProducts),
  ]);
}
