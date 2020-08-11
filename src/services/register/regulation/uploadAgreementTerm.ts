import { pluginApi } from 'services/api';

interface ApiResponse {
  message: string;
}

export default async (
  regulationId: number,
  url: string,
): Promise<ApiResponse> => {
  const request = {
    regulation_id: regulationId,
    url,
  };

  const { data } = await pluginApi.post<ApiResponse>(
    '/participants/regulations/save-agreement-term-url',
    request,
  );

  return data;
};
