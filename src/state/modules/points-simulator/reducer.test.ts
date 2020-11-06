import { expect } from 'chai';

import { Channel } from './interfaces';
import reducer, { initialState, PointsSimulatorState } from './reducer';
import * as constants from './constants';
import * as actions from './actions';
import mockedState from './mock';

describe(`test reducer - ${constants.SET_UNIT_VALUE_IN_DOLLAR} and ${constants.SET_REVENUES_IN_KILOS_PER_LITER} working togheter`, () => {
  it('should set the dollar unit and the kilos per liter revenues values, after that recalculate revenues in dollar and pog in kilos by liter', () => {
    const productIndex = 0;
    const unitValueInDollarToSet = 12.5;
    const revenuesValueInKilosPerLiterToSet = 80000;
    const expectedRevenuesInDollar = 1000000;
    const expectedPogInKilosPerLiter = 11.764705882352942;

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
            revenuesInDollar: expectedRevenuesInDollar,
            pogInKilosPerLiter: expectedPogInKilosPerLiter,
          },
        },
      ],
    });
  });
});

describe(`test reducer - ${constants.FETCH_PRODUCTS_SUCCESS}`, () => {
  it('should receive a list of products and persist it ', () => {
    const result = reducer(
      initialState,
      actions.fetchProductsSuccess(mockedState.products),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      products: [...mockedState.products],
    });
  });
});

describe(`test reducer - ${constants.FETCH_CHANNEL_ACTION}`, () => {
  it('should call and complete fetch channel', () => {
    const actionResult = reducer(initialState, actions.fetchChannel());
    expect(actionResult).to.be.deep.equal({
      ...initialState,
      fetchChannel: {
        ...initialState.fetchChannel,
        isFetching: true,
      },
    });

    const errorMessage = 'Erro0001';
    const failureResult = reducer(
      initialState,
      actions.fetchChannelFailure(errorMessage),
    );
    expect(failureResult).to.be.deep.equal({
      ...initialState,
      fetchChannel: {
        error: errorMessage,
        isFetching: false,
      },
    });

    const successResult = reducer(
      initialState,
      actions.fetchChannelSuccess(mockedState.channel as Channel),
    );
    expect(successResult).to.be.deep.equal({
      ...initialState,
      fetchChannel: {
        isFetching: false,
      },
      channel: mockedState.channel,
    });
  });
});

describe(`test reducer - ${constants.FETCH_PRODUCTS_ACTION}`, () => {
  it('should call and complete fetch products', () => {
    const actionResult = reducer(
      initialState,
      actions.fetchProducts(mockedState.channel?.id as number),
    );
    expect(actionResult).to.be.deep.equal({
      ...initialState,
      fetchProducts: {
        ...initialState.fetchProducts,
        isFetching: true,
      },
    });

    const errorMessage = 'Erro0002';
    const failureResult = reducer(
      initialState,
      actions.fetchProductsFailure(errorMessage),
    );
    expect(failureResult).to.be.deep.equal({
      ...initialState,
      fetchProducts: {
        error: errorMessage,
        isFetching: false,
      },
    });

    const successResult = reducer(
      initialState,
      actions.fetchProductsSuccess(mockedState.products),
    );
    expect(successResult).to.be.deep.equal({
      ...initialState,
      fetchProducts: {
        isFetching: false,
      },
      products: mockedState.products,
    });
  });
});
