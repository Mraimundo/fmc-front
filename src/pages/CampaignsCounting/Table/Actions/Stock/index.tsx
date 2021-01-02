import { useToast } from 'context/ToastContext';
import React, { useCallback, useState } from 'react';

import getUrlDownload from 'services/campaigns-counting/getUrlToStockDownload';

import { Container } from './style';

interface Props {
  id: string;
}

const Stock: React.FC<Props> = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const handleClick = useCallback(async () => {
    try {
      setLoading(true);
      await getUrlDownload(parseInt(id, 0));
    } catch {
      addToast({ type: 'error', title: 'Arquivo não encontrado' });
    } finally {
      setLoading(false);
    }
  }, [id, addToast]);

  return (
    <Container onClick={handleClick} disabled={loading}>
      {loading ? 'Carregando...' : 'Visualizar'}
    </Container>
  );
};

export default Stock;
