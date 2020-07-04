import { vendavallApi } from 'services/api';
import { Faq } from './interfaces';

export default async (): Promise<Faq[]> => {
  try {
    const { data } = await vendavallApi.get<Faq[]>('faq');
    return data;
  } catch {
    return [];
  }
};
