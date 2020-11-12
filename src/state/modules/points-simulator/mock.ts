import { EstablishmentCategory, EstablishmentTypes } from 'config/constants';
import { emptyFetchState } from 'state/utils';
import { Mode } from './types';
import { IndicatorType, UnitType, PointsSimulatorState } from './interfaces';

const mock: PointsSimulatorState = {
  fetchChannel: emptyFetchState,
  mode: Mode.calculator,
  dollarBaseValue: 5.38,
  fetchConfiguration: emptyFetchState,
  configuration: {
    partialDate: new Date(),
    pogRealizedNetPercentage: 10,
  },
  channel: {
    id: 1,
    name: 'Estabelecimento Teste 1',
    groupName: 'Teste',
    code: 'Teste',
    type: EstablishmentTypes.Resale,
    category: EstablishmentCategory.earth,
  },
  fetchProducts: emptyFetchState,
  products: [
    {
      id: 1,
      name: 'Produto 1',
      isEnhancer: false,
      isParticipatingProduct: true,
      type: {
        id: 1,
        name: 'Inseticida',
      },
      revenues: {
        goalInDollar: 1333000,
        realizedInDollar: 666000,
        goalInKilosByLiter: 1333000,
        realizedInKilosByLiter: 666000,
      },
      pog: {
        goalInDollar: 1333000,
        realizedInDollar: 666000,
        goalInKilosByLiter: 1333000,
        realizedInKilosByLiter: 666000,
      },
      stock: {
        inKilosPerLiter: 90000,
        inDollar: 1000000,
      },
      simulationData: {
        unitValueInDollar: 0,
        revenuesInKilosPerLiter: 0,
        revenuesInDollar: 0,
        pogInKilosPerLiter: 0,
        pogInDollar: 0,
        pogUnitValueInDollar: 0,
        pogRealizedNetInDollar: 0,
        pogRealizedNetInReal: 0,
      },
    },
  ],
  fetchCalculate: emptyFetchState,
  fetchIndicators: emptyFetchState,
  indicators: [
    {
      title: 'Faturamento',
      type: IndicatorType.revenues,
      isRegisteredProduct: false,
      unitType: UnitType.dollar,
      currentGoal: 1333000,
      currentRealized: 666000,
      lastRealized: 1333000,
      percentageRealized: 50,
      simulationData: {
        totalPercentageRealized: 50,
        totalRealized: 666000,
      },
    },
  ],
};

export default mock;
