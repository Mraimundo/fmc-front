import { Reducer } from 'redux';

import { FetchState } from '@types';
import { emptyFetchState, fetchingState, fetchErrorState } from 'state/utils';
import { HeaderActions } from './actions';
import {
  FETCH_COIN_QUOTATION_ACTION,
  FETCH_COIN_QUOTATION_FAILURE,
  FETCH_COIN_QUOTATION_SUCCESS,
  FETCH_MENU_ACTION,
  FETCH_MENU_FAILURE,
  FETCH_MENU_SUCCESS,
} from './constants';
import { Coin, MenuItem } from './types';

export interface HeaderState {
  fetchCoinQuotations: FetchState;
  fetchMenu: FetchState;
  coinQuotations: Coin[] | null;
  menu: MenuItem[] | null;
}

export const initialState: HeaderState = {
  fetchCoinQuotations: emptyFetchState,
  fetchMenu: emptyFetchState,
  coinQuotations: null,
  menu: null,
};

const headerReducer: Reducer<HeaderState, HeaderActions> = (
  state = initialState,
  action: HeaderActions,
): HeaderState => {
  switch (action.type) {
    case FETCH_COIN_QUOTATION_ACTION:
      return { ...state, fetchCoinQuotations: fetchingState };
    case FETCH_COIN_QUOTATION_FAILURE:
      return { ...state, fetchCoinQuotations: fetchErrorState(action) };
    case FETCH_COIN_QUOTATION_SUCCESS:
      return {
        ...state,
        fetchCoinQuotations: emptyFetchState,
        coinQuotations: action.payload.coinQuotations,
      };

    case FETCH_MENU_ACTION:
      return { ...state, fetchMenu: fetchingState };
    case FETCH_MENU_FAILURE:
      return { ...state, fetchMenu: fetchErrorState(action) };
    case FETCH_MENU_SUCCESS:
      return {
        ...state,
        fetchMenu: emptyFetchState,
        menu: action.payload.menu,
      };

    default:
      return state;
  }
};

export default headerReducer;
