import { vendavallApi } from 'services/api';
import { Category } from './interfaces';

interface ApiResponse {
  categories: Category[];
}

export default async (): Promise<Category[]> => {
  try {
    const {
      data: { categories },
    } = await vendavallApi.get<ApiResponse>('trainings/get-categories');
    return categories;
  } catch (e) {
    return [];
  }
};
