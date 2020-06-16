import { pluginApi } from 'services/api';
import { Regulation } from './interfaces/IRegulation';

interface ApiResponse {
  regulations: Regulation[];
}

export default async (): Promise<Regulation> => {
  const { data } = await pluginApi.get<ApiResponse>('regulations/terms');
  return data.regulations[0];
};
