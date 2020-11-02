import { Product } from './interfaces/Campaign';

const mock: Product[] = [
  {
    id: 1,
    name: 'test',
  },
];

export default async (): Promise<Product[]> => {
  return mock;
};
