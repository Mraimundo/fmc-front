import { expect } from 'chai';

import state from 'state/modules/mock';
import { getBanners } from './selectors';
import { banners } from './mock';

describe('src/state/modules/home/selectors', () => {
  describe('state getters', () => {
    test('check getBanners', () => {
      expect(getBanners(state)).to.be.equal(banners);
    });
  });
});
