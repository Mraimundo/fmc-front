import { pluginApi } from 'services/api';

export interface DataRegulation {
  id: number;
  name: string;
  content: string;
  version: number;
  file: string;
  display_option: 'text' | 'pdf';
}

interface ApiResponse {
  regulations: DataRegulation[];
}

export default async (): Promise<DataRegulation> => {
  const { data } = await pluginApi.get<ApiResponse>('regulations/terms');
  return data.regulations[0];
};
