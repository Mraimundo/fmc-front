import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { pluginApi } from 'services/api';
import { Farmer, Summary, FilterOptions } from './interface';

const FARMERS_RESOURCE = '/farmer';
const SUMMARY_RESOURCE = '/farmer/count';
const FARMER_APPROVE_RESOURCE = '/farmer/approve/';
const FARMER_REJECT_RESOURCE = '/farmer/reject/';

interface ApiResponse {
  data: Farmer[];
  pagination: Pagination;
}

interface ReproveRequest {
  requestId: number;
  message: string;
}

export const getFarmers = async ({
  status,
  search,
  page = 1,
}: FilterOptions): Promise<ApiResponse> => {
  let url = `${FARMERS_RESOURCE}?status=${status}`;
  if (search) url += `&search=${search}`;
  url += `&page=${page}&limit=9`;

  const { data } = await pluginApi.get<ApiResponse>(url);
  return data;
};

export const getSummary = async (): Promise<Summary> => {
  const { data } = await pluginApi.get<Summary>(SUMMARY_RESOURCE);

  return data;
};

export const approveFarmerRequest = async (
  requestId: number,
): Promise<void> => {
  const url = `${FARMER_APPROVE_RESOURCE}${requestId}`;
  await pluginApi.post(url);
};

export const reproveFarmerRequest = async ({
  requestId,
  message,
}: ReproveRequest): Promise<void> => {
  const url = `${FARMER_REJECT_RESOURCE}${requestId}`;
  await pluginApi.post(url, { message });
};
