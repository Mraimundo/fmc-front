import { useCallback } from 'react';
import { pluginApi } from 'services/api';
import { Participant } from 'services/auth/interfaces/Participant';
import { Product } from './interfaces';

interface ProductApi {
  id: number;
  name: string;
  description: string;
  providerId: number;
  provider: string;
  priceFrom: number;
  price: number;
  saleOff: boolean;
  status: string;
  imageUrl: string;
  catalogUrl: string;
}

interface Response {
  products: ProductApi[];
  baseUrl: string;
}

interface Request {
  type: 'participant' | 'establishment';
  id: number;
  limit?: number;
}

const getProducts = async ({
  type,
  id,
  limit = 3,
}: Request): Promise<Product[]> => {
  const { data } = await pluginApi.get<Response>(
    `premio-ideall/list-products-pi?id=${id}&type=${type}&limit=${limit}`,
  );
  return data.products.map(item => ({
    ...item,
    catalogUrl: `${data.baseUrl}${item.catalogUrl}`,
  }));
};

export default getProducts;
