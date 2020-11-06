import {
  ActionCreator,
  ActionCreatorPayload,
  ActionCreatorFailure,
} from '@types';
import { SetValueData } from './types';
import { Product, Channel } from './interfaces';

import * as constants from './constants';

export const setUnitValueInDollar = (
  data: SetValueData,
): ActionCreatorPayload<
  typeof constants.SET_UNIT_VALUE_IN_DOLLAR,
  SetValueData
> =>
  <const>{
    type: constants.SET_UNIT_VALUE_IN_DOLLAR,
    payload: data,
  };

export const setRevenuesValueInKilosPerLiter = (
  data: SetValueData,
): ActionCreatorPayload<
  typeof constants.SET_REVENUES_IN_KILOS_PER_LITER,
  SetValueData
> =>
  <const>{
    type: constants.SET_REVENUES_IN_KILOS_PER_LITER,
    payload: data,
  };

export const fetchChannel = (): ActionCreator<
  typeof constants.FETCH_CHANNEL_ACTION
> =>
  <const>{
    type: constants.FETCH_CHANNEL_ACTION,
  };

export const fetchChannelFailure = (
  error: string,
): ActionCreatorFailure<typeof constants.FETCH_CHANNEL_FAILURE> =>
  <const>{
    type: constants.FETCH_CHANNEL_FAILURE,
    payload: {
      error,
    },
  };

export const fetchChannelSuccess = (
  data: Channel,
): ActionCreatorPayload<typeof constants.FETCH_CHANNEL_SUCCESS, Channel> =>
  <const>{
    type: constants.FETCH_CHANNEL_SUCCESS,
    payload: data,
  };

export const fetchProducts = (
  channelId: number,
): ActionCreatorPayload<typeof constants.FETCH_PRODUCTS_ACTION, number> =>
  <const>{
    type: constants.FETCH_PRODUCTS_ACTION,
    payload: channelId,
  };

export const fetchProductsFailure = (
  error: string,
): ActionCreatorFailure<typeof constants.FETCH_PRODUCTS_FAILURE> =>
  <const>{
    type: constants.FETCH_PRODUCTS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchProductsSuccess = (
  data: Product[],
): ActionCreatorPayload<typeof constants.FETCH_PRODUCTS_SUCCESS, Product[]> =>
  <const>{
    type: constants.FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };

export type PointsSimulatorActions = ReturnType<
  | typeof setUnitValueInDollar
  | typeof setRevenuesValueInKilosPerLiter
  | typeof fetchChannel
  | typeof fetchChannelFailure
  | typeof fetchChannelSuccess
  | typeof fetchProducts
  | typeof fetchProductsFailure
  | typeof fetchProductsSuccess
>;
