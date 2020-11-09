import { Product, Indicator, IndicatorType } from '../interfaces';
import {
  calculateSimulatedRevenues,
  calculateSimulatedProduct,
} from './calculate-simulation';

const enhancerProductsIndicatorTypes = [
  IndicatorType.premio,
  IndicatorType.hero,
  IndicatorType.talisman,
];

export default (products: Product[], indicators: Indicator[]): Indicator[] => {
  return indicators.map(
    (item): Indicator => {
      const indicator = { ...item };
      if (indicator.type === IndicatorType.revenues) {
        const revenuesSimulationData = calculateSimulatedRevenues({
          products,
          indicator,
        });
        indicator.simulationData = revenuesSimulationData;
      }

      if (enhancerProductsIndicatorTypes.includes(indicator.type)) {
        const productSimulationData = calculateSimulatedProduct({
          products,
          indicator,
        });
        indicator.simulationData = productSimulationData;
      }

      return indicator;
    },
  );
};
