import { pluginApi } from '../api';
import { Coupon } from './interface';

const REQUEST_URL = 'flying-high/lucky-numbers';

interface ApiResponse {
  number: Coupon;
}

export default async (): Promise<string> => {
  try {
    const {
      data: { number },
    } = await pluginApi.get<ApiResponse>(REQUEST_URL);
    console.log(number.number);
    return number.number;
  } catch (error) {
    return '';
  }
};
