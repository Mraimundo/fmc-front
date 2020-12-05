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

const getPercentageValueToApplyInDecimal = ({
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

const getRebateReachedValuesInReal = (
  product: Product,
  numberOfTimesExtraShouldBePaid: number,
  percentageValueToApplyInDecimal: number,
  finalMultiplierValue: number,
): RebateReachedValues => {
  const extraPercentageToPay =
    product.extraPercentageToPayByEnhancerProduct *
    numberOfTimesExtraShouldBePaid;

  const rebatePercentageToPay =
    product.awardsParamsToPay.rebatePercentage *
    percentageValueToApplyInDecimal;

  const percentageTotalToPay = rebatePercentageToPay + extraPercentageToPay;

  const rebateReachedInRealSimulated =
    ((product.simulationData.pogRealizedNetInRealSimulated *
      percentageTotalToPay) /
      100) *
    finalMultiplierValue;

  const rebateReachedInRealAccumulated =
    ((product.simulationData.pogRealizedNetInDollarTotal *
      percentageTotalToPay) /
      100) *
    finalMultiplierValue;

  return { rebateReachedInRealSimulated, rebateReachedInRealAccumulated };
};

interface SellerReachedValues {
  sellerReachedInRealSimulated: number;
  sellerReachedInRealAccumulated: number;
}

const getSellerReachedValuesInReal = (
  product: Product,
  percentageValueToApplyInDecimal: number,
  finalMultiplierValue: number,
): SellerReachedValues => {
  const sellerReachedInRealSimulated =
    product.simulationData.pogInKilosPerLiter *
    (product.awardsParamsToPay.sellerValueInReal *
      percentageValueToApplyInDecimal) *
    finalMultiplierValue;

  const sellerReachedInRealAccumulated =
    product.pog.realizedInKilosByLiter *
      (product.awardsParamsToPay.sellerValueInReal *
        percentageValueToApplyInDecimal) *
      finalMultiplierValue +
    sellerReachedInRealSimulated;

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
  const percentageValueToApplyInDecimal = getPercentageValueToApplyInDecimal({
    configuration,
    indicators,
  });

  return products.map(product => {
    const {
      rebateReachedInRealAccumulated,
      rebateReachedInRealSimulated,
    } = getRebateReachedValuesInReal(
      product,
      numberOfTimesExtraShouldBePaid,
      percentageValueToApplyInDecimal,
      finalMultiplierValue,
    );

    const {
      sellerReachedInRealAccumulated,
      sellerReachedInRealSimulated,
    } = getSellerReachedValuesInReal(
      product,
      percentageValueToApplyInDecimal,
      finalMultiplierValue,
    );

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

    return {
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
  });
};
