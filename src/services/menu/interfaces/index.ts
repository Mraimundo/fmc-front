export type type = 'menu' | 'internal';

export interface MenuItem {
  title: string;
  type: type;
  address: string;
  children: MenuItem[];
}
