import { pluginApi } from 'services/api';

interface ApiResponse {
  download_url: string;
}

export default async (campaignId: number): Promise<string> => {
  const { data } = await pluginApi.get<ApiResponse>(
    `reports/campaign-final-results?campaign_id=${campaignId}`,
  );

  return data.download_url;
};
