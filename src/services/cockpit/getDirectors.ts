import { pluginApi } from 'services/api';

export interface Director {
  id: string;
  name: string;
}

interface DirectorApi {
  directorship: string;
}

interface ApiResponse {
  data: DirectorApi[];
}

export default async (): Promise<Director[]> => {
  /* return [
    {
      directorship: 'Cerrado Oeste',
    },
  ];
  /* Api params ?page=1&limit=15&order=desc&establishments[0]=1&regional[0]=Arroz */
  const {
    data: { data },
  } = await pluginApi.get<ApiResponse>('cockpit/directorships?limit=100');
  const arr = Array.from(new Set(data.map(i => i.directorship)));
  return arr.map(item => ({
    id: item,
    name: item,
  }));
};
