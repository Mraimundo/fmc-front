import React from 'react';

import { Container, Title, Item } from './styles';

export interface Card {
  title: string;
  items: string[];
}

interface Props {
  card: Card;
  className?: string;
}

const CardComponent: React.FC<Props> = ({
  card: { title, items },
  className,
}) => {
  return (
    <Container className={className}>
      <Title>{title}</Title>
      {items.map(item => (
        <Item>{item}</Item>
      ))}
    </Container>
  );
};

export default CardComponent;
