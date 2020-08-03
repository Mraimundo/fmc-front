import { pluginApi } from 'services/api';
import { ExtractSummary } from './interfaces';

export default async (): Promise<ExtractSummary[]> => {
  try {
    const { data } = await pluginApi.get<ExtractSummary[]>('statement/resume');
    return data;
  } catch {
    return [];
  }
};
