import React from 'react';

import routeMap from 'routes/route-map';
import { ShowcaseProduct } from 'state/modules/home/types';
import ProductItem from './ProductItem';
import SeeCompleteShowcase from './SeeCompleteShowcase';
import { ProductList, MobileSeeCompleteShowcase } from './styles';

interface Props {
  products: ShowcaseProduct[] | null;
}

const Showcase: React.FC<Props> = ({ products }) => {
  return (
    <>
      <ProductList>
        {products?.map(item => (
          <ProductItem product={item} key={`prod-${item.id}`} />
        ))}
        <SeeCompleteShowcase
          link={routeMap.showcase}
          picture="https://storage.vendavall.com.br/teste/avatars/1596680244.5f2b683462bcd8.23316495.png"
        />
      </ProductList>
      <MobileSeeCompleteShowcase to={routeMap.showcase}>
        VER TODOS OS PRÊMIOS
      </MobileSeeCompleteShowcase>
    </>
  );
};

export default Showcase;
