import { expect } from 'chai';

import {
  setMarketplacePoints,
  setInvoicePoints,
  setMaxInvoicePercentage,
} from './actions';
import {
  SET_MARKETPLACE_POINTS,
  SET_INVOICE_POINTS,
  SET_MAX_INVOICE_PERCENTAGE,
} from './constants';

describe('src/state/modules/point-management/resale-cooperative/actions', () => {
  describe('setMarketplacePoints', () => {
    const points = 50;
    test('should be a function', () => {
      expect(setMarketplacePoints).to.be.a('function');
    });

    test('should return a object', () => {
      expect(setMarketplacePoints(points)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(setMarketplacePoints(points)).to.be.deep.equal({
        type: SET_MARKETPLACE_POINTS,
        payload: { marketplacePoints: points },
      });
    });
  });

  describe('setInvoicePoints', () => {
    const points = 50;
    test('should be a function', () => {
      expect(setInvoicePoints).to.be.a('function');
    });

    test('should return a object', () => {
      expect(setInvoicePoints(points)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(setInvoicePoints(points)).to.be.deep.equal({
        type: SET_INVOICE_POINTS,
        payload: { invoicePoints: points },
      });
    });
  });

  describe('setMaxInvoicePercentage', () => {
    const percentage = 50;
    test('should be a function', () => {
      expect(setMaxInvoicePercentage).to.be.a('function');
    });

    test('should return a object', () => {
      expect(setMaxInvoicePercentage(percentage)).to.be.a('object');
    });

    test('should return a valid object', () => {
      expect(setMaxInvoicePercentage(percentage)).to.be.deep.equal({
        type: SET_MAX_INVOICE_PERCENTAGE,
        payload: { maxInvoicePercentage: percentage },
      });
    });
  });
});
