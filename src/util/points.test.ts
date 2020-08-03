import { expect } from 'chai';

import { formatPoints, formatPointsInput } from './points';

describe('src/util/points', () => {
  describe('formatPoints', () => {
    test('should be a function', () => {
      expect(formatPoints).to.be.a('function');
    });

    it(`formatPoints(20) should return a string`, () => {
      expect(formatPoints(20)).to.be.a('string');
    });

    it(`formatPoints(0) should return '0.00'`, () => {
      expect(formatPoints(0)).to.be.equal('0.00');
    });

    it(`formatPoints(20) should return '20.00'`, () => {
      expect(formatPoints(20)).to.be.equal('20.00');
    });

    it(`formatPoints(5000) should return '5,000.00'`, () => {
      expect(formatPoints(5000)).to.be.equal('5,000.00');
    });

    it(`formatPoints(231923) should return '231,923.00'`, () => {
      expect(formatPoints(231923)).to.be.equal('231,923.00');
    });
  });

  describe('formatPointsInput', () => {
    test('should be a function', () => {
      expect(formatPointsInput).to.be.a('function');
    });

    it(`formatPointsInput(20) should return a string`, () => {
      expect(formatPointsInput(20)).to.be.a('string');
    });

    it(`formatPointsInput(0) should return ''`, () => {
      expect(formatPointsInput(0)).to.be.equal('');
    });

    it(`formatPointsInput(20) should return '0.20'`, () => {
      expect(formatPointsInput(20)).to.be.equal('0.20');
    });

    it(`formatPointsInput(5000) should return '50.00'`, () => {
      expect(formatPointsInput(5000)).to.be.equal('50.00');
    });

    it(`formatPointsInput(231923) should return '2,319.23'`, () => {
      expect(formatPointsInput(231923)).to.be.equal('2,319.23');
    });
  });
});

