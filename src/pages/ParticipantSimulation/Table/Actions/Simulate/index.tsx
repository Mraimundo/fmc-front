import React, { useCallback, useState } from 'react';

import { Container } from './style';

interface Props {
  id: string;
}

const Simulate: React.FC<Props> = ({ id }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(async () => {
    console.log('Click');
  }, []);

  return (
    <Container onClick={handleClick} disabled={loading}>
      {loading ? 'Carregando...' : 'Simular'}
    </Container>
  );
};

export default Simulate;
