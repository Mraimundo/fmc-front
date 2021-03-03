import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setCampaign } from 'state/modules/campaigns-manager/actions';
import { useParams } from 'react-router-dom';
import { getCampaign } from 'services/campaigns-manager';
import history from 'services/history';

import { CampaignsManagerProvider } from '../Manager/Context';
import Main from '../Manager/Main';

interface Params {
  id: string;
}

const CampaignsManager: React.FC = () => {
  const params = useParams<Params>();
  const dispatch = useDispatch();

  /* const {
    participant: { profile_value: profile },
  } = useAuth(); */

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

  const onLeave = useCallback(async () => {
    history.push('/gerenciamento-de-campanhas/lista');
  }, []);

  return (
    <CampaignsManagerProvider>
      <Main isViewing leaveAction={onLeave} />
    </CampaignsManagerProvider>
  );
};

export default CampaignsManager;
