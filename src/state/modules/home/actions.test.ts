import { expect } from 'chai';

import {
  fetchBanners,
  fetchBannersFailure,
  fetchBannersSuccess,
  fetchHighlights,
  fetchHighlightsFailure,
  fetchHighlightsSuccess,
} from './actions';
import {
  FETCH_BANNERS_ACTION,
  FETCH_BANNERS_FAILURE,
  FETCH_BANNERS_SUCCESS,
  FETCH_HIGHLIGHTS_ACTION,
  FETCH_HIGHLIGHTS_FAILURE,
  FETCH_HIGHLIGHTS_SUCCESS,
} from './constants';
import { banners, highlights } from './mock';

describe('src/state/modules/home/actions', () => {
  describe('fetchBanners', () => {
    test('should be a function', () => {
      expect(fetchBanners).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchBanners()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchBanners()).to.be.deep.equal({
        type: FETCH_BANNERS_ACTION,
      });
    });
  });

  describe('fetchBannersFailure', () => {
    const error = 'generic error';
    test('should be a function', () => {
      expect(fetchBannersFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchBannersFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchBannersFailure(error)).to.be.deep.equal({
        type: FETCH_BANNERS_FAILURE,
        payload: { error },
      });
    });
  });

  describe('fetchBannersSuccess', () => {
    test('should be a function', () => {
      expect(fetchBannersSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchBannersSuccess(banners)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchBannersSuccess(banners)).to.be.deep.equal({
        type: FETCH_BANNERS_SUCCESS,
        payload: { banners },
      });
    });
  });

  describe('fetchHighlights', () => {
    test('should be a function', () => {
      expect(fetchHighlights).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchHighlights()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchHighlights()).to.be.deep.equal({
        type: FETCH_HIGHLIGHTS_ACTION,
      });
    });
  });

  describe('fetchHighlightsFailure', () => {
    const error = 'generic error';
    test('should be a function', () => {
      expect(fetchHighlightsFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchHighlightsFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchHighlightsFailure(error)).to.be.deep.equal({
        type: FETCH_HIGHLIGHTS_FAILURE,
        payload: { error },
      });
    });
  });

  describe('fetchHighlightsSuccess', () => {
    test('should be a function', () => {
      expect(fetchHighlightsSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchHighlightsSuccess(highlights)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchHighlightsSuccess(highlights)).to.be.deep.equal({
        type: FETCH_HIGHLIGHTS_SUCCESS,
        payload: { highlights },
      });
    });
  });
});
