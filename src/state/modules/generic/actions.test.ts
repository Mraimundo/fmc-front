import { expect } from 'chai';

import { ApiErrors } from '@types';
import {
  fetchAnythingAction,
  fetchAnythingFailure,
  fetchAnythingSuccess,
} from './actions';
import {
  FETCH_ANYTHING_ACTION,
  FETCH_ANYTHING_SUCCESS,
  FETCH_ANYTHING_FAILURE,
} from './constants';
import { FetchAnythingData } from './types';

describe('src/state/modules/generic/actions', () => {
  describe('fetchAnythingAction', () => {
    it('should be a function', () => {
      expect(fetchAnythingAction).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchAnythingAction()).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchAnythingAction()).to.be.deep.equal({
        type: FETCH_ANYTHING_ACTION,
      });
    });
  });

  describe('fetchAnythingFailure', () => {
    const errors: ApiErrors[] = [{ code: '1', message: 'internal error' }];
    it('should be a function', () => {
      expect(fetchAnythingFailure).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchAnythingFailure(errors)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchAnythingFailure(errors)).to.be.deep.equal({
        type: FETCH_ANYTHING_FAILURE,
        payload: {
          errors,
        },
      });
    });
  });

  describe('fetchAnythingSuccess', () => {
    const data: FetchAnythingData = {
      name: 'Gabriel',
      email: 'hi.gabrielferreira@gmail.com',
    };

    it('should be a function', () => {
      expect(fetchAnythingSuccess).to.be.a('function');
    });

    it('should return a object', () => {
      expect(fetchAnythingSuccess(data)).to.be.a('object');
    });

    it('should return a valid object', () => {
      expect(fetchAnythingSuccess(data)).to.be.deep.equal({
        type: FETCH_ANYTHING_SUCCESS,
        payload: data,
      });
    });
  });
});
