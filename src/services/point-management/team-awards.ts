import { pluginApi } from 'services/api';
import { transformSubsidiariesRawData } from 'services/point-management/transformers/team-awards';
import {
  Subsidiary,
  Role,
  Participant,
  ParticipantsList,
} from 'state/modules/point-management/team-awards/types';

export interface FetchSubsidiariesRawData {
  id: number;
  name: string;
}

export interface FetchRolesRawData {
  id: number;
  identifier: string;
  name: string;
}

export interface FetchParticipantsRawData {
  [role: string]: {
    total: number;
    list: Participant[];
  };
}

export const fetchSubsidiariesService = async (): Promise<Subsidiary[]> => {
  const { data } = await pluginApi.get<FetchSubsidiariesRawData[]>(
    '/url/subsidiaries',
  );
  return transformSubsidiariesRawData(data);
};

export const fetchRolesService = async (): Promise<Role[]> => {
  const { data } = await pluginApi.get<FetchRolesRawData[]>('url/roles');
  return data;
};

type FetchParticipantsServiceProps = {
  subsidiaries: number[] | null;
  roles: number[] | null;
  participantFinder: string | null;
};
export const fetchParticipantsService = async ({
  subsidiaries,
  roles,
  participantFinder: participant,
}: FetchParticipantsServiceProps): Promise<ParticipantsList> => {
  const { data } = await pluginApi.get<FetchParticipantsRawData>(
    `url/participants`,
    {
      params: {
        subsidiaries,
        roles,
        participant,
      },
    },
  );
  return data;
};
