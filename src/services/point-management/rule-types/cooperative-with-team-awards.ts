import {
  DataDistribution,
  ScoredParticipantsDataDistribution,
} from 'services/point-management/common';
import { PointsToDistribute } from 'state/modules/point-management/common/types';
import { RulesParams } from './types';
import { UndistributedPoint } from '../common';
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
interface IConstructDataDistribution {
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
}: IConstructDataDistribution): DataDistribution[] => [
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
