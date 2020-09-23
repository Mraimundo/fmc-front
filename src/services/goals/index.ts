import { pluginApi } from 'services/api';

import {
  Product,
  BillingPog,
  Campaign,
  Potentializer,
  Infos,
} from 'state/modules/goals/types';
import {
  transformCampaigns,
  transformProducts,
  transformBillingPog,
  transformInfos,
  transformPotentializers,
} from './transformers';

export interface FetchCampaignsService {
  id: number;
  title: string;
  description: string;
}
export const fetchCampaignsService = async (): Promise<Campaign[] | null> => {
  const { data } = await pluginApi.get<{
    campaigns: FetchCampaignsService[];
  }>('/statement/campaigns');

  return transformCampaigns(data.campaigns);
};

interface BillingPogService {
  id: number;
  value: number;
  owner_ref: string;
  category: string;
  period: string;
  generated_at: string;
  balance_unit: {
    id: number;
    name: string;
    description: string;
  };
  progress: {
    value: number;
    percentage: number;
  };
}
export interface FetchBillingPogService {
  faturamento: BillingPogService;
  pog: BillingPogService;
  devolução: {
    value: string;
    progress: {
      value: number;
      checked: boolean;
    };
  };
}
export const fetchBillingPogService = async (): Promise<BillingPog | null> => {
  const { data } = await pluginApi.get<FetchBillingPogService>(
    '/goals/performance',
  );

  return transformBillingPog(data);
};

export interface FetchPotentializersService {
  id: number;
  value: number;
  owner_ref: string;
  category: string;
  period: string;
  generated_at: string;
  balance_unit: {
    id: number;
    name: string;
    description: string;
  };
  progress: {
    value: number;
    percentage: number;
  };
}
export const fetchPotentializersService = async (): Promise<
  Potentializer[] | null
> => {
  const { data } = await pluginApi.get<FetchPotentializersService[]>(
    '/goals/focal-products',
  );

  return transformPotentializers(data);
};

export interface FetchInfosService {
  potential: {
    id: number;
    establishment_id: number;
    campaign_id: number;
    value: number;
    generated_at: string;
    potential_import_id: number;
    created: string;
    modified: string;
  };
  importedPoints: {
    value: number;
    name: string;
    description: string;
  }[];
  last_update: string;
  full_performance_report: string;
}
export const fetchInfosService = async (): Promise<Infos | null> => {
  const { data } = await pluginApi.get<FetchInfosService>('/goals/info');

  return transformInfos(data);
};

export interface FetchProductsService {
  id: number;
  name: string;
  value: number;
  volume: number;
  position: string;
}

export const fetchTopPurchasingProductsService = async (): Promise<
  Product[] | null
> => {
  const { data } = await pluginApi.get<FetchProductsService[]>(
    '/goals/top-ten-purchases',
  );

  return transformProducts(data);
};

export const fetchTopSellingProductsService = async (): Promise<
  Product[] | null
> => {
  const { data } = await pluginApi.get<FetchProductsService[]>(
    '/goals/top-ten-sellers',
  );

  console.log('unformattedData', data);

  return transformProducts(data);
};
