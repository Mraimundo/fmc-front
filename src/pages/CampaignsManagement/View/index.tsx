import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'context/AuthContext';
import { setCampaign } from 'state/modules/campaigns-manager/actions';
import { useParams } from 'react-router-dom';
import { getCampaign } from 'services/campaigns-manager';
import history from 'services/history';
import {
  RegisterCampaignForm,
  ConfigurationForm,
  ComunicationForm,
  RegulationForm,
} from 'components/CampaignsManager';
import {
  CampaignsManagerProvider,
  useCampaignsManager,
} from '../Manager/Context';
import Main from '../Manager/Main';
import TabsNavigation from '../Manager/Main/TabsNavigation';

import {
  SOLICITATION_TAB,
  CONFIGURATION_TAB,
  COMUNICATION_TAB,
  REGULATION_TAB,
} from '../Manager/tabs';

import { Container, Content } from './styles';

interface Params {
  id: string;
}

const CampaignsManager: React.FC = () => {
  const params = useParams<Params>();
  const dispatch = useDispatch();
  const { tabSelected, nextTab } = useCampaignsManager();

  const {
    participant: { profile_value: profile },
  } = useAuth();

  useEffect(() => {
    if (!params.id) {
      history.push('/');
      return;
    }
    getCampaign(parseInt(params.id, 0))
      .then(data => {
        dispatch(setCampaign(data, false));
      })
      .catch(() => history.push('/'));
  }, [params, dispatch]);

  const handleAction = useCallback(async () => {
    history.push('/gerenciamento-de-campanhas/lista');
  }, []);

  const handleNextTab = async (): Promise<void> => {
    nextTab();
  };

  return (
    <CampaignsManagerProvider>
      <Main />
      {/* <Container>
        <Content>
          <RegisterCampaignForm
            handleAction={handleAction}
            actionButtonName="Ok"
            myProfile={profile}
          />
          <TabsNavigation />
          {tabSelected === SOLICITATION_TAB && (
            <RegisterCampaignForm
              handleAction={handleNextTab}
              actionButtonName="Próximo"
              myProfile={profile}
            />
          )}
          {tabSelected === CONFIGURATION_TAB && (
            <ConfigurationForm handleAction={handleNextTab} />
          )}
          {tabSelected === COMUNICATION_TAB && (
            <ComunicationForm handleAction={handleNextTab} />
          )}
          {tabSelected === REGULATION_TAB && (
            <RegulationForm handleAction={handleNextTab} />
          )}
          </Content>
          </Container> */}
    </CampaignsManagerProvider>
  );
};

export default CampaignsManager;
