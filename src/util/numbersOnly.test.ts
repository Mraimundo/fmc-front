import { expect } from 'chai';

import numbersOnly from './numbersOnly';

describe('src/util', () => {
  test('numbersOnly should be a function', () => {
    expect(numbersOnly).to.be.a('function');
  });

  test(`numbersOnly('12a3') should return '123'`, () => {
    expect(numbersOnly('12a3')).to.be.equal('123');
  });

  test(`numbersOnly('abc') should return ''`, () => {
    expect(numbersOnly('abc')).to.be.equal('');
  });

  test(`numbersOnly('123') should return '123'`, () => {
    expect(numbersOnly('123')).to.be.equal('123');
  });
});
