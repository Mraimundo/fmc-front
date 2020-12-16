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
  const pogRealizedNetInDollarSimulated =
    (pogInDollar * pogRealizedNetPercentage) / 100;
  const pogRealizedNetInRealSimulated =
    pogRealizedNetInDollarSimulated * dollarBaseValue;

  /* const pogUnitValueInDollarTotal =
    product.revenues.realizedInDollar / product.revenues.realizedInKilosByLiter; */

  // Comentado até o Paulo definir ql a regra certa, por hora aplicado a regra abaixo
  // const pogInDollarTotal = product.pog.realizedInDollar;
  const pogInDollarTotal =
    product.pog.realizedInKilosByLiter * pogUnitValueInDollar;
  const pogRealizedNetInDollarTotal =
    (pogInDollarTotal * pogRealizedNetPercentage) / 100;
  const pogRealizedNetInRealTotal =
    pogRealizedNetInDollarTotal * dollarBaseValue;

  return {
    ...simulatioData,
    revenuesInDollar,
    pogUnitValueInDollar,
    pogInDollar,
    pogRealizedNetInDollarSimulated,
    pogRealizedNetInRealSimulated,
    pogRealizedNetInRealTotal,
    pogRealizedNetInDollarTotal,
  };
};

export default calculateSimulationDataProductValues;
