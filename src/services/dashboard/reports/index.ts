import { pluginApi } from 'services/api';

interface Response {
  download_url: string;
}

interface PowerBiResponse {
  token: string;
}

const getChannelCampaignPerformanceLink = async (): Promise<string> => {
  const { data } = await pluginApi.get<Response>(
    'reports/campaign-performance',
  );

  return data.download_url || '';
};

const getProductsPerformanceLink = async (): Promise<string> => {
  const { data } = await pluginApi.get<Response>(
    'reports/products-performance',
  );

  return data.download_url || '';
};

export { getChannelCampaignPerformanceLink, getProductsPerformanceLink };
