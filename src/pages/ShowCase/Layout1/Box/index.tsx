import React, { useState, useEffect } from 'react';
import { getProducts } from 'services/showcase';
import { Product, Participant } from 'services/showcase/interfaces';
import { useAuth } from 'context/AuthContext';

import { ProductsGrid } from 'components/ShowCase';
import { Container, ParticipantInfo, ContentBox } from './styles';

interface Props {
  participant: Participant;
}

const Box: React.FC<Props> = ({ participant: data }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { participant } = useAuth();

  useEffect(() => {
    if (!participant) return;
    if (participant.profile === 'FOCALPOINT' && data.type === 'cnpj') return;
    getProducts({
      id: data.id,
      type: data.type === 'cpf' ? 'participant' : 'establishment',
    }).then(dataProducts => {
      setProducts(dataProducts);
    });
  }, [participant, data]);

  return (
    <Container>
      <ParticipantInfo
        participant={data}
        showChangePicture={data.type === 'cnpj'}
      />
      {products.length > 0 && (
        <ContentBox>
          <h3>Produtos em destaque</h3>
          <ProductsGrid products={products} />
        </ContentBox>
      )}
    </Container>
  );
};

export default Box;
