import { Director } from './interfaces/Campaign';

const mock: Director[] = [
  {
    id: 1,
    name: 'test',
  },
];

export default async (): Promise<Director[]> => {
  return mock;
};
