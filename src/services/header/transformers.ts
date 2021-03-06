import { Coin, MenuItem } from 'state/modules/header/types';
import { FetchCoinQuotationsService, FetchMenuService } from '.';

export const transformCoinQuotationsRawData = (
  data: FetchCoinQuotationsService,
): Coin[] | null => {
  if (!data) return null;

  return Object.values(data).reduce<Coin[]>((acc, { name, bid }) => {
    return [
      ...acc,
      {
        name,
        value: Number.parseFloat(bid),
      },
    ];
  }, [] as Coin[]);
};

export const transformMenuRawData = (
  data?: FetchMenuService[] | null,
): MenuItem[] | null => {
  if (!data || data.length === 0) return null;

  return data.map<MenuItem>(
    (item: FetchMenuService): MenuItem => ({
      label: item.text,
      children: transformMenuRawData(
        Array.isArray(item?.children)
          ? item.children
          : Object.values(item?.children || {}),
      ),
      type: item.site_menu_type,
      to: item.internal,
      externalLink: item.href,
    }),
  );
};
