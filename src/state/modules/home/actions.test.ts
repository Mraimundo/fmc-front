import { expect } from 'chai';

import {
  fetchBanners,
  fetchBannersFailure,
  fetchBannersSuccess,
} from './actions';
import {
  FETCH_BANNERS_ACTION,
  FETCH_BANNERS_FAILURE,
  FETCH_BANNERS_SUCCESS,
} from './constants';
import { banners } from './mock';

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
});
