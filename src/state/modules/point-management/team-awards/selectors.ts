import { createSelector } from 'reselect';

import { StoreState } from 'state/root-reducer';
import {
  Subsidiary,
  Role,
  ParticipantsList,
  ScoredParticipant,
  WaitingScoredParticipant,
} from './types';
import { getTotalPointsTeamAwards } from 'state/modules/point-management/common/selectors';

export const getSubsidiaries = (state: StoreState): Subsidiary[] | null =>
  state.pointManagement.teamAwards.subsidiaries;

export const getSelectedSubsidiaries = (state: StoreState): number[] | null =>
  state.pointManagement.teamAwards.selectedSubsidiaries;

export const getRoles = (state: StoreState): Role[] | null =>
  state.pointManagement.teamAwards.roles;

export const fetchRolesIsFetching = (state: StoreState): boolean =>
  state.pointManagement.teamAwards.fetchRoles.isFetching;

export const getSelectedRoles = (state: StoreState): number[] | null =>
  state.pointManagement.teamAwards.selectedRoles;

export const getParticipantFinder = (state: StoreState): string | null =>
  state.pointManagement.teamAwards.participantFinder;

export const getPointsToDistribute = (state: StoreState): number =>
  state.pointManagement.teamAwards.pointsToDistribute;

export const getScoredParticipants = (
  state: StoreState,
): ScoredParticipant[] | null =>
  state.pointManagement.teamAwards.scoredParticipants;

export const getWaitingScoredParticipants = (
  state: StoreState,
): WaitingScoredParticipant[] | null =>
  state.pointManagement.teamAwards.waitingScoredParticipants;

export const getParticipantsList = (
  state: StoreState,
): ParticipantsList | null => state.pointManagement.teamAwards.participants;

export const fetchParticipantIsFetching = (state: StoreState): boolean =>
  state.pointManagement.teamAwards.fetchParticipants.isFetching;

export const getDistributeEqually = (state: StoreState): boolean =>
  state.pointManagement.teamAwards.distributeEqually;

export const getSelectedParticipants = (state: StoreState): number[] | null =>
  state.pointManagement.teamAwards.selectedParticipants;

export const getTotalForEachParticipantDistributedEqually = (
  state: StoreState,
): number | null =>
  state.pointManagement.teamAwards.totalForEachParticipantDistributedEqually;

export const getSelectedRolesAll = (state: StoreState): string[] | null =>
  state.pointManagement.teamAwards.selectedRolesAll;

export const getTotalParticipants = (state: StoreState): number =>
  state.pointManagement.teamAwards.totalParticipants;

export const getIsOpenModalMissingParticipants = (state: StoreState): boolean =>
  state.pointManagement.teamAwards.isOpenModalMissingParticipants;

export const getSelectedParticipantsWithoutScore = createSelector(
  getSelectedParticipants,
  getScoredParticipants,
  (
    selectedParticipants: number[] | null,
    scoredParticipants: ScoredParticipant[] | null,
  ): number => {
    if (!selectedParticipants) return 0;

    if (!scoredParticipants) return selectedParticipants.length;

    const scoredParticipantsIds = scoredParticipants.map(
      ({ id }: ScoredParticipant) => id,
    );

    const selectedParticipantsWithoutScore = selectedParticipants.filter(
      (participantId: number) => {
        return !scoredParticipantsIds.includes(participantId);
      },
    );

    return selectedParticipantsWithoutScore.length;
  },
);

export const getTotalWaitingScoredParticipants = createSelector(
  getWaitingScoredParticipants,
  (waitingScoredParticipants: WaitingScoredParticipant[] | null): number => {
    if (!waitingScoredParticipants) return 0;

    return waitingScoredParticipants.reduce(
      (acc: number, { points }: WaitingScoredParticipant) => acc + points,
      0,
    );
  },
);

export const getTotalScoreScoredParticipants = createSelector(
  getScoredParticipants,
  (scoredParticipants: ScoredParticipant[] | null): number => {
    if (!scoredParticipants) return 0;

    return scoredParticipants.reduce(
      (acc: number, { points }: ScoredParticipant) => acc + points,
      0,
    );
  },
);

export const getHasEnoughScore = createSelector(
  getTotalWaitingScoredParticipants,
  getTotalScoreScoredParticipants,
  getTotalPointsTeamAwards,
  (totalWaiting: number, totalScored: number, totalTeamAwards: number) =>
    totalTeamAwards >= totalWaiting + totalScored,
);

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

export const getAvailableScore = createSelector(
  getTotalPointsTeamAwards,
  getTotalScoreScoredParticipants,
  (totalPointsTeamAwards, totalScored): number => {
    if (!totalPointsTeamAwards) return 0;

    return totalPointsTeamAwards - totalScored;
  },
);

export type TScoredParticipantResume = {
  [role: string]: {
    count: number;
    totalPoints: number;
  };
};
export const getScoredParticipantsResume = createSelector(
  getScoredParticipants,
  (
    scoredParticipants: ScoredParticipant[] | null,
  ): TScoredParticipantResume | null => {
    if (!scoredParticipants) return null;

    return scoredParticipants.reduce(
      (acc: TScoredParticipantResume, scoredParticipant: ScoredParticipant) => {
        const {
          role: { name: roleName },
          points,
        } = scoredParticipant;

        return {
          ...acc,
          [roleName]: {
            count: acc[roleName] ? acc[roleName].count + 1 : 1,
            totalPoints: acc[roleName]
              ? acc[roleName].totalPoints + points
              : points,
          },
        };
      },
      {} as TScoredParticipantResume,
    );
  },
);

export const getIsEnabledToAssignPoints = createSelector(
  getWaitingScoredParticipants,
  getDistributeEqually,
  getPointsToDistribute,
  (
    waitingScoredParticipnts: WaitingScoredParticipant[] | null,
    distributeEqually: boolean,
    pointsToDistribute: number,
  ) => {
    if (pointsToDistribute > 0 && distributeEqually) return true;

    if (waitingScoredParticipnts) return true;

    return false;
  },
);

export const getIsEnabledToDistributePoints = createSelector(
  getTotalPointsTeamAwards,
  getAvailableScore,
  (totalPointsTeamAwards: number, availableScore: number): boolean => {
    if (!totalPointsTeamAwards) return false;

    return availableScore === 0;
  },
);

export const getTotalScoredParticipants = createSelector(
  getScoredParticipants,
  (scoredParticipants: ScoredParticipant[] | null): number => {
    if (!scoredParticipants) return 0;

    return scoredParticipants.length;
  },
);

export const getMissingParticipants = createSelector(
  getTotalScoredParticipants,
  getTotalParticipants,
  (totalScoredParticipants: number, totalParticipants: number): number => {
    return totalParticipants - totalScoredParticipants;
  },
);
