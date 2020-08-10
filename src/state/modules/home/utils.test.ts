import { expect } from 'chai';

import routeMap from 'routes/route-map';
import { getHighlightLink } from './utils';
import { HighlightTypes } from './constants';

describe('src/state/modules/home/utils', () => {
  describe('getHighlightLink', () => {
    test('should be a function', () => {
      expect(getHighlightLink).to.be.a('function');
    });

    test('should return "/" when dont have highlight type url', () => {
      expect(getHighlightLink(null, 1)).to.be.equal('/');
    });

    test('should return training url with id 1 param', () => {
      expect(getHighlightLink(HighlightTypes.Quiz, 1)).to.be.equal(
        `${routeMap.training}/1`,
      );
    });

    test('should return report url with id 1 param', () => {
      expect(getHighlightLink(HighlightTypes.Report, 1)).to.be.equal(
        `${routeMap.news}/1`,
      );
    });

    test('should return fmc campaign url with id 1 param', () => {
      expect(getHighlightLink(HighlightTypes.FmcCampaign, 1)).to.be.equal(
        `${routeMap.campaignManagement}/visualizar/1`,
      );
    });
  });
});
