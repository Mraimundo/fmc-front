import React, { useCallback } from 'react';
import { StatusText } from 'services/campaigns-manager/interfaces/Campaign';
import { ReactSVG } from 'react-svg';
import ApprovalIcon from 'assets/images/campaigns/approval-icon.svg';
import { useCampaignsList } from '../../../../Context';

import { Container } from './style';

interface Props {
  id: number;
  status: StatusText;
}

const Approval: React.FC<Props> = ({ id, status }) => {
  const { openApprovalModal, selectCampaign } = useCampaignsList();

  const handleClick = useCallback(() => {
    selectCampaign(id);
    openApprovalModal();
  }, [id, openApprovalModal, selectCampaign]);
  return (
    <Container>
      <ReactSVG src={ApprovalIcon} onClick={handleClick} />
    </Container>
  );
};

export default Approval;
