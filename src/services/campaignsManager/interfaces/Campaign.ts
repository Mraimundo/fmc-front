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
  homeImage: string;
  internalImage: string;
  emailImage: string;
  campaignListImage: string;
  description: string;
  created: Date;
}

export interface Regional {
  id: number;
  name: string;
  code: string;
  directorship: string;
  upnDv: string;
  upnDvParticipantId: number;
  upnGrv: string;
  upnGrvParticipantId: number;
  generatedAt: Date;
  created: Date;
}

export interface Director {
  id: number;
  name: string;
  code: string;
  directorship: string;
  upnDv: string;
  upnDvParticipantId: number;
  upnGrv: string;
  upnGrvParticipantId: number;
  generatedAt: Date;
  created: Date;
}

export interface Customer {
  id: number;
  name: string;
  cnpj: string;
}

export interface Audience {
  customer: Customer;
  balance: number;
}

export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  /* description: string;
  created: Date;
  segment: Category; */
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
  title: string;
  description: string;
  mechanic: Mechanic | null;
  audience: Audience[];
  startDate: Date | null;
  endDate: Date | null;
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
