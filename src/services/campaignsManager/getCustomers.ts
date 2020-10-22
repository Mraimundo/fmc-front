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

export interface Filters {
  directorName?: string;
  regionalName?: string;
}

export default async (filters: Filters): Promise<Customer[]> => {
  /* Api params ?page=1&limit=15&order=desc */
  const { directorName, regionalName } = filters;

  let extraSearch = '';
  if (directorName) {
    extraSearch += `&directorships[0]=${directorName}`;
  }

  if (regionalName) {
    extraSearch += `&regional[0]=${regionalName}`;
  }

  const {
    data: { data },
  } = await pluginApi.get<ApiResponse>(
    `campaigns/establishments?limit=200${extraSearch}`,
  );
  return data.map(item => ({
    id: item.id,
    name: item.client_group,
    cnpj: item.cnpj,
    type: item.type.name,
  }));
};
