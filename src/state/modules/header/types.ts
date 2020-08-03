import { MenuTypes } from './constants';

export interface Coin {
  name: string;
  value: string;
}

export interface MenuItem {
  externalLink: string;
  to: string;
  label: string;
  type: MenuTypes;
  children: MenuItem[] | null;
}
