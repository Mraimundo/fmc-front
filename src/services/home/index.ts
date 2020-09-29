import { vendavallApi, pluginApi } from 'services/api';

import { Banner, Highlight, ShowcaseProduct } from 'state/modules/home/types';
import { HighlightTypes } from 'state/modules/home/constants';
import { getProducts } from 'services/showcase';
import {
  transformBannersRawData,
  transformHighlightsRawData,
  transformProductToShowCaseProduct,
} from './transformers';

export interface FetchBannersService {
  type: 'internal' | 'external';
  title: string;
  open_new_page: string;
  picture: string;
  mobile_picture: string;
  url: string;
}
export const fetchBannersService = async (): Promise<Banner[] | null> => {
  const { data: response } = await vendavallApi.get<
    FetchBannersService[] | null
  >('banners');

  return transformBannersRawData(response);
};

export interface FetchHighlightsService {
  id: number;
  type: HighlightTypes;
  quiz_id: number | null;
  report_id: number | null;
  fmc_campaign_id: number | null;
  picture: string;
  title: string;
  description: string;
  created: string;
  modified: string;
}
export const fetchHighlightsService = async (): Promise<Highlight[] | null> => {
  const { data: response } = await pluginApi.get<{
    data: FetchHighlightsService[] | null;
  }>('highlights?limit=15&order=desc');

  return transformHighlightsRawData(response.data);
};

export const fetchShowcaseProductsService = async (
  participantId: number,
): Promise<ShowcaseProduct[] | null> => {
  const products = await getProducts({
    limit: 4,
    id: participantId,
    type: 'participant',
  });

  return transformProductToShowCaseProduct(products);
};
