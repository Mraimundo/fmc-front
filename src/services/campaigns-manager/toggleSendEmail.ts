import { pluginApi } from 'services/api';

interface ApiResponse {
  send_emails: boolean;
}

export default async (campaignId: number): Promise<boolean> => {
  const { data } = await pluginApi.post<ApiResponse>(
    `campaigns/${campaignId}/email-toggle`,
  );

  return data.send_emails;
};
