import {
  ActionCreator,
  ActionCreatorFailure,
  ActionCreatorPayload,
} from '@types';
import {
  FETCH_COIN_QUOTATION_ACTION,
  FETCH_COIN_QUOTATION_FAILURE,
  FETCH_COIN_QUOTATION_SUCCESS,
  FETCH_MENU_ACTION,
  FETCH_MENU_FAILURE,
  FETCH_MENU_SUCCESS,
} from './constants';
import { HeaderState } from './reducer';
import { Coin, MenuItem } from './types';

export const fetchCoinQuotation = (): ActionCreator<
  typeof FETCH_COIN_QUOTATION_ACTION
> =>
  <const>{
    type: FETCH_COIN_QUOTATION_ACTION,
  };

export const fetchCoinQuotationFailure = (
  error: string,
): ActionCreatorFailure<typeof FETCH_COIN_QUOTATION_FAILURE> =>
  <const>{
    type: FETCH_COIN_QUOTATION_FAILURE,
    payload: {
      error,
    },
  };

export const fetchCoinQuotationSuccess = (
  coinQuotations: Coin[] | null,
): ActionCreatorPayload<
  typeof FETCH_COIN_QUOTATION_SUCCESS,
  Pick<HeaderState, 'coinQuotations'>
> =>
  <const>{
    type: FETCH_COIN_QUOTATION_SUCCESS,
    payload: { coinQuotations },
  };

export const fetchMenu = (): ActionCreator<typeof FETCH_MENU_ACTION> =>
  <const>{
    type: FETCH_MENU_ACTION,
  };

export const fetchMenuFailure = (
  error: string,
): ActionCreatorFailure<typeof FETCH_MENU_FAILURE> =>
  <const>{
    type: FETCH_MENU_FAILURE,
    payload: {
      error,
    },
  };

export const fetchMenuSuccess = (
  menu: MenuItem[] | null,
): ActionCreatorPayload<typeof FETCH_MENU_SUCCESS, Pick<HeaderState, 'menu'>> =>
  <const>{
    type: FETCH_MENU_SUCCESS,
    payload: { menu },
  };

export type HeaderActions = ReturnType<
  | typeof fetchCoinQuotation
  | typeof fetchCoinQuotationFailure
  | typeof fetchCoinQuotationSuccess
  | typeof fetchMenu
  | typeof fetchMenuFailure
  | typeof fetchMenuSuccess
>;
