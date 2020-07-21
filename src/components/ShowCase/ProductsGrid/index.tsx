import React, { useState, useEffect } from 'react';
import { Product } from 'services/showcase/interfaces';
import transformer, {
  Response as Data,
} from 'services/showcase/transformers/toProductsGridTransformer';
import { Link } from 'react-router-dom';

import { Container, MiniBox } from './styles';

interface Props {
  products: Product[];
}

const ProductsGrid: React.FC<Props> = ({ products }) => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    setData(transformer(products));
  }, [products]);

  return (
    <Container>
      {data.map(item => (
        <MiniBox key={`key-news-${item.id}`} to={`/news/${item.id}`}>
          <img src={item.imageUrl} alt={item.title} />
          <h4>{item.title}</h4>
          <h3>{item.points} pontos</h3>
          <Link to={item.urlAccess}>Resgatar</Link>
        </MiniBox>
      ))}
    </Container>
  );
};

export default ProductsGrid;