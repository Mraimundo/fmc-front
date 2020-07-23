import { expect } from 'chai';

import { Points } from 'state/modules/point-management/constants';
import { transformTotalPointsToDistributeRawData } from './common';
import { FetchTotalPointsToDistributeRawData } from 'services/point-management/common';

describe('src/services/point-management/transformers/common', () => {
  describe('transformTotalPointsToDistributeRawData', () => {
    it('should be a function', () => {
      expect(transformTotalPointsToDistributeRawData).to.be.a('function');
    });

    it('test 1', () => {
      const mock: FetchTotalPointsToDistributeRawData = {
        undistributed_points: [
          {
            point: {
              id: 1,
              value: 1200,
              type_id: 4,
              type_name: Points.Rebate,
            },
            establishment: {
              id: 13,
              name: 'COAMO AGROINDUSTRIAL COOPERATIVA',
              cnpj: '75904383001012',
              category: 'Semente',
              team_receives_points: false,
              type_id: 2,
              type_name: 'Cooperativa',
              dc_max_percentage: 0,
            },
          },
        ],
      };

      expect(transformTotalPointsToDistributeRawData(mock)).to.be.deep.equal({
        general: 0,
        teamAwards: null,
        resaleCooperative: {
          points: 1200,
          maxInvoicePercentage: 0,
        },
      });
    });

    it('test 2', () => {
      const mock: FetchTotalPointsToDistributeRawData = {
        undistributed_points: [
          {
            point: {
              id: 1,
              value: 5000,
              type_id: 4,
              type_name: Points.Rebate,
            },
            establishment: {
              id: 13,
              name: 'COAMO AGROINDUSTRIAL COOPERATIVA',
              cnpj: '75904383001012',
              category: 'Semente',
              team_receives_points: true,
              type_id: 2,
              type_name: 'Cooperativa',
              dc_max_percentage: 20,
            },
          },
        ],
      };

      expect(transformTotalPointsToDistributeRawData(mock)).to.be.deep.equal({
        general: 5000,
        teamAwards: null,
        resaleCooperative: {
          points: 0,
          maxInvoicePercentage: 20,
        },
      });
    });

    it('test 3', () => {
      const mock: FetchTotalPointsToDistributeRawData = {
        undistributed_points: [
          {
            point: {
              id: 1,
              value: 2500,
              type_id: 4,
              type_name: Points.SellerAward,
            },
            establishment: {
              id: 13,
              name: 'COAMO AGROINDUSTRIAL COOPERATIVA',
              cnpj: '75904383001012',
              category: 'Semente',
              team_receives_points: false,
              type_id: 2,
              type_name: 'Revenda',
              dc_max_percentage: 20,
            },
          },
          {
            point: {
              id: 1,
              value: 2600,
              type_id: 4,
              type_name: Points.Rebate,
            },
            establishment: {
              id: 13,
              name: 'COAMO AGROINDUSTRIAL COOPERATIVA',
              cnpj: '75904383001012',
              category: 'Semente',
              team_receives_points: false,
              type_id: 2,
              type_name: 'Revenda',
              dc_max_percentage: 20,
            },
          },
        ],
      };

      expect(transformTotalPointsToDistributeRawData(mock)).to.be.deep.equal({
        general: 0,
        teamAwards: {
          points: 2500,
        },
        resaleCooperative: {
          points: 2600,
          maxInvoicePercentage: 20,
        },
      });
    });
  });
});
