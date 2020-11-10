import {
  ActionCreator,
  ActionCreatorPayload,
  ActionCreatorFailure,
} from '@types';
import { DataValueDTO, Mode, CalcutationDTO } from './types';
import { Product, Channel, Indicator, Configuration } from './interfaces';

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

export const fetchProducts = (): ActionCreator<
  typeof constants.FETCH_PRODUCTS_ACTION
> =>
  <const>{
    type: constants.FETCH_PRODUCTS_ACTION,
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

export const fetchIndicators = (): ActionCreator<
  typeof constants.FETCH_INDICATORS_ACTION
> =>
  <const>{
    type: constants.FETCH_INDICATORS_ACTION,
  };

export const fetchIndicatorsFailure = (
  error: string,
): ActionCreatorFailure<typeof constants.FETCH_INDICATORS_FAILURE> =>
  <const>{
    type: constants.FETCH_INDICATORS_FAILURE,
    payload: {
      error,
    },
  };

export const fetchIndicatorsSuccess = (
  data: Indicator[],
): ActionCreatorPayload<
  typeof constants.FETCH_INDICATORS_SUCCESS,
  Indicator[]
> =>
  <const>{
    type: constants.FETCH_INDICATORS_SUCCESS,
    payload: data,
  };

export const setMode = (
  data: Mode,
): ActionCreatorPayload<typeof constants.SET_MODE, Mode> =>
  <const>{
    type: constants.SET_MODE,
    payload: data,
  };

export const fetchCalculate = (): ActionCreator<
  typeof constants.CALCULATE_SIMULATION_ACTION
> =>
  <const>{
    type: constants.CALCULATE_SIMULATION_ACTION,
  };

export const fetchCalculateSuccess = (
  data: CalcutationDTO,
): ActionCreatorPayload<
  typeof constants.CALCULATE_SIMULATION_SUCCESS,
  CalcutationDTO
> =>
  <const>{
    type: constants.CALCULATE_SIMULATION_SUCCESS,
    payload: data,
  };

export const fetchConfiguration = (): ActionCreator<
  typeof constants.FETCH_CONFIGURATION_ACTION
> =>
  <const>{
    type: constants.FETCH_CONFIGURATION_ACTION,
  };

export const fetchConfigurationFailure = (
  error: string,
): ActionCreatorFailure<typeof constants.FETCH_CONFIGURATION_FAILURE> =>
  <const>{
    type: constants.FETCH_CONFIGURATION_FAILURE,
    payload: {
      error,
    },
  };

export const fetchConfigurationSuccess = (
  data: Configuration,
): ActionCreatorPayload<
  typeof constants.FETCH_CONFIGURATION_SUCCESS,
  Configuration
> =>
  <const>{
    type: constants.FETCH_CONFIGURATION_SUCCESS,
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
  | typeof fetchConfiguration
  | typeof fetchConfigurationFailure
  | typeof fetchConfigurationSuccess
  | typeof fetchIndicators
  | typeof fetchIndicatorsFailure
  | typeof fetchIndicatorsSuccess
  | typeof setDollarBaseValue
  | typeof setMode
  | typeof fetchCalculate
  | typeof fetchCalculateSuccess
>;
