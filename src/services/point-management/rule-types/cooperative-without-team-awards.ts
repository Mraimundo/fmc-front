import {
  DataDistribution,
  UndistributedPoint,
} from 'services/point-management/common';
import { PointsToDistribute } from 'state/modules/point-management/common/types';
import { RulesParams } from './types';
import {
  constructPointsToDistribute,
  rebateWithoutTeamReceivePoints,
} from './index';

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
    savedSetttig: {
      data: rebateWithoutTeamReceivePointsValues?.saved_setting.data || '',
      date: rebateWithoutTeamReceivePointsValues?.saved_setting.date || '',
    },
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
interface ConstructDataDistribution {
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
}: ConstructDataDistribution): DataDistribution[] => [
  {
    id: resaleCooperativePointId,
    establishment: {
      id: establishmentId,
      marketplace: marketplacePoints,
      rebate: invoicePoints,
    },
  },
];
