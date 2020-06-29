import React, { useState } from 'react';
import { Establishment } from 'services/auth/getEstablishments';
import { Container } from './styles';

interface Props {
  establishments: Establishment[];
  className?: string;
}

const Establishments: React.FC<Props> = ({ establishments, className }) => {
  return (
    <Container className={className}>
      {establishments.map(item => (
        <h1>{`${item.name} (${item.cnpj})`}</h1>
      ))}
    </Container>
  );
};

export default Establishments;
