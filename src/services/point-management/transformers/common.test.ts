import { expect } from 'chai';

import { Points } from 'state/modules/point-management/constants';
import { FetchTotalPointsToDistributeRawData } from 'services/point-management/common';
import { pointsToDistribute } from 'state/modules/point-management/common/mock';
import { scoredParticipants } from 'state/modules/point-management/team-awards/mock';
import {
  transformTotalPointsToDistributeRawData,
  transformScoredParticipantsToDataDistribution,
} from './common';

describe('src/services/point-management/transformers/common', () => {
  describe('transformTotalPointsToDistributeRawData', () => {
    test('should be a function', () => {
      expect(transformTotalPointsToDistributeRawData).to.be.a('function');
    });

    test('should return null when undistributed points are empty', () => {
      const mock: FetchTotalPointsToDistributeRawData = {
        undistributed_points: [],
      };

      expect(transformTotalPointsToDistributeRawData(mock)).to.be.null;
    });

    test('cooperative without team awards rules', () => {
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
        allowPartialDistribution: true,
        general: 0,
        generalPointId: null,
        teamAwards: null,
        resaleCooperative: {
          pointId: 1,
          points: 1200,
          maxInvoicePercentage: 0,
        },
      });
    });

    test('cooperative with team awards rules', () => {
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
        allowPartialDistribution: true,
        general: 5000,
        generalPointId: 1,
        teamAwards: null,
        resaleCooperative: {
          points: 0,
          pointId: null,
          maxInvoicePercentage: 20,
        },
      });
    });

    test('resale rule', () => {
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
        allowPartialDistribution: true,
        general: 0,
        generalPointId: null,
        teamAwards: {
          pointId: 1,
          points: 2500,
        },
        resaleCooperative: {
          pointId: 1,
          points: 2600,
          maxInvoicePercentage: 20,
        },
      });
    });
  });

  describe('transformScoredParticipantsToDataDistribution', () => {
    const commonValues = {
      establishmentId: 1,
      invoicePoints: 200,
      marketplacePoints: 1000,
    };

    test('should be a function', () => {
      expect(transformScoredParticipantsToDataDistribution).to.be.a('function');
    });

    test('should return with array structure to cooperative with team awards', () => {
      const result = transformScoredParticipantsToDataDistribution({
        ...commonValues,
        pointsToDistribute: {
          ...pointsToDistribute,
          generalPointId: 1,
          general: 4000,
        },
        scoredParticipants,
      });

      expect(result).to.be.deep.equal([
        {
          participants: [
            { id: 1, value: 200 },
            { id: 2, value: 210 },
            { id: 3, value: 21 },
          ],
          establishment: {
            id: commonValues.establishmentId,
            marketplace: commonValues.marketplacePoints,
            rebate: commonValues.invoicePoints,
          },
          id: 1,
        },
      ]);
    });

    test('should return null to cooperative with team awards without point id', () => {
      const result = transformScoredParticipantsToDataDistribution({
        ...commonValues,
        pointsToDistribute: {
          ...pointsToDistribute,
          generalPointId: null,
          general: 4000,
        },
        scoredParticipants,
      });

      expect(result).to.be.null;
    });

    test('should return with array structure to cooperative without team awards', () => {
      const result = transformScoredParticipantsToDataDistribution({
        ...commonValues,
        pointsToDistribute,
        scoredParticipants,
      });

      expect(result).to.be.deep.equal([
        {
          establishment: {
            id: commonValues.establishmentId,
            marketplace: commonValues.marketplacePoints,
            rebate: commonValues.invoicePoints,
          },
          id: 1,
        },
      ]);
    });

    test('should return null to cooperative without team awards without point id', () => {
      const result = transformScoredParticipantsToDataDistribution({
        ...commonValues,
        pointsToDistribute: {
          ...pointsToDistribute,
          resaleCooperative: {
            points: 200,
            maxInvoicePercentage: 20,
            pointId: null,
          },
        },
        scoredParticipants,
      });

      expect(result).to.be.null;
    });

    test('should return with array structure to resale', () => {
      const result = transformScoredParticipantsToDataDistribution({
        ...commonValues,
        pointsToDistribute: {
          ...pointsToDistribute,
          general: null,
          teamAwards: {
            pointId: 1,
            points: 200,
          },
          resaleCooperative: {
            pointId: 2,
            maxInvoicePercentage: 20,
            points: 1000,
          },
        },
        scoredParticipants,
      });

      expect(result).to.be.deep.equal([
        {
          id: 2,
          establishment: {
            id: commonValues.establishmentId,
            marketplace: commonValues.marketplacePoints,
            rebate: commonValues.invoicePoints,
          },
        },
        {
          id: 1,
          establishment: {
            id: commonValues.establishmentId,
            marketplace: 0,
            rebate: 0,
          },
          participants: [
            { id: 1, value: 200 },
            { id: 2, value: 210 },
            { id: 3, value: 21 },
          ],
        },
      ]);
    });

    test('should return null on resale when dont have team award point id', () => {
      const result = transformScoredParticipantsToDataDistribution({
        ...commonValues,
        pointsToDistribute: {
          ...pointsToDistribute,
          general: null,
          teamAwards: {
            pointId: null,
            points: 200,
          },
          resaleCooperative: {
            pointId: 2,
            maxInvoicePercentage: 20,
            points: 1000,
          },
        },
        scoredParticipants,
      });

      expect(result).to.be.null;
    });

    test('should return null on resale when dont have resale cooperative point id', () => {
      const result = transformScoredParticipantsToDataDistribution({
        ...commonValues,
        pointsToDistribute: {
          ...pointsToDistribute,
          general: null,
          teamAwards: {
            pointId: 1,
            points: 200,
          },
          resaleCooperative: {
            pointId: null,
            maxInvoicePercentage: 20,
            points: 1000,
          },
        },
        scoredParticipants,
      });

      expect(result).to.be.deep.equal([
        {
          id: 1,
          establishment: {
            id: commonValues.establishmentId,
            marketplace: 0,
            rebate: 0,
          },
          participants: [
            { id: 1, value: 200 },
            { id: 2, value: 210 },
            { id: 3, value: 21 },
          ],
        },
      ]);
    });

    test('should return null on resale when dont have resale cooperative and team awards point id', () => {
      const result = transformScoredParticipantsToDataDistribution({
        ...commonValues,
        pointsToDistribute: {
          ...pointsToDistribute,
          general: null,
          teamAwards: {
            pointId: null,
            points: 200,
          },
          resaleCooperative: {
            pointId: null,
            maxInvoicePercentage: 20,
            points: 1000,
          },
        },
        scoredParticipants,
      });

      expect(result).to.be.null;
    });

    test('should return null when doesnt match any conditions', () => {
      const result = transformScoredParticipantsToDataDistribution({
        ...commonValues,
        pointsToDistribute: {
          ...pointsToDistribute,
          general: null,
          teamAwards: null,
          resaleCooperative: null,
        },
        scoredParticipants,
      });

      expect(result).to.be.null;
    });
  });
});
