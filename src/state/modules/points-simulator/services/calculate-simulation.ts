import { Product, Indicator } from '../interfaces';
import getPercentage from './get-goal-realized-percentage';

interface IndicatorDTO {
  products: Product[];
  indicator: Indicator;
}

interface SimulationData {
  totalRealized: number;
  totalPercentageRealized: number;
  totalSimulated: number;
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

  const totalSimulated = simulatedProductsValue;

  return { totalRealized, totalPercentageRealized, totalSimulated };
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

  const totalSimulated = simulatedProductsValue;

  return { totalRealized, totalPercentageRealized, totalSimulated };
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
    (product?.simulationData.pogInKilosPerLiter || 0);

  const totalPercentageRealized = getPercentage(
    indicator.currentGoal,
    totalRealized,
  );

  const totalSimulated = product?.simulationData.pogInKilosPerLiter || 0;

  return { totalRealized, totalPercentageRealized, totalSimulated };
};

export {
  calculateSimulatedRevenues,
  calculateSimulatedProduct,
  calculateSimulatedPog,
};
