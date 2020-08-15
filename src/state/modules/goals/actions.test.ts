import { expect } from 'chai';

import {
  fetchCampaigns,
  fetchCampaignsFailure,
  fetchCampaignsSuccess,
  fetchBillingPog,
  fetchBillingPogFailure,
  fetchBillingPogSuccess,
  fetchPotentializers,
  fetchPotentializersFailure,
  fetchPotentializersSuccess,
  fetchInfos,
  fetchInfosFailure,
  fetchInfosSuccess,
  fetchTopPurchasingProducts,
  fetchTopPurchasingProductsFailure,
  fetchTopPurchasingProductsSuccess,
  fetchTopSellingProducts,
  fetchTopSellingProductsFailure,
  fetchTopSellingProductsSuccess,
} from './actions';
import {
  FETCH_CAMPAIGNS_ACTION,
  FETCH_CAMPAIGNS_FAILURE,
  FETCH_CAMPAIGNS_SUCCESS,
  FETCH_BILLING_POG_ACTION,
  FETCH_BILLING_POG_FAILURE,
  FETCH_BILLING_POG_SUCCESS,
  FETCH_POTENTIALIZERS_ACTION,
  FETCH_POTENTIALIZERS_FAILURE,
  FETCH_POTENTIALIZERS_SUCCESS,
  FETCH_INFOS_ACTION,
  FETCH_INFOS_FAILURE,
  FETCH_INFOS_SUCCESS,
  FETCH_TOP_PURCHASING_PRODUCTS_ACTION,
  FETCH_TOP_PURCHASING_PRODUCTS_FAILURE,
  FETCH_TOP_PURCHASING_PRODUCTS_SUCCESS,
  FETCH_TOP_SELLING_PRODUCTS_ACTION,
  FETCH_TOP_SELLING_PRODUCTS_FAILURE,
  FETCH_TOP_SELLING_PRODUCTS_SUCCESS,
} from './constants';
import {
  topPurchasingProducts,
  topSellingProducts,
  billingPog,
  campaigns,
  potentializers,
  infos,
} from './mock';

describe('src/state/modules/goals/actions', () => {
  describe('fetchCampaigns', () => {
    test('should be a function', () => {
      expect(fetchCampaigns).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchCampaigns()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchCampaigns()).to.be.deep.equal({
        type: FETCH_CAMPAIGNS_ACTION,
      });
    });
  });

  describe('fetchCampaignsFailure', () => {
    const error = 'generic error';
    test('should be a function', () => {
      expect(fetchCampaignsFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchCampaignsFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchCampaignsFailure(error)).to.be.deep.equal({
        type: FETCH_CAMPAIGNS_FAILURE,
        payload: { error },
      });
    });
  });

  describe('fetchCampaignsSuccess', () => {
    test('should be a function', () => {
      expect(fetchCampaignsSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchCampaignsSuccess(campaigns)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchCampaignsSuccess(campaigns)).to.be.deep.equal({
        type: FETCH_CAMPAIGNS_SUCCESS,
        payload: { campaigns },
      });
    });
  });

  describe('fetchBillingPog', () => {
    test('should be a function', () => {
      expect(fetchBillingPog).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchBillingPog()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchBillingPog()).to.be.deep.equal({
        type: FETCH_BILLING_POG_ACTION,
      });
    });
  });

  describe('fetchBillingPogFailure', () => {
    const error = 'generic error';
    test('should be a function', () => {
      expect(fetchBillingPogFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchBillingPogFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchBillingPogFailure(error)).to.be.deep.equal({
        type: FETCH_BILLING_POG_FAILURE,
        payload: { error },
      });
    });
  });

  describe('fetchBillingPogSuccess', () => {
    test('should be a function', () => {
      expect(fetchBillingPogSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchBillingPogSuccess(billingPog)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchBillingPogSuccess(billingPog)).to.be.deep.equal({
        type: FETCH_BILLING_POG_SUCCESS,
        payload: { billingPog },
      });
    });
  });

  describe('fetchPotentializers', () => {
    test('should be a function', () => {
      expect(fetchPotentializers).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchPotentializers()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchPotentializers()).to.be.deep.equal({
        type: FETCH_POTENTIALIZERS_ACTION,
      });
    });
  });

  describe('fetchPotentializersFailure', () => {
    const error = 'generic error';
    test('should be a function', () => {
      expect(fetchPotentializersFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchPotentializersFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchPotentializersFailure(error)).to.be.deep.equal({
        type: FETCH_POTENTIALIZERS_FAILURE,
        payload: { error },
      });
    });
  });

  describe('fetchPotentializersSuccess', () => {
    test('should be a function', () => {
      expect(fetchPotentializersSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchPotentializersSuccess(potentializers)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchPotentializersSuccess(potentializers)).to.be.deep.equal({
        type: FETCH_POTENTIALIZERS_SUCCESS,
        payload: { potentializers },
      });
    });
  });

  describe('fetchInfos', () => {
    test('should be a function', () => {
      expect(fetchInfos).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchInfos()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchInfos()).to.be.deep.equal({
        type: FETCH_INFOS_ACTION,
      });
    });
  });

  describe('fetchInfosFailure', () => {
    const error = 'generic error';
    test('should be a function', () => {
      expect(fetchInfosFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchInfosFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchInfosFailure(error)).to.be.deep.equal({
        type: FETCH_INFOS_FAILURE,
        payload: { error },
      });
    });
  });

  describe('fetchInfosSuccess', () => {
    test('should be a function', () => {
      expect(fetchInfosSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchInfosSuccess(infos)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchInfosSuccess(infos)).to.be.deep.equal({
        type: FETCH_INFOS_SUCCESS,
        payload: { infos },
      });
    });
  });

  describe('fetchTopPurchasingProducts', () => {
    test('should be a function', () => {
      expect(fetchTopPurchasingProducts).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchTopPurchasingProducts()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchTopPurchasingProducts()).to.be.deep.equal({
        type: FETCH_TOP_PURCHASING_PRODUCTS_ACTION,
      });
    });
  });

  describe('fetchTopPurchasingProductsFailure', () => {
    const error = 'generic error';
    test('should be a function', () => {
      expect(fetchTopPurchasingProductsFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchTopPurchasingProductsFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchTopPurchasingProductsFailure(error)).to.be.deep.equal({
        type: FETCH_TOP_PURCHASING_PRODUCTS_FAILURE,
        payload: { error },
      });
    });
  });

  describe('fetchTopPurchasingProductsSuccess', () => {
    test('should be a function', () => {
      expect(fetchTopPurchasingProductsSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchTopPurchasingProductsSuccess(topPurchasingProducts)).to.be.a(
        'object',
      );
    });

    test('should return a valid object', () => {
      expect(
        fetchTopPurchasingProductsSuccess(topPurchasingProducts),
      ).to.be.deep.equal({
        type: FETCH_TOP_PURCHASING_PRODUCTS_SUCCESS,
        payload: { topPurchasingProducts },
      });
    });
  });

  describe('fetchTopSellingProducts', () => {
    test('should be a function', () => {
      expect(fetchTopSellingProducts).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchTopSellingProducts()).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchTopSellingProducts()).to.be.deep.equal({
        type: FETCH_TOP_SELLING_PRODUCTS_ACTION,
      });
    });
  });

  describe('fetchTopSellingProductsFailure', () => {
    const error = 'generic error';
    test('should be a function', () => {
      expect(fetchTopSellingProductsFailure).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchTopSellingProductsFailure(error)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(fetchTopSellingProductsFailure(error)).to.be.deep.equal({
        type: FETCH_TOP_SELLING_PRODUCTS_FAILURE,
        payload: { error },
      });
    });
  });

  describe('fetchTopSellingProductsSuccess', () => {
    test('should be a function', () => {
      expect(fetchTopSellingProductsSuccess).to.be.a('function');
    });

    test('should return a object', () => {
      expect(fetchTopSellingProductsSuccess(topSellingProducts)).to.be.a(
        'object',
      );
    });

    test('should return a valid object', () => {
      expect(
        fetchTopSellingProductsSuccess(topSellingProducts),
      ).to.be.deep.equal({
        type: FETCH_TOP_SELLING_PRODUCTS_SUCCESS,
        payload: { topSellingProducts },
      });
    });
  });
});
