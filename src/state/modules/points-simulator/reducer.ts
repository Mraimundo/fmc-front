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
    partialRebateReached: 0,
  },
  award: {
    totalRebate: 0,
    simulatedRebate: 0,
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
    case constants.SET_REVENUES_IN_KILOS_PER_LITER:
      return produce(state, draft => {
        const { productId, value: revenuesInKilosPerLiter } = action.payload;
        draft.products = draft.products.map(product => {
          if (product.id === productId) {
            product.simulationData.revenuesInKilosPerLiter =
              revenuesInKilosPerLiter || 0;
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
    case constants.SET_POG_IN_KILOS_PER_LITER:
      return produce(state, draft => {
        const { productId, value: pogInKilosPerLiter } = action.payload;
        draft.products = draft.products.map(product => {
          if (product.id === productId) {
            product.simulationData.pogInKilosPerLiter = pogInKilosPerLiter;
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
      return { ...state, dollarBaseValue: action.payload };
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
