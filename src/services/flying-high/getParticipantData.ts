import { pluginApi } from '../api';
import { transformParticipantData } from './transformers';
import { ParticipantData, ParticipantDataRaw } from './interface';

const REQUEST_URL = 'flying-high/participant-role';

interface ApiResponse {
  participant: ParticipantDataRaw;
}

export default async (cpf: string): Promise<ParticipantData | null> => {
  const {
    data: { participant },
  } = await pluginApi.get<ApiResponse>(`${REQUEST_URL}?cpf=${cpf}`);

  return transformParticipantData(participant);
};
