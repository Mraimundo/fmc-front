import { expect } from 'chai';

import { ActionCreatorFailure } from '@types';
import { emptyFetchState, fetchingState, fetchErrorState } from './utils';

describe('src/state/utils', () => {
  describe('emptyFetchState', () => {
    it('should be a object', () => {
      expect(emptyFetchState).to.be.a('object');
    });

    it('should return object with isFetching false', () => {
      expect(emptyFetchState).to.be.deep.equal({
        isFetching: false,
      });
    });
  });
  describe('fetchingState', () => {
    it('should be a object', () => {
      expect(fetchingState).to.be.a('object');
    });

    it('should return object with isFetching true', () => {
      expect(fetchingState).to.be.deep.equal({
        isFetching: true,
      });
    });
  });
  describe('fetchErrorState', () => {
    it('should be a function', () => {
      expect(fetchErrorState).to.be.a('function');
    });

    it('should return a object with isFetching and error', () => {
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
