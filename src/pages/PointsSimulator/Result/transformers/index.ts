import { Card } from 'components/PointsSimulator/Result/Body';
import { Indicator, UnitType } from 'state/modules/points-simulator/interfaces';
import { fakeFormatDollars } from 'util/points';

const formatValue = (value: number, unitType: UnitType): string => {
  return `${unitType === UnitType.dollar ? 'US$ ' : ''}${fakeFormatDollars(
    value,
    0,
    0,
  )}${unitType === UnitType.liter ? ' L' : ''}`;
};

const indicatorsToCards = (data: Indicator[]): Card[] =>
  data.map(
    (indicator): Card => ({
      title: indicator.title,
      isRegisteredProduct: indicator.isRegisteredProduct,
      description: `Realizado 19/20 - US$ ${formatValue(
        indicator.lastRealized,
        indicator.unitType,
      )}`,
      tableData: [
        {
          title: 'Meta 20/21',
          value: formatValue(indicator.currentGoal, indicator.unitType),
        },
        {
          title: 'Realizado 20/21',
          value: `${formatValue(
            indicator.simulationData.totalRealized,
            indicator.unitType,
          )}`,
        },
      ],
      percentageCompleted: Math.round(indicator.percentageRealized),
      percentageSimulated: Math.round(
        indicator.simulationData.totalPercentageRealized,
      ),
    }),
  );

export { indicatorsToCards };
