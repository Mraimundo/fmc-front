import React from 'react';
import { Card as ICard } from 'services/cockpit/transformers/generalStatisticsToICard';

import { Container, Title, Item } from './styles';

interface Props {
  card: ICard;
  className?: string;
}

const Card: React.FC<Props> = ({ card: { title, items }, className }) => {
  return (
    <Container className={className}>
      <Title>{title}</Title>
      {items.map(item => (
        <Item key={`item-${item}`}>{item}</Item>
      ))}
    </Container>
  );
};

export default Card;
