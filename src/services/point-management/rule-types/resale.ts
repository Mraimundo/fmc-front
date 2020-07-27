import {
  DataDistribution,
  ScoredParticipantsDataDistribution,
} from 'services/point-management/common';
import { PointsToDistribute } from 'state/modules/point-management/common/types';
import { RulesParams } from './types';
import { UndistributedPoint } from '../common';
import {
  constructPointsToDistribute,
  sellerAward,
  rebateWithoutTeamReceivePoints,
} from './index';

const getResponse = (
  undistributedPoints: UndistributedPoint[],
): PointsToDistribute | null => {
  const sellerAwardValues = sellerAward(undistributedPoints);
  const rebateWithoutTeamReceivePointsValues = rebateWithoutTeamReceivePoints(
    undistributedPoints,
  );

  if (!sellerAwardValues || !rebateWithoutTeamReceivePointsValues) return null;

  return constructPointsToDistribute({
    teamAwardsPoints: sellerAwardValues.point.value,
    teamAwardsPointId: sellerAwardValues.point.id,
    resaleCooperativePoints: rebateWithoutTeamReceivePointsValues.point.value,
    resaleCooperativePointId: rebateWithoutTeamReceivePointsValues.point.id,
    resaleCooperativeMaxInvoicePercentage:
      rebateWithoutTeamReceivePointsValues.establishment.dc_max_percentage,
  });
};

export const resaleRule = (
  undistributedPoints: UndistributedPoint[],
): RulesParams => {
  const sellerAwardValues = sellerAward(undistributedPoints);
  const rebateWithoutTeamReceivePointsValues = rebateWithoutTeamReceivePoints(
    undistributedPoints,
  );

  const checked = !!sellerAwardValues && !!rebateWithoutTeamReceivePointsValues;

  return {
    checked,
    getResponse: () => getResponse(undistributedPoints),
  };
};

// prepare array to send distribution
interface IConstructDataDistribution {
  resaleCooperativePointId: number;
  teamAwardsPointId: number;
  establishmentId: number | string;
  marketplacePoints: number;
  invoicePoints: number;
  participants: ScoredParticipantsDataDistribution[];
}
export const constructDataDistribution = ({
  resaleCooperativePointId,
  teamAwardsPointId,
  establishmentId,
  marketplacePoints,
  invoicePoints,
  participants,
}: IConstructDataDistribution): DataDistribution[] => [
  {
    id: resaleCooperativePointId,
    establishment: {
      id: establishmentId,
      marketplace: marketplacePoints,
      rebate: invoicePoints,
    },
  },
  {
    id: teamAwardsPointId,
    establishment: {
      id: establishmentId,
      marketplace: marketplacePoints,
      rebate: invoicePoints,
    },
    participants,
  },
];
