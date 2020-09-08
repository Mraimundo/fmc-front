import React, { useState, useCallback, useEffect } from 'react';
import useDimensions from 'hooks/use-window-dimensions';
import { Product } from 'services/products/interfaces';
import getProducts from 'services/products/getProducts';

import { Filters, DesktopFilter, MobileFilter } from './Filters';
import ProductsList from './ProductsList';
import { Container, Content, Header } from './styles';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const onFilter = useCallback(async (filters: Filters): Promise<void> => {
    const data = await getProducts(filters);
    setProducts(data);
  }, []);

  const { width } = useDimensions();

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <Container>
      <Header>
        <Content>
          <h3>Soluções FMC</h3>
          <span>
            Um portfólio diversificado para o manejo e proteção de diferentes
            culturas.
          </span>
          {width > 500 ? (
            <DesktopFilter onFilter={onFilter} />
          ) : (
            <MobileFilter onFilter={onFilter} />
          )}
        </Content>
      </Header>
      <Content>
        <ProductsList products={products} />
      </Content>
    </Container>
  );
};

export default Products;
