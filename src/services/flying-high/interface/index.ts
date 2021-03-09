export interface Coupon {
  id: number;
  number: string;
  series: string;
  full_number: string;
  participant_id: number;
  invoice_id: number;
  assignment_date: Date;
  origin: string;
  created: Date;
  modified: Date;
}

export interface ParticipantDataRaw {
  id: number;
  name: string;
  role_identifier: string;
}

export interface ParticipantData {
  id: number;
  name: string;
  profile: string;
}
