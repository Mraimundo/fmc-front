import { pluginApi } from 'services/api';
import { Regulation, RegulationResponse } from './interfaces/IRegulation';

interface ApiResponse {
  regulations: RegulationResponse[];
}

export default async (): Promise<Omit<Regulation, 'content'>[]> => {
  const [
    {
      data: { regulations: accepted },
    },
    {
      data: { regulations: notAccepted },
    },
  ] = await Promise.all([
    pluginApi.get<ApiResponse>('participants/regulations'),
    pluginApi.get<ApiResponse>('participants/regulations/not-accepted'),
  ]);

  return accepted
    .map(item => ({ ...item, accepted: true }))
    .concat(notAccepted.map(item => ({ ...item, accepted: false })));
};
