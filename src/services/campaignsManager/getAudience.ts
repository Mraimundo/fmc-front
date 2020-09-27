import { pluginApi } from 'services/api';
import { EstablishmentTypes } from 'config/constants';
import { Audience } from './interfaces/Campaign';

interface EstablishmentApi {
  id: number;
  name: string;
  status: number;
  cnpj: string;
  street: string;
  number: string;
  zip_code: string;
  country: string;
  complement: string;
  created: Date;
  establishment_type_id: number;
  establishment_id: number;
  code: string;
  city: string;
  state: string;
  state_code: string;
  picture: string;
  fantasy_name: string;
  district: string;
  cell_phone: string;
  email: string;
  phone: string;
  activation_date: Date;
  focal_point_participant_id: number;
  client_code: string;
  client_group: string;
  culture: string;
  category: string;
  regional_id: number;
  type: {
    id: number;
    name: EstablishmentTypes;
  };
  balance: number;
}

interface ApiResponse {
  data: EstablishmentApi[];
}

export default async (): Promise<Audience[]> => {
  /* Api params ?page=1&limit=15&order=desc */
  const {
    data: { data },
  } = await pluginApi.get<ApiResponse>('campaigns/establishments?limit=200');
  return data.map(item => ({
    customer: {
      id: item.id,
      name: item.name,
      cnpj: item.cnpj,
    },
    balance: item.balance,
  }));
};
