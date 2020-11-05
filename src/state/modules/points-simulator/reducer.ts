import { Reducer } from 'redux';
import produce from 'immer';
import { PointsSimulatorActions } from './actions';
import {
  SET_REVENUES_IN_KILOS_PER_LITER,
  SET_UNIT_VALUE_IN_DOLLAR,
} from './constants';

interface Product {
  id: number;
  name: string;
  isEnhancer: boolean;
  isParticipatingProduct: boolean;
  type: {
    id: number;
    name: string;
  };
  revenues: {
    goalInDollar: number;
    realizedInDollar: number;
  };
  pog: {
    goalInDollar: number;
    realizedInDollar: number;
  };
  stock: {
    inKilosPerLiter: number;
    inDollar: number;
  };
  simulationData: {
    unitValueInDollar: number;
    revenuesInKilosPerLiter: number;
    revenuesInDollar: number;
    pogInKilosPerLiter: number;
  };
}

export type PointsSimulatorState = {
  products: Product[];
};

export const initialState: PointsSimulatorState = {
  products: [],
};

const CampaignsManagerReducer: Reducer<
  PointsSimulatorState,
  PointsSimulatorActions
> = (
  state = initialState,
  action: PointsSimulatorActions,
): PointsSimulatorState => {
  switch (action.type) {
    case SET_REVENUES_IN_KILOS_PER_LITER:
      return produce(state, draft => {
        const { productId, value } = action.payload;
        draft.products = draft.products.map(product => {
          if (product.id === productId) {
            product.simulationData.revenuesInKilosPerLiter = value;
          }
          return product;
        });
      });
    case SET_UNIT_VALUE_IN_DOLLAR:
      return produce(state, draft => {
        const { productId, value } = action.payload;
        draft.products = draft.products.map(product => {
          if (product.id === productId) {
            product.simulationData.unitValueInDollar = value;
          }
          return product;
        });
      });
    default:
      return state;
  }
};

export default CampaignsManagerReducer;
