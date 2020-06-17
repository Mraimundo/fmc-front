import { pluginApi } from 'services/api';
import { RegulationResponse } from './interfaces/IRegulation';

interface ApiResponse {
  regulations: RegulationResponse[];
}

export default async (): Promise<boolean> => {
  try {
    const {
      data: { regulations },
    } = await pluginApi.get<ApiResponse>(
      'participants/regulations/not-accepted',
    );
    return regulations?.length > 0;
  } catch {
    return false;
  }
};
