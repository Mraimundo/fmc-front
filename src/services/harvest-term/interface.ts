export interface HarvestApi {
  accession_is_required: boolean;
  cover_picture: string;
  description: string;
  end_date: string;
  end_date_view: string;
  establishment_types: any[];
  id: number;
  internal_picture: string;
  regulations: any[];
  roles: any[];
  start_date: string;
  start_date_view: string;
  title: string;
}

export interface Harvest {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
}

export interface Filters {
  campaignId: number;
  approved?: number;
  regionalId?: number;
  directorship?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface AgreementTermApi {
  id: number;
  url: string;
  participant_id: number;
  regulation_id: number;
  approved: boolean;
  reason: string;
  approved_by: number;
  created: string;
  modified: string;
  email_sent: boolean;
  campaign_id: number;
  campaign: {
    id: number;
    title: string;
  };
  participant: {
    id: number;
    name: string;
  };
  regulation: {
    id: number;
    name: string;
  };
  establishment: {
    id: number;
    name: string;
    cnpj: string;
    client_code: string;
    client_group: string;
  };
}

export interface AgreementTerm {
  id: number;
  harvest: string;
  clientGroup: string;
  agreement: string;
  requestedAt: string;
  approved: boolean;
  reason: string;
  status?: string;
  modified: string;
}

export interface CommentApi {
  id: number;
  agreement_term_id: number;
  participant_id: number;
  comment: string;
  created: string;
  modified: string;
  participant: {
    id: number;
    name: string;
  };
}

export interface Comment {
  id: number;
  comment: string;
  dateTime: string;
  participantName: string;
}
