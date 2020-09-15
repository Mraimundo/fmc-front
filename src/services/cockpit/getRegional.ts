import { pluginApi } from 'services/api';

interface Regional {
  id: number;
  name: string;
}

interface ApiResponse {
  data: Regional[];
}

const mock = [
  {
    id: 14,
    name: 'Ponta Grossa',
  },
];

const fake = true;

export default async (): Promise<Regional[]> => {
  if (fake) {
    return mock;
  }

  const {
    data: { data },
  } = await pluginApi.get<ApiResponse>('cockpit/regional?limit=100');
  return data.map(({ id, name }) => ({
    id,
    name,
  }));
};
