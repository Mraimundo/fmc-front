import { EstablishmentTypes, EstablishmentCategory } from 'config/constants';

export interface ProductType {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  segment_id: number;
  segment: string;
  is_enhancer: boolean;
  is_a_participating_product: boolean;
  revenues_goal_in_dollar: number;
  revenues_realized_in_dollar: number;
  revenues_goal_in_kilos_by_liter: number;
  revenues_realized_in_kilos_by_liter: number;
  pog_goal_in_dollar: number;
  pog_realized_in_dollar: number;
  pog_goal_in_kilos_by_liter: number;
  pog_realized_in_kilos_by_liter: number;
  stock_in_kg_per_liter: number;
  stock_in_dolar: number;
  rebate_percentage_to_pay: number;
  extra_percentage_to_pay_per_enhancer_product: number;
  seller_value_in_real_to_pay: number;
  additional_margin_percentage_to_pay: number;
}

export interface Channel {
  id: number;
  name: string;
  client_group: string;
  client_code: string;
  type: EstablishmentTypes;
  category: EstablishmentCategory;
}

export interface ApiResponse {
  channels: Channel[];
}

export interface Indicators {
  revenues_last_realized_in_dollar: number;
  revenues_current_goal_in_dollar: number;
  revenues_current_realized_in_dollar: number;
  pog_last_realized_in_dollar: number;
  pog_current_goal_in_dollar: number;
  pog_current_realized_in_dollar: number;
  hero_last_realized_in_Liter: number;
  hero_current_goal_in_Liter: number;
  hero_current_realized_in_Liter: number;
  premio_last_realized_in_Liter: number;
  premio_current_goal_in_Liter: number;
  premio_current_realized_in_Liter: number;
  talisman_last_realized_in_Liter: number;
  talisman_current_goal_in_Liter: number;
  talisman_current_realized_in_Liter: number;
}

export interface Configuration {
  partial_date: Date;
  pog_realized_net_percentage: number;
  minimum_rebate_percentage_to_participate: number;
  minimum_seller_percentage_to_participate: number;
}

export interface SimulationData {
  id: number;
  created: Date;
  name: string;
  content: string;
  client_group: string;
  establishment_id: number;
}
