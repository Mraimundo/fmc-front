import { EstablishmentTypes, EstablishmentCategory } from 'config/constants';

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
