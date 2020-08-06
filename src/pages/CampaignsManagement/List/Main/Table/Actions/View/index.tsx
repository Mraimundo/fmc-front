import React, { useCallback } from 'react';
import { ReactSVG } from 'react-svg';
import viewIcon from 'assets/images/campaigns/view-icon.svg';
import history from 'services/history';

import { Container } from './style';

interface Props {
  id: string;
}

const View: React.FC<Props> = ({ id }) => {
  const handleAction = useCallback(() => {
    history.push(`/gerenciamento-de-campanhas/visualizar/${id}`);
  }, [id]);
  return (
    <Container>
      <ReactSVG src={viewIcon} onClick={handleAction} />
    </Container>
  );
};

export default View;
