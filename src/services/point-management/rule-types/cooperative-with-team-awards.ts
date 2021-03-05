import {
  DataDistribution,
  ScoredParticipantsDataDistribution,
  UndistributedPoint,
} from 'services/point-management/common';
import { PointsToDistribute } from 'state/modules/point-management/common/types';
import { RulesParams } from './types';
import {
  constructPointsToDistribute,
  rebateWithTeamReceivesPoints,
} from './index';

const getResponse = (
  undistributedPoints: UndistributedPoint[],
): PointsToDistribute | null => {
  const rebateWithTeamReceivePointsValues = rebateWithTeamReceivesPoints(
    undistributedPoints,
  );

  if (!rebateWithTeamReceivePointsValues) return null;

  return constructPointsToDistribute({
    general: rebateWithTeamReceivePointsValues?.point.value,
    generalPointId: rebateWithTeamReceivePointsValues?.point.id,
    resaleCooperativeMaxInvoicePercentage:
      rebateWithTeamReceivePointsValues?.establishment.dc_max_percentage,
    savedSetttig: {
      data: rebateWithTeamReceivePointsValues?.saved_setting.data,
      date: rebateWithTeamReceivePointsValues?.saved_setting.date,
    },
  });
};

export const cooperativeWithTeamAwardsRule = (
  undistributedPoints: UndistributedPoint[],
): RulesParams => {
  const rebateWithTeamReceivePointsValues = rebateWithTeamReceivesPoints(
    undistributedPoints,
  );

  const checked = !!rebateWithTeamReceivePointsValues;

  return {
    checked,
    getResponse: () => getResponse(undistributedPoints),
  };
};

// prepare array to send distribution
interface ConstructDataDistribution {
  generalPointId: number;
  establishmentId: number | string;
  marketplacePoints: number;
  invoicePoints: number;
  participants: ScoredParticipantsDataDistribution[];
}
export const constructDataDistribution = ({
  generalPointId,
  establishmentId,
  marketplacePoints,
  invoicePoints,
  participants,
}: ConstructDataDistribution): DataDistribution[] => [
  {
    id: generalPointId,
    establishment: {
      id: establishmentId,
      marketplace: marketplacePoints,
      rebate: invoicePoints,
    },
    participants,
  },
];
