import { expect } from 'chai';

import isValidCpf from './cpf';

const CORRECT_CPF = `09788471994`;
const INCORRECT_CPF = `09788471993`;

describe('src/util/validations/cpf', () => {
  it('isValidCpf should be a function', () => {
    expect(isValidCpf).to.be.a('function');
  });

  it(`isValidCpf('asdk19ld') should return false`, () => {
    expect(isValidCpf('asdk19ld')).to.be.false;
  });

  it(`isValidCpf(CORRECT_CPF) should return true`, () => {
    expect(isValidCpf(CORRECT_CPF)).to.be.true;
  });

  it(`isValidCpf(CORRECT_CPF) should return true`, () => {
    expect(isValidCpf(CORRECT_CPF)).to.be.true;
  });

  it(`isValidCpf(INCORRECT_CPF) should return false`, () => {
    expect(isValidCpf(INCORRECT_CPF)).to.be.false;
  });

  it(`isValidCpf('097.884.719-94') should return true`, () => {
    expect(isValidCpf('097.884.719-94')).to.be.true;
  });
});
