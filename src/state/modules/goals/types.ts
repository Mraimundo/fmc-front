export interface Product {
  id: number;
  name: string;
  billing: string;
  volume: string;
}

export interface Billing {
  goal: string;
  realized: string;
  percentage: number;
}

export interface Pog {
  goal: string;
  realized: string;
  percentage: number;
}

export interface BillingPog {
  billing: Billing;
  pog: Pog;
  devolution: {
    value: string;
    realized: number;
    checked: boolean;
  };
}

export interface Campaign {
  id: number;
  title: string;
}

export interface Potentializer {
  name: string;
  goal: string;
  realized: string;
  percentage: number;
}

export interface Infos {
  potential: string;
  points: {
    value: string;
    name: string;
  }[];
  lastUpdate: string;
  excel: string;
}
