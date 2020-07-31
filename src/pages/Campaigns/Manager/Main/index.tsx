import React from 'react';

import {
  RegisterCampaignForm,
  ConfigurationForm,
  ResultForm,
  FinishForm,
  ComunicationForm,
  RegulationForm,
} from 'components/CampaignsManager';
import TabsNavigation from './TabsNavigation';

import {
  SOLICITATION_TAB,
  RESULTS_TAB,
  CONFIGURATION_TAB,
  FINISHED_TAB,
  COMUNICATION_TAB,
  REGULATION_TAB,
} from '../tabs';
import { useCampaignsManager } from '../Context';
import { Container, Content } from './styles';

const Main: React.FC = () => {
  const { tabSelected, campaign } = useCampaignsManager();

  const handleAction = async (): Promise<void> => {
    console.log('t');
  };

  return (
    <Container>
      <Content>
        <TabsNavigation />
        {tabSelected === SOLICITATION_TAB && (
          <RegisterCampaignForm
            handleAction={handleAction}
            initialValues={campaign}
          />
        )}
        {tabSelected === CONFIGURATION_TAB && <ConfigurationForm />}
        {tabSelected === COMUNICATION_TAB && <ComunicationForm />}
        {tabSelected === REGULATION_TAB && <RegulationForm />}
        {tabSelected === FINISHED_TAB && <FinishForm />}
        {tabSelected === RESULTS_TAB && <ResultForm />}
      </Content>
    </Container>
  );
};

export default Main;
