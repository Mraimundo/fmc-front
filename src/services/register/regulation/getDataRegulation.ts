import { IProfile, PROFILES } from 'config/constants';
import { pluginApi } from 'services/api';
import { Regulation } from './interfaces/IRegulation';

interface ApiResponse {
  regulations: Regulation[];
}

export default async (profile: IProfile): Promise<Regulation> => {
  let extraParams = '';
  if (profile === PROFILES.producer) {
    extraParams = '?type=data_term_produtores';
  }
  const { data } = await pluginApi.get<ApiResponse>(
    `regulations/terms${extraParams}`,
  );
  return data.regulations[0];
};
