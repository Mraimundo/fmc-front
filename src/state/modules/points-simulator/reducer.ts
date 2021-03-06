import { Reducer } from 'redux';
import produce from 'immer';
import { emptyFetchState, fetchErrorState, fetchingState } from 'state/utils';
import { Mode } from './types';
import { PointsSimulatorState } from './interfaces';
import { PointsSimulatorActions } from './actions';
import * as constants from './constants';
import calculateSimulationDataProductValues from './services/get-calculate-simulation-data-product-values';

export const initialState: PointsSimulatorState = {
  mode: Mode.calculator,
  fetchChannel: emptyFetchState,
  channel: null,
  fetchProducts: emptyFetchState,
  products: [],
  dollarBaseValue: 0,
  fetchCalculate: emptyFetchState,
  fetchIndicators: emptyFetchState,
  indicators: [],
  fetchConfiguration: emptyFetchState,
  configuration: {
    pogRealizedNetPercentage: 0,
    minimumRebatePercentageToMakePoints: 0,
    minimumSellerPercentageToMakePoints: 0,
  },
  award: {
    simulatedRebate: 0,
    realizedRebate: 0,
    totalRebate: 0,
    simulatedSeller: 0,
    realizedSeller: 0,
    totalSeller: 0,
    simulatedAdditionalMargin: 0,
    realizedAdditionalMargin: 0,
    totalAdditionalMargin: 0,
  },
};

const CampaignsManagerReducer: Reducer<
  PointsSimulatorState,
  PointsSimulatorActions
> = (
  state = initialState,
  action: PointsSimulatorActions,
): PointsSimulatorState => {
  switch (action.type) {
    case constants.SET_PRODUCTS_VALUES:
      return produce(state, draft => {
        draft.products = action.payload;
      });
    case constants.SET_PRODUCT_CHECK:
      return produce(state, draft => {
        const { checked, productId } = action.payload;
        draft.products.map(product => {
          if (product.id === productId) {
            product.checked = checked;
          }
          return product;
        });
      });
    case constants.SET_REVENUES_IN_KILOS_PER_LITER:
      return produce(state, draft => {
        const { productId, value: revenuesInKilosPerLiter } = action.payload;
        const foundIndex = draft.products.findIndex(
          item => item.id === productId,
        );
        if (foundIndex >= 0) {
          const product = draft.products[foundIndex];
          product.simulationData.revenuesInKilosPerLiter =
            revenuesInKilosPerLiter || 0;
          product.simulationData = calculateSimulationDataProductValues(
            product.simulationData,
            product,
            state.configuration,
            state.dollarBaseValue,
          );
          draft.products[foundIndex] = product;
        }
      });
    case constants.SET_POG_IN_KILOS_PER_LITER:
      return produce(state, draft => {
        const { productId, value: pogInKilosPerLiter } = action.payload;
        const foundIndex = draft.products.findIndex(
          item => item.id === productId,
        );
        if (foundIndex >= 0) {
          const product = draft.products[foundIndex];
          if (
            product.stock.inKilosPerLiter < 0 ||
            pogInKilosPerLiter <=
              product.simulationData.revenuesInKilosPerLiter +
                product.stock.inKilosPerLiter
          ) {
            product.simulationData.pogInKilosPerLiter = pogInKilosPerLiter;
          } else {
            product.simulationData.pogInKilosPerLiter =
              product.simulationData.revenuesInKilosPerLiter +
              product.stock.inKilosPerLiter;
          }
          product.simulationData = calculateSimulationDataProductValues(
            product.simulationData,
            product,
            state.configuration,
            state.dollarBaseValue,
          );
          draft.products[foundIndex] = product;
        }
      });
    case constants.SET_UNIT_VALUE_IN_DOLLAR:
      return produce(state, draft => {
        const { productId, value: unitValueInDollar } = action.payload;
        draft.products = draft.products.map(product => {
          if (product.id === productId) {
            product.simulationData.unitValueInDollar = unitValueInDollar;
            product.simulationData = calculateSimulationDataProductValues(
              product.simulationData,
              product,
              state.configuration,
              state.dollarBaseValue,
            );
          }
          return product;
        });
      });
    case constants.FETCH_CHANNEL_ACTION:
      return { ...state, fetchChannel: fetchingState };
    case constants.FETCH_CHANNEL_FAILURE:
      return { ...state, fetchChannel: fetchErrorState(action) };
    case constants.FETCH_CHANNEL_SUCCESS:
      return {
        ...state,
        fetchChannel: emptyFetchState,
        channel: action.payload,
        products: [],
        indicators: [],
      };
    case constants.FETCH_PRODUCTS_ACTION:
      return { ...state, fetchProducts: fetchingState };
    case constants.FETCH_PRODUCTS_FAILURE:
      return { ...state, fetchProducts: fetchErrorState(action) };
    case constants.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        fetchProducts: emptyFetchState,
        products: action.payload,
      };
    case constants.FETCH_INDICATORS_ACTION:
      return { ...state, fetchIndicators: fetchingState };
    case constants.FETCH_INDICATORS_FAILURE:
      return { ...state, fetchIndicators: fetchErrorState(action) };
    case constants.FETCH_INDICATORS_SUCCESS:
      return {
        ...state,
        fetchIndicators: emptyFetchState,
        indicators: action.payload,
      };
    case constants.FETCH_CONFIGURATION_ACTION:
      return { ...state, fetchConfiguration: fetchingState };
    case constants.FETCH_CONFIGURATION_FAILURE:
      return { ...state, fetchConfiguration: fetchErrorState(action) };
    case constants.FETCH_CONFIGURATION_SUCCESS:
      return {
        ...state,
        fetchConfiguration: emptyFetchState,
        configuration: action.payload,
      };
    case constants.SET_DOLLAR_BASE_VALUE:
      return produce(state, draft => {
        draft.dollarBaseValue = action.payload;
        draft.products = draft.products.map(product => {
          product.simulationData = calculateSimulationDataProductValues(
            product.simulationData,
            product,
            state.configuration,
            action.payload,
          );
          return product;
        });
      });
    case constants.SET_MODE:
      return { ...state, mode: action.payload };
    case constants.CALCULATE_SIMULATION_ACTION:
      return { ...state, fetchCalculate: fetchingState };
    case constants.CALCULATE_SIMULATION_SUCCESS:
      return {
        ...state,
        fetchCalculate: emptyFetchState,
        indicators: action.payload.indicators,
        products: action.payload.products,
        award: action.payload.award,
      };
    case constants.FETCH_LOAD_STATE_SUCCESS:
      return action.payload;
    case constants.RESET:
      return initialState;
    default:
      return state;
  }
};

export default CampaignsManagerReducer;
