import { EstablishmentTypes } from 'config/constants';

type SavedSetting = {
  data?: any;
  date?: string;
};

export type PointsToDistribute = {
  general: number | null;
  generalPointId: number | null;
  teamAwards: {
    pointId: number | null;
    points: number;
  } | null;
  resaleCooperative: {
    pointId: number | null;
    points: number;
    maxInvoicePercentage: number;
  } | null;
  allowPartialDistribution?: boolean | null;
  savedSetting?: SavedSetting;
};

export type EstablishmentType = 'Revenda' | 'Cooperativa';

export type Establishment = {
  value: string;
  title: string;
  type: EstablishmentTypes;
};
