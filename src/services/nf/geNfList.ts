import { pluginApi } from 'services/api';

export default async () => {
  try {
    const { data } = await pluginApi.get('/participants/uploadNota?status=0');
    return data.notas;
  } catch {
    return [];
  }
};
