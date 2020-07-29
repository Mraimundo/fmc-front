import { PointsToDistribute } from 'state/modules/point-management/common/types';

export interface RulesParams {
  checked: boolean;
  getResponse(): PointsToDistribute | null;
}
