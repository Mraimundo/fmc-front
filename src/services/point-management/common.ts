import { pluginApi } from 'services/api';
import { Points } from 'state/modules/point-management/constants';
import {
  transformTotalPointsToDistributeRawData,
  MountResponse,
} from './transformers/common';
import { establishments } from 'state/modules/point-management/common/mock';

export interface FetchTotalPointsToDistributeRawData {
  undistributed_points: {
    point: {
      id: number;
      value: number;
      type_id: number;
      type_name: Points;
    };
    establishment: {
      id: number;
      name: string;
      cnpj: string;
      category: string;
      team_receives_points: boolean;
      type_id: number;
      type_name: string;
      dc_max_percentage: number;
    };
  }[];
}

export const fetchTotalPointsToDistributeService = async (
  selectedEstablishmentId: number | string,
): Promise<MountResponse | null> => {
  const { data } = await pluginApi.get<FetchTotalPointsToDistributeRawData>(
    `/undistributed-points?establishment_id=${selectedEstablishmentId}`,
  );

  return transformTotalPointsToDistributeRawData(data);
};
