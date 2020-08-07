import { expect } from 'chai';
import {
  FETCH_COIN_QUOTATION_ACTION,
  FETCH_COIN_QUOTATION_FAILURE,
  FETCH_COIN_QUOTATION_SUCCESS,
  FETCH_MENU_ACTION,
  FETCH_MENU_FAILURE,
  FETCH_MENU_SUCCESS,
  COINS_TO_QUOTE,
} from './constants';

describe('src/state/modules/header/constants', () => {
  describe('FETCH_COIN_QUOTATION_ACTION', () => {
    test('should return a string', () => {
      expect(FETCH_COIN_QUOTATION_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_COIN_QUOTATION_ACTION).to.be.equal(
        '@fmc/header/FETCH_COIN_QUOTATION_ACTION',
      );
    });
  });

  describe('FETCH_COIN_QUOTATION_FAILURE', () => {
    test('should return a string', () => {
      expect(FETCH_COIN_QUOTATION_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_COIN_QUOTATION_FAILURE).to.be.equal(
        '@fmc/header/FETCH_COIN_QUOTATION_FAILURE',
      );
    });
  });

  describe('FETCH_COIN_QUOTATION_SUCCESS', () => {
    test('should return a string', () => {
      expect(FETCH_COIN_QUOTATION_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_COIN_QUOTATION_SUCCESS).to.be.equal(
        '@fmc/header/FETCH_COIN_QUOTATION_SUCCESS',
      );
    });
  });

  describe('FETCH_MENU_ACTION', () => {
    test('should return a string', () => {
      expect(FETCH_MENU_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_MENU_ACTION).to.be.equal('@fmc/header/FETCH_MENU_ACTION');
    });
  });

  describe('FETCH_MENU_FAILURE', () => {
    test('should return a string', () => {
      expect(FETCH_MENU_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_MENU_FAILURE).to.be.equal('@fmc/header/FETCH_MENU_FAILURE');
    });
  });

  describe('FETCH_MENU_SUCCESS', () => {
    test('should return a string', () => {
      expect(FETCH_MENU_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_MENU_SUCCESS).to.be.equal('@fmc/header/FETCH_MENU_SUCCESS');
    });
  });

  describe('COINS_TO_QUOTE', () => {
    test('should return a string', () => {
      expect(COINS_TO_QUOTE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(COINS_TO_QUOTE).to.be.equal('USD-BRL,USDT-BRL');
    });
  });
});
