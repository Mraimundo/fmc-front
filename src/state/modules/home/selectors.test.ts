import { expect } from 'chai';

import state from 'state/modules/mock';
import { getBanners, getHighlights } from './selectors';
import { banners, highlights } from './mock';

describe('src/state/modules/home/selectors', () => {
  describe('state getters', () => {
    test('check getBanners', () => {
      expect(getBanners(state)).to.be.equal(banners);
    });

    test('check getHighlights', () => {
      expect(getHighlights(state)).to.be.equal(highlights);
    });
  });
});
