import {
  FetchTotalPointsToDistributeRawData,
  DataDistribution,
  ScoredParticipantsDataDistribution,
} from 'services/point-management/common';

import { PointsToDistribute } from 'state/modules/point-management/common/types';
import { ScoredParticipant } from 'state/modules/point-management/team-awards/types';
import { extractIdAndPointsFromScoredParticipants } from 'state/modules/point-management/team-awards/utils';

import {
  isCooperativeWithTeamAwards,
  isCooperativeWithoutTeamAwards,
  isResale,
} from '../rule-types';
import {
  resaleRule,
  constructDataDistribution as constructDataDistributionResale,
} from '../rule-types/resale';
import {
  cooperativeWithoutTeamAwardsRule,
  constructDataDistribution as constructDataDistributionCooperativeWithoutTeamAwards,
} from '../rule-types/cooperative-without-team-awards';
import {
  cooperativeWithTeamAwardsRule,
  constructDataDistribution as constructDataDistributionCooperativeWithTeamAwards,
} from '../rule-types/cooperative-with-team-awards';

export const transformTotalPointsToDistributeRawData = (
  totalPointsToDistribute: FetchTotalPointsToDistributeRawData,
): PointsToDistribute | null => {
  const { undistributed_points: undistributedPoints } = totalPointsToDistribute;

  if (undistributedPoints.length < 1) return null;

  // revenda
  const {
    checked: isRebaseRule,
    getResponse: getRebaseRuleResponse,
  } = resaleRule(undistributedPoints);

  if (isRebaseRule) return getRebaseRuleResponse();

  // cooperativa que não premia
  const {
    checked: isCooperativeWithoutTeamAwardsRule,
    getResponse: getCooperativeWithoutTeamAwardsResponse,
  } = cooperativeWithoutTeamAwardsRule(undistributedPoints);

  if (isCooperativeWithoutTeamAwardsRule)
    return getCooperativeWithoutTeamAwardsResponse();

  // cooperativa que premia
  const {
    checked: isCooperativeWithTeamAwardsRule,
    getResponse: getCooperativeWithTeamAwardsResponse,
  } = cooperativeWithTeamAwardsRule(undistributedPoints);

  if (isCooperativeWithTeamAwardsRule)
    return getCooperativeWithTeamAwardsResponse();

  return null;
};

interface ITransformScoredParticipantsToDataDistribution {
  scoredParticipants: ScoredParticipant[] | null;
  establishmentId: number | string;
  pointsToDistribute: PointsToDistribute;
  marketplacePoints: number;
  invoicePoints: number;
}
export const transformScoredParticipantsToDataDistribution = ({
  scoredParticipants,
  establishmentId,
  pointsToDistribute,
  marketplacePoints,
  invoicePoints,
}: ITransformScoredParticipantsToDataDistribution):
  | DataDistribution[]
  | null => {

  const participants = scoredParticipants
    ? extractIdAndPointsFromScoredParticipants<
        ScoredParticipantsDataDistribution[]
      >(scoredParticipants)
    : [];

  const { teamAwards, resaleCooperative } = pointsToDistribute;

  const commonValues = {
    establishmentId,
    invoicePoints,
    marketplacePoints,
  };

  if (isCooperativeWithTeamAwards(pointsToDistribute)) {
    if (!pointsToDistribute.generalPointId) return null;

    return constructDataDistributionCooperativeWithTeamAwards({
      ...commonValues,
      participants,
      generalPointId: pointsToDistribute.generalPointId,
    });
  }

  if (isCooperativeWithoutTeamAwards(pointsToDistribute)) {
    if (!pointsToDistribute.resaleCooperative?.pointId) return null;

    return constructDataDistributionCooperativeWithoutTeamAwards({
      ...commonValues,
      resaleCooperativePointId: pointsToDistribute.resaleCooperative?.pointId,
    });
  }

  if (isResale(pointsToDistribute)) {
    if (!teamAwards?.pointId || !resaleCooperative?.pointId) return null;

    return constructDataDistributionResale({
      ...commonValues,
      participants,
      resaleCooperativePointId: resaleCooperative.pointId,
      teamAwardsPointId: teamAwards.pointId,
    });
  }

  return null;
};
