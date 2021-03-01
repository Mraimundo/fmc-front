import { pluginApi } from 'services/api';
import { Nf } from './interfaces';

interface getAllListApi {
  fmccoins: number;
  safra: string;
  nota: Nf[];
}


export default async (): Promise<getAllListApi[]> => {
  try {
    const { data } = await pluginApi.get<getAllListApi[]>(
      '/participants/extrato-fmc-coins',
    );
    return data;
  } catch {
    return [];
  }
};
