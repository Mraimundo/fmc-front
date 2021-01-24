import { pluginApi } from 'services/api';

export default async (receiptId: number): Promise<any[]> => {
  try {
    const { data } = await pluginApi.post<any>(
      '/participants/upload-nota/invoice',
      { id: receiptId },
    );
    return data;
  } catch {
    return [];
  }
};
