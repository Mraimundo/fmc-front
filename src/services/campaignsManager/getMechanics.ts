import { Mechanic } from './interfaces/Campaign';

const mock: Mechanic[] = [
  {
    id: 1,
    name: 'test',
  },
];

export default async (): Promise<Mechanic[]> => {
  return mock;
};
