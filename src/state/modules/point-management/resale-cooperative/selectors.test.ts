import { expect } from 'chai';

import state from 'state/modules/mock';
import {
  getMarketplacePoints,
  getInvoicePoints,
  getMaxInvoicePercentage,
} from './selectors';
import resaleCooperativeState from './mock';

describe('src/state/modules/point-management/resale-cooperative/selectors', () => {
  describe('state getters', () => {
    it('check getMarketplacePoints', () => {
      expect(getMarketplacePoints(state)).to.be.equal(
        resaleCooperativeState.marketplacePoints,
      );
    });

    it('check getInvoicePoints', () => {
      expect(getInvoicePoints(state)).to.be.equal(
        resaleCooperativeState.invoicePoints,
      );
    });

    it('check getMaxInvoicePercentage', () => {
      expect(getMaxInvoicePercentage(state)).to.be.equal(
        resaleCooperativeState.maxInvoicePercentage,
      );
    });
  });
});
