import React, { useState, useEffect, useCallback } from 'react';
import { getProducts } from 'services/showcase';
import { Product, Participant } from 'services/showcase/interfaces';

import { ProductsGrid } from 'components/ShowCase';

import { Container, ParticipantInfo, ContentBox } from './styles';

interface Props {
  participant: Participant;
}

const Box: React.FC<Props> = ({ participant }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
    });
  }, []);

  return (
    <Container>
      <ParticipantInfo
        participant={participant}
        showChangePicture={participant.type === 'cnpj'}
      />
      <ContentBox>
        <h3>Produtos em destaque</h3>
        <ProductsGrid products={products} />
      </ContentBox>
    </Container>
  );
};

export default Box;
