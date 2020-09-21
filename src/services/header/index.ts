import { coinQuotation, vendavallApi } from 'services/api';

import { MenuTypes } from 'state/modules/header/constants';
import { Coin, MenuItem } from 'state/modules/header/types';
import {
  transformCoinQuotationsRawData,
  transformMenuRawData,
} from './transformers';

export interface FetchCoinQuotationsService {
  [coin: string]: {
    code: string;
    codein: string;
    name: string;
    high: string;
    low: string;
    varBid: string;
    pctChange: string;
    bid: string;
    ask: string;
    timestamp: string;
    create_date: string;
  };
}
export const fetchCoinQuotationsService = async (): Promise<Coin[] | null> => {
  const {
    data: { USD, USDT },
  } = await coinQuotation.get<FetchCoinQuotationsService>(``);

  return transformCoinQuotationsRawData({ USD, USDT });
};

export interface FetchMenuService {
  access_groups: string[];
  app_href: string;
  app_menu_type: string;
  app_screen: string;
  app_visible: string;
  href: string;
  icon: string;
  internal: string;
  key: number;
  mobile_view: string;
  parameters: string;
  site_href: string;
  site_menu_type: MenuTypes;
  site_visible: string;
  target: string;
  text: string;
  title: string;
  children?: FetchMenuService[];
}
export const fetchMenuService = async (): Promise<MenuItem[] | null> => {
  const { data: response } = await vendavallApi.get<{
    data: FetchMenuService[] | null;
  }>('menus');

  return transformMenuRawData(response.data);
};
