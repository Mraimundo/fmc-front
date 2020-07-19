import { Channel } from './interfaces';

const mock: Channel[] = [
  {
    id: 1,
    name: 'test',
  },
];

export default async (): Promise<Channel[]> => {
  return mock;
};
