import { Product } from 'state/modules/points-simulator/interfaces';

import title from './title';
import table from './table';

interface Props {
  enhancerProducts: Product[];
  otherProducts: Product[];
}

export default (props: Props) => {
  const { enhancerProducts, otherProducts } = props;

  return `
    ${title}
    ${table({ enhancerProducts, otherProducts })}
  `;
};
