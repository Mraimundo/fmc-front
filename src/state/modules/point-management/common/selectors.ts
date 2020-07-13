import { createSelector } from 'reselect';
import { StoreState } from 'state/root-reducer';

export const getTotalPointsToDistribute = (state: StoreState): string =>
  state.pointManagement.common.totalPointsToDistribute;

export const getTotalPointsTeamAwards = (state: StoreState): string =>
  state.pointManagement.common.totalPointsTeamAwards;

export const getTotalPointsCooperative = (state: StoreState): string =>
  state.pointManagement.common.totalPointsCooperative;

export const isEnabledBtnToDistribute = createSelector(
  getTotalPointsToDistribute,
  getTotalPointsTeamAwards,
  getTotalPointsCooperative,
  (
    totalPointsToDistribute,
    totalPointsTeamAwards,
    totalPointsCooperative,
  ): boolean => {
    if (!totalPointsTeamAwards || !totalPointsCooperative) return false;

    return (
      parseInt(totalPointsTeamAwards, 10) +
        parseInt(totalPointsCooperative, 10) ===
      parseInt(totalPointsToDistribute, 10)
    );
  },
);

export const isReadyToDistribute = (state: StoreState): boolean =>
  state.pointManagement.common.isReadyToDistribute;
