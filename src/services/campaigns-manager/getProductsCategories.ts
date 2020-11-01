import { pluginApi } from 'services/api';
import { Category } from './interfaces/Campaign';

interface ApiResponse {
  segments: string[];
}

export default async (): Promise<Category[]> => {
  const {
    data: { segments },
  } = await pluginApi.get<ApiResponse>('products/segments');
  return segments.map(item => ({
    id: item,
    name: item,
  }));
};
