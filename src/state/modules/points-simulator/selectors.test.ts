import { expect } from 'chai';

import state from 'state/modules/mock';
import { getProducts, getChannel, getDollarBaseValue } from './selectors';
import mock from './mock';

describe('src/state/modules/points-simulator/selectors', () => {
  describe('state getters', () => {
    it('checks getProducts', () => {
      expect(getProducts(state)).to.be.equal(mock.products);
    });

    it('checks getChannel', () => {
      expect(getChannel(state)).to.be.equal(mock.channel);
    });

    it('checks getDollarBaseValue', () => {
      expect(getDollarBaseValue(state)).to.be.equal(mock.dollarBaseValue);
    });
  });
});
