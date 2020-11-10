import { all, takeEvery, call, put, select } from 'redux-saga/effects';
import { ActionCreatorPayload } from '@types';

import { handlerErrors } from 'util/handler-errors';
import {
  Channel as ChannelApi,
  Product as ProductApi,
  Indicators as IndicatorsApi,
  Configuration as ConfigurationApi,
} from 'services/points-simulator/interfaces/api-interface';

import * as services from 'services/points-simulator';
import * as transformers from './transformers';
import * as actions from './actions';
import * as selectors from './selectors';
import * as constants from './constants';
import { Product, Indicator, IndicatorType, Channel } from './interfaces';
import getCalculatedIndicators from './services/get-calculated-indicators';

export function* fetchChannel({
  payload,
}: ActionCreatorPayload<typeof constants.FETCH_CHANNEL_ACTION, number>) {
  try {
    const result: ChannelApi = yield call(services.getChannel, payload);

    if (!result?.id) throw new Error('Falha ao buscar canal');

    yield put(
      actions.fetchChannelSuccess(transformers.channelApiToChannel(result)),
    );

    yield put(actions.fetchConfiguration());
    yield put(actions.fetchProducts());
    yield put(actions.fetchIndicators());
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchChannelFailure);
  }
}

export function* fetchProducts() {
  try {
    const channel: Channel = yield select(selectors.getChannel);
    if (!channel) {
      throw new Error('Canal não selecionado');
    }

    const result: ProductApi[] = yield call(services.getProducts, channel.id);

    yield put(
      actions.fetchProductsSuccess(transformers.productsApiToProducts(result)),
    );
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchProductsFailure);
  }
}

export function* fetchIndicators() {
  try {
    const channel: Channel = yield select(selectors.getChannel);
    if (!channel) {
      throw new Error('Canal não selecionado');
    }

    const result: IndicatorsApi = yield call(
      services.getIndicators,
      channel.id,
    );

    yield put(
      actions.fetchIndicatorsSuccess(
        transformers.indicatorsApiToIndicators(result),
      ),
    );
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchIndicatorsFailure);
  }
}

export function* fetchConfiguration() {
  try {
    const channel: Channel = yield select(selectors.getChannel);
    if (!channel) {
      throw new Error('Canal não selecionado');
    }

    const result: ConfigurationApi = yield call(
      services.getConfiguration,
      channel.id,
    );

    yield put(
      actions.fetchConfigurationSuccess(
        transformers.configurationApiToConfiguration(result),
      ),
    );
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchConfigurationFailure);
  }
}

export function* calculateSimulation() {
  try {
    const products: Product[] = yield select(selectors.getProducts);
    const indicators: Indicator[] = yield select(selectors.getIndicators);

    const calculatedIndicators = getCalculatedIndicators(products, indicators);

    yield put(
      actions.fetchCalculateSuccess({
        indicators: calculatedIndicators,
      }),
    );
  } catch (error) {
    console.log('error', error);
    /* yield call(handlerErrors, error, actions.fetchChannelFailure); */
  }
}

export default function* pointsSimulatorSagas() {
  yield all([
    takeEvery(constants.FETCH_CHANNEL_ACTION, fetchChannel),
    takeEvery(constants.FETCH_PRODUCTS_ACTION, fetchProducts),
    takeEvery(constants.FETCH_INDICATORS_ACTION, fetchIndicators),
    takeEvery(constants.FETCH_CONFIGURATION_ACTION, fetchConfiguration),
    takeEvery(constants.CALCULATE_SIMULATION_ACTION, calculateSimulation),
  ]);
}
