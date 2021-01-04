import { pluginApi } from 'services/api';
import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { formatDate } from 'util/datetime';

export interface Campaign {
  created: string;
  campaign: string;
  id: number;
  status: 'empty' | 'loaded';
}

interface ApiResponse {
  data: {
    id: number;
    created: Date;
    has_final_result: boolean;
    name: string;
  }[];
  pagination: Pagination;
}

interface Response {
  data: Campaign[];
  pagination: Pagination;
}

export interface FilterOptions {
  campaignId?: number;
  clientGroup?: string;
  page?: number;
  limit?: number;
}

export default async (filters?: FilterOptions): Promise<Response> => {
  const page = filters?.page || 1;
  const limit = filters?.limit || 20;

  let extraSearch = `?limit=${limit}&page=${page}`;
  if (filters) {
    const { campaignId, clientGroup } = filters;
    if (campaignId) {
      extraSearch += `&campaign_id=${campaignId}`;
    }
    if (clientGroup) {
      extraSearch += `&client_group=${clientGroup}`;
    }
  }

  const {
    data: { data, pagination },
  } = await pluginApi.get<ApiResponse>(`campaigns/list${extraSearch}`);
  return {
    data: data.map(item => ({
      campaign: item.name,
      created: formatDate(item.created),
      id: item.id,
      status: item.has_final_result ? 'loaded' : 'empty',
    })),
    pagination,
  };
};
