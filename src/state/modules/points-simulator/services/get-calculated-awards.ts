import { Product, Award } from '../interfaces';

const calculateAwards = (products: Product[]): Award => {
  const simulatedRebate = products.reduce(
    (accumulator, product) =>
      accumulator +
      (product.simulationPoints.rebateReachedInRealSimulated || 0),
    0,
  );

  const totalRebate =
    products.reduce(
      (accumulator, product) =>
        accumulator +
        (product.simulationPoints.rebateReachedInRealAccumulated || 0),
      0,
    ) + simulatedRebate;

  const simulatedSeller = products.reduce(
    (accumulator, product) =>
      accumulator +
      (product.simulationPoints.sellerReachedInRealSimulated || 0),
    0,
  );

  const totalSeller = products.reduce(
    (accumulator, product) =>
      accumulator +
      (product.simulationPoints.sellerReachedInRealAccumulated || 0),
    0,
  );

  const simulatedAdditionalMargin = products.reduce(
    (accumulator, product) =>
      accumulator + (product.simulationPoints.additionalMarginSimulated || 0),
    0,
  );

  const totalAdditionalMargin = products.reduce(
    (accumulator, product) =>
      accumulator + (product.simulationPoints.additionalMarginAccumulated || 0),
    0,
  );

  return {
    simulatedRebate,
    simulatedSeller,
    simulatedAdditionalMargin,
    totalRebate,
    totalSeller,
    totalAdditionalMargin,
  };
};

export default calculateAwards;
