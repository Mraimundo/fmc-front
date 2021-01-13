import { pluginApi } from 'services/api';

interface ApiResponse {
  url: string;
}

export default async (campaignId: number): Promise<string> => {
  const {
    data: { url },
  } = await pluginApi.get<ApiResponse>(
    `reports/campaign-final-results?campaign_id=${campaignId}`,
  );

  return url;
};
