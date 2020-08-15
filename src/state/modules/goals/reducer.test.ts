import { expect } from 'chai';

import reducer, { initialState } from './reducer';
import * as actions from './actions';
import {
  topPurchasingProducts,
  topSellingProducts,
  campaigns,
  billingPog,
  potentializers,
  infos,
} from './mock';

describe('src/state/modules/goals/reducer', () => {
  test('should be a function', () => {
    expect(reducer).to.be.a('function');
  });

  test('should return a initial state', () => {
    const result = reducer(undefined, { type: 'unknown' });

    expect(result).to.be.deep.equal(initialState);
  });

  test('should can handle FETCH_CAMPAIGNS_ACTION', () => {
    const result = reducer(undefined, actions.fetchCampaigns());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchCampaigns: {
        isFetching: true,
      },
    });
  });

  test('should can handle FETCH_CAMPAIGNS_FAILURE', () => {
    const error = 'generic error';
    const result = reducer(undefined, actions.fetchCampaignsFailure(error));

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchCampaigns: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle FETCH_CAMPAIGNS_SUCCESS', () => {
    const result = reducer(undefined, actions.fetchCampaignsSuccess(campaigns));

    expect(result).to.be.deep.equal({
      ...initialState,
      campaigns,
      fetchCampaigns: {
        isFetching: false,
      },
    });
  });

  test('should can handle FETCH_BILLING_POG_ACTION', () => {
    const result = reducer(undefined, actions.fetchBillingPog());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchBillingPog: {
        isFetching: true,
      },
    });
  });

  test('should can handle FETCH_BILLING_POG_FAILURE', () => {
    const error = 'generic error';
    const result = reducer(undefined, actions.fetchBillingPogFailure(error));

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchBillingPog: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle FETCH_BILLING_POG_SUCCESS', () => {
    const result = reducer(
      undefined,
      actions.fetchBillingPogSuccess(billingPog),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      billingPog,
      fetchBillingPog: {
        isFetching: false,
      },
    });
  });

  test('should can handle FETCH_POTENTIALIZERS_ACTION', () => {
    const result = reducer(undefined, actions.fetchPotentializers());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchPotentializers: {
        isFetching: true,
      },
    });
  });

  test('should can handle FETCH_POTENTIALIZERS_FAILURE', () => {
    const error = 'generic error';
    const result = reducer(
      undefined,
      actions.fetchPotentializersFailure(error),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchPotentializers: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle FETCH_POTENTIALIZERS_SUCCESS', () => {
    const result = reducer(
      undefined,
      actions.fetchPotentializersSuccess(potentializers),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      potentializers,
      fetchPotentializers: {
        isFetching: false,
      },
    });
  });

  test('should can handle FETCH_INFOS_ACTION', () => {
    const result = reducer(undefined, actions.fetchInfos());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchInfos: {
        isFetching: true,
      },
    });
  });

  test('should can handle FETCH_INFOS_FAILURE', () => {
    const error = 'generic error';
    const result = reducer(undefined, actions.fetchInfosFailure(error));

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchInfos: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle FETCH_INFOS_SUCCESS', () => {
    const result = reducer(undefined, actions.fetchInfosSuccess(infos));

    expect(result).to.be.deep.equal({
      ...initialState,
      infos,
      fetchInfos: {
        isFetching: false,
      },
    });
  });

  test('should can handle FETCH_TOP_PURCHASING_PRODUCTS_ACTION', () => {
    const result = reducer(undefined, actions.fetchTopPurchasingProducts());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchTopPurchasingProducts: {
        isFetching: true,
      },
    });
  });

  test('should can handle FETCH_TOP_PURCHASING_PRODUCTS_FAILURE', () => {
    const error = 'generic error';
    const result = reducer(
      undefined,
      actions.fetchTopPurchasingProductsFailure(error),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchTopPurchasingProducts: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle FETCH_TOP_PURCHASING_PRODUCTS_SUCCESS', () => {
    const result = reducer(
      undefined,
      actions.fetchTopPurchasingProductsSuccess(topPurchasingProducts),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      topPurchasingProducts,
      fetchTopPurchasingProducts: {
        isFetching: false,
      },
    });
  });

  test('should can handle FETCH_TOP_SELLING_PRODUCTS_ACTION', () => {
    const result = reducer(undefined, actions.fetchTopSellingProducts());

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchTopSellingProducts: {
        isFetching: true,
      },
    });
  });

  test('should can handle FETCH_TOP_SELLING_PRODUCTS_FAILURE', () => {
    const error = 'generic error';
    const result = reducer(
      undefined,
      actions.fetchTopSellingProductsFailure(error),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      fetchTopSellingProducts: {
        isFetching: false,
        error,
      },
    });
  });

  test('should can handle FETCH_MENU_SUCCESS', () => {
    const result = reducer(
      undefined,
      actions.fetchTopSellingProductsSuccess(topSellingProducts),
    );

    expect(result).to.be.deep.equal({
      ...initialState,
      topSellingProducts,
      fetchTopSellingProducts: {
        isFetching: false,
      },
    });
  });
});
