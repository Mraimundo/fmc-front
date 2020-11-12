import { SimulationData, Product, Configuration } from '../interfaces';

const calculateSimulationDataProductValues = (
  simulatioData: SimulationData,
  product: Product,
  configuration: Configuration,
  dollarBaseValue: number,
): SimulationData => {
  const {
    revenuesInKilosPerLiter,
    unitValueInDollar,
    pogInKilosPerLiter,
  } = simulatioData;
  const { stock } = product;
  const { pogRealizedNetPercentage } = configuration;
  const revenuesInDollar = revenuesInKilosPerLiter * unitValueInDollar;
  const pogUnitValueInDollar =
    (stock.inDollar + revenuesInDollar) /
    (stock.inKilosPerLiter + revenuesInKilosPerLiter);
  const pogInDollar = pogInKilosPerLiter * pogUnitValueInDollar;
  const pogRealizedNetInDollar = (pogInDollar * pogRealizedNetPercentage) / 100;
  return {
    ...simulatioData,
    revenuesInDollar,
    pogUnitValueInDollar,
    pogInDollar,
    pogRealizedNetInDollar,
    pogRealizedNetInReal: pogRealizedNetInDollar * dollarBaseValue,
  };
};

export default calculateSimulationDataProductValues;
