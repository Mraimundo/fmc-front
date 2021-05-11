import { pluginApi } from 'services/api';
// import { Nf } from './interfaces';

// interface ApiResponse {
//   fmccoins: number;
//   notas: Nf[];
//   safra: string;
// }

export default async (): Promise<any> => {
  try {
    const { data } = await pluginApi.get<any>(
      '/participants/uploadNota',
    );
    return data;
  } catch {
    return [];
  }
};
