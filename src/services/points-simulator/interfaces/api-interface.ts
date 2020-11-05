import { EstablishmentTypes, EstablishmentCategory } from 'config/constants';

export interface ProductType {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  type: ProductType;
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
  name: string;
  group_name: string;
  code: string;
  type: EstablishmentTypes;
  category: EstablishmentCategory;
  products: Product[];
}

export interface ApiResponse {
  channels: Channel[];
}
