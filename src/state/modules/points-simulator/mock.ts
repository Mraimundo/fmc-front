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
    minimumRebatePercentageToMakePoints: 70,
    minimumSellerPercentageToMakePoints: 70,
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
      checked: false,
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
        pogRealizedNetInDollarSimulated: 0,
        pogRealizedNetInRealSimulated: 0,
        pogRealizedNetInDollarTotal: 0,
        pogRealizedNetInRealTotal: 0,
      },
      simulationPoints: {
        rebateReachedInRealSimulated: 0,
        rebateReachedInRealSimulatedButUsedToGetTotal: 0,
        rebateReachedInRealRealized: 0,
        rebateReachedInRealTotal: 0,
        sellerReachedInRealSimulated: 0,
        sellerReachedInRealSimulatedButUsedToGetTotal: 0,
        sellerReachedInRealRealized: 0,
        sellerReachedInRealTotal: 0,
        additionalMarginSimulated: 0,
        additionalMarginRealized: 0,
        additionalMarginTotal: 0,
      },
      awardsParamsToPay: {
        rebatePercentage: 3.5,
        sellerValueInReal: 2.0,
        additionalMarginPercentage: 0.25,
      },
      extraPercentageToPayByEnhancerProduct: 0.5,
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
        totalSimulated: 0,
      },
    },
  ],
  // MAYCONN VER DEPOIS SE OS VALORES ABAIXO REALMENTE SAO 0
  award: {
    simulatedRebate: 0,
    realizedRebate: 0,
    totalRebate: 0,
    simulatedSeller: 0,
    realizedSeller: 0,
    totalSeller: 0,
    simulatedAdditionalMargin: 0,
    realizedAdditionalMargin: 0,
    totalAdditionalMargin: 0,
  },
};

export default mock;
