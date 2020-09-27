import { ApproverProfile as IApproverProfile } from 'config/constants';

export const CAMPAIGN_STATUS = {
  WAITING_APPROVAL: 3,
  BUILDING: 2,
  ACTIVE: 1,
  CANCELED: 0,
};

export const CAMPAIGN_STATUS_TEXT = {
  UNDER_ANALYSIS: 'under_analysis',
  ON_APPROVAL: 'on_approval',
  PUBLISHED: 'published',
  CANCELED: 'canceled',
  COMPLETED: 'completed',
};

export type StatusText =
  | typeof CAMPAIGN_STATUS_TEXT.UNDER_ANALYSIS
  | typeof CAMPAIGN_STATUS_TEXT.ON_APPROVAL
  | typeof CAMPAIGN_STATUS_TEXT.PUBLISHED
  | typeof CAMPAIGN_STATUS_TEXT.CANCELED
  | typeof CAMPAIGN_STATUS_TEXT.COMPLETED;

export type Status =
  | typeof CAMPAIGN_STATUS.ACTIVE
  | typeof CAMPAIGN_STATUS.BUILDING
  | typeof CAMPAIGN_STATUS.CANCELED
  | typeof CAMPAIGN_STATUS.WAITING_APPROVAL;

export interface CampaignStatus {
  id: Status;
  name: string;
  statusText: StatusText;
}

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
  expectedSellIn: number;
  expectedSellOut: number;
}

export type ApproverProfile = IApproverProfile;
export type ApprovalStatus = 'approved' | 'disapproved' | 'pending';

export interface Approver {
  profile: ApproverProfile;
  status: ApprovalStatus;
  comments: string[];
}

export interface Comment {
  message: string;
  name: string;
  cpf: string;
  email: string;
  date: Date;
}

export interface Highlight {
  id: number | null;
  status: boolean;
}

export interface Campaign {
  id: number | null;
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
  status: CampaignStatus;
  createdAt: Date | null;
  approvers: Approver[];
  comments: Comment[];
  highlight: Highlight;
  sendEmail: boolean;
  profileTurnToApprove?: ApproverProfile | null;
}
