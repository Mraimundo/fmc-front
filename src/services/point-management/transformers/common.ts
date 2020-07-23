import { FetchTotalPointsToDistributeRawData } from 'services/point-management/common';
import { Points } from 'state/modules/point-management/constants';

interface MountResponseProps {
  general?: number;
  generalPointId?: number;
  teamAwardsPoints?: number;
  teamAwardsPointId?: number;
  resaleCooperativePoints?: number;
  resaleCooperativePointId?: number;
  resaleCooperativeMaxInvoicePercentage?: number;
}
export interface MountResponse {
  general: number | null;
  generalPointId: number | null;
  teamAwards: {
    pointId: number | null;
    points: number;
  } | null;
  resaleCooperative: {
    pointId: number | null;
    points: number;
    maxInvoicePercentage: number;
  } | null;
}
export const mountResponse = (params: MountResponseProps): MountResponse => ({
  general: params.general || 0,
  generalPointId: params.generalPointId || null,
  teamAwards: params.teamAwardsPoints
    ? {
        points: params.teamAwardsPoints,
        pointId: params.teamAwardsPointId || null,
      }
    : null,
  resaleCooperative: {
    points: params.resaleCooperativePoints || 0,
    pointId: params.resaleCooperativePointId || null,
    maxInvoicePercentage: params.resaleCooperativeMaxInvoicePercentage || 0,
  },
});

export const transformTotalPointsToDistributeRawData = (
  totalPointsToDistribute: FetchTotalPointsToDistributeRawData,
): MountResponse | null => {
  const { undistributed_points: undistributedPoints } = totalPointsToDistribute;

  if (undistributedPoints.length < 1) return null;

  const type1 = undistributedPoints.find(({ point, establishment }) => {
    const isRebate = point.type_name === Points.Rebate;
    return isRebate && !establishment.team_receives_points;
  });

  const type2 = undistributedPoints.find(({ point, establishment }) => {
    const isRebate = point.type_name === Points.Rebate;
    return isRebate && establishment.team_receives_points;
  });

  const type3 = undistributedPoints.find(({ point }) => {
    const isSellerAward = point.type_name === Points.SellerAward;
    return isSellerAward;
  });

  const type4 = undistributedPoints.find(({ point, establishment }) => {
    const isRebate = point.type_name === Points.Rebate;
    return isRebate && !establishment.team_receives_points;
  });

  if (type3 && type4) {
    return mountResponse({
      teamAwardsPoints: type3.point.value,
      teamAwardsPointId: type3.point.id,
      resaleCooperativePoints: type4.point.value,
      resaleCooperativePointId: type4.point.id,
      resaleCooperativeMaxInvoicePercentage:
        type4.establishment.dc_max_percentage,
    });
  }

  // cooperativa q não premia
  if (type1) {
    return mountResponse({
      resaleCooperativePoints: type1?.point.value,
      resaleCooperativePointId: type1?.point.id,
      resaleCooperativeMaxInvoicePercentage:
        type1?.establishment.dc_max_percentage,
    });
  }

  // cooperativa que premia
  if (type2) {
    return mountResponse({
      general: type2.point.value,
      generalPointId: type2.point.id,
      resaleCooperativeMaxInvoicePercentage:
        type2.establishment.dc_max_percentage,
    });
  }

  return null;
};
