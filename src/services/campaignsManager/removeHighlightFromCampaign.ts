import { pluginApi } from 'services/api';

export default async (campaignId: number): Promise<void> => {
  await pluginApi.post(`highlights/remove`, { campaign_id: campaignId });
};
