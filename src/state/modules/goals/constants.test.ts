import { expect } from 'chai';
import {
  FETCH_CAMPAIGNS_ACTION,
  FETCH_CAMPAIGNS_FAILURE,
  FETCH_CAMPAIGNS_SUCCESS,
  FETCH_BILLING_POG_ACTION,
  FETCH_BILLING_POG_FAILURE,
  FETCH_BILLING_POG_SUCCESS,
  FETCH_POTENTIALIZERS_ACTION,
  FETCH_POTENTIALIZERS_FAILURE,
  FETCH_POTENTIALIZERS_SUCCESS,
  FETCH_INFOS_ACTION,
  FETCH_INFOS_FAILURE,
  FETCH_INFOS_SUCCESS,
  FETCH_TOP_PURCHASING_PRODUCTS_ACTION,
  FETCH_TOP_PURCHASING_PRODUCTS_FAILURE,
  FETCH_TOP_PURCHASING_PRODUCTS_SUCCESS,
  FETCH_TOP_SELLING_PRODUCTS_ACTION,
  FETCH_TOP_SELLING_PRODUCTS_FAILURE,
  FETCH_TOP_SELLING_PRODUCTS_SUCCESS,
} from './constants';

describe('src/state/modules/goals/constants', () => {
  describe('FETCH_CAMPAIGNS_ACTION', () => {
    test('should return a string', () => {
      expect(FETCH_CAMPAIGNS_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_CAMPAIGNS_ACTION).to.be.equal(
        '@fmc/goals/FETCH_CAMPAIGNS_ACTION',
      );
    });
  });

  describe('FETCH_CAMPAIGNS_FAILURE', () => {
    test('should return a string', () => {
      expect(FETCH_CAMPAIGNS_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_CAMPAIGNS_FAILURE).to.be.equal(
        '@fmc/goals/FETCH_CAMPAIGNS_FAILURE',
      );
    });
  });

  describe('FETCH_CAMPAIGNS_SUCCESS', () => {
    test('should return a string', () => {
      expect(FETCH_CAMPAIGNS_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_CAMPAIGNS_SUCCESS).to.be.equal(
        '@fmc/goals/FETCH_CAMPAIGNS_SUCCESS',
      );
    });
  });

  describe('FETCH_BILLING_POG_ACTION', () => {
    test('should return a string', () => {
      expect(FETCH_BILLING_POG_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_BILLING_POG_ACTION).to.be.equal(
        '@fmc/goals/FETCH_BILLING_POG_ACTION',
      );
    });
  });

  describe('FETCH_BILLING_POG_FAILURE', () => {
    test('should return a string', () => {
      expect(FETCH_BILLING_POG_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_BILLING_POG_FAILURE).to.be.equal(
        '@fmc/goals/FETCH_BILLING_POG_FAILURE',
      );
    });
  });

  describe('FETCH_BILLING_POG_SUCCESS', () => {
    test('should return a string', () => {
      expect(FETCH_BILLING_POG_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_BILLING_POG_SUCCESS).to.be.equal(
        '@fmc/goals/FETCH_BILLING_POG_SUCCESS',
      );
    });
  });

  describe('FETCH_POTENTIALIZERS_ACTION', () => {
    test('should return a string', () => {
      expect(FETCH_POTENTIALIZERS_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_POTENTIALIZERS_ACTION).to.be.equal(
        '@fmc/goals/FETCH_POTENTIALIZERS_ACTION',
      );
    });
  });

  describe('FETCH_POTENTIALIZERS_FAILURE', () => {
    test('should return a string', () => {
      expect(FETCH_POTENTIALIZERS_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_POTENTIALIZERS_FAILURE).to.be.equal(
        '@fmc/goals/FETCH_POTENTIALIZERS_FAILURE',
      );
    });
  });

  describe('FETCH_POTENTIALIZERS_SUCCESS', () => {
    test('should return a string', () => {
      expect(FETCH_POTENTIALIZERS_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_POTENTIALIZERS_SUCCESS).to.be.equal(
        '@fmc/goals/FETCH_POTENTIALIZERS_SUCCESS',
      );
    });
  });

  describe('FETCH_INFOS_ACTION', () => {
    test('should return a string', () => {
      expect(FETCH_INFOS_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_INFOS_ACTION).to.be.equal('@fmc/goals/FETCH_INFOS_ACTION');
    });
  });

  describe('FETCH_INFOS_FAILURE', () => {
    test('should return a string', () => {
      expect(FETCH_INFOS_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_INFOS_FAILURE).to.be.equal('@fmc/goals/FETCH_INFOS_FAILURE');
    });
  });

  describe('FETCH_INFOS_SUCCESS', () => {
    test('should return a string', () => {
      expect(FETCH_INFOS_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_INFOS_SUCCESS).to.be.equal('@fmc/goals/FETCH_INFOS_SUCCESS');
    });
  });

  describe('FETCH_TOP_PURCHASING_PRODUCTS_ACTION', () => {
    test('should return a string', () => {
      expect(FETCH_TOP_PURCHASING_PRODUCTS_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_TOP_PURCHASING_PRODUCTS_ACTION).to.be.equal(
        '@fmc/goals/FETCH_TOP_PURCHASING_PRODUCTS_ACTION',
      );
    });
  });

  describe('FETCH_TOP_PURCHASING_PRODUCTS_FAILURE', () => {
    test('should return a string', () => {
      expect(FETCH_TOP_PURCHASING_PRODUCTS_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_TOP_PURCHASING_PRODUCTS_FAILURE).to.be.equal(
        '@fmc/goals/FETCH_TOP_PURCHASING_PRODUCTS_FAILURE',
      );
    });
  });

  describe('FETCH_TOP_PURCHASING_PRODUCTS_SUCCESS', () => {
    test('should return a string', () => {
      expect(FETCH_TOP_PURCHASING_PRODUCTS_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_TOP_PURCHASING_PRODUCTS_SUCCESS).to.be.equal(
        '@fmc/goals/FETCH_TOP_PURCHASING_PRODUCTS_SUCCESS',
      );
    });
  });

  describe('FETCH_TOP_SELLING_PRODUCTS_ACTION', () => {
    test('should return a string', () => {
      expect(FETCH_TOP_SELLING_PRODUCTS_ACTION).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_TOP_SELLING_PRODUCTS_ACTION).to.be.equal(
        '@fmc/goals/FETCH_TOP_SELLING_PRODUCTS_ACTION',
      );
    });
  });

  describe('FETCH_TOP_SELLING_PRODUCTS_FAILURE', () => {
    test('should return a string', () => {
      expect(FETCH_TOP_SELLING_PRODUCTS_FAILURE).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_TOP_SELLING_PRODUCTS_FAILURE).to.be.equal(
        '@fmc/goals/FETCH_TOP_SELLING_PRODUCTS_FAILURE',
      );
    });
  });

  describe('FETCH_TOP_SELLING_PRODUCTS_SUCCESS', () => {
    test('should return a string', () => {
      expect(FETCH_TOP_SELLING_PRODUCTS_SUCCESS).to.be.a('string');
    });

    test('should return correct value', () => {
      expect(FETCH_TOP_SELLING_PRODUCTS_SUCCESS).to.be.equal(
        '@fmc/goals/FETCH_TOP_SELLING_PRODUCTS_SUCCESS',
      );
    });
  });
});
