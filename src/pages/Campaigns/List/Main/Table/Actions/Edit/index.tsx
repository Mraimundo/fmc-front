import React, { useCallback } from 'react';
import { StatusText } from 'services/campaignsManager/interfaces/Campaign';
import { ReactSVG } from 'react-svg';
import EditIcon from 'assets/images/campaigns/edit-icon.svg';
import history from 'services/history';

import { Container } from './style';

interface Props {
  id: number;
  status: StatusText;
}

const Edit: React.FC<Props> = ({ id, status }) => {
  const handleAction = useCallback(() => {
    history.push(`/gerenciamento-de-campanhas/editar/${id}`);
  }, [id]);
  return (
    <Container>
      <ReactSVG src={EditIcon} onClick={handleAction} />
    </Container>
  );
};

export default Edit;
