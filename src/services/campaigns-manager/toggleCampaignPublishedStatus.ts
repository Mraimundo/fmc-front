import { pluginApi } from 'services/api';

export default async (campaignId: number): Promise<void> => {
  await pluginApi.post(`campaigns/${campaignId}/publish-toggle`);
};
