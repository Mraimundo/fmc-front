import { createSelector } from 'reselect';

import { FetchState } from '@types';
import { StoreState } from 'state/root-reducer';
import { PointsToDistribute, Establishment } from './types';
import { FinishedDistributionPossibilities } from './constants';
import { ScoredParticipant } from '../team-awards/types';

export const getFetchPointsToDistribute = (state: StoreState) =>
  state.pointManagement.common.fetchPointsToDistribute;

export const getIsReadyToDistribute = (state: StoreState): boolean =>
  state.pointManagement.common.isReadyToDistribute;

export const getPointsToDistribute = (state: StoreState): PointsToDistribute =>
  state.pointManagement.common.pointsToDistribute;

export const getTotalPointsTeamAwards = (state: StoreState): number =>
  state.pointManagement.common.totalPointsTeamAwards;

export const getTotalPointsResaleCooperative = (state: StoreState): number =>
  state.pointManagement.common.totalPointsResaleCooperative;

export const getEstablishments = (state: StoreState): Establishment[] | null =>
  state.pointManagement.common.establishments;

export const getSelectedEstablishment = (
  state: StoreState,
): Establishment | null => state.pointManagement.common.selectedEstablishment;

export const getDistributePoints = (state: StoreState): FetchState =>
  state.pointManagement.common.distributePoints;

export const getFinishedDistribution = (
  state: StoreState,
): FinishedDistributionPossibilities | null =>
  state.pointManagement.common.finishedDistribution;

export const getIsResaleCooperativePointsOnly = createSelector(
  getPointsToDistribute,
  (pointsToDistribute: PointsToDistribute): boolean => {
    const { teamAwards, resaleCooperative, general } = pointsToDistribute;
    return !teamAwards && !!resaleCooperative && !general;
  },
);

export const getHasAutonomyToDistribute = createSelector(
  getPointsToDistribute,
  (pointsToDistribute: PointsToDistribute): boolean => {
    const { teamAwards, general } = pointsToDistribute;

    return !teamAwards && !!general;
  },
);

export const getIsResaleCooperativeAndTeamAwardPoints = createSelector(
  getPointsToDistribute,
  (pointsToDistribute: PointsToDistribute): boolean => {
    const { general, teamAwards, resaleCooperative } = pointsToDistribute;

    return !general && !!teamAwards && !!resaleCooperative;
  },
);

export const getIsAllowedToStartDistribution = createSelector(
  getPointsToDistribute,
  getTotalPointsTeamAwards,
  getTotalPointsResaleCooperative,
  (
    pointsToDistribute: PointsToDistribute,
    totalPointsTeamAwards: number,
    totalPointsResaleCooperative: number,
  ): boolean =>
    totalPointsTeamAwards + totalPointsResaleCooperative ===
    pointsToDistribute.general,
);

export const getSavedSetting = (state: StoreState) =>
  state.pointManagement.common.pointsToDistribute.savedSetting?.data;

export const getHasSavedSetting = createSelector(
  getSavedSetting,
  (data: any): boolean => !!data,
);

export const getPartialDistribution = (state: StoreState) =>
  state.pointManagement.common.partialDistribution;

export const getTotalSavedSetting = createSelector(
  getSavedSetting,
  (data: any): number => {
    if (data) {
      const scoredParticipants = JSON.parse(data) as ScoredParticipant[];
      return scoredParticipants.reduce((accumulatedValue, currentItem) => {
        return accumulatedValue + currentItem.points;
      }, 0);
    }

    return 0;
  },
);

export const getIsPartialDistributionFinished = (state: StoreState) =>
  state.pointManagement.common.partialDistributionFinished;
