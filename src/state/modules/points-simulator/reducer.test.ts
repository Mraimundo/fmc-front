import { expect } from 'chai';

import { Channel, PointsSimulatorState } from './interfaces';
import reducer, { initialState } from './reducer';
import * as constants from './constants';
import * as actions from './actions';
import mockedState from './mock';
import { Mode } from './types';

describe(`test reducer - ${constants.SET_UNIT_VALUE_IN_DOLLAR} and ${constants.SET_REVENUES_IN_KILOS_PER_LITER} working togheter`, () => {
  it('should set the dollar unit and the kilos per liter revenues values, after that recalculate Simulation Data', () => {
    const productIndex = 0;
    const unitValueInDollarToSet = 12.5;
    const revenuesValueInKilosPerLiterToSet = 80000;
    const pogValueInKilosPerLiterToSet = 800;
    const pogNetPercentage = 10;
    const dollarBaseValue = 4.51;
    const expectedRevenuesInDollar = 1000000;
    const expectedPogUnitValue = 11.764705882352942;
    const expectedPogInDollar = 9411.764705882353;
    const expectedPogRealizedNetInDollar = 941.1764705882352;
    const expectedPogRealizedNetInReal = 4244.7058823529405;

    const productId = mockedState.products[productIndex].id;
    const product = { ...mockedState.products[productIndex] };
    const mockedStateWithJustTheFirstProduct: PointsSimulatorState = {
      ...mockedState,
      dollarBaseValue,
      configuration: {
        ...mockedState.configuration,
        pogRealizedNetPercentage: pogNetPercentage,
      },
      products: [product],
    };

    const firstReducerTransformation = reducer(
      mockedStateWithJustTheFirstProduct,
      actions.setUnitValueInDollar({
        productId,
        value: unitValueInDollarToSet,
      }),
    );

    const secondReducerTransformation = reducer(
      firstReducerTransformation,
      actions.setRevenuesValueInKilosPerLiter({
        productId,
        value: revenuesValueInKilosPerLiterToSet,
      }),
    );

    const finalReducerTranformation = reducer(
      secondReducerTransformation,
      actions.setPogValueInKilosPerLiter({
        productId,
        value: pogValueInKilosPerLiterToSet,
      }),
    );

    expect(finalReducerTranformation).to.be.deep.equal({
      ...mockedStateWithJustTheFirstProduct,
      products: [
        {
          ...product,
          simulationData: {
            ...product.simulationData,
            unitValueInDollar: unitValueInDollarToSet,
            revenuesInKilosPerLiter: revenuesValueInKilosPerLiterToSet,
            pogInKilosPerLiter: pogValueInKilosPerLiterToSet,
            revenuesInDollar: expectedRevenuesInDollar,
            pogUnitValueInDollar: expectedPogUnitValue,
            pogInDollar: expectedPogInDollar,
            pogRealizedNetInDollar: expectedPogRealizedNetInDollar,
            pogRealizedNetInReal: expectedPogRealizedNetInReal,
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
    const actionResult = reducer(
      initialState,
      actions.fetchChannel(mockedState.channel?.id || 1),
    );
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
    const actionResult = reducer(initialState, actions.fetchProducts());
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

describe(`test reducer - ${constants.SET_DOLLAR_BASE_VALUE}`, () => {
  it('should set dollar base', () => {
    const dollarBaseValue = 5.555;
    const result = reducer(
      initialState,
      actions.setDollarBaseValue(dollarBaseValue),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      dollarBaseValue,
    });
  });
});

describe(`test reducer - ${constants.SET_MODE}`, () => {
  it('should set screen mode', () => {
    const mode = Mode.result;
    const result = reducer(initialState, actions.setMode(mode));

    expect(result).to.be.deep.equal({
      ...initialState,
      mode,
    });
  });
});
