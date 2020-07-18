import { pluginApi } from 'services/api';

export interface FetchTotalPointsToDistributeRawData {
  total: number;
}

export const fetchTotalPointsToDistributeService = async (): Promise<
  FetchTotalPointsToDistributeRawData
> => {
  const { data } = await pluginApi.get<FetchTotalPointsToDistributeRawData>(
    '/url/total-to-distribute',
  );

  return data;
};
