export interface Campaign {
  id: number;
  description: string;
  title: string;
}

interface Point {
  id: number;
  name: string;
  description: string;
  total: number;
}

export interface ExtractSummary {
  balance: {
    available: number;
    sharedActions: number;
  };
  total: number;
  points?: Point[];
}

interface DistributedPointApi {
  value: number;
  balance_unit_id: number;
  balance_unit_name: string;
}

interface DistributedPoint {
  value: number;
  balanceUnitId: number;
  balanceUnitName: string;
}

interface StatementPointApi {
  id: number;
  value: number;
  description: string;
  date_ref: Date;
  type: string;
  origin_type: string;
  origin_id: number;
  created: Date;
  balance_unit: {
    id: number;
    name: string;
    description: string;
  };
  balance_status: {
    id: number;
    name: string;
  };
  campaign: {
    id: number;
    title: string;
    description: string;
  };
  distributed?: DistributedPointApi[];
}

export interface ExtractApi {
  balance: {
    available: number;
    shared_actions: number;
  };
  resume: {
    total: number;
    points: Point[];
  };
  statement?: {
    campaign: {
      id: number;
      title: string;
      description: string;
      total: number;
    };
    points?: StatementPointApi[];
  };
}

interface StatementPoints {
  id: number;
  value: number;
  description: string;
  dateRef: Date;
  type: string;
  originType: string;
  originId: number;
  created: Date;
  balanceUnit: {
    id: number;
    name: string;
    description: string;
  };
  balanceStatus: {
    id: number;
    name: string;
  };
  campaign: {
    id: number;
    title: string;
    description: string;
  };
  distributed?: DistributedPoint[];
}

interface Statement {
  campaign: {
    id: number;
    title: string;
    description: string;
    total: number;
  };
  points?: StatementPoints[];
}

export interface Extract {
  balance: {
    available: number;
    sharedActions: number;
  };
  resume: {
    total: number;
    points: Point[];
  };
  statement?: Statement;
}
