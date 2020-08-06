import { formatDate } from 'util/datetime';
import { formatProductsInput } from 'util/products';

import { Campaign } from '../interfaces/Campaign';

interface Product {
  id: number;
  title: string;
  value: string;
}

export interface Response {
  id: number;
  imageUrl: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  prizeTitle: string;
  prizeDescription: string;
  products: Product[];
}

export default (data: Campaign): Response => {
  return {
    id: data.id || 0,
    imageUrl: data.mechanic?.homeImage || '',
    title: data.title,
    startDate: data.startDate ? formatDate(data.startDate) : '',
    endDate: data.endDate ? formatDate(data.endDate) : '',
    description: data.description,
    prizeTitle: data.prize.name,
    prizeDescription: data.prize.description,
    products: data.goals.map(item => ({
      id: item.product.id,
      title: item.product.name,
      value: formatProductsInput(item.expectedVolume),
    })),
  };
};
