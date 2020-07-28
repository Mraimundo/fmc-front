import {
  Participant,
  WaitingScoredParticipant,
  ScoredParticipant,
  ParticipantsList,
} from './types';

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
): WaitingScoredParticipant[] | null => {
  if (!points && !waitingScoredParticipants) return null;

  if (
    !points &&
    waitingScoredParticipants &&
    waitingScoredParticipants.length > 0
  ) {
    const newWaitingScoredParticipants = waitingScoredParticipants.filter(
      ({ id }) => id !== participant.id,
    );
    return newWaitingScoredParticipants.length > 0
      ? newWaitingScoredParticipants
      : null;
  }

  const scored: WaitingScoredParticipant = {
    ...participant,
    points,
  };

  if (!waitingScoredParticipants) return [scored];

  const participantAlreadyScored = waitingScoredParticipants.find(
    ({ id }): boolean => id === participant.id,
  );

  if (!participantAlreadyScored) return [...waitingScoredParticipants, scored];

  return [
    ...waitingScoredParticipants.filter(({ id }) => id !== participant.id),
    scored,
  ];
};

export const getParticipantByScoredRule = (
  scoredRule: (ScoredParticipant[] | WaitingScoredParticipant[]) | null,
  participantId: number,
): (ScoredParticipant | WaitingScoredParticipant) | undefined => {
  if (!scoredRule) return undefined;

  return scoredRule.find(
    ({ id }: ScoredParticipant | WaitingScoredParticipant) =>
      id === participantId,
  );
};

export const getParticipantScore = (
  waitingScoredParticipants: WaitingScoredParticipant[] | null,
  scoredParticipants: ScoredParticipant[] | null,
  participantId: number,
): number => {
  if (!scoredParticipants && !waitingScoredParticipants) return 0;

  const waitingScore = getParticipantByScoredRule(
    waitingScoredParticipants,
    participantId,
  );
  const consolidatedScore = getParticipantByScoredRule(
    scoredParticipants,
    participantId,
  );

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
}: IScoreAllParticipantsEqually): ScoredParticipant[] | null => {
  const participants = extractParticipantsFromList(participantsList);

  if (!participants || !selectedParticipants) return null;

  const participantsToScore: ScoredParticipant[] = participants
    .filter((participant: Participant): boolean =>
      selectedParticipants.includes(participant.id),
    )
    .map(
      (participant: Participant): ScoredParticipant => ({
        ...participant,
        points,
      }),
    );

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
  scoredParticipants: ScoredParticipant[] | null,
  participantId: number,
): boolean => {
  if (!scoredParticipants) return false;

  return !!scoredParticipants.find(({ id }) => id === participantId);
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

  const result = [...selectedParticipants, ...participantsWithoutScore];

  // removing duplicated value
  return result.filter((item, index) => result.indexOf(item) === index);
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

  const newSelectedParticipants = selectedParticipants.filter(
    (selectedParticipant: number) =>
      !participantIdsByRole.includes(selectedParticipant),
  );

  return newSelectedParticipants.length > 0 ? newSelectedParticipants : null;
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
  scoredParticipants: ScoredParticipant[],
): T {
  return scoredParticipants.map(({ id, points: value }) => ({
    id,
    value,
  })) as T;
}
