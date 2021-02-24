import {
  DataDistribution,
  ScoredParticipantsDataDistribution,
  UndistributedPoint,
} from 'services/point-management/common';
import { PointsToDistribute } from 'state/modules/point-management/common/types';
import { RulesParams } from './types';
import { constructPointsToDistribute, sellerAward, rebate } from '.';

const getResponse = (
  undistributedPoints: UndistributedPoint[],
): PointsToDistribute | null => {
  const sellerAwardValues = sellerAward(undistributedPoints);
  const rebatePoints = rebate(undistributedPoints);

  const hasSellerAwardAndRebate = !!sellerAwardValues && !!rebatePoints;
  const isResale = sellerAwardValues?.establishment.type_name === 'Revenda';

  const checked =
    hasSellerAwardAndRebate ||
    (!!sellerAwardValues && !rebatePoints && isResale);

  if (!checked) return null;

  return constructPointsToDistribute({
    teamAwardsPoints: sellerAwardValues?.point.value || 0,
    teamAwardsPointId: sellerAwardValues?.point.id || 0,
    resaleCooperativePoints: rebatePoints?.point.value || 0,
    resaleCooperativePointId: rebatePoints?.point.id || 0,
    resaleCooperativeMaxInvoicePercentage:
      rebatePoints?.establishment.dc_max_percentage || 0,
    savedSetttig: {
      data: rebatePoints?.saved_setting.data || '',
      date: rebatePoints?.saved_setting.date || '',
    },
  });
};

export const resaleRule = (
  undistributedPoints: UndistributedPoint[],
): RulesParams => {
  const sellerAwardValues = sellerAward(undistributedPoints);
  const rebatePoints = rebate(undistributedPoints);

  const hasSellerAwardAndRebate = !!sellerAwardValues && !!rebatePoints;
  const isResale = sellerAwardValues?.establishment.type_name === 'Revenda';

  const checked =
    hasSellerAwardAndRebate ||
    (!!sellerAwardValues && !rebatePoints && isResale);

  return {
    checked,
    getResponse: () => getResponse(undistributedPoints),
  };
};

// prepare array to send distribution
interface ConstructDataDistribution {
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
}: ConstructDataDistribution): DataDistribution[] => {
  const resaleCooperativePoints = {
    id: resaleCooperativePointId,
    establishment: {
      id: establishmentId,
      marketplace: marketplacePoints,
      rebate: invoicePoints,
    },
  };

  const teamAwardsPoints = {
    id: teamAwardsPointId,
    establishment: {
      id: establishmentId,
      marketplace: 0,
      rebate: 0,
    },
    participants,
  };

  const hasParticipants = participants.length > 0;
  const hasResaleCooperativePoints =
    (marketplacePoints > 0 || invoicePoints > 0) &&
    resaleCooperativePointId > 0;

  if (hasParticipants && !hasResaleCooperativePoints) {
    return [teamAwardsPoints];
  }

  if (!hasParticipants && hasResaleCooperativePoints) {
    return [resaleCooperativePoints];
  }

  return [resaleCooperativePoints, teamAwardsPoints];
};
