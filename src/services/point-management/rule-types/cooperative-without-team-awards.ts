import {
  DataDistribution,
  ScoredParticipantsDataDistribution,
} from 'services/point-management/common';
import { PointsToDistribute } from 'state/modules/point-management/common/types';
import { RulesParams } from './types';
import { UndistributedPoint } from '../common';
import { constructPointsToDistribute, rebateWithoutTeamReceivePoints } from './index';

const getResponse = (
  undistributedPoints: UndistributedPoint[],
): PointsToDistribute | null => {
  const rebateWithoutTeamReceivePointsValues = rebateWithoutTeamReceivePoints(
    undistributedPoints,
  );

  if (!rebateWithoutTeamReceivePointsValues) return null;

  return constructPointsToDistribute({
    resaleCooperativePoints: rebateWithoutTeamReceivePointsValues?.point.value,
    resaleCooperativePointId: rebateWithoutTeamReceivePointsValues?.point.id,
    resaleCooperativeMaxInvoicePercentage:
      rebateWithoutTeamReceivePointsValues?.establishment.dc_max_percentage,
  });
};

export const cooperativeWithoutTeamAwardsRule = (
  undistributedPoints: UndistributedPoint[],
): RulesParams => {
  const rebateWithoutTeamReceivePointsValues = rebateWithoutTeamReceivePoints(
    undistributedPoints,
  );

  const checked = !!rebateWithoutTeamReceivePointsValues;

  return {
    checked,
    getResponse: () => getResponse(undistributedPoints),
  };
};

// prepare array to send distribution
interface IConstructDataDistribution {
  resaleCooperativePointId: number;
  establishmentId: number | string;
  marketplacePoints: number;
  invoicePoints: number;
}
export const constructDataDistribution = ({
  resaleCooperativePointId,
  establishmentId,
  marketplacePoints,
  invoicePoints,
}: IConstructDataDistribution): DataDistribution[] => [
  {
    id: resaleCooperativePointId,
    establishment: {
      id: establishmentId,
      marketplace: marketplacePoints,
      rebate: invoicePoints,
    },
  },
];
