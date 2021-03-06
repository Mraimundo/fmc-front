import { expect } from 'chai';

import reducer, { initialState } from './reducer';
import * as actions from './actions';
import { banners, highlights } from './mock';

describe('src/state/modules/home/reducer', () => {
  test('should be a function', () => {
    expect(reducer).to.be.a('function');
  });

  test('should return a initial state', () => {
    const result = reducer(undefined, { type: 'unknown' });

    expect(result).to.be.deep.equal(initialState);
  });

  test('should can handle FETCH_BANNERS_ACTION', () => {
    const result = reducer(undefined, actions.fetchBanners());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchBanners: {
        isFetching: true,
      },
    });
  });

  test('should can handle FETCH_BANNERS_FAILURE', () => {
    const error = 'generic error';
    const result = reducer(undefined, actions.fetchBannersFailure(error));

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchBanners: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle FETCH_BANNERS_SUCCESS', () => {
    const result = reducer(undefined, actions.fetchBannersSuccess(banners));

    expect(result).to.be.deep.equal({
      ...initialState,
      banners,
      fetchBanners: {
        isFetching: false,
      },
    });
  });

  test('should can handle FETCH_HIGHLIGHTS_ACTION', () => {
    const result = reducer(undefined, actions.fetchHighlights());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchHighlights: {
        isFetching: true,
      },
    });
  });

  test('should can handle FETCH_HIGHLIGHTS_FAILURE', () => {
    const error = 'generic error';
    const result = reducer(undefined, actions.fetchHighlightsFailure(error));

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchHighlights: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle FETCH_HIGHLIGHTS_SUCCESS', () => {
    const result = reducer(
      undefined,
      actions.fetchHighlightsSuccess(highlights),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      highlights,
      fetchHighlights: {
        isFetching: false,
      },
    });
  });
});
