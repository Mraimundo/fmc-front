import { Category } from './interfaces';

const mock: Category[] = [
  {
    id: 1,
    name: 'test',
  },
];

export default async (): Promise<Category[]> => {
  return mock;
};
