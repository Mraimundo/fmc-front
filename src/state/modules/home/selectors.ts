import { StoreState } from 'state/root-reducer';
import { Banner } from './types';

export const getBanners = (state: StoreState): Banner[] | null =>
  state.home.banners;
