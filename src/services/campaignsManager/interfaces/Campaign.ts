export const CAMPAIGN_STATUS = {
  WAITING_APPROVAL: 3,
  BUILDING: 2,
  ACTIVE: 1,
  CANCELED: 0,
};

export type Status =
  | typeof CAMPAIGN_STATUS.ACTIVE
  | typeof CAMPAIGN_STATUS.BUILDING
  | typeof CAMPAIGN_STATUS.CANCELED
  | typeof CAMPAIGN_STATUS.WAITING_APPROVAL;

export interface Mechanic {
  id: number;
  name: string;
}

export interface Regional {
  id: number;
  name: string;
}

export interface Director {
  id: number;
  name: string;
}

export interface Customer {
  id: number;
  name: string;
  regional: Regional[];
  directors: Director[];
}

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
}

export interface Prize {
  name: string;
  description: string;
}

export interface Goal {
  product: Product;
  expectedVolume: number;
}

export interface Campaign {
  mechanic: Mechanic;
  customers: Customer[];
  startDate: Date;
  endDate: Date;
  prize: Prize;
  affordPoints: number;
  complementaryAffordPoints: number;
  complementaryLocalBudget: number;
  complementaryCrmBudget: number;
  expectedSellIn: number;
  expectedSellOut: number;
  goals: Goal[];
  observation: string;
  status: Status;
}
