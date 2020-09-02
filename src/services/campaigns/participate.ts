import { pluginApi } from 'services/api';

export default async (campaignId: number): Promise<void> => {
  await pluginApi.post(`participants/campaigns/${campaignId}/participate`);
};
