import { pluginApi } from 'services/api';

export interface Response {
  id: number;
  name: string;
  content: string;
}

export default async (campaignId?: number): Promise<Response> => {
  const params = campaignId ? `?campaign_id=${campaignId}` : '';

  const { data } = await pluginApi.get<Response>(
    `campaigns/regulation${params}`,
  );
  return data;
};
