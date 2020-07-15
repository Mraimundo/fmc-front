import { Product } from '../interfaces';

const format = (value: number): string => {
  const { format: formatS } = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatS(value)
    .replace(/,/g, 'a')
    .replace(/\./g, ',')
    .replace(/a/g, '.');
};

export interface Response {
  id: number;
  imageUrl: string;
  title: string;
  points: string;
  urlAccess: string;
}

export default (products: Product[]): Response[] => {
  return products.map(item => ({
    id: item.id,
    imageUrl: item.imageUrl,
    title: item.name,
    points: format(item.price),
    urlAccess: item.catalogUrl,
  }));
};
