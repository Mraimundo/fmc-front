import { expect } from 'chai';
import {
  FETCH_BANNERS_ACTION,
  FETCH_BANNERS_FAILURE,
  FETCH_BANNERS_SUCCESS,
  FETCH_HIGHLIGHTS_ACTION,
  FETCH_HIGHLIGHTS_FAILURE,
  FETCH_HIGHLIGHTS_SUCCESS,
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

  describe('FETCH_HIGHLIGHTS_ACTION', () => {
    test('should return a string', () => {
      expect(FETCH_HIGHLIGHTS_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_HIGHLIGHTS_ACTION).to.be.equal(
        '@fmc/home/FETCH_HIGHLIGHTS_ACTION',
      );
    });
  });

  describe('FETCH_HIGHLIGHTS_FAILURE', () => {
    test('should return a string', () => {
      expect(FETCH_HIGHLIGHTS_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_HIGHLIGHTS_FAILURE).to.be.equal(
        '@fmc/home/FETCH_HIGHLIGHTS_FAILURE',
      );
    });
  });

  describe('FETCH_HIGHLIGHTS_SUCCESS', () => {
    test('should return a string', () => {
      expect(FETCH_HIGHLIGHTS_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_HIGHLIGHTS_SUCCESS).to.be.equal(
        '@fmc/home/FETCH_HIGHLIGHTS_SUCCESS',
      );
    });
  });
});
