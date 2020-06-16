import { pluginApi } from 'services/api';
import { Regulation, RegulationResponse } from './interfaces/IRegulation';

export default async (id: string | number): Promise<Regulation> => {
  const { data } = await pluginApi.get<RegulationResponse>(
    `participants/regulations/${id}`,
  );
  return {
    ...data,
    accepted: data.regulation_accepted_logs?.length > 0,
  };
};
