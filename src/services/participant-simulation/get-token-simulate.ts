import { pluginApi } from 'services/api';

interface ApiResponse {
  token: string;
}

export default async (participantId: number): Promise<string> => {
  const {
    data: { token },
  } = await pluginApi.post<ApiResponse>(
    `participants/simulation/${participantId}`,
  );
  return token;
};
