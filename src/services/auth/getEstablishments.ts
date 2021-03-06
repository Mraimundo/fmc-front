import { pluginApi } from 'services/api';
import { EstablishmentTypes } from 'config/constants';

export interface Establishment {
  id: number;
  name: string;
  status: number;
  cnpj: string;
  client_group: string;
  type: {
    id: number;
    name: EstablishmentTypes;
  };
}

interface Response {
  establishments: Establishment[];
}

export default async (): Promise<Establishment[]> => {
  const { data } = await pluginApi.get<Response>('participants/establishments');
  return data.establishments;
};
