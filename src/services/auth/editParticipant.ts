import { pluginApi } from 'services/api';
import { Participant } from 'services/auth/interfaces/Participant';
import buildRequest from 'services/register/getSaveRequestFromParticipant';

interface ApiResponse {
  message: string;
  profile: 'PARTICIPANTE' | 'FMC' | 'FOCAL';
}

export default async (participant: Participant): Promise<void> => {
  const request = buildRequest(participant);
  await pluginApi.post<ApiResponse>('participants/edit', request);
};
