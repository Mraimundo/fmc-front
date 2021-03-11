import { pluginApi } from 'services/api';
import forceDownload from 'services/storage/getUrlToForceDownload';

interface ApiResponse {
  url: string;
}

/// add campaingId
export default async (
  regulationId: number,
  filename = 'regulamento.pdf',
  campaignId = 0,
): Promise<string> => {
  let apiUrl = `/participants/regulations/${regulationId}/download-html`;
  apiUrl += campaignId ? `?campaign_id=${campaignId}` : '';

  const {
    data: { url },
  } = await pluginApi.get<ApiResponse>(apiUrl);

  return forceDownload({ url, filename });
};
