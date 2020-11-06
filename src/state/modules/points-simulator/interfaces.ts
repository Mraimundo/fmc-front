import { EstablishmentCategory, EstablishmentTypes } from 'config/constants';

export interface SimulationData {
  unitValueInDollar: number;
  revenuesInKilosPerLiter: number;
  revenuesInDollar: number;
  pogInKilosPerLiter: number;
}

export interface Stock {
  inKilosPerLiter: number;
  inDollar: number;
}

export interface Product {
  id: number;
  name: string;
  isEnhancer: boolean;
  isParticipatingProduct: boolean;
  type: {
    id: number;
    name: string;
  };
  revenues: {
    goalInDollar: number;
    realizedInDollar: number;
  };
  pog: {
    goalInDollar: number;
    realizedInDollar: number;
  };
  stock: Stock;
  simulationData: SimulationData;
}

export interface Channel {
  id: number;
  name: string;
  groupName: string;
  code: string;
  type: EstablishmentTypes;
  category: EstablishmentCategory;
}
