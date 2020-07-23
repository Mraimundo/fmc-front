import { expect } from 'chai';
import {
  SET_MARKETPLACE_POINTS,
  SET_INVOICE_POINTS,
  SET_MAX_INVOICE_PERCENTAGE,
} from './constants';

describe('src/state/modules/point-management/resale-cooperative/constants', () => {
  describe('SET_MARKETPLACE_POINTS', () => {
    it('should return a string', () => {
      expect(SET_MARKETPLACE_POINTS).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(SET_MARKETPLACE_POINTS).to.be.equal(
        '@fmc/point-management/resale-cooperative/SET_MARKETPLACE_POINTS',
      );
    });
  });

  describe('SET_INVOICE_POINTS', () => {
    it('should return a string', () => {
      expect(SET_INVOICE_POINTS).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(SET_INVOICE_POINTS).to.be.equal(
        '@fmc/point-management/resale-cooperative/SET_INVOICE_POINTS',
      );
    });
  });

  describe('SET_MAX_INVOICE_PERCENTAGE', () => {
    it('should return a string', () => {
      expect(SET_MAX_INVOICE_PERCENTAGE).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(SET_MAX_INVOICE_PERCENTAGE).to.be.equal(
        '@fmc/point-management/resale-cooperative/SET_MAX_INVOICE_PERCENTAGE',
      );
    });
  });
});
