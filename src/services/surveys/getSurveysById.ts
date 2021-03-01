import { vendavallApi } from 'services/api';
import { Surveys } from './interfaces';

export default async (id: number): Promise<Surveys> => {
  const { data } = await vendavallApi.get<Surveys>(`news/${id}`);
  return data;
};
