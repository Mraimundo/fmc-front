import React, { useState, useEffect, useCallback } from 'react';

import { getParticipantsToAccessPI } from 'services/showcase';

import { Container } from './styles';

const CatalogoPi: React.FC = () => {
  const [piAccess, setPiAccess] = useState('');

  const handlePiAccess = useCallback(() => {
    if (!piAccess) return;

    console.log('handlePiAccess');

    window.location.href = piAccess;
  }, [piAccess]);

  useEffect(() => {
    console.log('useEffect');
    getParticipantsToAccessPI().then(data => {
      console.log('getParticipantsToAccessPI');
      setPiAccess(data.find(item => item.type === 'cpf')?.urlPi || '');
      handlePiAccess();
      return;
    });
  }, [piAccess, handlePiAccess]);

  return (
    <Container>
      <p>Redirecionando...</p>
    </Container>
  );
};

export default CatalogoPi;
