import { expect } from 'chai';

import state from 'state/modules/mock';
import { getCoinQuotations, getMenu } from './selectors';
import { coinQuotations, menu } from './mock';

describe('src/state/modules/header/selectors', () => {
  describe('state getters', () => {
    test('check getCoinQuotations', () => {
      expect(getCoinQuotations(state)).to.be.equal(coinQuotations);
    });

    test('check getMenu', () => {
      expect(getMenu(state)).to.be.equal(menu);
    });
  });
});
