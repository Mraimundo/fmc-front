import { StoreState } from 'state/root-reducer';
import { Banner, Highlight, ShowcaseProduct } from './types';

export const getBanners = (state: StoreState): Banner[] | null =>
  state.home.banners;

export const getHighlights = (state: StoreState): Highlight[] | null =>
  state.home.highlights;

export const getShowcaseProducts = (
  state: StoreState,
): ShowcaseProduct[] | null => state.home.showcaseProducts;

export const getParticipantId = (state: StoreState): number | null =>
  state.home.participantId;

export const getLuckyNumber = (state: StoreState): string | null =>
  state.home.luckyNumber;
