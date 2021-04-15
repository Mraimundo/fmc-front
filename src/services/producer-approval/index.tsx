import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { pluginApi } from 'services/api';
import { Participant } from 'services/auth/interfaces/Participant';
import {
  Farmer,
  Summary,
  FilterOptions,
  ReproveMessage,
  Export,
} from './interface';

const FARMERS_RESOURCE = '/farmer';
const SUMMARY_RESOURCE = '/farmer/count';
const FARMER_APPROVE_RESOURCE = '/farmer/approve/';
const FARMER_REJECT_RESOURCE = '/farmer/reject/';
const FARMER_REJECT_MESSAGE_RESOURCE = '/farmer/request/id/reject-message';
const EXPORT_RESOURCE = '/farmer/export';

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

export const getSummary = async ({
  search,
}: FilterOptions): Promise<Summary> => {
  const url = search
    ? `${SUMMARY_RESOURCE}?search=${search}`
    : SUMMARY_RESOURCE;
  const { data } = await pluginApi.get<Summary>(url);

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

export const getReproveMessage = async (
  requestId: number,
): Promise<ReproveMessage> => {
  const url = FARMER_REJECT_MESSAGE_RESOURCE.replace(
    /id/gi,
    requestId.toString(),
  );

  const { data } = await pluginApi.get<ReproveMessage>(url);
  return data;
};

export const getFarmerData = async (id: number): Promise<Participant> => {
  const url = `${FARMERS_RESOURCE}/${id}`;
  const { data } = await pluginApi.get<Participant>(url);

  return data;
};

export const getExport = async ({
  search,
  status = 'waiting',
}: FilterOptions): Promise<string> => {
  let url = `${EXPORT_RESOURCE}?status=${status}`;
  if (search) url += `&search=${search}`;
  const { data } = await pluginApi.get<Export>(url);

  return data.url;
};
