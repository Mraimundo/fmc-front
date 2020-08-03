import { Reducer } from 'redux';

import { FetchState } from '@types';
import { emptyFetchState, fetchingState, fetchErrorState } from 'state/utils';
import { HomeActions } from './actions';
import {
  FETCH_BANNERS_ACTION,
  FETCH_BANNERS_FAILURE,
  FETCH_BANNERS_SUCCESS,
} from './constants';
import { Banner } from './types';

export interface HomeState {
  fetchBanners: FetchState;
  banners: Banner[] | null;
}

export const initialState: HomeState = {
  fetchBanners: emptyFetchState,
  banners: null,
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

    default:
      return state;
  }
};

export default homeReducer;
