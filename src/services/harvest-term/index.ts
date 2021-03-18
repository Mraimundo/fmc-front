import { vendavallApi, pluginApi } from 'services/api';
import {
  Harvest,
  HarvestApi,
  Filters,
  AgreementTerm,
  AgreementTermApi,
} from './interface';
import { transformFromHarvestApi } from './transformers';

const HARVEST_RESOURCE = '/campaign';
const AGREEMENT_TERMS_RESOURCE = '/agreement-terms';

export interface ApiResponse {
  data: AgreementTermApi[];
  pagination: {
    page_total: number;
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
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
}: Filters): string => {
  let url = AGREEMENT_TERMS_RESOURCE;

  if (campaignId) url += `?campaign_id=${campaignId}`;
  if (approved) url += `&aproved=${approved}`;
  if (directorship) url += `&directorship=${directorship}`;
  if (regionalId) url += `&regional_id=${regionalId}`;

  return url;
};

export const getAgreemenTerms = async ({
  campaignId,
  approved,
  directorship,
  regionalId,
}: Filters): Promise<AgreementTerm[]> => {
  const url = buildAgreementTermsUrl({
    campaignId,
    approved,
    directorship,
    regionalId,
  });

  const { data } = await pluginApi.get<ApiResponse>(url);
  console.log('FETCHING AGREEMENT TERMS', data);

  return [];
};
