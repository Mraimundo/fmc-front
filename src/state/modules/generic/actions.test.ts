import { expect } from 'chai';

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

const error = 'Generic Error';

describe('src/state/modules/generic/actions', () => {
  describe('fetchAnythingAction', () => {
    test('should be a function', () => {
      expect(fetchAnythingAction).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchAnythingAction()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchAnythingAction()).to.be.deep.equal({
        type: FETCH_ANYTHING_ACTION,
      });
    });
  });

  describe('fetchAnythingFailure', () => {
    test('should be a function', () => {
      expect(fetchAnythingFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchAnythingFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchAnythingFailure(error)).to.be.deep.equal({
        type: FETCH_ANYTHING_FAILURE,
        payload: {
          error,
        },
      });
    });
  });

  describe('fetchAnythingSuccess', () => {
    const data: FetchAnythingData = {
      name: 'Gabriel',
      email: 'hi.gabrielferreira@gmail.com',
    };

    test('should be a function', () => {
      expect(fetchAnythingSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchAnythingSuccess(data)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchAnythingSuccess(data)).to.be.deep.equal({
        type: FETCH_ANYTHING_SUCCESS,
        payload: data,
      });
    });
  });
});
