import React, { useState } from 'react';

import { FaEdit, FaTrashAlt, FaShareSquare } from 'react-icons/fa';

import { Container } from './style';

interface Props {
  id: number;
  edit?(id: number): Promise<void> | void;
}

const Actions: React.FC<Props> = ({ id, edit }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Container loading={loading}>
      {typeof edit === 'function' && (
        <span title="Editar indicação">
          <FaEdit size={20} onClick={() => edit(id)} />
        </span>
      )}
      <span title="Desativar participante">
        <FaTrashAlt size={20} />
      </span>
      <span title="Reenviar email de indicação">
        <FaShareSquare size={20} />
      </span>
    </Container>
  );
};

export default Actions;
