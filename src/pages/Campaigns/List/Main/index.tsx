import React from 'react';

import { RegisterCampaignForm } from 'components/CampaignsManager';

import { Container, Content } from './styles';

const Main: React.FC = () => {
  const handleAction = async (): Promise<void> => {
    console.log('s');
  };
  return (
    <Container>
      <Content>
        <RegisterCampaignForm handleAction={handleAction} />
      </Content>
    </Container>
  );
};

export default Main;
