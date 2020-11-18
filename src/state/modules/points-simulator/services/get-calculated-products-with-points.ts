import {
  Product,
  Indicator,
  IndicatorType,
  PointsData,
  Configuration,
} from '../interfaces';

const indicatorsToPayExtra = [
  IndicatorType.premio,
  IndicatorType.hero,
  IndicatorType.talisman,
];

interface Props {
  products: Product[];
  indicators: Indicator[];
  configuration: Configuration;
}

interface CheckIndicatorsToPayExtra {
  shouldPayExtraForHero: boolean;
  shouldPayExtraForTalisman: boolean;
  shouldPayExtraForPremio: boolean;
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

interface SimulatedRebatePoints {
  rebateReachedInRealSimulated: number;
  rebateReachedInRealAccumulated: number;
}

export default ({ products, indicators, configuration }: Props): Product[] => {
  const {
    shouldPayExtraForHero,
    shouldPayExtraForPremio,
    shouldPayExtraForTalisman,
  } = getIndicatorsToPayExtra(indicators);

  let numberOfTimesExtraShouldBePaid = 0;
  if (shouldPayExtraForHero) numberOfTimesExtraShouldBePaid += 1;
  if (shouldPayExtraForPremio) numberOfTimesExtraShouldBePaid += 1;
  if (shouldPayExtraForTalisman) numberOfTimesExtraShouldBePaid += 1;

  const { minimumRebatePercentageToMakePoints } = configuration;

  const pogPercentageRealized =
    indicators.find(item => item.type === IndicatorType.pog)?.simulationData
      .totalPercentageRealized || 0;
  const revenuesPercentageRealized =
    indicators.find(item => item.type === IndicatorType.revenues)
      ?.simulationData.totalPercentageRealized || 0;

  let decimalToBeMultiplied = 0;
  let decimalFinalPay = 0;
  if (
    pogPercentageRealized >= minimumRebatePercentageToMakePoints &&
    revenuesPercentageRealized >= minimumRebatePercentageToMakePoints
  ) {
    decimalToBeMultiplied = 0.5;
    decimalFinalPay = 1;
  }
  if (pogPercentageRealized >= 100 && revenuesPercentageRealized >= 100) {
    decimalToBeMultiplied = 1;
    decimalFinalPay = 1;
  }

  return products.map(product => {
    const extraPercentageToPay =
      product.extraPercentageToPayByEnhancerProduct *
      numberOfTimesExtraShouldBePaid;
    const rebatePercentageToPay =
      product.awardsParamsToPay.rebatePercentage * decimalToBeMultiplied;
    const percentageTotalToPay = rebatePercentageToPay + extraPercentageToPay;
    const rebateReachedInRealSimulated =
      ((product.simulationData.pogRealizedNetInRealSimulated *
        percentageTotalToPay) /
        100) *
      decimalFinalPay;
    const rebateReachedInRealAccumulated =
      ((product.simulationData.pogRealizedNetInDollarTotal *
        percentageTotalToPay) /
        100) *
      decimalFinalPay;

    const sellerReachedInRealSimulated =
      product.simulationData.pogInKilosPerLiter *
      (product.awardsParamsToPay.sellerValueInReal * decimalToBeMultiplied) *
      decimalFinalPay;
    const sellerReachedInRealAccumulated =
      product.pog.realizedInKilosByLiter *
        (product.awardsParamsToPay.sellerValueInReal * decimalToBeMultiplied) *
        decimalFinalPay +
      sellerReachedInRealSimulated;

    return {
      ...product,
      simulationPoints: {
        rebateReachedInRealSimulated,
        rebateReachedInRealAccumulated,
        sellerReachedInRealSimulated,
        sellerReachedInRealAccumulated,
      },
    };
  });
};
