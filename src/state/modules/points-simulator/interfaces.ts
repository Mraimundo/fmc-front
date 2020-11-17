import { EstablishmentCategory, EstablishmentTypes } from 'config/constants';
import { FetchState } from '@types';
import { Mode } from './types';

export interface SimulationData {
  unitValueInDollar: number;
  revenuesInKilosPerLiter: number;
  revenuesInDollar: number;
  pogInKilosPerLiter: number;
  pogUnitValueInDollar: number;
  pogInDollar: number;
  pogRealizedNetInDollarSimulated: number;
  pogRealizedNetInRealSimulated: number;

  // MAYCONN
  pogRealizedNetInDollarTotal: number;
  pogRealizedNetInRealTotal: number;
}

export interface Stock {
  inKilosPerLiter: number;
  inDollar: number;
}

export interface PointsData {
  rebateReachedInRealSimulated: number;
  rebateReachedInRealAccumulated: number;
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
  simulationPoints: PointsData;
  percentageAwardToPay: {
    rebate: number;
  };
  extraPercentageToPayByEnhancerProduct: number;
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

export interface Award {
  totalRebate: number;
  simulatedRebate: number;
}

export interface Configuration {
  partialDate?: Date;
  pogRealizedNetPercentage: number;
  minimumRebatePercentageToMakePoints: number;
}

export type PointsSimulatorState = {
  mode: Mode;
  fetchChannel: FetchState;
  channel: Channel | null;
  fetchProducts: FetchState;
  products: Product[];
  dollarBaseValue: number;
  fetchCalculate: FetchState;
  fetchIndicators: FetchState;
  indicators: Indicator[];
  award: Award;
  fetchConfiguration: FetchState;
  configuration: Configuration;
};
