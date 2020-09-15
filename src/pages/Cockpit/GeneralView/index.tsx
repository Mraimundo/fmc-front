import React, { useCallback } from 'react';

import Filters, { Filters as IFilters } from './Filters';
import Card, { Card as ICard } from './Card';

import { Container, CardContainer } from './styles';

const GeneralView: React.FC = () => {
  const onFilter = useCallback(async (filters: IFilters): Promise<void> => {
    console.log('filter');
  }, []);

  const mockCard: ICard[] = [
    {
      title: 'Faturamento (12,5%)',
      items: [
        'Objetivo total: US$ 30.000.000,00',
        'Realizado total: US$ 12.349.432,21',
      ],
    },
    {
      title: 'POG (50%)',
      items: [
        'Objetivo total: US$ 30.000.000,00',
        'Realizado total: US$ 12.349.432,21',
      ],
    },
  ];

  return (
    <Container>
      <h3>Visão geral</h3>
      <CardContainer>
        <Filters onFilter={onFilter} />
      </CardContainer>
      <CardContainer>
        {mockCard.map(item => (
          <Card key={item.title} card={item} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default GeneralView;
