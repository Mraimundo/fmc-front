import { Customer } from './interfaces';

const mock: Customer[] = [
  {
    id: 1,
    name: 'test',
  },
];

export default async (): Promise<Customer[]> => {
  return mock;
};
