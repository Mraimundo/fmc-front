import { pluginApi } from 'services/api';
import {
  Participant,
  ParticipantsList,
} from 'state/modules/point-management/team-awards/types';
import { transformParticipantsRawData } from './transformers/team-awards';

export interface FetchSubsidiariesRawData {
  id: number;
  establishment_id: number;
  name: string;
  city: string;
}

export interface FetchParticipantsRawData {
  [role: string]: {
    count: number;
    list: Participant[];
  };
}

export interface FetchParticipantsRawInfo {
  total_participants: number;
}

interface FetchParticipantsServiceFilters {
  subsidiaries: number[] | null;
  roles: number[] | null;
  participantFinder: string | null;
}
export const fetchParticipantsService = async (
  establishmentId: number | string,
  params: FetchParticipantsServiceFilters,
): Promise<{
  participants: ParticipantsList | null,
  totalParticipants: number;
}> => {
  const { subsidiaries, roles, participantFinder: participant } = params;

  const { data: response } = await pluginApi.get<{
    data: FetchParticipantsRawData;
    info: FetchParticipantsRawInfo;
  }>(`undistributed-points/participants?establishment_id=${establishmentId}`, {
    params: {
      subsidiaries,
      roles,
      participant,
    },
  });

  return transformParticipantsRawData(response);
};
