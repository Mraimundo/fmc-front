import { createSelector } from 'reselect';

import { StoreState } from 'state/root-reducer';
import { getTotalPointsTeamAwards } from 'state/modules/point-management/common/selectors';
import { Subsidiary, Role, ParticipantsList } from './types';

export const getSubsidiaries = (state: StoreState): Subsidiary[] | null =>
  state.pointManagement.teamAwards.subsidiaries;

export const getSelectedSubsidiaries = (state: StoreState): number[] | null =>
  state.pointManagement.teamAwards.selectedSubsidiaries;

export const getSelectedSubsidiariesWithName = createSelector(
  getSubsidiaries,
  getSelectedSubsidiaries,
  (
    subsidiaries: Subsidiary[] | null,
    selectedSubsidiaries: number[] | null,
  ): Subsidiary[] | null => {
    if (!selectedSubsidiaries || !subsidiaries) return null;

    return subsidiaries.filter(({ id }: Subsidiary) =>
      selectedSubsidiaries.includes(id),
    );
  },
);

export const getRoles = (state: StoreState): Role[] | null =>
  state.pointManagement.teamAwards.roles;

export const getSelectedRoles = (state: StoreState): number[] | null =>
  state.pointManagement.teamAwards.selectedRoles;

export const getParticipantFinder = (state: StoreState): string | null =>
  state.pointManagement.teamAwards.participantFinder;

export const getPointsToDistribute = (state: StoreState): string | null =>
  state.pointManagement.teamAwards.pointsToDistribute;

export const getBalanceAvailable = createSelector(
  getTotalPointsTeamAwards,
  getPointsToDistribute,
  (totalPointsTeamAwards, pointsToDistribute): string | number => {
    if (!totalPointsTeamAwards) return 0;
    if (!pointsToDistribute) return totalPointsTeamAwards;

    return (
      parseInt(totalPointsTeamAwards, 10) - parseInt(pointsToDistribute, 10)
    );
  },
);

export const getParticipants = (state: StoreState): ParticipantsList | null =>
  state.pointManagement.teamAwards.participants;

export const fetchParticipantIsFetching = (state: StoreState): boolean =>
  state.pointManagement.teamAwards.fetchParticipants.isFetching;

export const getDistributeEqually = (state: StoreState): boolean =>
  state.pointManagement.teamAwards.distributeEqually;
