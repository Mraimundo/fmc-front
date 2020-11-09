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

export enum IndicatorType {
  revenues = 'Faturamento',
  premio = 'Premio',
  hero = 'Hero',
  talisman = 'Talisman',
}

export enum UnitType {
  dollar = 'Dolar',
  liter = 'Litro',
  kilo = 'Kilo',
}

export interface Indicator {
  title: string;
  type: IndicatorType;
  unitType: UnitType;
  isRegisteredProduct: boolean;
  lastRealized: number;
  currentGoal: number;
  currentRealized: number;
  percentageRealized: number;
  simulationData: {
    totalRealized: number;
    totalPercentageRealized: number;
  };
}
