import { MenuTypes } from './constants';

export interface Coin {
  name: string;
  value: number;
}

export interface MenuItem {
  externalLink: string;
  to: string;
  label: string;
  type: MenuTypes;
  children: MenuItem[] | null;
}
