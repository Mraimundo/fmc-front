import { Indicator, Product, Award } from './interfaces';

export interface DataValueDTO {
  productId: number;
  value: number;
}

export interface DataCheckDTO {
  productId: number;
  checked: boolean;
}

export enum Mode {
  calculator = 'Calculadora',
  result = 'Resultado',
}

export interface CalcutationDTO {
  indicators: Indicator[];
  products: Product[];
  award: Award;
}
