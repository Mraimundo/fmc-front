import { StoreState } from 'state/root-reducer';
import { Product, Channel, Indicator, Configuration } from './interfaces';
import { Mode } from './types';

export const getProducts = (state: StoreState): Product[] | null =>
  state.pointsSimulator.products;

export const getChannel = (state: StoreState): Channel | null =>
  state.pointsSimulator.channel;

export const getDollarBaseValue = (state: StoreState): number =>
  state.pointsSimulator.dollarBaseValue;

export const getMode = (state: StoreState): Mode => state.pointsSimulator.mode;

export const getIndicators = (state: StoreState): Indicator[] =>
  state.pointsSimulator.indicators;

export const getConfiguration = (state: StoreState): Configuration =>
  state.pointsSimulator.configuration;
