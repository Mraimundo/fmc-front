import { expect } from 'chai';

import { Points } from './constants';

describe('src/state/modules/point-management/constants', () => {
  describe('Points', () => {
    it('should be a object', () => {
      expect(Points).to.be.a('object');
    });

    it('Points.Rebate should return a string', () => {
      expect(Points.Rebate).to.be.a('string');
    });

    it(`Points.Rebate should return 'Rebate'`, () => {
      expect(Points.Rebate).to.be.equal('Rebate');
    });

    it('Points.SellerAward should return a string', () => {
      expect(Points.SellerAward).to.be.a('string');
    });

    it(`Points.SellerAward should return 'Premiação de Vendedores'`, () => {
      expect(Points.SellerAward).to.be.equal('Premiação de Vendedores');
    });
  });
});
