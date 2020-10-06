import { pluginApi } from 'services/api';

interface ApiResponse {
  url: string;
}

export default async (campaignId: number): Promise<string> => {
  const {
    data: { url },
  } = await pluginApi.get<ApiResponse>(
    `/participants/regulations/download-html-from-campaign/${campaignId}`,
  );

  return url;
};
