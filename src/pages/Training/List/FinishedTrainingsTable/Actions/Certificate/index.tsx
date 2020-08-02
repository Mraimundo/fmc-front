import React, { useCallback, useState } from 'react';
import { getCertificate } from 'services/training';
import { useToast } from 'context/ToastContext';

import { Container } from './style';

interface Props {
  id: number;
}

const Actions: React.FC<Props> = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const handleClick = useCallback(async () => {
    setLoading(true);
    const { hasCertificate, url, message } = await getCertificate(id);
    setLoading(false);
    if (hasCertificate) {
      const linkClick = document.createElement('a');
      linkClick.href = url;
      linkClick.download = 'Certificado.pdf';
      document.body.appendChild(linkClick);
      linkClick.click();
      document.body.removeChild(linkClick);
      return;
    }
    addToast({
      title: message,
      type: 'success',
    });
  }, [id, addToast]);

  return (
    <Container onClick={handleClick} disabled={loading}>
      {loading ? 'Carregando...' : 'Certificado'}
    </Container>
  );
};

export default Actions;
