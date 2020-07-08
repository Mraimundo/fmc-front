import { vendavallApi } from 'services/api';
import { Category } from './interfaces';

export default async (): Promise<Category[]> => {
  try {
    /* const {
      data: { roles },
    } = await vendavallApi.get<ApiResponse>(`roles`); */
  } catch (e) {
    return [];
  }

  return [
    { id: 1, name: 'Categoria 1' },
    { id: 2, name: 'Categoria 3' },
  ];
};
