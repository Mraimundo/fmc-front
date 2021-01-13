import { pluginApi } from 'services/api';
import { Culture } from './interfaces/Campaign';

interface CultureApi {
  id: number;
  name: string;
}

interface ApiResponse {
  data: CultureApi[];
}

export default async (): Promise<Culture[]> => {
  const {
    data: { data },
  } = await pluginApi.get<ApiResponse>('cultivations');
  return data.map(item => ({
    id: item.id,
    name: item.name,
  }));
};
