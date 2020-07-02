import { vendavallApi } from 'services/api';
import { MenuItem, type } from './interfaces';

interface Response {
  text: string;
  site_menu_type: string;
  internal: string;
  children: Response[];
}

interface ApiResponse {
  data: Response[];
}

const build = (responseItem: Response): MenuItem => ({
  address: responseItem.internal,
  title: responseItem.text,
  type: responseItem.site_menu_type as type,
  children:
    responseItem.children && responseItem.children.length > 0
      ? responseItem.children.map(item => build(item))
      : [],
});

export default async (): Promise<MenuItem[]> => {
  try {
    const {
      data: { data },
    } = await vendavallApi.get<ApiResponse>('menus');
    return data.map(item => build(item));
  } catch (e) {
    return [];
  }
};
