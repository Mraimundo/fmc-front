import { Badge } from './constants';
import { MenuItem } from './types';

export const getParticipantBadgeByPortugueseTerm = (
  term: 'Água' | 'Semente' | 'Terra' | 'Raiz',
): Badge => {
  const portugueseTermsMap: { [key: string]: Badge } = {
    Água: Badge.Water,
    Semente: Badge.Seed,
    Terra: Badge.Land,
    Root: Badge.Root,
  };

  return portugueseTermsMap[term];
};

export const getMenuByUrl = (url: string, menus: MenuItem[] | null): MenuItem | null => {
  if (!menus) return null;

  return menus.find((menu: MenuItem) => {
    const hasChildren = menu.children && menu.children.length > 0;
    if (!hasChildren) return menu.to === url;

    return getMenuByUrl(url, menu.children);
  }) || null;
};

export const isSelectedMenu = (
  currentMenu: MenuItem,
  selectedMenu?: MenuItem | null,
): boolean => {
  if (!selectedMenu) return false;

  return selectedMenu.label === currentMenu.label;
};
