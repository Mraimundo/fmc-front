import { ParticipantData, ParticipantDataRaw } from './interface';

export const transformParticipantData = (
  data: ParticipantDataRaw,
): ParticipantData | null => {
  return data
    ? {
        id: data.id,
        name: data.name,
        profile: data.role_identifier,
      }
    : null;
};
