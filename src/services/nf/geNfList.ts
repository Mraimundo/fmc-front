import { pluginApi } from 'services/api';
import { Nf } from './interfaces';

export default async (): Promise<Nf[]> => {
  try {
    const { data } = await pluginApi.get<Nf[]>('/participants/uploadNota');
    return data;
  } catch {
    return [];
  }
};
