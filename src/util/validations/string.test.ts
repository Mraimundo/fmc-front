import { expect } from 'chai';

import { hasLowerCase, hasUpperCase, hasNumber } from './string';

describe('src/util/validations/string', () => {
  describe('hasLowerCase fn', () => {
    test('hasLowerCase should be a function', () => {
      expect(hasLowerCase).to.be.a('function');
    });

    test(`hasLowerCase('ABC') should return false`, () => {
      expect(hasLowerCase('ABC')).to.be.false;
    });

    test(`hasLowerCase('abc') should return true`, () => {
      expect(hasLowerCase('abc')).to.be.true;
    });

    test(`hasLowerCase('AbC') should return true`, () => {
      expect(hasLowerCase('AbC')).to.be.true;
    });
  });

  describe('hasUpperCase fn', () => {
    test('hasUpperCase should be a function', () => {
      expect(hasUpperCase).to.be.a('function');
    });

    test(`hasUpperCase('ABC') should return true`, () => {
      expect(hasUpperCase('ABC')).to.be.true;
    });

    test(`hasUpperCase('abc') should return false`, () => {
      expect(hasUpperCase('abc')).to.be.false;
    });

    test(`hasUpperCase('AbC') should return true`, () => {
      expect(hasUpperCase('AbC')).to.be.true;
    });
  });

  describe('hasNumber fn', () => {
    test('hasNumber should be a function', () => {
      expect(hasNumber).to.be.a('function');
    });

    test(`hasNumber('ABC') should return false`, () => {
      expect(hasNumber('ABC')).to.be.false;
    });

    test(`hasNumber('ab1c') should return true`, () => {
      expect(hasNumber('ab1c')).to.be.true;
    });

    test(`hasNumber('123') should return true`, () => {
      expect(hasNumber('123')).to.be.true;
    });
  });
});
