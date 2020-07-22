import { Regional } from './interfaces/Campaign';

const mock: Regional[] = [
  {
    id: 1,
    name: 'test',
  },
];

export default async (): Promise<Regional[]> => {
  return mock;
};
