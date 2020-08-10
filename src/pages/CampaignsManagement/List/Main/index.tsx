import React from 'react';

import { useAuth } from 'context/AuthContext';
import ApprovalModal from 'components/CampaignsManager/Modals/ApprovalBoard';
import Resume from './Resume';
import Filters from './Filters';
import Table from './Table';
import { useCampaignsList } from '../Context';

import { Separator } from './Filters/styles';
import { Container, Content } from './styles';

const Main: React.FC = () => {
  const { participant } = useAuth();

  const {
    approvalModalOpened,
    closeApprovalModal,
    campaignSelected,
    approve,
    disapprove,
  } = useCampaignsList();

  return (
    <Container>
      <Content>
        <Resume />
        <Filters profile={participant.profile_value} />
        <Separator />
        <Table profile={participant.profile_value} />
        {campaignSelected && (
          <ApprovalModal
            isOpen={approvalModalOpened}
            onRequestClose={closeApprovalModal}
            approvers={campaignSelected.approvers}
            myProfile={participant.profile_value}
            onApprove={approve}
            onDisapprove={disapprove}
          />
        )}
      </Content>
    </Container>
  );
};

export default Main;
