import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Container, Title, Item } from './styles';

interface Props {
  className?: string;
}

const Loading: React.FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <Title>
        <Skeleton />
      </Title>
      {[1, 2, 3].map(item => (
        <Item key={`item-${item}`}>
          <Skeleton />
        </Item>
      ))}
    </Container>
  );
};

export default Loading;
