import { pluginApi } from 'services/api';
import { ExtractApi, Extract as IExtract } from './interfaces';
import transformer from './transformers/apiToDisplay';

export default async (campaignId: number): Promise<IExtract> => {
  const { data } = await pluginApi.get<ExtractApi>(`statement/${campaignId}`);
  return transformer(data);
};
