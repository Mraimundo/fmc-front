import { pluginApi } from 'services/api';
import { EstablishmentTypes, EstablishmentCategory } from 'config/constants';
import { Channel } from './interfaces/channel';

interface ApiResponse {
  data: Channel[];
}

export interface Filters {
  directorName?: string;
  regionalName?: string;
  typeName?: EstablishmentTypes;
  categoryName?: EstablishmentCategory;
}

export default async (filters: Filters): Promise<Channel[]> => {
  const { directorName, regionalName, typeName, categoryName } = filters;

  let extraSearch = '';
  if (directorName) {
    extraSearch += `&directorships[0]=${directorName}`;
  }

  if (regionalName) {
    extraSearch += `&regional[0]=${regionalName}`;
  }

  if (typeName) {
    extraSearch += `&types[0]=${typeName}`;
  }

  if (categoryName) {
    extraSearch += `&category[0]=${categoryName}`;
  }

  const {
    data: { data },
  } = await pluginApi.get<ApiResponse>(
    `cockpit/establishments?page=1&limit=250${extraSearch}`,
  );

  return data.map(({ id, name, cnpj }) => ({
    id,
    name,
    cnpj,
  }));
};
