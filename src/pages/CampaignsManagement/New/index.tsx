import React, { useCallback, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { reset, setErrors } from 'state/modules/campaigns-manager/actions';
import { Campaign } from 'services/campaignsManager/interfaces/Campaign';
import { createNewCampaign } from 'services/campaignsManager';
import { CreateNewCampaignDTO } from 'services/campaignsManager/dtos';
import { campaignToCreateNewCampaignDTO } from 'services/campaignsManager/transformers';
import { useToast } from 'context/ToastContext';
import history from 'services/history';
import { RegisterCampaignForm } from 'components/CampaignsManager';
import useSchema from 'util/validations/useSchema';

import schema from './schemaValidation';

import { Container, Content } from './styles';

const New: React.FC = () => {
  const { addToast } = useToast();
  const dispatch = useDispatch();
  const { isValid, getErrors } = useSchema<Campaign>(schema);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  const handleSave = useCallback(
    async (data: Campaign) => {
      try {
        if (!(await isValid(data))) {
          const errors = await getErrors(data);
          dispatch(setErrors(errors));
          throw new Error('Por favor confira o preenchimento do formulário');
        }
        const dto: CreateNewCampaignDTO = campaignToCreateNewCampaignDTO(data);
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
            e.message ||
            'Falha ao registrar campanha. Por favor contate o suporte.',
          type: 'error',
        });
      }
    },
    [addToast, getErrors, isValid, dispatch],
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
