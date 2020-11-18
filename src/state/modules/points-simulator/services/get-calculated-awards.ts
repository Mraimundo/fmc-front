import { Product, Award } from '../interfaces';

const calculateAwards = (products: Product[]): Award => {
  const simulatedRebate = products.reduce(
    (accumulator, product) =>
      accumulator + product.simulationPoints.rebateReachedInRealSimulated,
    0,
  );

  const totalRebate =
    products.reduce(
      (accumulator, product) =>
        accumulator + product.simulationPoints.rebateReachedInRealAccumulated,
      0,
    ) + simulatedRebate;

  const simulatedSeller = products.reduce(
    (accumulator, product) =>
      accumulator + product.simulationPoints.sellerReachedInRealSimulated,
    0,
  );

  const totalSeller = products.reduce(
    (accumulator, product) =>
      accumulator + product.simulationPoints.sellerReachedInRealAccumulated,
    0,
  );

  return {
    simulatedRebate,
    simulatedSeller,
    totalRebate,
    totalSeller,
  };
};

export default calculateAwards;
