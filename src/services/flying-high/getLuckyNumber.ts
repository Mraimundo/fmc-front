import { pluginApi } from '../api';
import { Coupon } from './interface';

const REQUEST_URL = 'flying-high/lucky-numbers';

export default async (): Promise<string> => {
  try {
    const { data } = await pluginApi.get<Coupon>(REQUEST_URL);
    return data.number;
  } catch (error) {
    return '';
  }
};
