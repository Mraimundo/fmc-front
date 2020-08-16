import {
  ActionCreator,
  ActionCreatorFailure,
  ActionCreatorPayload,
} from '@types';
import {
  FETCH_BANNERS_ACTION,
  FETCH_BANNERS_FAILURE,
  FETCH_BANNERS_SUCCESS,
  FETCH_HIGHLIGHTS_ACTION,
  FETCH_HIGHLIGHTS_FAILURE,
  FETCH_HIGHLIGHTS_SUCCESS,
  FETCH_SHOWCASEPRODUCTS_ACTION,
  FETCH_SHOWCASEPRODUCTS_FAILURE,
  FETCH_SHOWCASEPRODUCTS_SUCCESS,
} from './constants';
import { HomeState } from './reducer';
import { Banner, Highlight, ShowcaseProduct } from './types';

export const fetchBanners = (): ActionCreator<typeof FETCH_BANNERS_ACTION> =>
  <const>{
    type: FETCH_BANNERS_ACTION,
  };

export const fetchBannersFailure = (
  error: string,
): ActionCreatorFailure<typeof FETCH_BANNERS_FAILURE> =>
  <const>{
    type: FETCH_BANNERS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchBannersSuccess = (
  banners: Banner[] | null,
): ActionCreatorPayload<
  typeof FETCH_BANNERS_SUCCESS,
  Pick<HomeState, 'banners'>
> =>
  <const>{
    type: FETCH_BANNERS_SUCCESS,
    payload: { banners },
  };

export const fetchHighlights = (): ActionCreator<
  typeof FETCH_HIGHLIGHTS_ACTION
> =>
  <const>{
    type: FETCH_HIGHLIGHTS_ACTION,
  };

export const fetchHighlightsFailure = (
  error: string,
): ActionCreatorFailure<typeof FETCH_HIGHLIGHTS_FAILURE> =>
  <const>{
    type: FETCH_HIGHLIGHTS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchHighlightsSuccess = (
  highlights: Highlight[] | null,
): ActionCreatorPayload<
  typeof FETCH_HIGHLIGHTS_SUCCESS,
  Pick<HomeState, 'highlights'>
> =>
  <const>{
    type: FETCH_HIGHLIGHTS_SUCCESS,
    payload: { highlights },
  };

export const fetchShowcase = (
  participantId: number,
): ActionCreatorPayload<typeof FETCH_SHOWCASEPRODUCTS_ACTION, number> =>
  <const>{
    type: FETCH_SHOWCASEPRODUCTS_ACTION,
    payload: participantId,
  };

export const fetchShowcaseFailure = (
  error: string,
): ActionCreatorFailure<typeof FETCH_SHOWCASEPRODUCTS_FAILURE> =>
  <const>{
    type: FETCH_SHOWCASEPRODUCTS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchShowcaseSuccess = (
  showcaseProducts: ShowcaseProduct[] | null,
): ActionCreatorPayload<
  typeof FETCH_SHOWCASEPRODUCTS_SUCCESS,
  Pick<HomeState, 'showcaseProducts'>
> =>
  <const>{
    type: FETCH_SHOWCASEPRODUCTS_SUCCESS,
    payload: { showcaseProducts },
  };

export type HomeActions = ReturnType<
  | typeof fetchBanners
  | typeof fetchBannersFailure
  | typeof fetchBannersSuccess
  | typeof fetchHighlights
  | typeof fetchHighlightsFailure
  | typeof fetchHighlightsSuccess
  | typeof fetchShowcase
  | typeof fetchShowcaseFailure
  | typeof fetchShowcaseSuccess
>;
