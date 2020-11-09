import { EstablishmentTypes, EstablishmentCategory } from 'config/constants';

export interface ProductType {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  type_id: number;
  type_name: string;
  is_enhancer: boolean;
  is_a_participating_product: boolean;
  revenues_goal: number;
  revenues_realized: number;
  pog_goal: number;
  pog_realized: number;
  stock_in_kg_per_liter: number;
  stock_in_dolar: number;
}

export interface Channel {
  id: number;
  name: string;
  group_name: string;
  code: string;
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
