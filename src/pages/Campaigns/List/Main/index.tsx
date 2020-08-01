import React from 'react';

import ApprovalModal from 'components/CampaignsManager/Modals/ApprovalBoard';
import Resume from './Resume';
import Filters from './Filters';
import Table from './Table';
import { useCampaignsList } from '../Context';

import { Separator } from './Filters/styles';
import { Container, Content } from './styles';

const Main: React.FC = () => {
  const {
    approvalModalOpened,
    closeApprovalModal,
    campaignSelected,
  } = useCampaignsList();

  return (
    <Container>
      <Content>
        <Resume />
        <Filters />
        <Separator />
        <Table />
        {campaignSelected && (
          <ApprovalModal
            isOpen={approvalModalOpened}
            onRequestClose={closeApprovalModal}
            approvers={campaignSelected.approvers}
          />
        )}
      </Content>
    </Container>
  );
};

export default Main;
