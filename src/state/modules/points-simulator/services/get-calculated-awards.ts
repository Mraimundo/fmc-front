import { Product, Award } from '../interfaces';

const calculateAwards = (products: Product[]): Award => {
  const simulatedRebate = products
    .filter(item => item.checked)
    .reduce(
      (accumulator, product) =>
        accumulator +
        (product.simulationPoints.rebateReachedInRealSimulated || 0),
      0,
    );

  const realizedRebate = products.reduce(
    (accumulator, product) =>
      accumulator + (product.simulationPoints.rebateReachedInRealRealized || 0),
    0,
  );

  const totalRebate = realizedRebate + simulatedRebate;

  const simulatedSeller = products
    .filter(item => item.checked)
    .reduce(
      (accumulator, product) =>
        accumulator +
        (product.simulationPoints.sellerReachedInRealSimulated || 0),
      0,
    );

  const realizedSeller = products.reduce(
    (accumulator, product) =>
      accumulator + (product.simulationPoints.sellerReachedInRealRealized || 0),
    0,
  );

  const totalSeller = realizedSeller + simulatedSeller;

  const simulatedAdditionalMargin = products
    .filter(item => item.checked)
    .reduce(
      (accumulator, product) =>
        accumulator + (product.simulationPoints.additionalMarginSimulated || 0),
      0,
    );

  const realizedAdditionalMargin = products.reduce(
    (accumulator, product) =>
      accumulator + (product.simulationPoints.additionalMarginRealized || 0),
    0,
  );

  const totalAdditionalMargin =
    realizedAdditionalMargin + simulatedAdditionalMargin;

  return {
    simulatedRebate,
    simulatedSeller,
    simulatedAdditionalMargin,
    totalRebate,
    totalSeller,
    totalAdditionalMargin,
    realizedAdditionalMargin,
    realizedRebate,
    realizedSeller,
  };
};

export default calculateAwards;
