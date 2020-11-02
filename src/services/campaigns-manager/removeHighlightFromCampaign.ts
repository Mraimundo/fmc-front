import { pluginApi } from 'services/api';

export default async (highlightId: number): Promise<void> => {
  await pluginApi.delete(`highlights/remove/${highlightId}`);
};
