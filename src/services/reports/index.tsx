import { pluginApi } from 'services/api';

interface Response {
  download_url: string;
}

interface PowerBiResponse {
  token: string;
}

const getCampaignPerformanceLink = async (): Promise<string> => {
  const { data } = await pluginApi.get<Response>(
    'reports/campaign-performance',
  );

  return data.download_url || '';
};

export { getCampaignPerformanceLink };
