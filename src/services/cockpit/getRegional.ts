import { pluginApi } from 'services/api';

export interface Regional {
  id: number;
  name: string;
}

interface ApiResponse {
  data: Regional[];
}

export default async (directorName?: string): Promise<Regional[]> => {
  let extraSearch = '';

  if (directorName) {
    extraSearch = `&directorships[0]=${directorName}`;
  }

  const {
    data: { data },
  } = await pluginApi.get<ApiResponse>(
    `cockpit/regional?limit=100${extraSearch}`,
  );
  return data.map(({ id, name }) => ({
    id,
    name,
  }));
};
