import { createSelector } from 'reselect';

import { StoreState } from 'state/root-reducer';
import { PointsToDistribute, Establishment, EstablishmentType } from './types';

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

export const getEstablishmentType = (
  state: StoreState,
): EstablishmentType | '' => state.pointManagement.common.establishmentType;

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
    totalPointsTeamAwards: number | null,
    totalPointsResaleCooperative: number | null,
  ): boolean => {
    if (
      !totalPointsTeamAwards ||
      !totalPointsResaleCooperative ||
      !pointsToDistribute
    )
      return false;

    return (
      totalPointsTeamAwards + totalPointsResaleCooperative ===
      pointsToDistribute.general
    );
  },
);
