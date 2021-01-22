import { Product } from 'state/modules/points-simulator/interfaces';

import title from './title';
import table from './table';

interface Props {
  products: Product[];
}

export default (props: Props) => {
  const { products } = props;

  return `
    ${title}
    ${table({ products })}
  `;
};
