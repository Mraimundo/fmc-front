import { pluginApi } from 'services/api';
import { Nf } from './interfaces';

interface ApiResponse {
  notas: Nf[];
}

export default async (): Promise<Nf[]> => {
  try {
    const { data } = await pluginApi.get<ApiResponse>(
      '/participants/extrato-fmc-coins',  
    );
    return data.notas;
  } catch {
    return [];
  }
};
