import { pluginApi } from 'services/api';

export interface Response {
  id: number;
  name: string;
  content: string;
}

export default async (): Promise<Response> => {
  const { data } = await pluginApi.get<Response>('campaigns/regulation');
  return data;
};
