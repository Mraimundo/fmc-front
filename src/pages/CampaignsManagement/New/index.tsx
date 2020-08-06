import React, { useCallback, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { reset } from 'state/modules/campaigns-manager/actions';
import { Campaign } from 'services/campaignsManager/interfaces/Campaign';
import { createNewCampaign } from 'services/campaignsManager';
import { CreateNewCampaignDTO } from 'services/campaignsManager/dtos';
import { campaignToCreateNewCampaignDTO } from 'services/campaignsManager/transformers';
import { useToast } from 'context/ToastContext';
import history from 'services/history';
import { RegisterCampaignForm } from 'components/CampaignsManager';

import { Container, Content } from './styles';

const New: React.FC = () => {
  const { addToast } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  const handleSave = useCallback(
    async (data: Campaign) => {
      const dto: CreateNewCampaignDTO = campaignToCreateNewCampaignDTO(data);
      try {
        await createNewCampaign(dto);
        addToast({
          title: 'Campanha requisitada com sucesso',
          type: 'success',
        });
        history.push('/gerenciamento-de-campanhas/lista');
      } catch (e) {
        addToast({
          title:
            e?.response?.data?.message ||
            'Falha ao registrar campanha. Por favor contate o suporte.',
          type: 'error',
        });
      }
    },
    [addToast],
  );
  return (
    <Container>
      <Content>
        <RegisterCampaignForm handleAction={handleSave} />
      </Content>
    </Container>
  );
};

export default New;
