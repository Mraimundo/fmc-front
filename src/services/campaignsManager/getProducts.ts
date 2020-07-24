import { pluginApi } from 'services/api';
import { Product } from './interfaces/Campaign';

interface ProductApi {
  id: number;
  name: string;
  description: string;
  created: Date;
  segment: string;
}

interface ApiResponse {
  data: ProductApi[];
}

export default async (segment = ''): Promise<Product[]> => {
  /* ApiParams ?page=1&limit=15&order=desc&segments[0]=test */
  const extraSearch = segment ? `&segments[0]=${segment}` : '';
  const {
    data: { data },
  } = await pluginApi.get<ApiResponse>(`products?limit=100${extraSearch}`);
  return data.map(item => ({
    id: item.id,
    name: item.name,
  }));
};
