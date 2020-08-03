import { vendavallApi } from 'services/api';

import { Banner } from 'state/modules/home/types';
import { transformBannersRawData } from './transformers';

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
