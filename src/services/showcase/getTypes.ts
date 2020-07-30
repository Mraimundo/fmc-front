// import { vendavallApi } from 'services/api';
import { Type } from './interfaces';

interface ApiResponse {
  types: Type[];
}

const mock: Type[] = [
  {
    id: 1,
    name: 'teste',
  },
];

export default async (): Promise<Type[]> => {
  return mock;
  /* try {
    const {
      data: { types },
    } = await vendavallApi.get<ApiResponse>('trainings/get-types');
    return types;
  } catch (e) {
    return [];
  } */
};
