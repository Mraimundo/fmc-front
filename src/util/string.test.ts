import { expect } from 'chai';

import { getNameAbbr, getFirstAndLastName, limitChars } from './string';

describe('src/util/string', () => {
  describe('getNameAbbr', () => {
    it('should be a function', () => {
      expect(getNameAbbr).to.be.a('function');
    });

    it(`getNameAbbr('Gabriel') should return a string`, () => {
      expect(getNameAbbr('Gabriel')).to.be.a('string');
    });

    it(`getNameAbbr('Gabriel') should return 'GA'`, () => {
      expect(getNameAbbr('Gabriel')).to.be.equal('GA');
    });

    it(`getNameAbbr('Gabriel Ferreira') should return 'GF'`, () => {
      expect(getNameAbbr('Gabriel Ferreira')).to.be.equal('GF');
    });

    it(`getNameAbbr() should return 'AA'`, () => {
      expect(getNameAbbr()).to.be.equal('AA');
    });
  });
  describe('getFirstAndLastName', () => {
    it('should be a function', () => {
      expect(getFirstAndLastName).to.be.a('function');
    });

    it(`getFirstAndLastName('Gabriel Ferreira Alves') should return a string`, () => {
      expect(getFirstAndLastName('Gabriel Ferreira Alves')).to.be.a('string');
    });

    it(`getFirstAndLastName('Gabriel Ferreira Alves') should return 'Gabriel Alves'`, () => {
      expect(getFirstAndLastName('Gabriel Ferreira Alves')).to.be.equal('Gabriel Alves');
    });

    it(`getFirstAndLastName('Gabriel') should return 'Gabriel'`, () => {
      expect(getFirstAndLastName('Gabriel')).to.be.equal('Gabriel');
    });
  });
  describe('limitChars', () => {
    it('should be a function', () => {
      expect(limitChars).to.be.a('function');
    });

    it(`limitChars('AAA') should return a string`, () => {
      expect(limitChars('AAA')).to.be.a('string');
    });

    it(`limitChars('AAA', 2) should return 'AA...'`, () => {
      expect(limitChars('AAA', 2)).to.be.equal('AA...');
    });

    it(`limitChars('AA', 3) should return 'AA'`, () => {
      expect(limitChars('AA', 3)).to.be.equal('AA');
    });
  });
});
