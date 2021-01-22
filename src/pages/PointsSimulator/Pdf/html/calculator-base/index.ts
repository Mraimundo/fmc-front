import { Product } from 'state/modules/points-simulator/interfaces';
import enhancerProducts from './enhancer-products';
import otherProducts from './other-products';

interface Props {
  products: Product[];
}

export default (props: Props) => {
  const { products } = props;

  const enhancerProductsData = products.filter(
    item => item.checked && item.isEnhancer,
  );
  const otherProductsData = products.filter(
    item => item.checked && !item.isEnhancer,
  );

  return `
    ${
      enhancerProductsData.length > 0
        ? enhancerProducts({ products: enhancerProductsData })
        : ''
    }
    ${
      otherProductsData.length > 0
        ? otherProducts({
            enhancerProducts: enhancerProductsData,
            otherProducts: otherProductsData,
          })
        : ''
    }
  `;
};
