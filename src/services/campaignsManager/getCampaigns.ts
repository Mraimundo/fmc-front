import { pluginApi } from 'services/api';
import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { Campaign, StatusText } from './interfaces/Campaign';
import { CampaignApi } from './interfaces/CampaignApi';
import { campaignApiToCampaign } from './transformers';

interface ApiResponse {
  data: CampaignApi[];
  pagination: Pagination;
}

interface Response {
  data: Campaign[];
  pagination: Pagination;
}

export interface FilterOptions {
  directorId?: number;
  regionalId?: string;
  customerId?: number;
  status?: StatusText;
  mechanicId?: number;
}

export default async (filters?: FilterOptions): Promise<Response> => {
  /* ?page=1&limit=15&order=desc&status[0]=published&establishments[0]=1&types[0]=1&regional[0]=Arroz&directorships[0]=Sul&participants[0]=1 */

  let extraSearch = '?limit=100';
  if (filters) {
    const { status, customerId, directorId, mechanicId, regionalId } = filters;
    if (mechanicId) {
      extraSearch += `&types[0]=${mechanicId}`;
    }
    if (customerId) {
      extraSearch += `&participants[0]=${customerId}`;
    }
    if (directorId) {
      extraSearch += `&directorships[0]=${directorId}`;
    }
    if (status) {
      extraSearch += `&status[0]=${status}`;
    }
    if (regionalId) {
      extraSearch += `&regional[0]=${regionalId}`;
    }
  }

  const {
    data: { data, pagination },
  } = await pluginApi.get<ApiResponse>(`campaigns${extraSearch}`);
  return {
    data: data.map(item => campaignApiToCampaign(item)),
    pagination,
  };
};
