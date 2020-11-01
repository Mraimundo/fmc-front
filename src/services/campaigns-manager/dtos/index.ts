interface Product {
  id: number;
  volume: number;
}

export interface CreateNewCampaignDTO {
  name: string;
  description: string;
  reward_description: string;
  reward_name: string;
  observation: string;
  start_date: string; // 'dd/mm/yyyy;
  end_date: string; // 'dd/mm/yyyy;
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
  establishments: number[];
  products: Product[];
}

export interface UpdateCampaignDTO extends CreateNewCampaignDTO {
  id: number;
}
