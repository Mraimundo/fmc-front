import { expect } from 'chai';
import {
  FETCH_ANYTHING_ACTION,
  FETCH_ANYTHING_FAILURE,
  FETCH_ANYTHING_SUCCESS,
} from './constants';

describe('src/state/modules/generic/constants', () => {
  describe('FETCH_ANYTHING_ACTION', () => {
    test('should return a string', () => {
      expect(FETCH_ANYTHING_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_ANYTHING_ACTION).to.be.equal(
        '@skeleton/generic/FETCH_ANYTHING_ACTION',
      );
    });
  });

  describe('FETCH_ANYTHING_FAILURE', () => {
    test('should return a string', () => {
      expect(FETCH_ANYTHING_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_ANYTHING_FAILURE).to.be.equal(
        '@skeleton/generic/FETCH_ANYTHING_FAILURE',
      );
    });
  });

  describe('FETCH_ANYTHING_SUCCESS', () => {
    test('should return a string', () => {
      expect(FETCH_ANYTHING_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_ANYTHING_SUCCESS).to.be.equal(
        '@skeleton/generic/FETCH_ANYTHING_SUCCESS',
      );
    });
  });
});
