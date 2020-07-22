import { Category } from './interfaces/Campaign';

const mock: Category[] = [
  {
    id: 1,
    name: 'test',
  },
];

export default async (): Promise<Category[]> => {
  return mock;
};
