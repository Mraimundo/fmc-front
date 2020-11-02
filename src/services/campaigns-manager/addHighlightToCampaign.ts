import { pluginApi } from 'services/api';

interface ApiResponse {
  id: number;
}

export default async (campaignId: number): Promise<number> => {
  const { data } = await pluginApi.post<ApiResponse>(`highlights/add`, {
    campaign_id: campaignId,
  });

  return data.id;
};
