import { Reducer } from 'redux';

import { FetchState } from '@types';
import { emptyFetchState, fetchingState, fetchErrorState } from 'state/utils';
import { HomeActions } from './actions';
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
  FETCH_LUCKYNUMBER_ACTION,
  FETCH_LUCKYNUMBER_FAILURE,
  FETCH_LUCKYNUMBER_SUCCESS,
} from './constants';
import { Banner, Highlight, ShowcaseProduct } from './types';

export interface HomeState {
  fetchBanners: FetchState;
  fetchHighlights: FetchState;
  fetchShowcaseProducts: FetchState;
  fetchLuckyNumber: FetchState;
  banners: Banner[] | null;
  highlights: Highlight[] | null;
  showcaseProducts: ShowcaseProduct[] | null;
  participantId: number | null;
  luckyNumber: string | null;
}

export const initialState: HomeState = {
  fetchBanners: emptyFetchState,
  fetchHighlights: emptyFetchState,
  fetchShowcaseProducts: emptyFetchState,
  fetchLuckyNumber: emptyFetchState,
  banners: null,
  highlights: null,
  showcaseProducts: null,
  participantId: null,
  luckyNumber: null,
};

const homeReducer: Reducer<HomeState, HomeActions> = (
  state = initialState,
  action: HomeActions,
): HomeState => {
  switch (action.type) {
    case FETCH_BANNERS_ACTION:
      return { ...state, fetchBanners: fetchingState };
    case FETCH_BANNERS_FAILURE:
      return { ...state, fetchBanners: fetchErrorState(action) };
    case FETCH_BANNERS_SUCCESS:
      return {
        ...state,
        fetchBanners: emptyFetchState,
        banners: action.payload.banners,
      };

    case FETCH_HIGHLIGHTS_ACTION:
      return { ...state, fetchHighlights: fetchingState };
    case FETCH_HIGHLIGHTS_FAILURE:
      return { ...state, fetchHighlights: fetchErrorState(action) };
    case FETCH_HIGHLIGHTS_SUCCESS:
      return {
        ...state,
        fetchHighlights: emptyFetchState,
        highlights: action.payload.highlights,
      };

    case FETCH_SHOWCASEPRODUCTS_ACTION:
      return {
        ...state,
        fetchShowcaseProducts: fetchingState,
        participantId: action.payload,
      };
    case FETCH_SHOWCASEPRODUCTS_FAILURE:
      return { ...state, fetchShowcaseProducts: fetchErrorState(action) };
    case FETCH_SHOWCASEPRODUCTS_SUCCESS:
      return {
        ...state,
        fetchShowcaseProducts: emptyFetchState,
        showcaseProducts: action.payload.showcaseProducts,
      };

    case FETCH_LUCKYNUMBER_ACTION:
      return {
        ...state,
        fetchLuckyNumber: fetchingState,
      };
    case FETCH_LUCKYNUMBER_FAILURE:
      return {
        ...state,
        fetchLuckyNumber: fetchErrorState(action),
      };
    case FETCH_LUCKYNUMBER_SUCCESS:
      return {
        ...state,
        luckyNumber: action.payload.luckyNumber,
      };

    default:
      return state;
  }
};

export default homeReducer;
