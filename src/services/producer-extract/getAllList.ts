import { pluginApi } from 'services/api';
import { Nf } from './interfaces';

interface ApiResponse {
  fmccoins: number;
  nota: Nf[];
  safra: string;
}

export default async (): Promise<any> => {
  try {
    const { data } = await pluginApi.get<any>(
      '/participants/extrato-fmc-coins',
    );
    return data;
  } catch {
    return [];
  }
};
