import React from 'react';

import { Container } from './styles';

interface Props {
  channelName: string;
  text: string;
  category: string;
}
const MiniBox: React.FC<Props> = ({ channelName, text, category  }) => {
  return (
    <Container>
      <span>{channelName}</span>
      <span>Categoria: {category}</span>
      <span>{text}</span>
    </Container>
  );
};

export default MiniBox;
