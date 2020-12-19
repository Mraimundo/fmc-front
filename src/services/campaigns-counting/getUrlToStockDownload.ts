import { pluginApi } from 'services/api';

interface ApiResponse {
  url: string;
}

export default async (campaignId: number): Promise<string> => {
  const data = await pluginApi.get<ApiResponse>(
    `campaigns/${campaignId}/stock`,
  );
  console.log(data);

  return '';
};
