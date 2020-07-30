import React from 'react';
import { StatusText } from 'services/campaignsManager/interfaces/Campaign';
import { ReactSVG } from 'react-svg';
import ApprovalIcon from 'assets/images/campaigns/approval-icon.svg';

import { Container } from './style';

interface Props {
  id: number;
  status: StatusText;
}

const Approval: React.FC<Props> = ({ id, status }) => {
  return (
    <Container>
      <ReactSVG src={ApprovalIcon} />
    </Container>
  );
};

export default Approval;
