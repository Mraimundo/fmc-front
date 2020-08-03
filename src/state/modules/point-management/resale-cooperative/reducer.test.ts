import { expect } from 'chai';

import reducer, { initialState } from './reducer';
import * as actions from './actions';

describe('src/state/modules/point-management/resale-cooperative/reducer', () => {
  test('should be a function', () => {
    expect(reducer).to.be.a('function');
  });

  test('should return a initial state', () => {
    const result = reducer(undefined, { type: 'unknown' });

    expect(result).to.be.deep.equal(initialState);
  });

  test('should can handle SET_MARKETPLACE_POINTS', () => {
    const points = 100;
    const result = reducer(undefined, actions.setMarketplacePoints(points));

    expect(result).to.be.deep.equal({
      ...initialState,
      marketplacePoints: points,
    });
  });

  test('should can handle SET_INVOICE_POINTS', () => {
    const points = 100;
    const result = reducer(undefined, actions.setInvoicePoints(points));

    expect(result).to.be.deep.equal({
      ...initialState,
      invoicePoints: points,
    });
  });

  test('should can handle SET_MAX_PERCENTAGE_DUP', () => {
    const percentage = 50;
    const result = reducer(undefined, actions.setMaxInvoicePercentage(percentage));

    expect(result).to.be.deep.equal({
      ...initialState,
      maxInvoicePercentage: percentage,
    });
  });
});
