import { pluginApi } from 'services/api';

interface ApiResponse {
  url: string;
}

export default async (establishmentId: number): Promise<string> => {
  const {
    data: { url },
  } = await pluginApi.get<ApiResponse>(
    `premio-ideall/login-url?establishment_id=${establishmentId}&campaign_id=268`,
  );
  return url;
};
