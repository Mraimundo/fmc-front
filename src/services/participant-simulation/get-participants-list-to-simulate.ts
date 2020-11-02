export interface Participant {
  id: number;
  clientCode: number;
  name: string;
  email: string;
}

export interface FilterOptions {
  directorId?: string;
  regionalId?: string;
  typeId?: number;
  channelId?: number;
  search?: string;
}

export default async (filters: FilterOptions): Promise<Participant[]> => {
  console.log(filters);
  const mock = [
    {
      id: 1,
      clientCode: 23456,
      name: 'Teste Nome',
      email: 'teste@nome.com',
    },
  ];

  return mock;
};
