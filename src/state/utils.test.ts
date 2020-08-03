import { expect } from 'chai';

import { ActionCreatorFailure } from '@types';
import { emptyFetchState, fetchingState, fetchErrorState } from './utils';

describe('src/state/utils', () => {
  describe('emptyFetchState', () => {
    test('should be a object', () => {
      expect(emptyFetchState).to.be.a('object');
    });

    test('should return object with isFetching false', () => {
      expect(emptyFetchState).to.be.deep.equal({
        isFetching: false,
      });
    });
  });
  describe('fetchingState', () => {
    test('should be a object', () => {
      expect(fetchingState).to.be.a('object');
    });

    test('should return object with isFetching true', () => {
      expect(fetchingState).to.be.deep.equal({
        isFetching: true,
      });
    });
  });
  describe('fetchErrorState', () => {
    test('should be a function', () => {
      expect(fetchErrorState).to.be.a('function');
    });

    test('should return a object with isFetching and error', () => {
      const errorState: ActionCreatorFailure<'generic_type'> = {
        type: 'generic_type',
        payload: { error: 'Generic Error' },
      };
      expect(fetchErrorState(errorState)).to.be.deep.equal({
        error: 'Generic Error',
        isFetching: false,
      });
    });
  });
});
