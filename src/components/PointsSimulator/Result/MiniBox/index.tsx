import React from 'react';

import { Container } from './styles';

interface Props {
  title: string;
  text: string;
}
const MiniBox: React.FC<Props> = ({ title, text }) => {
  return (
    <Container>
      <span>{title}</span>
      <span>{text}</span>
    </Container>
  );
};

export default MiniBox;
