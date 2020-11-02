import React, { useCallback } from 'react';
import {
  StatusText,
  CAMPAIGN_STATUS_TEXT,
} from 'services/campaigns-manager/interfaces/Campaign';
import { ReactSVG } from 'react-svg';
import EditIcon from 'assets/images/campaigns/edit-icon.svg';
import viewIcon from 'assets/images/campaigns/view-icon.svg';
import history from 'services/history';

import { useToast } from 'context/ToastContext';
import { Container } from './style';

interface Props {
  id: number;
  status: StatusText;
}

const Edit: React.FC<Props> = ({ id, status }) => {
  const { addToast } = useToast();

  const handleEdit = useCallback(() => {
    if (status !== CAMPAIGN_STATUS_TEXT.UNDER_ANALYSIS) {
      addToast({
        title: 'Campanha não pode ser editada',
        type: 'error',
      });
      return;
    }

    history.push(`/gerenciamento-de-campanhas/editar/${id}`);
  }, [id, status, addToast]);

  const handleView = useCallback(() => {
    history.push(`/gerenciamento-de-campanhas/visualizar/${id}`);
  }, [id]);

  return (
    <Container>
      {status === CAMPAIGN_STATUS_TEXT.UNDER_ANALYSIS ? (
        <ReactSVG src={EditIcon} onClick={handleEdit} />
      ) : (
        <ReactSVG src={viewIcon} onClick={handleView} />
      )}
    </Container>
  );
};

export default Edit;
