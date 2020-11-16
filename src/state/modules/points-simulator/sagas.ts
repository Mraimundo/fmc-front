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
import { emptyFetchState } from 'state/utils';
import * as transformers from './transformers';
import * as actions from './actions';
import * as selectors from './selectors';
import * as constants from './constants';
import {
  Product,
  Indicator,
  IndicatorType,
  Channel,
  PointsSimulatorState,
  Configuration,
} from './interfaces';
import getCalculatedIndicators from './services/get-calculated-indicators';
import calculateSimulationDataProductValues from './services/get-calculate-simulation-data-product-values';
import calculateProductsPoints from './services/get-calculated-products-with-points';
import { Mode } from './types';
import { initialState } from './reducer';

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
    const configuration: Configuration = yield select(
      selectors.getConfiguration,
    );

    const calculatedIndicators = getCalculatedIndicators(products, indicators);

    const calculatedProducts = calculateProductsPoints({
      products,
      indicators: calculatedIndicators,
      configuration,
    });

    yield put(
      actions.fetchCalculateSuccess({
        indicators: calculatedIndicators,
        products: calculatedProducts,
      }),
    );
  } catch (error) {
    console.log('error', error);
    /* yield call(handlerErrors, error, actions.fetchChannelFailure); */
  }
}

export function* fetchLoadState({
  payload,
}: ActionCreatorPayload<
  typeof constants.FETCH_LOAD_STATE,
  PointsSimulatorState
>) {
  try {
    yield put(actions.reset());

    const channelId = payload.channel?.id || 0;

    if (!channelId) {
      throw new Error('Falha ao carregar simulação. Canal não encontrado.');
    }

    const channelApi: Channel = transformers.channelApiToChannel(
      yield call(services.getChannel, payload.channel?.id || 0),
    );

    const productsApi: Product[] = transformers.productsApiToProducts(
      yield call(services.getProducts, channelId),
    );

    const indicatorsApi: Indicator[] = transformers.indicatorsApiToIndicators(
      yield call(services.getIndicators, channelId),
    );

    const configurationApi: Configuration = transformers.configurationApiToConfiguration(
      yield call(services.getConfiguration, channelId),
    );

    const productsToSet = payload.products.map(product => {
      const productApiFound = productsApi.find(item => item.id === product.id);
      if (productApiFound) {
        product.pog = productApiFound.pog;
        product.revenues = productApiFound.revenues;
        product.stock = productApiFound.stock;
        product.simulationData = calculateSimulationDataProductValues(
          product.simulationData,
          productApiFound,
          configurationApi,
          payload.dollarBaseValue,
        );
      }
      return product;
    });

    const state: PointsSimulatorState = {
      channel: channelApi,
      configuration: configurationApi,
      dollarBaseValue: payload.dollarBaseValue,
      fetchCalculate: emptyFetchState,
      fetchChannel: emptyFetchState,
      fetchConfiguration: emptyFetchState,
      fetchIndicators: emptyFetchState,
      fetchProducts: emptyFetchState,
      indicators: indicatorsApi,
      mode: Mode.calculator,
      products: productsToSet,
    };

    yield put(actions.fetchLoadStateSuccess(state));
  } catch (error) {
    yield put(actions.fetchLoadStateSuccess(initialState));
  }
}

export default function* pointsSimulatorSagas() {
  yield all([
    takeEvery(constants.FETCH_CHANNEL_ACTION, fetchChannel),
    takeEvery(constants.FETCH_PRODUCTS_ACTION, fetchProducts),
    takeEvery(constants.FETCH_INDICATORS_ACTION, fetchIndicators),
    takeEvery(constants.FETCH_CONFIGURATION_ACTION, fetchConfiguration),
    takeEvery(constants.CALCULATE_SIMULATION_ACTION, calculateSimulation),
    takeEvery(constants.FETCH_LOAD_STATE, fetchLoadState),
  ]);
}
