import { expect } from 'chai';

import { hasLowerCase, hasUpperCase, hasNumber } from './string';

describe('src/util/validations/string', () => {
  describe('hasLowerCase fn', () => {
    test('hasLowerCase should be a function', () => {
      expect(hasLowerCase).to.be.a('function');
    });

    it(`hasLowerCase('ABC') should return false`, () => {
      expect(hasLowerCase('ABC')).to.be.false;
    });

    it(`hasLowerCase('abc') should return true`, () => {
      expect(hasLowerCase('abc')).to.be.true;
    });

    it(`hasLowerCase('AbC') should return true`, () => {
      expect(hasLowerCase('AbC')).to.be.true;
    });
  });

  describe('hasUpperCase fn', () => {
    test('hasUpperCase should be a function', () => {
      expect(hasUpperCase).to.be.a('function');
    });

    it(`hasUpperCase('ABC') should return true`, () => {
      expect(hasUpperCase('ABC')).to.be.true;
    });

    it(`hasUpperCase('abc') should return false`, () => {
      expect(hasUpperCase('abc')).to.be.false;
    });

    it(`hasUpperCase('AbC') should return true`, () => {
      expect(hasUpperCase('AbC')).to.be.true;
    });
  });

  describe('hasNumber fn', () => {
    test('hasNumber should be a function', () => {
      expect(hasNumber).to.be.a('function');
    });

    it(`hasNumber('ABC') should return false`, () => {
      expect(hasNumber('ABC')).to.be.false;
    });

    it(`hasNumber('ab1c') should return true`, () => {
      expect(hasNumber('ab1c')).to.be.true;
    });

    it(`hasNumber('123') should return true`, () => {
      expect(hasNumber('123')).to.be.true;
    });
  });
});
