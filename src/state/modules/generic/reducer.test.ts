import { expect } from 'chai';

import { ApiErrors } from '@types';
import reducer, { initialState } from './reducer';
import {
  FETCH_ANYTHING_ACTION,
  FETCH_ANYTHING_FAILURE,
  FETCH_ANYTHING_SUCCESS,
} from './constants';
import { FetchAnythingData } from './types';

describe('src/state/modules/generic/reducer', () => {
  it('should be a function', () => {
    expect(reducer).to.be.a('function');
  });

  it('should return a initial state', () => {
    const result = reducer(undefined, { type: 'unknown' });

    expect(result).to.be.deep.equal(initialState);
  });

  it('should can handle FETCH_ANYTHING_ACTION', () => {
    const result = reducer(undefined, {
      type: FETCH_ANYTHING_ACTION,
      payload: { isFetching: true },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      isFetching: true,
    });
  });

  it('should can handle FETCH_ANYTHING_FAILURE', () => {
    const errors: ApiErrors[] = [{ code: '1', message: 'internal error' }];

    const result = reducer(undefined, {
      type: FETCH_ANYTHING_FAILURE,
      payload: { isFetching: false, errors },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      isFetching: false,
      errors,
    });
  });

  it('should can handle FETCH_ANYTHING_SUCCESS', () => {
    const data: FetchAnythingData = {
      name: 'Gabriel',
      email: 'hi.gabrielferreira@gmail.com',
    };

    const result = reducer(undefined, {
      type: FETCH_ANYTHING_SUCCESS,
      payload: { isFetching: false, ...data },
    });

    expect(result).to.be.deep.equal({
      ...initialState,
      isFetching: false,
      ...data,
    });
  });
});
