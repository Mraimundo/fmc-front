import { Reducer } from 'redux';

import { FetchState } from '@types';
import { emptyFetchState, fetchingState, fetchErrorState } from 'state/utils';
import { HomeActions } from './actions';
import * as actions from './constants';

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

export interface HomeState {
  fetchBanners: FetchState;
  fetchHighlights: FetchState;
  fetchShowcaseProducts: FetchState;
  fetchLuckyNumber: FetchState;
  fetchStrategies: FetchState;
  fetchEngagements: FetchState;
  fetchBells: FetchState;
  fetchRanking: FetchState;
  fetchPerformance: FetchState;
  banners: Banner[] | null;
  highlights: Highlight[] | null;
  showcaseProducts: ShowcaseProduct[] | null;
  participantId: number | null;
  luckyNumber: string | null;
  strategies: Strategy[];
  engagements: Engagement[];
  bells: Bell[];
  ranking: Ranking | null;
  performance: Performance | null;
}

export const initialState: HomeState = {
  fetchBanners: emptyFetchState,
  fetchHighlights: emptyFetchState,
  fetchShowcaseProducts: emptyFetchState,
  fetchLuckyNumber: emptyFetchState,
  fetchStrategies: emptyFetchState,
  fetchEngagements: emptyFetchState,
  fetchBells: emptyFetchState,
  fetchRanking: emptyFetchState,
  fetchPerformance: emptyFetchState,
  banners: null,
  highlights: null,
  showcaseProducts: null,
  participantId: null,
  luckyNumber: null,
  strategies: [],
  engagements: [],
  bells: [],
  ranking: null,
  performance: null,
};

const homeReducer: Reducer<HomeState, HomeActions> = (
  state = initialState,
  action: HomeActions,
): HomeState => {
  switch (action.type) {
    case actions.FETCH_BANNERS_ACTION:
      return { ...state, fetchBanners: fetchingState };
    case actions.FETCH_BANNERS_FAILURE:
      return { ...state, fetchBanners: fetchErrorState(action) };
    case actions.FETCH_BANNERS_SUCCESS:
      return {
        ...state,
        fetchBanners: emptyFetchState,
        banners: action.payload.banners,
      };

    case actions.FETCH_HIGHLIGHTS_ACTION:
      return { ...state, fetchHighlights: fetchingState };
    case actions.FETCH_HIGHLIGHTS_FAILURE:
      return { ...state, fetchHighlights: fetchErrorState(action) };
    case actions.FETCH_HIGHLIGHTS_SUCCESS:
      return {
        ...state,
        fetchHighlights: emptyFetchState,
        highlights: action.payload.highlights,
      };

    case actions.FETCH_SHOWCASEPRODUCTS_ACTION:
      return {
        ...state,
        fetchShowcaseProducts: fetchingState,
        participantId: action.payload,
      };
    case actions.FETCH_SHOWCASEPRODUCTS_FAILURE:
      return { ...state, fetchShowcaseProducts: fetchErrorState(action) };
    case actions.FETCH_SHOWCASEPRODUCTS_SUCCESS:
      return {
        ...state,
        fetchShowcaseProducts: emptyFetchState,
        showcaseProducts: action.payload.showcaseProducts,
      };

    case actions.FETCH_LUCKYNUMBER_ACTION:
      return {
        ...state,
        fetchLuckyNumber: fetchingState,
      };
    case actions.FETCH_LUCKYNUMBER_FAILURE:
      return {
        ...state,
        fetchLuckyNumber: fetchErrorState(action),
      };
    case actions.FETCH_LUCKYNUMBER_SUCCESS:
      return {
        ...state,
        luckyNumber: action.payload.luckyNumber,
      };

    case actions.FETCH_STRATEGIES_ACTION:
      return { ...state, fetchStrategies: fetchingState };
    case actions.FETCH_STRATEGIES_FAILURE:
      return { ...state, fetchStrategies: fetchErrorState(action) };
    case actions.FETCH_STRATEGIES_SUCCESS:
      return {
        ...state,
        fetchStrategies: emptyFetchState,
        strategies: action.payload.strategies,
      };

    case actions.FETCH_ENGAGEMENTS_ACTION:
      return { ...state, fetchEngagements: fetchingState };
    case actions.FETCH_ENGAGEMENTS_FAILURE:
      return { ...state, fetchEngagements: fetchErrorState(action) };
    case actions.FETCH_ENGAGEMENTS_SUCCESS:
      return {
        ...state,
        fetchEngagements: emptyFetchState,
        engagements: action.payload.engagements,
      };

    case actions.FETCH_BELLS_ACTION:
      return { ...state, fetchBells: fetchingState };
    case actions.FETCH_BELLS_FAILURE:
      return { ...state, fetchBells: fetchErrorState(action) };
    case actions.FETCH_BELLS_SUCCESS:
      return {
        ...state,
        fetchBells: emptyFetchState,
        bells: action.payload.bells,
      };

    case actions.FETCH_RANKING_ACTION:
      return { ...state, fetchRanking: fetchingState };
    case actions.FETCH_RANKING_FAILURE:
      return { ...state, fetchRanking: fetchErrorState(action) };
    case actions.FETCH_RANKING_SUCCESS:
      return {
        ...state,
        fetchRanking: emptyFetchState,
        ranking: action.payload.ranking,
      };

    case actions.FETCH_PERFORMANCE_ACTION:
      return { ...state, fetchPerformance: fetchingState };
    case actions.FETCH_PERFORMANCE_FAILURE:
      return { ...state, fetchPerformance: fetchErrorState(action) };
    case actions.FETCH_PERFORMANCE_SUCCESS:
      return {
        ...state,
        fetchPerformance: emptyFetchState,
        performance: action.payload.performance,
      };

    default:
      return state;
  }
};

export default homeReducer;
