import React, { useCallback, useState } from 'react';
import { useAuth } from 'context/AuthContext';

import { Container } from './style';

interface Props {
  id: string;
}

const Simulate: React.FC<Props> = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const { simulate } = useAuth();

  const handleClick = useCallback(async () => {
    setLoading(true);
    await simulate();
    setLoading(false);
  }, [simulate]);

  return (
    <Container onClick={handleClick} disabled={loading}>
      {loading ? 'Carregando...' : 'Simular'}
    </Container>
  );
};

export default Simulate;
