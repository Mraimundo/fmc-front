import { expect } from 'chai';

import reducer, { initialState, PointsSimulatorState } from './reducer';
import {
  SET_REVENUES_IN_KILOS_PER_LITER,
  SET_UNIT_VALUE_IN_DOLLAR,
} from './constants';
import * as actions from './actions';
import mockedState from './mock';

describe(`test reducer - ${SET_UNIT_VALUE_IN_DOLLAR}`, () => {
  it('should set the dollar unit value', () => {
    const result = reducer(
      mockedState,
      actions.setUnitValueInDollar({ productId: 1, value: 100 }),
    );

    expect(result).to.be.deep.equal({
      ...mockedState,
      products: [
        {
          ...mockedState.products[0],
          simulationData: {
            ...mockedState.products[0].simulationData,
            unitValueInDollar: 100,
          },
        },
      ],
    });
  });
});

describe(`test reducer - ${SET_REVENUES_IN_KILOS_PER_LITER}`, () => {
  it('should set the kilos per liter revenues value', () => {
    const result = reducer(
      mockedState,
      actions.setRevenuesValueInKilosPerLiter({ productId: 1, value: 100 }),
    );

    expect(result).to.be.deep.equal({
      ...mockedState,
      products: [
        {
          ...mockedState.products[0],
          simulationData: {
            ...mockedState.products[0].simulationData,
            revenuesInKilosPerLiter: 100,
          },
        },
      ],
    });
  });
});

describe(`test reducer - ${SET_UNIT_VALUE_IN_DOLLAR} and ${SET_REVENUES_IN_KILOS_PER_LITER} working togheter`, () => {
  it('should set the dollar unit and the kilos per liter revenues values, after that recalculate revenues in dollar and pog in kilos by liter', () => {
    const productIndex = 0;
    const unitValueInDollarToSet = 12.5;
    const revenuesValueInKilosPerLiterToSet = 80000;
    const productId = mockedState.products[productIndex].id;
    const product = { ...mockedState.products[productIndex] };
    const mockedStateWithJustTheFirstProduct: PointsSimulatorState = {
      ...mockedState,
      products: [product],
    };

    const valueInDolarReducer = reducer(
      mockedStateWithJustTheFirstProduct,
      actions.setUnitValueInDollar({
        productId,
        value: unitValueInDollarToSet,
      }),
    );

    const result = reducer(
      valueInDolarReducer,
      actions.setRevenuesValueInKilosPerLiter({
        productId,
        value: revenuesValueInKilosPerLiterToSet,
      }),
    );

    expect(result).to.be.deep.equal({
      ...mockedStateWithJustTheFirstProduct,
      products: [
        {
          ...product,
          simulationData: {
            ...product.simulationData,
            unitValueInDollar: unitValueInDollarToSet,
            revenuesInKilosPerLiter: revenuesValueInKilosPerLiterToSet,
            revenuesInDollar:
              unitValueInDollarToSet * revenuesValueInKilosPerLiterToSet,
            pogInKilosPerLiter:
              (product.stock.inDollar +
                unitValueInDollarToSet * revenuesValueInKilosPerLiterToSet) /
              (product.stock.inKilosPerLiter +
                revenuesValueInKilosPerLiterToSet),
          },
        },
      ],
    });
  });
});
