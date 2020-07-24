import { pluginApi } from 'services/api';
import { EstablishmentType } from 'state/modules/point-management/common/types';

export interface Establishment {
  id: number;
  name: string;
  status: number;
  cnpj: string;
  type: {
    id: number;
    name: EstablishmentType;
  };
}

interface Response {
  establishments: Establishment[];
}

export default async (): Promise<Establishment[]> => {
  const { data } = await pluginApi.get<Response>('participants/establishments');
  return data.establishments;
};
