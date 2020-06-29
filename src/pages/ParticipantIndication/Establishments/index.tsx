import React, { useState } from 'react';
import { Establishment } from 'services/auth/getEstablishments';
import { Container } from './styles';

const Establishments: React.FC = () => {
  const [establishments, setEstablishments] = useState<Establishment[]>([]);
  return (
    <Container>
      <h1>Teste</h1>
    </Container>
  );
};

export default Establishments;
