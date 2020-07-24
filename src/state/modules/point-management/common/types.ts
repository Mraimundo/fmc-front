export type PointsToDistribute = {
  general: number | null;
  teamAwards: {
    points: number;
  } | null;
  resaleCooperative: {
    points: number;
    maxInvoicePercentage: number;
  } | null;
};

export type Establishment = {
  value: string;
  title: string;
};

export type EstablishmentType = 'Revenda' | 'Cooperativa';
