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
  typeId?: number;
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
  console.log(filters);
  const {
    data: { data, pagination },
  } = await pluginApi.get<ApiResponse>(
    `participants/simulation?page=${filters.page || 1}`,
  );

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
