import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { pluginApi } from 'services/api';

export interface Participant {
  id: number;
  clientCode: string;
  name: string;
  email: string;
}

export interface FilterOptions {
  directorId?: string;
  regionalId?: string;
  typeId?: string;
  channelId?: number;
  search?: string;
  page?: number;
}

interface ApiResponse {
  data: {
    client_code: string;
    client_group: string;
    email: string;
    id: number;
    name: string;
  }[];
  pagination: Pagination;
}

interface Response {
  participants: Participant[];
  pagination: Pagination;
}

export default async (filters: FilterOptions): Promise<Response> => {
  const page = filters?.page || 1;

  console.log('filters', filters);

  let extraSearch = `?limit=20&page=${page}`;
  if (filters) {
    const { directorId, regionalId, typeId, search, channelId } = filters;
    if (typeId) {
      extraSearch += `&types[0]=${typeId}`;
    }
    if (directorId) {
      extraSearch += `&directorships[0]=${directorId}`;
    }
    if (channelId) {
      extraSearch += `&channel[0]=${channelId}`;
    }
    if (regionalId) {
      extraSearch += `&regional[0]=${regionalId}`;
    }
    if (search) {
      extraSearch += `&search=${search}`;
    }
  }

  const {
    data: { data, pagination },
  } = await pluginApi.get<ApiResponse>(`participants/simulation${extraSearch}`);

  return {
    participants: data.map(item => ({
      id: item.id,
      clientCode: item.client_code,
      name: item.name,
      email: item.email,
    })),
    pagination,
  };
};
