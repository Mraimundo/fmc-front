import { pluginApi } from 'services/api';
// import { Nf } from './interfaces';

interface getCampainListApi {
  id: number;
  title: string;
  total: number;
}


export default async (): Promise<getCampainListApi[]> => {
  try {
    const { data } = await pluginApi.get<getCampainListApi[]>(
      'participants/extrato-fmc-coins/campaigns',
    );
    return data;
  } catch {
    return [];
  }
};
