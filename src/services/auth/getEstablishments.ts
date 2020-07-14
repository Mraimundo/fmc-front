import { pluginApi } from 'services/api';

export interface Establishment {
  id: number;
  name: string;
  status: number;
  cnpj: string;
  type: {
    id: number;
    name: string;
  };
}

interface Response {
  establishments: Establishment[];
}

export default async (): Promise<Establishment[]> => {
  const { data } = await pluginApi.get<Response>('participants/establishments');
  return data.establishments;
};
