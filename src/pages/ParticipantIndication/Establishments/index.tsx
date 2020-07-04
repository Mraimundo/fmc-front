import React, { useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { Establishment } from 'services/auth/getEstablishments';
import { FiCircle, FiCheckCircle } from 'react-icons/fi';

import { Container } from './styles';

interface Props {
  establishments: Establishment[];
  className?: string;
  setValue(estabishment: Establishment): void;
  value: Establishment | null;
}

const Establishments: React.FC<Props> = ({
  establishments,
  className,
  setValue,
  value,
}) => {
  const [opened, setOpened] = useState(false);
  const { participant } = useAuth();

  return (
    <Container
      className={className}
      opened={opened}
      onClick={() => setOpened(!opened)}
    >
      <span>(Alterar)</span>
      <div>
        {establishments.map(item => (
          <h4 onClick={() => setValue(item)}>
            <div>
              {value?.id === item.id ? (
                <FiCheckCircle size={22} />
              ) : (
                <FiCircle size={22} />
              )}
            </div>
            {`${item.name} (${item.cnpj})`}
          </h4>
        ))}
      </div>
    </Container>
  );
};

export default Establishments;
