import {
  ActionCreator,
  ActionCreatorFailure,
  ActionCreatorPayload,
} from '@types';
import * as actions from './constants';
import { HomeState } from './reducer';
import * as types from './types';

export const fetchBanners = (): ActionCreator<
  typeof actions.FETCH_BANNERS_ACTION
> =>
  <const>{
    type: actions.FETCH_BANNERS_ACTION,
  };

export const fetchBannersFailure = (
  error: string,
): ActionCreatorFailure<typeof actions.FETCH_BANNERS_FAILURE> =>
  <const>{
    type: actions.FETCH_BANNERS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchBannersSuccess = (
  banners: types.Banner[] | null,
): ActionCreatorPayload<
  typeof actions.FETCH_BANNERS_SUCCESS,
  Pick<HomeState, 'banners'>
> =>
  <const>{
    type: actions.FETCH_BANNERS_SUCCESS,
    payload: { banners },
  };

export const fetchHighlights = (): ActionCreator<
  typeof actions.FETCH_HIGHLIGHTS_ACTION
> =>
  <const>{
    type: actions.FETCH_HIGHLIGHTS_ACTION,
  };

export const fetchHighlightsFailure = (
  error: string,
): ActionCreatorFailure<typeof actions.FETCH_HIGHLIGHTS_FAILURE> =>
  <const>{
    type: actions.FETCH_HIGHLIGHTS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchHighlightsSuccess = (
  highlights: types.Highlight[] | null,
): ActionCreatorPayload<
  typeof actions.FETCH_HIGHLIGHTS_SUCCESS,
  Pick<HomeState, 'highlights'>
> =>
  <const>{
    type: actions.FETCH_HIGHLIGHTS_SUCCESS,
    payload: { highlights },
  };

export const fetchShowcase = (
  participantId: number,
): ActionCreatorPayload<typeof actions.FETCH_SHOWCASEPRODUCTS_ACTION, number> =>
  <const>{
    type: actions.FETCH_SHOWCASEPRODUCTS_ACTION,
    payload: participantId,
  };

export const fetchShowcaseFailure = (
  error: string,
): ActionCreatorFailure<typeof actions.FETCH_SHOWCASEPRODUCTS_FAILURE> =>
  <const>{
    type: actions.FETCH_SHOWCASEPRODUCTS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchShowcaseSuccess = (
  showcaseProducts: types.ShowcaseProduct[] | null,
): ActionCreatorPayload<
  typeof actions.FETCH_SHOWCASEPRODUCTS_SUCCESS,
  Pick<HomeState, 'showcaseProducts'>
> =>
  <const>{
    type: actions.FETCH_SHOWCASEPRODUCTS_SUCCESS,
    payload: { showcaseProducts },
  };

export const fetchStrategies = (): ActionCreator<
  typeof actions.FETCH_STRATEGIES_ACTION
> =>
  <const>{
    type: actions.FETCH_STRATEGIES_ACTION,
  };

export const fetchStrategiesFailure = (
  error: string,
): ActionCreatorFailure<typeof actions.FETCH_STRATEGIES_FAILURE> =>
  <const>{
    type: actions.FETCH_STRATEGIES_FAILURE,
    payload: {
      error,
    },
  };

export const fetchStrategiesSuccess = (
  strategies: types.Strategy[],
): ActionCreatorPayload<
  typeof actions.FETCH_STRATEGIES_SUCCESS,
  Pick<HomeState, 'strategies'>
> =>
  <const>{
    type: actions.FETCH_STRATEGIES_SUCCESS,
    payload: { strategies },
  };

export const fetchEngagements = (): ActionCreator<
  typeof actions.FETCH_ENGAGEMENTS_ACTION
> =>
  <const>{
    type: actions.FETCH_ENGAGEMENTS_ACTION,
  };

export const fetchEngagementsFailure = (
  error: string,
): ActionCreatorFailure<typeof actions.FETCH_ENGAGEMENTS_FAILURE> =>
  <const>{
    type: actions.FETCH_ENGAGEMENTS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchEngagementsSuccess = (
  engagements: types.Engagement[],
): ActionCreatorPayload<
  typeof actions.FETCH_ENGAGEMENTS_SUCCESS,
  Pick<HomeState, 'engagements'>
> =>
  <const>{
    type: actions.FETCH_ENGAGEMENTS_SUCCESS,
    payload: { engagements },
  };

export const fetchBells = (): ActionCreator<
  typeof actions.FETCH_BELLS_ACTION
> =>
  <const>{
    type: actions.FETCH_BELLS_ACTION,
  };

export const fetchBellsFailure = (
  error: string,
): ActionCreatorFailure<typeof actions.FETCH_BELLS_FAILURE> =>
  <const>{
    type: actions.FETCH_BELLS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchBellsSuccess = (
  bells: types.Bell[],
): ActionCreatorPayload<
  typeof actions.FETCH_BELLS_SUCCESS,
  Pick<HomeState, 'bells'>
> =>
  <const>{
    type: actions.FETCH_BELLS_SUCCESS,
    payload: { bells },
  };

export const fetchRanking = (): ActionCreator<
  typeof actions.FETCH_RANKING_ACTION
> =>
  <const>{
    type: actions.FETCH_RANKING_ACTION,
  };

export const fetchRankingFailure = (
  error: string,
): ActionCreatorFailure<typeof actions.FETCH_RANKING_FAILURE> =>
  <const>{
    type: actions.FETCH_RANKING_FAILURE,
    payload: {
      error,
    },
  };

export const fetchRankingSuccess = (
  ranking: types.Ranking,
): ActionCreatorPayload<
  typeof actions.FETCH_RANKING_SUCCESS,
  Pick<HomeState, 'ranking'>
> =>
  <const>{
    type: actions.FETCH_RANKING_SUCCESS,
    payload: { ranking },
  };

export const fetchPerformance = (): ActionCreator<
  typeof actions.FETCH_PERFORMANCE_ACTION
> =>
  <const>{
    type: actions.FETCH_PERFORMANCE_ACTION,
  };

export const fetchPerformanceFailure = (
  error: string,
): ActionCreatorFailure<typeof actions.FETCH_PERFORMANCE_FAILURE> =>
  <const>{
    type: actions.FETCH_PERFORMANCE_FAILURE,
    payload: {
      error,
    },
  };

export const fetchPerformanceSuccess = (
  performance: types.Performance,
): ActionCreatorPayload<
  typeof actions.FETCH_PERFORMANCE_SUCCESS,
  Pick<HomeState, 'performance'>
> =>
  <const>{
    type: actions.FETCH_PERFORMANCE_SUCCESS,
    payload: { performance },
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
  | typeof fetchStrategies
  | typeof fetchStrategiesFailure
  | typeof fetchStrategiesSuccess
  | typeof fetchEngagements
  | typeof fetchEngagementsFailure
  | typeof fetchEngagementsSuccess
  | typeof fetchBells
  | typeof fetchBellsFailure
  | typeof fetchBellsSuccess
  | typeof fetchRanking
  | typeof fetchRankingFailure
  | typeof fetchRankingSuccess
  | typeof fetchPerformance
  | typeof fetchPerformanceFailure
  | typeof fetchPerformanceSuccess
>;
