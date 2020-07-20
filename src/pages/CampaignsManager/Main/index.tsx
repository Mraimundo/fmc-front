import React from 'react';

import {
  RegisterCampaignForm,
  ConfigurationForm,
  ResultForm,
  FinishForm,
} from 'components/CampaignsManager';
import TabsNavigation from './TabsNavigation';

import {
  SOLICITATION_TAB,
  RESULTS_TAB,
  CONFIGURATION_TAB,
  FINISHED_TAB,
} from '../tabs';
import { useCampaignsManager } from '../Context';
import { Container, Content } from './styles';

const Main: React.FC = () => {
  const { tabSelected } = useCampaignsManager();
  return (
    <Container>
      <Content>
        <TabsNavigation />
        {tabSelected === SOLICITATION_TAB && <RegisterCampaignForm />}
        {tabSelected === CONFIGURATION_TAB && <ConfigurationForm />}
        {tabSelected === RESULTS_TAB && <ResultForm />}
        {tabSelected === FINISHED_TAB && <FinishForm />}
      </Content>
    </Container>
  );
};

export default Main;
