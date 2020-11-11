import { EstablishmentCategory, EstablishmentTypes } from 'config/constants';

export interface SimulationData {
  unitValueInDollar: number;
  revenuesInKilosPerLiter: number;
  revenuesInDollar: number;
  pogUnitValueInDollar: number;
  pogInKilosPerLiter: number; // Agora será o dado digitado pelo usuario
  pogInDollar: number; // unitario * valor de entrada do usuário
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
    goalInKilosByLiter: number;
    realizedInKilosByLiter: number;
  };
  pog: {
    goalInDollar: number;
    realizedInDollar: number;
    goalInKilosByLiter: number;
    realizedInKilosByLiter: number;
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
  pog = 'Pog',
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

export interface Configuration {
  partialDate?: Date;
}
