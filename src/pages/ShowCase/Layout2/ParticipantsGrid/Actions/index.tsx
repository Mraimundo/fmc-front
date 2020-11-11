import React, { useCallback, useState } from 'react';
import ReactLoading from 'react-loading';
import getPiUrlAccess from 'services/showcase/getPiUrlAccessForEstablishment';
import { useAuth } from 'context/AuthContext';

import { useToast } from 'context/ToastContext';
import { Container } from './style';

interface Props {
  establishmentId: string;
}

const Actions: React.FC<Props> = ({ establishmentId }) => {
  const [loading, setLoading] = useState(false);
  const { simulating } = useAuth();
  const { addToast } = useToast();

  const handleClick = useCallback(() => {
    if (simulating) {
      addToast({ type: 'error', title: 'Operação não permitida' });
      return;
    }

    setLoading(true);
    getPiUrlAccess(parseInt(establishmentId, 0))
      .then(url => {
        const linkClick = document.createElement('a');
        linkClick.href = url;
        linkClick.target = '_blank';
        document.body.appendChild(linkClick);
        linkClick.click();
        document.body.removeChild(linkClick);
      })
      .finally(() => setLoading(false));
  }, [establishmentId, simulating, addToast]);

  return (
    <Container onClick={handleClick}>
      {loading ? (
        <ReactLoading
          className="_loading"
          type="bars"
          height={24}
          width={24}
          color="#fff"
        />
      ) : (
        <>Acessar</>
      )}
    </Container>
  );
};

export default Actions;
