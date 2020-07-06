import { expect } from 'chai';
import {
  SET_TOTAL_POINTS_TO_DISTRIBUTE,
  SET_TOTAL_POINTS_TEAM_AWARDS,
  SET_TOTAL_POINTS_RESALE,
} from './constants';

describe('src/state/modules/point-management/common/constants', () => {
  describe('SET_TOTAL_POINTS_TO_DISTRIBUTE', () => {
    it('should return a string', () => {
      expect(SET_TOTAL_POINTS_TO_DISTRIBUTE).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(SET_TOTAL_POINTS_TO_DISTRIBUTE).to.be.equal(
        '@fmc/point-management/common/SET_TOTAL_POINTS_TO_DISTRIBUTE',
      );
    });
  });

  describe('SET_TOTAL_POINTS_TEAM_AWARDS', () => {
    it('should return a string', () => {
      expect(SET_TOTAL_POINTS_TEAM_AWARDS).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(SET_TOTAL_POINTS_TEAM_AWARDS).to.be.equal(
        '@fmc/point-management/common/SET_TOTAL_POINTS_TEAM_AWARDS',
      );
    });
  });

  describe('SET_TOTAL_POINTS_RESALE', () => {
    it('should return a string', () => {
      expect(SET_TOTAL_POINTS_RESALE).to.be.a('string');
    });

    it('should return correct value', () => {
      expect(SET_TOTAL_POINTS_RESALE).to.be.equal(
        '@fmc/point-management/common/SET_TOTAL_POINTS_RESALE',
      );
    });
  });
});
