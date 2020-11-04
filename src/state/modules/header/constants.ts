export const FETCH_COIN_QUOTATION_ACTION =
  '@fmc/header/FETCH_COIN_QUOTATION_ACTION';
export const FETCH_COIN_QUOTATION_FAILURE =
  '@fmc/header/FETCH_COIN_QUOTATION_FAILURE';
export const FETCH_COIN_QUOTATION_SUCCESS =
  '@fmc/header/FETCH_COIN_QUOTATION_SUCCESS';

export const FETCH_MENU_ACTION = '@fmc/header/FETCH_MENU_ACTION';
export const FETCH_MENU_FAILURE = '@fmc/header/FETCH_MENU_FAILURE';
export const FETCH_MENU_SUCCESS = '@fmc/header/FETCH_MENU_SUCCESS';

export const COINS_TO_QUOTE = 'USD-BRL,USDT-BRL'; // https://docs.awesomeapi.com.br/api-de-moedas

export enum MenuTypes {
  Internal = 'internal',
  Link = 'link',
  Menu = 'menu',
}

export enum Badge {
  Land = 'land',
  Root = 'root',
  Seed = 'seed',
  Water = 'water',
}

export enum Status {
  Especialista = 'especialista',
  Conselheiro = 'conselheiro',
  Parceiro = 'parceiro',
  Lider = 'líder',
}
