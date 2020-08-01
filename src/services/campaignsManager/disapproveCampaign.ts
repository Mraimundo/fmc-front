import { pluginApi } from 'services/api';

export default async (campaignId: number, comment: string): Promise<void> => {
  await pluginApi.post(`campaigns/${campaignId}/disapprove`, { comment });
};
