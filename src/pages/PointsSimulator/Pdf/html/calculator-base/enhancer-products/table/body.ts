import { Product } from 'state/modules/points-simulator/interfaces';
import tr from './tr';

interface Props {
  products: Product[];
}

export default (props: Props) => {
  const { products } = props;

  return `
    <tbody>
      ${products.map(product => tr({ product })).join(' ')}
    </tbody>
  `;
};
