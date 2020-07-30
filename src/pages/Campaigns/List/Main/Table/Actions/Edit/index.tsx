import React from 'react';
import { StatusText } from 'services/campaignsManager/interfaces/Campaign';
import { ReactSVG } from 'react-svg';
import EditIcon from 'assets/images/campaigns/edit-icon.svg';

import { Container } from './style';

interface Props {
  id: number;
  status: StatusText;
}

const Edit: React.FC<Props> = ({ id, status }) => {
  return (
    <Container>
      <ReactSVG src={EditIcon} />
    </Container>
  );
};

export default Edit;
