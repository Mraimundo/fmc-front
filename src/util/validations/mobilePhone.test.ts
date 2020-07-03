import { expect } from 'chai';

import isMobilePhoneValid from './mobilePhone';

const VALID_NUMBER = `9 9900-1234`;

describe('src/util/validations/mobileNumber', () => {
  it(`should return false because asdk19ld is not a valid phone`, () => {
    expect(isMobilePhoneValid('asdk19ld')).to.be.false;
  });

  it(`should return false because 99990000 is not a valid phone`, () => {
    expect(isMobilePhoneValid('99990000')).to.be.false;
  });

  it(`should return true bacase VALID_NUMBER is a valid phone`, () => {
    expect(isMobilePhoneValid(VALID_NUMBER)).to.be.true;
  });

  it(`should return true bacase 999001234 is a valid phone`, () => {
    expect(isMobilePhoneValid('999001234')).to.be.true;
  });
});
