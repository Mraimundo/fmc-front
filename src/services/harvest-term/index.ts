import { vendavallApi, pluginApi } from 'services/api';
import { Pagination } from 'config/constants/vendavallPaginationInterface';
import {
  Harvest,
  HarvestApi,
  Filters,
  AgreementTerm,
  AgreementTermApi,
} from './interface';
import {
  transformFromHarvestApi,
  transformFromAgreementTermsApi,
} from './transformers';

const HARVEST_RESOURCE = '/campaign';
const AGREEMENT_TERMS_RESOURCE = '/agreement-terms';
const APPROVE_AGREEMENT_TERM_RESOURCE = '/agreement-terms/approve';

export interface ApiResponse {
  data: AgreementTermApi[];
  pagination: Pagination;
}

export interface Response {
  data: AgreementTerm[];
  pagination: Pagination;
}

export const getHarvests = async (cpf = ''): Promise<Harvest[]> => {
  const url = cpf ? `${HARVEST_RESOURCE}?cpf=${cpf}` : HARVEST_RESOURCE;
  const { data } = await vendavallApi.get<HarvestApi[]>(url);

  return transformFromHarvestApi(data);
};

const buildAgreementTermsUrl = ({
  campaignId,
  approved,
  directorship,
  regionalId,
  search,
  page,
}: Filters): string => {
  let url = AGREEMENT_TERMS_RESOURCE;
  url += `?campaign_id=${campaignId || 1}`;

  if (directorship) url += `&directorship=${directorship}`;
  if (regionalId) url += `&regional_id=${regionalId}`;
  if (approved || approved === 0) url += `&approved=${approved}`;
  if (search) url += `&search=${search}`;
  if (page) url += `&page=${page}`;
  url += `&limit=10`;

  return url;
};

export const getAgreemenTerms = async ({
  campaignId,
  approved,
  directorship,
  regionalId,
  search,
  page,
}: Filters): Promise<Response> => {
  const url = buildAgreementTermsUrl({
    campaignId,
    approved,
    directorship,
    regionalId,
    search,
    page,
  });

  const { data } = await pluginApi.get<ApiResponse>(url);
  return {
    data: transformFromAgreementTermsApi(data.data),
    pagination: data.pagination,
  };
};

interface ApproveRequest {
  agreementTermId: number;
  approve: boolean;
  reason?: string;
}

export const approveAgreementTerm = async ({
  agreementTermId,
  approve,
  reason,
}: ApproveRequest): Promise<void> => {
  await pluginApi.post(
    `${APPROVE_AGREEMENT_TERM_RESOURCE}/${agreementTermId}`,
    {
      approved: approve ? 1 : 0,
      reason: reason || '',
    },
  );
};
