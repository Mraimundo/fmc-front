import React, { useState, useEffect, useCallback } from 'react';

import { getParticipantsToAccessPI } from 'services/showcase';

import { Container } from './styles';

const CatalogoPi: React.FC = () => {
  const [piAccess, setPiAccess] = useState('');

  const handlePiAccess = useCallback(() => {
    if (!piAccess) return;

    window.location.href = piAccess;
  }, [piAccess]);

  useEffect(() => {
    getParticipantsToAccessPI().then(data => {
      setPiAccess(data.find(item => item.type === 'cpf')?.urlPi || '');
      handlePiAccess();
    });
  }, [piAccess, handlePiAccess]);

  return (
    <Container>
      <p>Redirecionando...</p>
    </Container>
  );
};

export default CatalogoPi;
