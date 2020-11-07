import {
  ActionCreator,
  ActionCreatorPayload,
  ActionCreatorFailure,
} from '@types';
import { DataValueDTO, Mode } from './types';
import { Product, Channel } from './interfaces';

import * as constants from './constants';

export const setDollarBaseValue = (
  value: number,
): ActionCreatorPayload<typeof constants.SET_DOLLAR_BASE_VALUE, number> =>
  <const>{ type: constants.SET_DOLLAR_BASE_VALUE, payload: value };

export const setUnitValueInDollar = (
  data: DataValueDTO,
): ActionCreatorPayload<
  typeof constants.SET_UNIT_VALUE_IN_DOLLAR,
  DataValueDTO
> =>
  <const>{
    type: constants.SET_UNIT_VALUE_IN_DOLLAR,
    payload: data,
  };

export const setRevenuesValueInKilosPerLiter = (
  data: DataValueDTO,
): ActionCreatorPayload<
  typeof constants.SET_REVENUES_IN_KILOS_PER_LITER,
  DataValueDTO
> =>
  <const>{
    type: constants.SET_REVENUES_IN_KILOS_PER_LITER,
    payload: data,
  };

export const fetchChannel = (
  channelId: number,
): ActionCreatorPayload<typeof constants.FETCH_CHANNEL_ACTION, number> =>
  <const>{
    type: constants.FETCH_CHANNEL_ACTION,
    payload: channelId,
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

export const setMode = (
  data: Mode,
): ActionCreatorPayload<typeof constants.SET_MODE, Mode> =>
  <const>{
    type: constants.SET_MODE,
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
  | typeof setDollarBaseValue
  | typeof setMode
>;
