import { expect } from 'chai';

import state from 'state/modules/mock';
import { getProducts, getChannel } from './selectors';
import mock from './mock';

describe('src/state/modules/points-simulator/selectors', () => {
  describe('state getters', () => {
    it('checks getProducts', () => {
      expect(getProducts(state)).to.be.equal(mock.products);
    });
    it('checks getChannel', () => {
      expect(getChannel(state)).to.be.equal(mock.channel);
    });
  });
});
