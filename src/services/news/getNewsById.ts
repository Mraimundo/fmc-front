import { vendavallApi } from 'services/api';
import { News } from './interfaces';

export default async (id: number): Promise<News> => {
  const { data } = await vendavallApi.get<News>(`news/${id}`);
  return data;
};
