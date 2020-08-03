import { expect } from 'chai';

import { StoreState } from 'state/root-reducer';
import state from 'state/modules/mock';
import pointManagementMock from 'state/modules/point-management/mock';
import resaleCooperativeMock, {
  getMarketplacePoints,
  getInvoicePoints,
  getMaxInvoicePercentage,
  getIsEnabledToRescue,
} from './selectors';
import resaleCooperativeState from './mock';

describe('src/state/modules/point-management/resale-cooperative/selectors', () => {
  describe('state getters', () => {
    test('check getMarketplacePoints', () => {
      expect(getMarketplacePoints(state)).to.be.equal(
        resaleCooperativeState.marketplacePoints,
      );
    });

    test('check getInvoicePoints', () => {
      expect(getInvoicePoints(state)).to.be.equal(
        resaleCooperativeState.invoicePoints,
      );
    });

    test('check getMaxInvoicePercentage', () => {
      expect(getMaxInvoicePercentage(state)).to.be.equal(
        resaleCooperativeState.maxInvoicePercentage,
      );
    });
  });

  describe('getIsEnabledToRescue', () => {
    test('should be a function', () => {
      expect(getIsEnabledToRescue).to.be.a('function');
    });

    test('should return false with default state', () => {
      expect(getIsEnabledToRescue(state)).to.be.false;
    });

    test('should return true when marketplace + invoice === resale cooperative total points', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          resaleCooperative: {
            ...resaleCooperativeMock,
            marketplacePoints: 5000,
            invoicePoints: 5000,
          },
        },
      };

      expect(getIsEnabledToRescue(modifiedState)).to.be.true;
    });
  });
});
