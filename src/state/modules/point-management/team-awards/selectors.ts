import { createSelector } from 'reselect';

import { StoreState } from 'state/root-reducer';
import { getTotalPointsTeamAwards } from 'state/modules/point-management/common/selectors';
import { Subsidiary, Role, ParticipantsList, ScoredParticipant } from './types';

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

export const fetchRolesIsFetching = (state: StoreState): boolean =>
  state.pointManagement.teamAwards.fetchRoles.isFetching;

export const getSelectedRoles = (state: StoreState): number[] | null =>
  state.pointManagement.teamAwards.selectedRoles;

export const getParticipantFinder = (state: StoreState): string | null =>
  state.pointManagement.teamAwards.participantFinder;

export const getPointsToDistribute = (state: StoreState): string =>
  state.pointManagement.teamAwards.pointsToDistribute;

export const getBalanceAvailable = createSelector(
  getTotalPointsTeamAwards,
  getPointsToDistribute,
  (totalPointsTeamAwards, pointsToDistribute): number => {
    if (!totalPointsTeamAwards) return 0;
    if (!pointsToDistribute) return parseInt(totalPointsTeamAwards, 10);

    return (
      Number.parseFloat(totalPointsTeamAwards) -
      Number.parseFloat(pointsToDistribute)
    );
  },
);

export const getScoredParticipants = (
  state: StoreState,
): ScoredParticipant[] | null =>
  state.pointManagement.teamAwards.scoredParticipants;

type ScoredParticipantResume = {
  [role: string]: {
    count: number;
    totalPoints: number;
  };
};
export const getScoredParticipantsResume = createSelector(
  getScoredParticipants,
  (scoredParticipants: ScoredParticipant[] | null) => {
    return scoredParticipants?.reduce(
      (acc: ScoredParticipantResume, scoredParticipant: ScoredParticipant) => {
        if (!scoredParticipant.assigned) return acc;

        const roleName = scoredParticipant.role.name;
        const points = Number.parseFloat(scoredParticipant.points);

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
      {} as ScoredParticipantResume,
    );
  },
);

export const getParticipants = (state: StoreState): ParticipantsList | null =>
  state.pointManagement.teamAwards.participants;

export const fetchParticipantIsFetching = (state: StoreState): boolean =>
  state.pointManagement.teamAwards.fetchParticipants.isFetching;

export const getDistributeEqually = (state: StoreState): boolean =>
  state.pointManagement.teamAwards.distributeEqually;

export const getParticipantListTotalWithoutScore = createSelector(
  getParticipants,
  getScoredParticipants,
  (
    participants: ParticipantsList | null,
    scoredParticipants: ScoredParticipant[] | null,
  ): number => {
    if (!participants) return 0;

    const participantsTotal = Object.values(participants).reduce(
      (acc, { total }) => acc + total,
      0,
    );

    if (!scoredParticipants) return participantsTotal;

    return participantsTotal - scoredParticipants.length;
  },
);

export const getTotalForEachParticipantDistributedEqually = (
  state: StoreState,
): number | null =>
  state.pointManagement.teamAwards.totalForEachParticipantDistributedEqually;

export const getSelectedRolesAll = (state: StoreState): string[] | null =>
  state.pointManagement.teamAwards.selectedRolesAll;

export const getSelectedParticipants = (state: StoreState): number[] | null =>
  state.pointManagement.teamAwards.selectedParticipants;
