export type RegulationType =
  | 'data_term'
  | 'regulation_of_campaign'
  | 'safra_term'
  | 'promotion_regulation';

export interface Regulation {
  id: number;
  name: string;
  content: string;
  version: number;
  file: string;
  display_option: 'text' | 'pdf';
  type: RegulationType;
  accepted: boolean;
}

export interface RegulationResponse extends Omit<Regulation, 'accepted'> {
  regulation_accepted_logs: {
    id: number;
    created: Date;
  }[];
}

export interface AgreementTerm {
  list_agreement_terms: [{ approved: boolean }];
}
