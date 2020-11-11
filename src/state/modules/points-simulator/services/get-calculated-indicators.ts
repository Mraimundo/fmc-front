import { Product, Indicator, IndicatorType } from '../interfaces';
import {
  calculateSimulatedRevenues,
  calculateSimulatedProduct,
  calculateSimulatedPog,
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

      if (indicator.type === IndicatorType.pog) {
        const pogSimulationData = calculateSimulatedPog({
          products,
          indicator,
        });
        indicator.simulationData = pogSimulationData;
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
