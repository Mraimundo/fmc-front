// import { vendavallApi } from 'services/api';
import { Category } from './interfaces';

interface ApiResponse {
  categories: Category[];
}

const mock: Category[] = [
  {
    id: 1,
    name: 'teste',
  },
];

export default async (): Promise<Category[]> => {
  return mock;
  /* try {
    const {
      data: { categories },
    } = await vendavallApi.get<ApiResponse>('trainings/get-categories');
    return categories;
  } catch (e) {
    return [];
  } */
};
