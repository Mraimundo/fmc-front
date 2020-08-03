import { StoreState } from 'state/root-reducer';
import { Coin, MenuItem } from './types';

export const getCoinQuotations = (state: StoreState): Coin[] | null =>
  state.header.coinQuotations;

export const getMenu = (state: StoreState): MenuItem[] | null =>
  state.header.menu;
