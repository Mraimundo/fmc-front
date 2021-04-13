import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { pluginApi } from 'services/api';
import { Participant } from 'services/auth/interfaces/Participant';
import { Farmer, Summary, FilterOptions, ReproveMessage } from './interface';
import { participantData } from './mock';

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

export const getReproveMessage = (
  requestId: number,
): Promise<ReproveMessage> => {
  console.log('TEST', requestId);
  return new Promise<ReproveMessage>(resolve => {
    setTimeout(
      () =>
        resolve({
          message: 'Mais uma reprovação teste.',
          update_date: '2021-04-12T10:38:13-03:00',
        } as ReproveMessage),
      2500,
    );
  });
};

export const getFarmerData = (id: number): Promise<Participant> => {
  console.log('TEST', id);
  return new Promise<Participant>(resolve => {
    setTimeout(() => resolve(participantData), 2500);
  });
};
