import { pluginApi } from 'services/api';
import { PointsToDistribute } from 'state/modules/point-management/common/types';
import { Points } from 'state/modules/point-management/constants';
import { transformTotalPointsToDistributeRawData } from './transformers/common';

export type ScoredParticipantsDataDistribution = {
  id: number;
  value: number;
};

export interface DataDistribution {
  id: number;
  establishment?: {
    id: number | string;
    marketplace: number;
    rebate: number;
  };
  participants?: ScoredParticipantsDataDistribution[];
}

export type UndistributedPoint = {
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
};

export interface FetchTotalPointsToDistributeRawData {
  undistributed_points: UndistributedPoint[];
}

export const fetchTotalPointsToDistributeService = async (
  selectedEstablishmentId: number | string,
): Promise<PointsToDistribute | null> => {
  const { data } = await pluginApi.get<FetchTotalPointsToDistributeRawData>(
    `/undistributed-points?establishment_id=${selectedEstablishmentId}`,
  );

  return transformTotalPointsToDistributeRawData(data);
};

export const distributePointsService = async (
  dataDistribution: DataDistribution,
): Promise<void> => {
  await pluginApi.post<void>(`undistributed-points/distribute`, {
    undistributed_points: dataDistribution,
  });
};
