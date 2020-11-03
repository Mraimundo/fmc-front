import React from 'react';

import Tr from './Tr';
import { Container } from './styles';

const Header: React.FC = () => {
  const products = ['1', '2', '3', '4', '5', '6'];

  return (
    <Container>
      {products.map(item => (
        <Tr key={item} />
      ))}
    </Container>
  );
};

export default Header;
