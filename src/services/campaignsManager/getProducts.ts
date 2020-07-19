import { Product } from './interfaces';

const mock: Product[] = [
  {
    id: 1,
    name: 'test',
  },
];

export default async (): Promise<Product[]> => {
  return mock;
};
