import React, { useCallback } from 'react';
import history from 'services/history';
import { useToast } from 'context/ToastContext';
import { Campaign } from 'services/campaignsManager/interfaces/Campaign';
import { campaignToUpdateCampaignDTO } from 'services/campaignsManager/transformers';
import {
  updateCampaign,
  cancelCampaign,
  requestForApprovalCampaign,
} from 'services/campaignsManager';

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
  const { tabSelected, nextTab } = useCampaignsManager();
  const { addToast } = useToast();

  const handleNextTab = async (): Promise<void> => {
    nextTab();
  };

  const handleApprovalRequest = useCallback(
    async (data: Campaign) => {
      try {
        if (!data.id) return;
        await requestForApprovalCampaign(data.id);
        addToast({
          title: 'Solicitação de aprovação feita com sucesso',
          type: 'success',
        });
        history.push('/gerenciamento-de-campanhas/lista');
      } catch (e) {
        addToast({
          title:
            e?.response?.data?.message ||
            'Falha ao solicitar aprovação da campanha. Por favor contate o suporte.',
          type: 'error',
        });
      }
    },
    [addToast],
  );

  const handleCancel = useCallback(
    async (data: Campaign) => {
      try {
        if (!data.id) return;
        await cancelCampaign(data.id);
        addToast({
          title: 'Campanha cancelada com sucesso',
          type: 'success',
        });
        history.push('/gerenciamento-de-campanhas/lista');
      } catch (e) {
        addToast({
          title:
            e?.response?.data?.message ||
            'Falha ao cancelar campanha. Por favor contate o suporte.',
          type: 'error',
        });
      }
    },
    [addToast],
  );

  const handleSave = useCallback(
    async (data: Campaign) => {
      const dto = campaignToUpdateCampaignDTO(data);
      try {
        await updateCampaign(dto);
        addToast({
          title: 'Campanha alterada com sucesso',
          type: 'success',
        });
        history.push('/gerenciamento-de-campanhas/lista');
      } catch (e) {
        addToast({
          title:
            e?.response?.data?.message ||
            'Falha ao atualizar campanha. Por favor contate o suporte.',
          type: 'error',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <TabsNavigation />
        {tabSelected === SOLICITATION_TAB && (
          <RegisterCampaignForm
            handleAction={handleNextTab}
            actionButtonName="Próximo"
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
        {tabSelected === FINISHED_TAB && (
          <FinishForm
            handleApprovalRequest={handleApprovalRequest}
            handleCancel={handleCancel}
            handleSave={handleSave}
          />
        )}
        {tabSelected === RESULTS_TAB && <ResultForm />}
      </Content>
    </Container>
  );
};

export default Main;
