import { pluginApi } from 'services/api';
import getUrlToForceDownload from 'services/storage/getUrlToForceDownload';

interface ApiResponse {
  has_stock: boolean;
  stock_date: string;
  stock_url: string;
}

export interface Stock {
  hasStock: boolean;
  stockDate: string;
  stockUrl: string;
}

export default async (campaignId: number): Promise<Stock> => {
  const { data } = await pluginApi.get<ApiResponse>(
    `campaigns/${campaignId}/has-stock`,
  );

  return {
    hasStock: data.has_stock,
    stockDate: data.stock_date,
    stockUrl: getUrlToForceDownload({
      url: data.stock_url,
      filename: 'estoque_final.pdf',
    }),
  };
};
