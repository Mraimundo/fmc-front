import React from 'react';

import { RegisterCampaignForm } from 'components/CampaignsManager';
import { useNewCampaign } from '../Context';

import { Container, Content } from './styles';

const Main: React.FC = () => {
  const { handleSave } = useNewCampaign();
  return (
    <Container>
      <Content>
        <RegisterCampaignForm handleAction={handleSave} />
      </Content>
    </Container>
  );
};

export default Main;
