import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setCampaign } from 'state/modules/campaigns-manager/actions';
import { useParams } from 'react-router-dom';
import { getCampaign } from 'services/campaignsManager';
import history from 'services/history';
import { RegisterCampaignForm } from 'components/CampaignsManager';

import { Container, Content } from './styles';

interface Params {
  id: string;
}

const CampaignsManager: React.FC = () => {
  const params = useParams<Params>();
  const dispatch = useDispatch();

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

  return (
    <Container>
      <Content>
        <RegisterCampaignForm
          handleAction={handleAction}
          actionButtonName="Ok"
        />
      </Content>
    </Container>
  );
};

export default CampaignsManager;
