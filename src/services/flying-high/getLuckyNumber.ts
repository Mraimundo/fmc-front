import { pluginApi } from '../api';
import { Coupon } from './interface';

const REQUEST_URL = 'flying-high/lucky-numbers';

interface ApiResponse {
  coupon: Coupon;
}

export default async (): Promise<string | null> => {
  try {
    const {
      data: { coupon },
    } = await pluginApi.get<ApiResponse>(REQUEST_URL);

    return coupon.number;
  } catch (error) {
    return null;
  }
};
