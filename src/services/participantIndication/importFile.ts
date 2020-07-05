import { pluginApi } from 'services/api';

export default async (fileUrl: string): Promise<void> => {
  await pluginApi.post('participants/indications/import', {
    file: fileUrl,
  });
};
