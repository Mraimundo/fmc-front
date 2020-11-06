import { StoreState } from 'state/root-reducer';
import { Product, Channel } from './interfaces';

export const getProducts = (state: StoreState): Product[] | null =>
  state.pointsSimulator.products;

export const getChannel = (state: StoreState): Channel | null =>
  state.pointsSimulator.channel;
