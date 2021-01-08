import {
  Product,
  Indicator,
  IndicatorType,
  Configuration,
} from '../interfaces';

interface DefaultProps {
  indicators: Indicator[];
  configuration: Configuration;
}

interface CustomProps extends DefaultProps {
  products: Product[];
  dollarBase: number;
}

interface CheckIndicatorsToPayExtra {
  shouldPayExtraForHero: boolean;
  shouldPayExtraForTalisman: boolean;
  shouldPayExtraForPremio: boolean;
}

interface SimulatedRebatePoints {
  rebateReachedInRealSimulated: number;
  rebateReachedInRealAccumulated: number;
}

const getIndicatorsToPayExtra = (
  indicators: Indicator[],
  type: 'simulated' | 'total',
): CheckIndicatorsToPayExtra => {
  const heroIndicator = indicators.find(
    item => item.type === IndicatorType.hero,
  );
  const talismanIndicator = indicators.find(
    item => item.type === IndicatorType.talisman,
  );
  const premioIndicator = indicators.find(
    item => item.type === IndicatorType.premio,
  );

  const shouldPayExtraForHero =
    ((heroIndicator?.simulationData.totalPercentageRealized || 0) >= 100 ||
      type === 'simulated') &&
    (heroIndicator?.currentGoal || 0) > 0;
  const shouldPayExtraForTalisman =
    ((talismanIndicator?.simulationData.totalPercentageRealized || 0) >= 100 ||
      type === 'simulated') &&
    (talismanIndicator?.currentGoal || 0) > 0;
  const shouldPayExtraForPremio =
    ((premioIndicator?.simulationData.totalPercentageRealized || 0) >= 100 ||
      type === 'simulated') &&
    (premioIndicator?.currentGoal || 0) > 0;

  return {
    shouldPayExtraForHero,
    shouldPayExtraForTalisman,
    shouldPayExtraForPremio,
  };
};

const getHowManyEnhancerProductsReachedTheGoals = (
  indicators: Indicator[],
  type: 'simulated' | 'total',
): number => {
  const {
    shouldPayExtraForHero,
    shouldPayExtraForPremio,
    shouldPayExtraForTalisman,
  } = getIndicatorsToPayExtra(indicators, type);

  let result = 0;
  if (shouldPayExtraForHero) result += 1;
  if (shouldPayExtraForPremio) result += 1;
  if (shouldPayExtraForTalisman) result += 1;

  return result;
};

const getIndicatorPercentageRealizedFromIndicators = (
  indicators: Indicator[],
  indicatorType: IndicatorType,
): number => {
  return (
    indicators.find(item => item.type === indicatorType)?.simulationData
      .totalPercentageRealized || 0
  );
};

const getRebateFinalMultiplierValue = ({
  configuration,
  indicators,
}: DefaultProps): number => {
  const { minimumRebatePercentageToMakePoints } = configuration;

  const pogPercentageRealized = getIndicatorPercentageRealizedFromIndicators(
    indicators,
    IndicatorType.pog,
  );
  const revenuesPercentageRealized = getIndicatorPercentageRealizedFromIndicators(
    indicators,
    IndicatorType.revenues,
  );

  if (
    pogPercentageRealized >= minimumRebatePercentageToMakePoints &&
    revenuesPercentageRealized >= minimumRebatePercentageToMakePoints
  ) {
    return 1;
  }

  return 0;
};

const getSellerFinalMultiplierValue = ({
  configuration,
  indicators,
}: DefaultProps): number => {
  const { minimumSellerPercentageToMakePoints } = configuration;

  const pogPercentageRealized = getIndicatorPercentageRealizedFromIndicators(
    indicators,
    IndicatorType.pog,
  );
  const revenuesPercentageRealized = getIndicatorPercentageRealizedFromIndicators(
    indicators,
    IndicatorType.revenues,
  );

  if (
    pogPercentageRealized >= minimumSellerPercentageToMakePoints &&
    revenuesPercentageRealized >= minimumSellerPercentageToMakePoints
  ) {
    return 1;
  }

  return 0;
};

interface PercentageValueToApplyProps extends DefaultProps {
  resultType: 'simulated' | 'total';
  paymentType: 'seller' | 'rebate';
}

const getPercentageValueToApplyInDecimal = ({
  configuration,
  indicators,
  resultType,
  paymentType,
}: PercentageValueToApplyProps): number => {
  const {
    minimumRebatePercentageToMakePoints,
    minimumSellerPercentageToMakePoints,
  } = configuration;

  const pogPercentageRealized = getIndicatorPercentageRealizedFromIndicators(
    indicators,
    IndicatorType.pog,
  );
  const revenuesPercentageRealized = getIndicatorPercentageRealizedFromIndicators(
    indicators,
    IndicatorType.revenues,
  );

  if (resultType === 'simulated') {
    return 1;
  }

  if (pogPercentageRealized >= 100 && revenuesPercentageRealized >= 100) {
    return 1;
  }

  if (paymentType === 'rebate') {
    if (
      pogPercentageRealized >= minimumRebatePercentageToMakePoints &&
      revenuesPercentageRealized >= minimumRebatePercentageToMakePoints
    ) {
      return 0.5;
    }
  }

  if (paymentType === 'seller') {
    if (
      pogPercentageRealized >= minimumSellerPercentageToMakePoints &&
      revenuesPercentageRealized >= minimumSellerPercentageToMakePoints
    ) {
      return 0.5;
    }
  }

  return 0;
};

interface RebateReachedValues {
  rebateReachedInRealSimulated: number;
  rebateReachedInRealAccumulated: number;
}

interface RebateReachedValuesProps {
  product: Product;
  numberOfTimesExtraShouldBePaidSimulated: number;
  numberOfTimesExtraShouldBePaidAccumalated: number;
  percentageValueToApplyInDecimalInTotalAmount: number;
  percentageValueToApplyInDecimalInSimulatedAmount: number;
  finalMultiplierValue: number;
}

const getRebateReachedValuesInReal = ({
  product,
  finalMultiplierValue,
  numberOfTimesExtraShouldBePaidSimulated,
  numberOfTimesExtraShouldBePaidAccumalated,
  percentageValueToApplyInDecimalInSimulatedAmount,
  percentageValueToApplyInDecimalInTotalAmount,
}: RebateReachedValuesProps): RebateReachedValues => {
  const extraPercentageToPaySimulated =
    product.extraPercentageToPayByEnhancerProduct *
    numberOfTimesExtraShouldBePaidSimulated;

  const extraPercentageToPayAccumulated =
    product.extraPercentageToPayByEnhancerProduct *
    numberOfTimesExtraShouldBePaidAccumalated;

  const rebatePercentageToPayInTotalAmount =
    product.awardsParamsToPay.rebatePercentage *
    percentageValueToApplyInDecimalInTotalAmount;

  const rebatePercentageToPayInSimulatedAmount =
    product.awardsParamsToPay.rebatePercentage *
    percentageValueToApplyInDecimalInSimulatedAmount;

  if (product.id === 15) {
    console.log('loucura');
    console.log('product', product);
    console.log(
      'percentageValueToApplyInDecimalInSimulatedAmount',
      percentageValueToApplyInDecimalInSimulatedAmount,
    );
    console.log(
      'rebatePercentageToPayInSimulatedAmount',
      rebatePercentageToPayInSimulatedAmount,
    );
  }

  const percentageTotalToPayInTotalAmount =
    rebatePercentageToPayInTotalAmount + extraPercentageToPayAccumulated;
  const percentageTotalToPayInSimulatedAmount =
    rebatePercentageToPayInSimulatedAmount + extraPercentageToPaySimulated;

  const rebateReachedInRealSimulated =
    (product.simulationData.pogRealizedNetInRealSimulated *
      percentageTotalToPayInSimulatedAmount) /
    100; // *
  // finalMultiplierValue;

  const rebateReachedInRealAccumulated =
    ((product.simulationData.pogRealizedNetInRealSimulated *
      percentageTotalToPayInTotalAmount) /
      100 +
      (product.simulationData.pogRealizedNetInRealTotal *
        percentageTotalToPayInTotalAmount) /
        100) *
    finalMultiplierValue;

  return { rebateReachedInRealSimulated, rebateReachedInRealAccumulated };
};

interface SellerReachedValues {
  sellerReachedInRealSimulated: number;
  sellerReachedInRealAccumulated: number;
}

interface SellerReachedValuesProps {
  product: Product;
  finalMultiplierValue: number;
  percentageValueToApplyInDecimalInTotalAmount: number;
  percentageValueToApplyInDecimalInSimulatedAmount: number;
}
const getSellerReachedValuesInReal = ({
  product,
  finalMultiplierValue,
  percentageValueToApplyInDecimalInTotalAmount,
  percentageValueToApplyInDecimalInSimulatedAmount,
}: SellerReachedValuesProps): SellerReachedValues => {
  const sellerReachedInRealSimulated =
    product.simulationData.pogInKilosPerLiter *
    (product.awardsParamsToPay.sellerValueInReal *
      percentageValueToApplyInDecimalInSimulatedAmount);

  const sellerReachedInRealAccumulated =
    (product.simulationData.pogInKilosPerLiter *
      (product.awardsParamsToPay.sellerValueInReal *
        percentageValueToApplyInDecimalInTotalAmount) +
      product.pog.realizedInKilosByLiter *
        (product.awardsParamsToPay.sellerValueInReal *
          percentageValueToApplyInDecimalInTotalAmount)) *
    finalMultiplierValue;

  return { sellerReachedInRealSimulated, sellerReachedInRealAccumulated };
};

export default ({
  products,
  indicators,
  configuration,
  dollarBase,
}: CustomProps): Product[] => {
  const numberOfTimesExtraShouldBePaidSimulated = getHowManyEnhancerProductsReachedTheGoals(
    indicators,
    'simulated',
  );
  const numberOfTimesExtraShouldBePaidAccumalated = getHowManyEnhancerProductsReachedTheGoals(
    indicators,
    'total',
  );

  const rebateFinalMultiplierValue = getRebateFinalMultiplierValue({
    configuration,
    indicators,
  });

  const sellerFinalMultiplierValue = getSellerFinalMultiplierValue({
    configuration,
    indicators,
  });

  const rebatePercentageValueToApplyInDecimalInTotalAmount = getPercentageValueToApplyInDecimal(
    {
      configuration,
      indicators,
      resultType: 'total',
      paymentType: 'rebate',
    },
  );

  const sellerPercentageValueToApplyInDecimalInTotalAmount = getPercentageValueToApplyInDecimal(
    {
      configuration,
      indicators,
      resultType: 'total',
      paymentType: 'seller',
    },
  );

  const percentageValueToApplyInDecimalInSimulatedAmount = getPercentageValueToApplyInDecimal(
    {
      configuration,
      indicators,
      resultType: 'simulated',
      paymentType: 'rebate',
    },
  );

  return products.map(product => {
    const {
      rebateReachedInRealAccumulated,
      rebateReachedInRealSimulated,
    } = getRebateReachedValuesInReal({
      product,
      numberOfTimesExtraShouldBePaidSimulated,
      numberOfTimesExtraShouldBePaidAccumalated,
      percentageValueToApplyInDecimalInSimulatedAmount,
      percentageValueToApplyInDecimalInTotalAmount: rebatePercentageValueToApplyInDecimalInTotalAmount,
      finalMultiplierValue: rebateFinalMultiplierValue,
    });

    const {
      sellerReachedInRealAccumulated,
      sellerReachedInRealSimulated,
    } = getSellerReachedValuesInReal({
      product,
      percentageValueToApplyInDecimalInSimulatedAmount,
      percentageValueToApplyInDecimalInTotalAmount: sellerPercentageValueToApplyInDecimalInTotalAmount,
      finalMultiplierValue: sellerFinalMultiplierValue,
    });

    const additionalMarginSimulated =
      ((product.simulationData.revenuesInDollar *
        product.awardsParamsToPay.additionalMarginPercentage) /
        100) *
      dollarBase;

    const additionalMarginAccumulated =
      (((product.revenues.realizedInDollar +
        product.simulationData.revenuesInDollar) *
        product.awardsParamsToPay.additionalMarginPercentage) /
        100) *
      dollarBase;

    const test = {
      ...product,
      simulationPoints: {
        rebateReachedInRealSimulated,
        rebateReachedInRealAccumulated,
        sellerReachedInRealSimulated,
        sellerReachedInRealAccumulated,
        additionalMarginAccumulated,
        additionalMarginSimulated,
      },
    };

    console.log('produto com pontos', test);

    return test;
  });
};
