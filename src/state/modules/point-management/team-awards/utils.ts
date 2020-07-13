import { Participant, ScoredParticipant, ParticipantsList } from './types';

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
  points: string,
  scoredParticipants: ScoredParticipant[] | null,
): ScoredParticipant[] => {
  const scored: ScoredParticipant = {
    ...participant,
    points,
    assigned: false,
  };

  if (!scoredParticipants) return [scored] as ScoredParticipant[];

  if (!points || points === '0') {
    return scoredParticipants.filter(
      scoredParticipant => scoredParticipant.id !== participant.id,
    );
  }

  const participantAlreadyScored = scoredParticipants.find(
    (scoredParticipant: ScoredParticipant): boolean =>
      scoredParticipant.id === participant.id,
  );

  if (!participantAlreadyScored)
    return [...scoredParticipants, scored] as ScoredParticipant[];

  return [
    ...scoredParticipants.filter(
      scoredParticipant => scoredParticipant.id !== participant.id,
    ),
    scored,
  ] as ScoredParticipant[];
};

export const assignPoints = (
  scoredParticipants: ScoredParticipant[] | null,
): ScoredParticipant[] | null => {
  if (!scoredParticipants) return scoredParticipants;

  return scoredParticipants.map(scoredParticipant => ({
    ...scoredParticipant,
    assigned: true,
  }));
};

export const getParticipantScore = (
  scoredParticipants: ScoredParticipant[] | null,
  participantId: number,
): string => {
  if (!scoredParticipants) return '';

  const participant = scoredParticipants.find(
    (scoredParticipant: ScoredParticipant) =>
      scoredParticipant.id === participantId,
  );

  if (!participant) return '';

  return participant.points;
};

export const scoreAllParticipantsEqually = (
  scoredParticipants: ScoredParticipant[] | null,
  points: string,
): ScoredParticipant[] | null => {
  if (!scoredParticipants) return null;

  // TODO: pontuar apenas participantes selecionados
  return scoredParticipants.map((scoredParticipant: ScoredParticipant) => ({
    ...scoredParticipant,
    points,
  }));
};

export const isSelectedParticipant = (
  selectedParticipants: number[] | null,
  participantId: number,
): boolean => {
  if (!selectedParticipants) return false;

  return selectedParticipants.includes(participantId);
};

export const selectAllParticipants = (
  participants: ParticipantsList | null,
  role: string,
): number[] | null => {
  if (!participants) return null;

  return participants[role].list.map(({ id }: Participant) => id);
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
