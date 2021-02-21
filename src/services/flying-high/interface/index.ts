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
