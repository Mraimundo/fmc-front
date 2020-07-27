import { PointsToDistribute } from 'state/modules/point-management/common/types';
import { Points } from 'state/modules/point-management/constants';
import { UndistributedPoint } from '../common';

interface IConstructPointsToDistribute {
  general?: number;
  generalPointId?: number;
  teamAwardsPoints?: number;
  teamAwardsPointId?: number;
  resaleCooperativePoints?: number;
  resaleCooperativePointId?: number;
  resaleCooperativeMaxInvoicePercentage?: number;
}
export const constructPointsToDistribute = (
  params: IConstructPointsToDistribute,
): PointsToDistribute => ({
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

export const sellerAward = (
  undistributedPoints: UndistributedPoint[],
): UndistributedPoint | undefined =>
  undistributedPoints.find(
    ({ point }) => point.type_name === Points.SellerAward,
  );

export const rebateWithTeamReceivesPoints = (
  undistributedPoints: UndistributedPoint[],
): UndistributedPoint | undefined =>
  undistributedPoints.find(({ point, establishment }) => {
    const isRebate = point.type_name === Points.Rebate;
    return isRebate && establishment.team_receives_points;
  });

export const rebateWithoutTeamReceivePoints = (
  undistributedPoints: UndistributedPoint[],
): UndistributedPoint | undefined =>
  undistributedPoints.find(({ point, establishment }) => {
    const isRebate = point.type_name === Points.Rebate;
    return isRebate && !establishment.team_receives_points;
  });

// check rule based on points to distribute
export const isCooperativeWithTeamAwards = (
  pointsToDistribute: PointsToDistribute,
): boolean => !pointsToDistribute.teamAwards && !!pointsToDistribute.general;

// check rule based on points to distribute
export const isCooperativeWithoutTeamAwards = (
  pointsToDistribute: PointsToDistribute,
): boolean =>
  !pointsToDistribute.general &&
  !!pointsToDistribute.resaleCooperative &&
  !pointsToDistribute.teamAwards;

// check rule based on points to distribute
export const isResale = (pointsToDistribute: PointsToDistribute): boolean =>
  !!pointsToDistribute.teamAwards && !!pointsToDistribute.resaleCooperative;
