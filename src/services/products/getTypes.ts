import { pluginApi } from 'services/api';
import { Type } from './interfaces';

interface ApiResponse {
  types: Type[];
}

const mocked = false;

const mock: Type[] = [
  {
    id: 1,
    name: 'Tratamento de sementes',
  },
  {
    id: 2,
    name: 'Biológicos',
  },
  {
    id: 3,
    name: 'Herbicidas',
  },
  {
    id: 4,
    name: 'Inseticidas',
  },
  {
    id: 5,
    name: 'Fungicidas',
  },
  {
    id: 6,
    name: 'Bio Potencializadores',
  },
];

export default async (): Promise<Type[]> => {
  if (mocked) {
    return mock;
  }

  try {
    const {
      data: { types },
    } = await pluginApi.get<ApiResponse>('fmc-products/types?featured=1');
    return types;
  } catch (e) {
    return [];
  }
};
