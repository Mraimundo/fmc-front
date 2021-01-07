import { Product, Indicator, IndicatorType } from '../interfaces';
import getPercentage from './get-goal-realized-percentage';

interface IndicatorDTO {
  products: Product[];
  indicator: Indicator;
}

interface SimulationData {
  totalRealized: number;
  totalPercentageRealized: number;
}

const calculateSimulatedRevenues = ({
  products,
  indicator,
}: IndicatorDTO): SimulationData => {
  const simulatedProductsValue = products
    .filter(item => item.checked)
    .reduce(
      (accumulator, product) =>
        accumulator + (product.simulationData.revenuesInDollar || 0),
      0,
    );

  const totalRealized = indicator.currentRealized + simulatedProductsValue;

  const totalPercentageRealized = getPercentage(
    indicator.currentGoal,
    totalRealized,
  );

  return { totalRealized, totalPercentageRealized };
};

const calculateSimulatedPog = ({
  products,
  indicator,
}: IndicatorDTO): SimulationData => {
  const simulatedProductsValue = products
    .filter(item => item.checked)
    .reduce(
      (accumulator, product) =>
        accumulator + (product.simulationData.pogInDollar || 0),
      0,
    );

  const totalRealized = indicator.currentRealized + simulatedProductsValue;

  const totalPercentageRealized = getPercentage(
    indicator.currentGoal,
    totalRealized,
  );

  return { totalRealized, totalPercentageRealized };
};

const calculateSimulatedProduct = ({
  products,
  indicator,
}: IndicatorDTO): SimulationData => {
  const product = products
    .filter(item => item.checked)
    .find(item => item.name.toLowerCase() === indicator.type.toLowerCase());

  const totalRealized =
    indicator.currentRealized +
    (product?.simulationData.revenuesInKilosPerLiter || 0);

  const totalPercentageRealized = getPercentage(
    indicator.currentGoal,
    totalRealized,
  );

  if (indicator.type === IndicatorType.talisman) {
    console.log('talisman');
    console.log('totalRealized', totalRealized);
    console.log('totalPercentageRealized', totalPercentageRealized);
    console.log('indicator.currentGoal', indicator.currentGoal);
    console.log('(realized * 100) / goal || 0');
    console.log('Fimtalisman');
  }

  return { totalRealized, totalPercentageRealized };
};

export {
  calculateSimulatedRevenues,
  calculateSimulatedProduct,
  calculateSimulatedPog,
};