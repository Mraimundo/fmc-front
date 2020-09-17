import React, { useCallback, useState, useEffect } from 'react';

import transformer, {
  Card as ICard,
} from 'services/cockpit/transformers/generalStatisticsToICard';
import getData from 'services/cockpit/getGeneralStatistics';

import Filters, { Filters as IFilters } from './Filters';
import Card from './Card';

import { Container, CardContainer } from './styles';

const GeneralView: React.FC = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [filters, setFilters] = useState<IFilters>({});

  useEffect(() => {
    getData(filters).then(data => setCards(transformer(data)));
  }, [filters]);

  const onFilter = useCallback(async (_filters: IFilters): Promise<void> => {
    setFilters(_filters);
  }, []);

  return (
    <Container>
      <h3>Visão geral</h3>
      <CardContainer>
        <Filters onFilter={onFilter} />
      </CardContainer>
      <CardContainer className="_extra-margin">
        {cards.map(item => (
          <Card key={item.title} card={item} />
        ))}
      </CardContainer>
    </Container>
  );
};

export default GeneralView;
