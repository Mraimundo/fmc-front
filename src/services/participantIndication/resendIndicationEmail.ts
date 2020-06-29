import { pluginApi } from 'services/api';

export default async (indicationId: number): Promise<void> => {
  await pluginApi.post(`participants/indications/${indicationId}/resend-email`);
};
