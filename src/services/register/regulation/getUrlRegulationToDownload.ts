import { pluginApi } from 'services/api';
import forceDownload from 'services/storage/getUrlToForceDownload';

interface ApiResponse {
  url: string;
}

export default async (
  regulationId: number,
  filename = 'regulamento.pdf',
): Promise<string> => {
  const {
    data: { url },
  } = await pluginApi.get<ApiResponse>(
    `/participants/regulations/${regulationId}/download-html`,
  );

  return forceDownload({ url, filename });
};
