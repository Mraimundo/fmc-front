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
} from './constants';
import { Banner, Highlight } from './types';

export interface HomeState {
  fetchBanners: FetchState;
  fetchHighlights: FetchState;
  banners: Banner[] | null;
  highlights: Highlight[] | null;
}

export const initialState: HomeState = {
  fetchBanners: emptyFetchState,
  fetchHighlights: emptyFetchState,
  banners: null,
  highlights: null,
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

    default:
      return state;
  }
};

export default homeReducer;
