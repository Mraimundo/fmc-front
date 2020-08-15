import { expect } from 'chai';

import state from 'state/modules/mock';
import {
  getCampaigns,
  getBillingPog,
  getPotentializers,
  getInfos,
  getTopPurchasingProducts,
  getTopSellingProducts,
} from './selectors';
import {
  campaigns,
  billingPog,
  potentializers,
  infos,
  topPurchasingProducts,
  topSellingProducts,
} from './mock';

describe('src/state/modules/goals/selectors', () => {
  describe('state getters', () => {
    test('check getCampaigns', () => {
      expect(getCampaigns(state)).to.be.equal(campaigns);
    });

    test('check getBillingPog', () => {
      expect(getBillingPog(state)).to.be.equal(billingPog);
    });

    test('check getPotentializers', () => {
      expect(getPotentializers(state)).to.be.equal(potentializers);
    });

    test('check getInfos', () => {
      expect(getInfos(state)).to.be.equal(infos);
    });

    test('check getTopPurchasingProducts', () => {
      expect(getTopPurchasingProducts(state)).to.be.equal(
        topPurchasingProducts,
      );
    });

    test('check getTopSellingProducts', () => {
      expect(getTopSellingProducts(state)).to.be.equal(topSellingProducts);
    });
  });
});
