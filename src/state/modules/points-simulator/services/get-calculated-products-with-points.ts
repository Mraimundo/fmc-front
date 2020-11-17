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
  if (pogPercentageRealized >= 100 && revenuesPercentageRealized >= 100) {
    decimalToBeMultiplied = 1;
  }
  if (
    (pogPercentageRealized < 100 &&
      pogPercentageRealized >= minimumRebatePercentageToMakePoints) ||
    (revenuesPercentageRealized < 100 &&
      revenuesPercentageRealized >= minimumRebatePercentageToMakePoints)
  ) {
    decimalToBeMultiplied = 0.5;
  }

  return products.map(product => {
    const extraPercentageToPay =
      product.extraPercentageToPayByEnhancerProduct *
      numberOfTimesExtraShouldBePaid;
    const rebatePercentageToPay =
      product.percentageAwardToPay.rebate * decimalToBeMultiplied;
    const percentageTotalToPay = rebatePercentageToPay + extraPercentageToPay;
    const rebateReachedInRealSimulated =
      (product.simulationData.pogRealizedNetInRealSimulated *
        percentageTotalToPay) /
      100;
    const rebateReachedInRealAccumulated =
      (product.simulationData.pogRealizedNetInDollarTotal *
        percentageTotalToPay) /
      100;

    return {
      ...product,
      simulationPoints: {
        rebateReachedInRealSimulated,
        rebateReachedInRealAccumulated,
      },
    };
  });
};
