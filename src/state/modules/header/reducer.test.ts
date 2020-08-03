import { expect } from 'chai';

import reducer, { initialState } from './reducer';
import * as actions from './actions';
import { coinQuotations, menu } from './mock';

describe('src/state/modules/header/reducer', () => {
  test('should be a function', () => {
    expect(reducer).to.be.a('function');
  });

  test('should return a initial state', () => {
    const result = reducer(undefined, { type: 'unknown' });

    expect(result).to.be.deep.equal(initialState);
  });

  test('should can handle FETCH_COIN_QUOTATION_ACTION', () => {
    const result = reducer(undefined, actions.fetchCoinQuotation());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchCoinQuotations: {
        isFetching: true,
      },
    });
  });

  test('should can handle FETCH_COIN_QUOTATION_FAILURE', () => {
    const error = 'generic error';
    const result = reducer(undefined, actions.fetchCoinQuotationFailure(error));

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchCoinQuotations: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle FETCH_COIN_QUOTATION_SUCCESS', () => {
    const result = reducer(
      undefined,
      actions.fetchCoinQuotationSuccess(coinQuotations),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      coinQuotations,
      fetchCoinQuotations: {
        isFetching: false,
      },
    });
  });

  test('should can handle FETCH_MENU_ACTION', () => {
    const result = reducer(undefined, actions.fetchMenu());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchMenu: {
        isFetching: true,
      },
    });
  });

  test('should can handle FETCH_MENU_FAILURE', () => {
    const error = 'generic error';
    const result = reducer(undefined, actions.fetchMenuFailure(error));

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchMenu: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle FETCH_MENU_SUCCESS', () => {
    const result = reducer(undefined, actions.fetchMenuSuccess(menu));

    expect(result).to.be.deep.equal({
      ...initialState,
      menu,
      fetchMenu: {
        isFetching: false,
      },
    });
  });
});
