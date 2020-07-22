import { Customer } from './interfaces/Campaign';

const mock: Customer[] = [
  {
    id: 1,
    name: 'test',
    directors: [
      {
        id: 1,
        name: 'test',
      },
    ],
    regional: [
      {
        id: 1,
        name: 'test',
      },
    ],
  },
];

export default async (): Promise<Customer[]> => {
  return mock;
};
