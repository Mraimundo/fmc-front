import { pluginApi } from 'services/api';
import { EstablishmentTypes } from 'config/constants';

interface EstablishmentApi {
  id: number;
  client_group: string;
  cnpj: string;
  type: {
    id: number;
    name: EstablishmentTypes;
  };
}

interface ApiResponse {
  data: EstablishmentApi[];
}

interface Customer {
  id: number;
  name: string;
  cnpj: string;
  type: EstablishmentTypes;
}

export default async (): Promise<Customer[]> => {
  /* Api params ?page=1&limit=15&order=desc */
  const {
    data: { data },
  } = await pluginApi.get<ApiResponse>('campaigns/establishments?limit=200');
  return data.map(item => ({
    id: item.id,
    name: item.client_group,
    cnpj: item.cnpj,
    type: item.type.name,
  }));
};
