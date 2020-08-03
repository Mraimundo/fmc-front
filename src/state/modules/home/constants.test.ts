import { expect } from 'chai';
import {
  FETCH_BANNERS_ACTION,
  FETCH_BANNERS_FAILURE,
  FETCH_BANNERS_SUCCESS,
} from './constants';

describe('src/state/modules/home/constants', () => {
  describe('FETCH_BANNERS_ACTION', () => {
    test('should return a string', () => {
      expect(FETCH_BANNERS_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_BANNERS_ACTION).to.be.equal(
        '@fmc/home/FETCH_BANNERS_ACTION',
      );
    });
  });

  describe('FETCH_BANNERS_FAILURE', () => {
    test('should return a string', () => {
      expect(FETCH_BANNERS_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_BANNERS_FAILURE).to.be.equal(
        '@fmc/home/FETCH_BANNERS_FAILURE',
      );
    });
  });

  describe('FETCH_BANNERS_SUCCESS', () => {
    test('should return a string', () => {
      expect(FETCH_BANNERS_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_BANNERS_SUCCESS).to.be.equal(
        '@fmc/home/FETCH_BANNERS_SUCCESS',
      );
    });
  });
});
