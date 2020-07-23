import {
  Participant,
  WaitingScoredParticipant,
  ScoredParticipant,
  ParticipantsList,
} from './types';
import { scoredParticipants, selectedParticipants } from './mock';

export const toggleRoleSelection = (
  selectedRoles: number[] | null,
  roleId: number,
): number[] | null => {
  if (!selectedRoles) return [roleId];

  if (selectedRoles.includes(roleId)) {
    const result = selectedRoles.filter((id: number) => id !== roleId);
    return result.length >= 1 ? result : null;
  }

  return [...selectedRoles, roleId];
};

export const setSelectedRolesAll = (
  selectedRolesAll: string[] | null,
  role: string,
): string[] | null => {
  if (!selectedRolesAll) return [role];

  if (selectedRolesAll.includes(role)) {
    const result = selectedRolesAll.filter(
      (roleName: string) => roleName !== role,
    );
    return result.length >= 1 ? result : null;
  }

  return [...selectedRolesAll, role];
};

export const toggleSubsidiarySelection = (
  selectedSubsidiaries: number[] | null,
  subsidiaryId: number,
): number[] | null => {
  if (!selectedSubsidiaries) return [subsidiaryId];

  if (selectedSubsidiaries.includes(subsidiaryId)) {
    const result = selectedSubsidiaries.filter(
      (id: number) => id !== subsidiaryId,
    );
    return result.length >= 1 ? result : null;
  }

  return [...selectedSubsidiaries, subsidiaryId];
};

export const scoreParticipant = (
  participant: Participant,
  points: number,
  waitingScoredParticipants: WaitingScoredParticipant[] | null,
): WaitingScoredParticipant[] => {
  const scored: WaitingScoredParticipant = {
    ...participant,
    points,
  };

  if (!waitingScoredParticipants) return [scored];

  if (!points) {
    return waitingScoredParticipants.filter(({ id }) => id !== participant.id);
  }

  const participantAlreadyScored = waitingScoredParticipants.find(
    ({ id }): boolean => id === participant.id,
  );

  if (!participantAlreadyScored) return [...waitingScoredParticipants, scored];

  return [
    ...waitingScoredParticipants.filter(({ id }) => id !== participant.id),
    scored,
  ];
};

// export const assignPoints = (
//   scoredParticipants: ScoredParticipant[] | null,
// ): ScoredParticipant[] | null => {
//   if (!scoredParticipants) return scoredParticipants;

//   return scoredParticipants.map(scoredParticipant => ({
//     ...scoredParticipant,
//     assigned: true,
//   }));
// };

export const getParticipantScore = (
  waitingScoredParticipants: WaitingScoredParticipant[] | null,
  scoredParticipants: ScoredParticipant[] | null,
  participantId: number,
): number => {
  if (!scoredParticipants && !waitingScoredParticipants) return 0;

  const getParticipantByScoredRule = (
    scoredRule: (ScoredParticipant[] | WaitingScoredParticipant[]) | null,
  ): (ScoredParticipant | WaitingScoredParticipant) | undefined => {
    if (!scoredRule) return undefined;

    return scoredRule.find(
      ({ id }: ScoredParticipant | WaitingScoredParticipant) =>
        id === participantId,
    );
  };

  const waitingScore = getParticipantByScoredRule(waitingScoredParticipants);
  const consolidatedScore = getParticipantByScoredRule(scoredParticipants);

  if (waitingScore) return waitingScore.points;
  if (consolidatedScore) return consolidatedScore.points;

  return 0;
};

export const extractParticipantsFromList = (
  participantsList: ParticipantsList | null,
): Participant[] | null => {
  if (!participantsList) return null;

  return Object.values(participantsList).reduce(
    (acc: Participant[], { count, list }) => {
      if (!count) return acc;

      return [...acc, ...list];
    },
    [] as Participant[],
  );
};

interface IScoreAllParticipantsEqually {
  selectedParticipants: number[] | null;
  waitingScoredParticipants: WaitingScoredParticipant[] | null;
  participants: ParticipantsList | null;
  points: number;
}
export const scoreAllParticipantsEqually = ({
  selectedParticipants,
  waitingScoredParticipants,
  participants: participantsList,
  points,
}: IScoreAllParticipantsEqually): any => {
  const participants = extractParticipantsFromList(participantsList);

  if (!participants || !selectedParticipants) return null;

  const participantsToScore = participants
    .filter((participant: Participant) =>
      selectedParticipants.includes(participant.id),
    )
    .map((participant: Participant) => ({
      ...participant,
      points,
      // assigned: true,
    }));

  if (waitingScoredParticipants) {
    return [...waitingScoredParticipants, ...participantsToScore];
  }

  return participantsToScore;
};

export const isSelectedParticipant = (
  selectedParticipants: number[] | null,
  participantId: number,
): boolean => {
  if (!selectedParticipants) return false;

  return selectedParticipants.includes(participantId);
};

export const isScoredParticipant = (
  scoredParticipant: ScoredParticipant[] | null,
  participantId: number,
): boolean => {
  if (!scoredParticipant) return false;

  return !!scoredParticipant.find(({ id }) => id === participantId);
};

interface ISelectAllParticipantsByRole {
  selectedParticipants: number[] | null;
  scoredParticipants: ScoredParticipant[] | null;
  participants: ParticipantsList | null;
  role: string;
}
export const selectAllParticipantsByRole = ({
  selectedParticipants,
  scoredParticipants,
  participants,
  role,
}: ISelectAllParticipantsByRole): number[] | null => {
  if (!participants) return null;

  const participantsWithoutScore = participants[role].list
    .filter(({ id }: Participant) => {
      if (!scoredParticipants) return true;

      const hasScore = scoredParticipants.find(
        scoredParticipant => scoredParticipant.id === id,
      );
      return hasScore ? false : true;
    })
    .map(({ id }: Participant) => id);

  if (!selectedParticipants)
    return participantsWithoutScore.length <= 0
      ? null
      : participantsWithoutScore;

  return [...selectedParticipants, ...participantsWithoutScore];
};

export const deselectAllParticipants = (
  selectedParticipants: number[] | null,
  participants: ParticipantsList | null,
  role: string,
): number[] | null => {
  if (!participants || !selectedParticipants) return null;

  const participantIdsByRole = participants[role].list.map(
    ({ id }: Participant) => id,
  );

  return selectedParticipants.filter(
    (selectedParticipant: number) =>
      !participantIdsByRole.includes(selectedParticipant),
  );
};

export const toggleSelectedParticipant = (
  selectedParticipants: number[] | null,
  participantId: number | null,
): number[] | null => {
  if (!participantId) return selectedParticipants;

  if (!selectedParticipants) return [participantId];

  if (selectedParticipants.includes(participantId)) {
    return selectedParticipants.filter(
      selectedParticipant => selectedParticipant !== participantId,
    );
  }

  return [...selectedParticipants, participantId];
};

export const migrateWaitingScoredToScored = (
  waitingScoredParticipants: WaitingScoredParticipant[] | null,
  scoredParticipants: ScoredParticipant[] | null,
): ScoredParticipant[] | null => {
  if (scoredParticipants && waitingScoredParticipants) {
    return [...scoredParticipants, ...waitingScoredParticipants];
  }

  return waitingScoredParticipants;
};

export function extractIdAndPointsFromScoredParticipants<T extends unknown>(
  scoredParticipants: ScoredParticipant[] | null,
): T | null {
  if (!scoredParticipants) return null;

  return scoredParticipants.map(({ id, points: value }) => ({
    id,
    value,
  })) as T;
}
