import { pluginApi } from 'services/api';
import {
  Participant,
  ParticipantsList,
} from 'state/modules/point-management/team-awards/types';

export interface FetchSubsidiariesRawData {
  id: number;
  name: string;
}

export interface FetchParticipantsRawData {
  [role: string]: {
    count: number;
    list: Participant[];
  };
}

export type ScoredParticipantsDataDistribution = {
  id: number;
  value: number;
};

export interface DataDistribution {
  id: number;
  establishment: {
    id: number;
    marketplace: number;
    rebate: number;
  };
  participants: ScoredParticipantsDataDistribution[];
}

interface FetchParticipantsServiceFilters {
  subsidiaries: number[] | null;
  roles: number[] | null;
  participantFinder: string | null;
}
export const fetchParticipantsService = async (
  establishmentId: number | string,
  params: FetchParticipantsServiceFilters,
): Promise<ParticipantsList | null> => {
  const { subsidiaries, roles, participantFinder: participant } = params;

  const { data: response } = await pluginApi.get<{
    data: FetchParticipantsRawData;
  }>(`undistributed-points/participants?establishment_id=${establishmentId}`, {
    params: {
      subsidiaries,
      roles,
      participant,
    },
  });

  return Object.values(response.data).length > 0 ? response.data : null;
};

export const distributePointsService = async (
  dataDistribution: DataDistribution,
): Promise<any> => {
  const { data: response } = await pluginApi.post<any>(
    `undistributed-points/distribute`,
    dataDistribution,
  );

  return response;
};
