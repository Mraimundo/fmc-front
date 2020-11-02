import React, { useState, useEffect } from 'react';
import { Product } from 'services/showcase/interfaces';
import transformer, {
  Response as Data,
} from 'services/showcase/transformers/toProductsGridTransformer';

import { Container, MiniBox } from './styles';

interface Props {
  products: Product[];
  isSimulating: boolean;
}

const ProductsGrid: React.FC<Props> = ({ products, isSimulating }) => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    setData(transformer(products));
  }, [products]);

  return (
    <Container>
      {data.map(item => (
        <MiniBox key={`key-news-${item.id}`}>
          <img src={item.imageUrl} alt={item.title} />
          <h4>{item.title}</h4>
          <h3>{item.points} pontos</h3>
          {isSimulating ? (
            <span>Resgatar</span>
          ) : (
            <a href={item.urlAccess} target="_blank" rel="noopener noreferrer">
              Resgatar
            </a>
          )}
        </MiniBox>
      ))}
    </Container>
  );
};

export default ProductsGrid;
