import React, { useCallback } from 'react';
import history from 'services/history';
import { useDispatch } from 'react-redux';
import { useToast } from 'context/ToastContext';
import { Campaign } from 'services/campaignsManager/interfaces/Campaign';
import { campaignToUpdateCampaignDTO } from 'services/campaignsManager/transformers';
import {
  updateCampaign,
  cancelCampaign,
  requestForApprovalCampaign,
} from 'services/campaignsManager';
import { setErrors } from 'state/modules/campaigns-manager/actions';

import {
  RegisterCampaignForm,
  ConfigurationForm,
  ResultForm,
  FinishForm,
  ComunicationForm,
  RegulationForm,
} from 'components/CampaignsManager';
import useSchema from 'util/validations/useSchema';
import TabsNavigation from './TabsNavigation';
import schema from '../schemaValidation';

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
  const { isValid, getErrors } = useSchema<Campaign>(schema);
  const dispatch = useDispatch();

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
      try {
        if (!(await isValid(data))) {
          const errors = await getErrors(data);
          dispatch(setErrors(errors));
          throw new Error(
            'Por favor confira o preenchimento do formulário nas abas anteriores',
          );
        }
        const dto = campaignToUpdateCampaignDTO(data);
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
            e?.message ||
            'Falha ao atualizar campanha. Por favor contate o suporte.',
          type: 'error',
        });
      }
    },
    [addToast, dispatch, getErrors, isValid],
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