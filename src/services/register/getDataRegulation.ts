import { pluginApi } from 'services/api';

interface Regulation {
  id: number;
  name: string;
  content: string;
  version: number;
  file: string;
  display_option: 'text' | 'pdf';
}

interface ApiResponse {
  regulations: Regulation[];
}

export default async (): Promise<Regulation> => {
  const { data } = await pluginApi.get<ApiResponse>('regulations/terms');
  return data.regulations[0];
};
