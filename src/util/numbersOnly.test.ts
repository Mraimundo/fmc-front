import { expect } from 'chai';

import numbersOnly from './numbersOnly';

describe('src/util', () => {
  test('numbersOnly should be a function', () => {
    expect(numbersOnly).to.be.a('function');
  });

  it(`numbersOnly('12a3') should return '123'`, () => {
    expect(numbersOnly('12a3')).to.be.equal('123');
  });

  it(`numbersOnly('abc') should return ''`, () => {
    expect(numbersOnly('abc')).to.be.equal('');
  });

  it(`numbersOnly('123') should return '123'`, () => {
    expect(numbersOnly('123')).to.be.equal('123');
  });
});
