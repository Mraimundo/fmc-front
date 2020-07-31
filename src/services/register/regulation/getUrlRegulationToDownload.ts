import { pluginApi } from 'services/api';

interface ApiResponse {
  url: string;
}

export default async (regulationId: number): Promise<string> => {
  const {
    data: { url },
  } = await pluginApi.get<ApiResponse>(
    `/participants/regulations/${regulationId}/download-html`,
  );

  return url || '';
};
