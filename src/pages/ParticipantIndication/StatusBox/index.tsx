import React from 'react';
import Icon from '@material-ui/icons/CropPortrait';
import iconEmpty from 'assets/images/indication/status-empty.svg';
import iconFilled from 'assets/images/indication/status-filled.svg';
import { Rating } from '@material-ui/lab';

import { Container, StatusIndicator, AddButton } from './styles';

const StatusBox: React.FC = () => {
  return (
    <Container>
      <h3>Equipe ativa no sistema</h3>
      <Rating
        name="customized-10"
        defaultValue={2}
        max={10}
        icon={<img src={iconFilled} alt="teste" />}
      />
      <AddButton />
    </Container>
  );
};

export default StatusBox;
