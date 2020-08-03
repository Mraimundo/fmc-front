import { expect } from 'chai';

import {
  fetchCoinQuotation,
  fetchCoinQuotationFailure,
  fetchCoinQuotationSuccess,
  fetchMenu,
  fetchMenuFailure,
  fetchMenuSuccess,
} from './actions';
import {
  FETCH_COIN_QUOTATION_ACTION,
  FETCH_COIN_QUOTATION_FAILURE,
  FETCH_COIN_QUOTATION_SUCCESS,
  FETCH_MENU_ACTION,
  FETCH_MENU_FAILURE,
  FETCH_MENU_SUCCESS,
} from './constants';
import { coinQuotations, menu } from './mock';

describe('src/state/modules/header/actions', () => {
  describe('fetchCoinQuotation', () => {
    test('should be a function', () => {
      expect(fetchCoinQuotation).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchCoinQuotation()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchCoinQuotation()).to.be.deep.equal({
        type: FETCH_COIN_QUOTATION_ACTION,
      });
    });
  });

  describe('fetchCoinQuotationFailure', () => {
    const error = 'generic error';
    test('should be a function', () => {
      expect(fetchCoinQuotationFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchCoinQuotationFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchCoinQuotationFailure(error)).to.be.deep.equal({
        type: FETCH_COIN_QUOTATION_FAILURE,
        payload: { error },
      });
    });
  });

  describe('fetchCoinQuotationSuccess', () => {
    test('should be a function', () => {
      expect(fetchCoinQuotationSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchCoinQuotationSuccess(coinQuotations)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchCoinQuotationSuccess(coinQuotations)).to.be.deep.equal({
        type: FETCH_COIN_QUOTATION_SUCCESS,
        payload: { coinQuotations },
      });
    });
  });

  describe('fetchMenu', () => {
    test('should be a function', () => {
      expect(fetchMenu).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchMenu()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchMenu()).to.be.deep.equal({
        type: FETCH_MENU_ACTION,
      });
    });
  });

  describe('fetchMenuFailure', () => {
    const error = 'generic error';
    test('should be a function', () => {
      expect(fetchMenuFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchMenuFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchMenuFailure(error)).to.be.deep.equal({
        type: FETCH_MENU_FAILURE,
        payload: { error },
      });
    });
  });

  describe('fetchMenuSuccess', () => {
    test('should be a function', () => {
      expect(fetchMenuSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchMenuSuccess(menu)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchMenuSuccess(menu)).to.be.deep.equal({
        type: FETCH_MENU_SUCCESS,
        payload: { menu },
      });
    });
  });
});
