import { Product } from 'state/modules/points-simulator/interfaces';
import whiteSpace from '../../../white-space';
import tr from './tr';

interface Props {
  enhancerProducts: Product[];
  otherProducts: Product[];
}

/*
  Configurações para quebra de página
  Na primeira página, caso não tenha nenhum produto potencializador, colocar 17 itens e o primeiro WhiteSpace deverá ser 55
  Caso possua no mínimo 1 produto potencializador, colocar (15 - Número de produtos potencializadores) e primeiro WhiteSpace 70
  Nas páginas seguintes 20 itens por página e WhiteSpace de 45
*/

export default (props: Props) => {
  const { enhancerProducts, otherProducts } = props;

  const numberOfEnhancerProducts = enhancerProducts.length;
  const numberOfOtherProducts = otherProducts.length;
  const firstPageMaxItems =
    numberOfEnhancerProducts > 0 ? 15 - numberOfEnhancerProducts : 17;
  const firstPageWhiteSpaceHeight = numberOfEnhancerProducts > 0 ? 70 : 55;
  const otherPagesWhiteSpaceHeight = 45;
  const otherPagesMaxItems = 20;
  let currentPosition = firstPageMaxItems;

  const firstPageProducts = otherProducts.slice(0, firstPageMaxItems);

  const getHtmlForOtherProducts = () => {
    let html = '';

    while (currentPosition < numberOfOtherProducts) {
      const products = otherProducts.slice(
        currentPosition,
        currentPosition + otherPagesMaxItems,
      );

      html += `
        ${products.map(product => tr({ product })).join(' ')}
        <tr><td colspan="8">${whiteSpace(otherPagesWhiteSpaceHeight)}</td></tr>
      `;

      currentPosition += otherPagesMaxItems;
    }

    return html;
  };

  return `
    <tbody>
      ${firstPageProducts.map(product => tr({ product })).join(' ')}
      <tr><td colspan="8">${whiteSpace(firstPageWhiteSpaceHeight)}</td></tr>
      ${getHtmlForOtherProducts()}
    </tbody>
  `;
};
