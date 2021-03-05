import { StoreState } from 'state/root-reducer';
import {
  Banner,
  Highlight,
  ShowcaseProduct,
  Strategy,
  Engagement,
  Bell,
  Ranking,
  Performance,
} from './types';

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

export const getStrategies = (state: StoreState): Strategy[] =>
  state.home.strategies;

export const getEngagements = (state: StoreState): Engagement[] =>
  state.home.engagements;

export const getBells = (state: StoreState): Bell[] => state.home.bells;

export const getRanking = (state: StoreState): Ranking | null =>
  state.home.ranking;

export const getPerformance = (state: StoreState): Performance | null =>
  state.home.performance;
