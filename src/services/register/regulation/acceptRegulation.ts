import { pluginApi } from 'services/api';

export default async (
  id: number | string,
  version: number | string,
): Promise<void> => {
  await pluginApi.post(`participants/regulations/accept/${id}/${version}`);
};
