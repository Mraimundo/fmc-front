import { pluginApi } from 'services/api';
import { Category } from './interfaces';

interface ApiResponse {
  categories: Category[];
}

const mocked = false;

const mock: Category[] = [
  {
    id: 1,
    name: 'Milho',
  },
  {
    id: 2,
    name: 'Soja',
  },
];

export default async (): Promise<Category[]> => {
  if (mocked) {
    return mock;
  }

  try {
    const {
      data: { categories },
    } = await pluginApi.get<ApiResponse>('fmc-products/categories');
    return categories;
  } catch (e) {
    return [];
  }
};
