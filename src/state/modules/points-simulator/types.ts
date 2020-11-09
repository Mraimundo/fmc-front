import { Indicator } from './interfaces';

export interface DataValueDTO {
  productId: number;
  value: number;
}

export enum Mode {
  calculator = 'Calculadora',
  result = 'Resultado',
}

export interface CalcutationDTO {
  indicators: Indicator[];
}
