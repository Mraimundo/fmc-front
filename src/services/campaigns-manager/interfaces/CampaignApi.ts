import { EstablishmentTypes } from 'config/constants';
import { Status, StatusText, ApproverProfile } from './Campaign';

interface EstablishmentApi {
  id: number;
  name: string;
  cnpj: string;
  client_code: string;
  balance: number;
  type_name: EstablishmentTypes;
}

interface ProductApi {
  id: number;
  name: string;
  description: string;
  created: Date;
  modified: Date;
  segment: string;
  volume: number;
  sellin: number;
  sellout: number;
}

interface MechanicApi {
  id: number;
  name: string;
  picture: string;
  secondary_picture: string;
  third_picture: string;
  fourth_picture: string;
  description: string;
  created: Date;
  modified: Date;
}

export interface ApproverApi {
  id: number;
  name: string;
  nick_name: string;
  cpf: string;
  email: string;
  participant_id: number;
  profile: ApproverProfile;
  comment: 'Aprovado!';
  type: 'approve' | 'disapprove';
  status: 0 | 1;
  created: Date;
  modified: Date;
}

export interface Highlight {
  id: number;
  title: string;
  status: boolean;
}

export interface CampaignApi {
  id: number;
  name: string;
  description: string;
  reward_name: string;
  reward_description: string;
  observation: string;
  start_date: Date;
  end_date: Date;
  fmc_campaign_type_id: number;
  use_points: boolean;
  points: number;
  use_complementary_points: boolean;
  complementary_points: number;
  use_local_points: boolean;
  local_points: number;
  use_crm_points: boolean;
  crm_points: number;
  sell_in_result: number;
  sell_out_result: number;
  results_file: string;
  status: Status;
  created: Date;
  modified: Date;
  participant_id: number;
  status_text: StatusText;
  approvers: ApproverApi[];
  establishments: EstablishmentApi[];
  products: ProductApi[];
  fmc_campaign_type: MechanicApi;
  highlights: Highlight[] | null;
  send_emails: boolean;
  cultivation_id: number;
  cultivation_name: string;
}
