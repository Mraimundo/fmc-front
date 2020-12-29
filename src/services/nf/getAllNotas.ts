import { pluginApi } from 'services/api';
import { Nf } from './interfaces';

interface ApiResponse {
  fmccoins: number;
  notas: Nf[];
  safra: string;
}

export default async (): Promise<any> => {
  try {
    const { data } = await pluginApi.get<any>(
      '/participants/uploadNota',
    );
    console.log('>>>>> data');
    console.log(data);
    return data;
  } catch {
    return [];
  }
};
