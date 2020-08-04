import { StoreState } from 'state/root-reducer';
import { Banner, Highlight } from './types';

export const getBanners = (state: StoreState): Banner[] | null =>
  state.home.banners;

export const getHighlights = (state: StoreState): Highlight[] | null =>
  state.home.highlights;
