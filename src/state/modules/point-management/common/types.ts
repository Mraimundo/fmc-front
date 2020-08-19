import { EstablishmentTypes } from 'config/constants';

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
};

export type EstablishmentType = 'Revenda' | 'Cooperativa';

export type Establishment = {
  value: string;
  title: string;
  type: EstablishmentTypes;
};
