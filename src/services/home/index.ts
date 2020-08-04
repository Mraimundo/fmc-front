import { vendavallApi, pluginApi } from 'services/api';

import { Banner, Highlight } from 'state/modules/home/types';
import { HighlightTypes } from 'state/modules/home/constants';
import {
  transformBannersRawData,
  transformHighlightsRawData,
} from './transformers';

export interface FetchBannersService {
  type: string;
  title: string;
  open_new_page: string;
  picture: string;
  mobile_picture: string;
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
