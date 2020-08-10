import { HeaderState } from './reducer';
import { Coin, MenuItem } from './types';
import { MenuTypes } from './constants';

export const coinQuotations: Coin[] = [
  { name: 'Dolar Comercial', value: 4.232 },
  { name: 'Dolar Turismo', value: 5.329 },
];

export const menu: MenuItem[] = [
  {
    label: 'Distribuição de pontos',
    to: '/distribuicao-de-pontos',
    externalLink: '',
    type: MenuTypes.Internal,
    children: null,
  },
  {
    label: 'Extrato',
    to: '/extrato',
    externalLink: '',
    type: MenuTypes.Internal,
    children: null,
  },
];

const state: HeaderState = {
  fetchCoinQuotations: {
    isFetching: false,
  },
  fetchMenu: {
    isFetching: false,
  },
  coinQuotations,
  menu,
};

export default state;
