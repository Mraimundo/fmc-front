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

export type Establishment = {
  value: string;
  title: string;
};

export type EstablishmentType = 'Revenda' | 'Cooperativa';
