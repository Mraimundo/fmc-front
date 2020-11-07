import { Reducer } from 'redux';
import produce from 'immer';
import { FetchState } from '@types';
import { emptyFetchState, fetchErrorState, fetchingState } from 'state/utils';
import { Mode } from './types';
import { Product, Channel } from './interfaces';
import { PointsSimulatorActions } from './actions';
import * as constants from './constants';

export type PointsSimulatorState = {
  mode: Mode;
  fetchChannel: FetchState;
  channel: Channel | null;
  fetchProducts: FetchState;
  products: Product[];
  dollarBaseValue: number;
};

export const initialState: PointsSimulatorState = {
  mode: Mode.calculator,
  fetchChannel: emptyFetchState,
  channel: null,
  fetchProducts: emptyFetchState,
  products: [],
  dollarBaseValue: 0,
};

const CampaignsManagerReducer: Reducer<
  PointsSimulatorState,
  PointsSimulatorActions
> = (
  state = initialState,
  action: PointsSimulatorActions,
): PointsSimulatorState => {
  switch (action.type) {
    case constants.SET_REVENUES_IN_KILOS_PER_LITER:
      return produce(state, draft => {
        const { productId, value: revenuesInKilosPerLiter } = action.payload;
        draft.products = draft.products.map(product => {
          if (product.id === productId) {
            product.simulationData.revenuesInKilosPerLiter = revenuesInKilosPerLiter;

            product.simulationData.revenuesInDollar =
              revenuesInKilosPerLiter *
              product.simulationData.unitValueInDollar;

            product.simulationData.pogInKilosPerLiter =
              (product.stock.inDollar +
                product.simulationData.revenuesInDollar) /
              (product.stock.inKilosPerLiter + revenuesInKilosPerLiter);
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

            product.simulationData.revenuesInDollar =
              product.simulationData.revenuesInKilosPerLiter *
              unitValueInDollar;

            product.simulationData.pogInKilosPerLiter =
              (product.stock.inDollar +
                product.simulationData.revenuesInDollar) /
              (product.stock.inKilosPerLiter +
                product.simulationData.revenuesInKilosPerLiter);
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
      };
    case constants.FETCH_PRODUCTS_ACTION:
      return { ...state, fetchProducts: fetchingState };
    case constants.FETCH_PRODUCTS_FAILURE:
      return { ...state, fetchProducts: fetchErrorState(action) };
    case constants.FETCH_PRODUCTS_SUCCESS:
      return produce(state, draft => {
        draft.products = action.payload;
      });
    case constants.SET_DOLLAR_BASE_VALUE:
      return { ...state, dollarBaseValue: action.payload };
    case constants.SET_MODE:
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export default CampaignsManagerReducer;
