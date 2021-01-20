import { pluginApi } from 'services/api';

interface ApiResponse {
  has_stock: boolean;
  stock_date: string;
}

export interface Stock {
  hasStock: boolean;
  stockDate: string;
}

export default async (campaignId: number): Promise<Stock> => {
  const { data } = await pluginApi.get<ApiResponse>(
    `campaigns/${campaignId}/has-stock`,
  );

  return {
    hasStock: data.has_stock,
    stockDate: data.stock_date,
  };
};
