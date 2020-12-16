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
): CheckIndicatorsToPayExtra => {
  const shouldPayExtraForHero =
    (indicators.find(item => item.type === IndicatorType.hero)?.simulationData
      .totalPercentageRealized || 0) >= 100;

  const shouldPayExtraForTalisman =
    (indicators.find(item => item.type === IndicatorType.talisman)
      ?.simulationData.totalPercentageRealized || 0) >= 100;

  const shouldPayExtraForPremio =
    (indicators.find(item => item.type === IndicatorType.premio)?.simulationData
      .totalPercentageRealized || 0) >= 100;

  return {
    shouldPayExtraForHero,
    shouldPayExtraForTalisman,
    shouldPayExtraForPremio,
  };
};

const getHowManyEnhancerProductsReachedTheGoals = (
  indicators: Indicator[],
): number => {
  const {
    shouldPayExtraForHero,
    shouldPayExtraForPremio,
    shouldPayExtraForTalisman,
  } = getIndicatorsToPayExtra(indicators);

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

const getFinalMultiplierValue = ({
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

interface PercentageValueToApplyProps extends DefaultProps {
  type: 'simulated' | 'total';
}

const getPercentageValueToApplyInDecimal = ({
  configuration,
  indicators,
  type,
}: PercentageValueToApplyProps): number => {
  const { minimumRebatePercentageToMakePoints } = configuration;

  const pogPercentageRealized = getIndicatorPercentageRealizedFromIndicators(
    indicators,
    IndicatorType.pog,
  );
  const revenuesPercentageRealized = getIndicatorPercentageRealizedFromIndicators(
    indicators,
    IndicatorType.revenues,
  );

  if (type === 'simulated') {
    return 1;
  }

  if (pogPercentageRealized >= 100 && revenuesPercentageRealized >= 100) {
    return 1;
  }

  if (
    pogPercentageRealized >= minimumRebatePercentageToMakePoints &&
    revenuesPercentageRealized >= minimumRebatePercentageToMakePoints
  ) {
    return 0.5;
  }

  return 0;
};

interface RebateReachedValues {
  rebateReachedInRealSimulated: number;
  rebateReachedInRealAccumulated: number;
}

interface RebateReachedValuesProps {
  product: Product;
  numberOfTimesExtraShouldBePaid: number;
  percentageValueToApplyInDecimalInTotalAmount: number;
  percentageValueToApplyInDecimalInSimulatedAmount: number;
  finalMultiplierValue: number;
}

const getRebateReachedValuesInReal = ({
  product,
  finalMultiplierValue,
  numberOfTimesExtraShouldBePaid,
  percentageValueToApplyInDecimalInSimulatedAmount,
  percentageValueToApplyInDecimalInTotalAmount,
}: RebateReachedValuesProps): RebateReachedValues => {
  const extraPercentageToPay =
    product.extraPercentageToPayByEnhancerProduct *
    numberOfTimesExtraShouldBePaid;

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
    rebatePercentageToPayInTotalAmount + extraPercentageToPay;
  const percentageTotalToPayInSimulatedAmount =
    rebatePercentageToPayInSimulatedAmount + extraPercentageToPay;

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
  const numberOfTimesExtraShouldBePaid = getHowManyEnhancerProductsReachedTheGoals(
    indicators,
  );
  const finalMultiplierValue = getFinalMultiplierValue({
    configuration,
    indicators,
  });
  const percentageValueToApplyInDecimalInTotalAmount = getPercentageValueToApplyInDecimal(
    {
      configuration,
      indicators,
      type: 'total',
    },
  );

  const percentageValueToApplyInDecimalInSimulatedAmount = getPercentageValueToApplyInDecimal(
    {
      configuration,
      indicators,
      type: 'simulated',
    },
  );

  return products.map(product => {
    const {
      rebateReachedInRealAccumulated,
      rebateReachedInRealSimulated,
    } = getRebateReachedValuesInReal({
      product,
      numberOfTimesExtraShouldBePaid,
      percentageValueToApplyInDecimalInSimulatedAmount,
      percentageValueToApplyInDecimalInTotalAmount,
      finalMultiplierValue,
    });

    const {
      sellerReachedInRealAccumulated,
      sellerReachedInRealSimulated,
    } = getSellerReachedValuesInReal({
      product,
      percentageValueToApplyInDecimalInSimulatedAmount,
      percentageValueToApplyInDecimalInTotalAmount,
      finalMultiplierValue,
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
