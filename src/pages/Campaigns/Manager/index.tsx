import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCampaign } from 'state/modules/campaigns-manager/actions';
import { useParams } from 'react-router-dom';
import { getCampaign } from 'services/campaignsManager';
import history from 'services/history';
import { CampaignsManagerProvider } from './Context';
import Main from './Main';

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
        dispatch(setCampaign(data));
      })
      .catch(() => history.push('/'));
  }, [params, dispatch]);

  return (
    <CampaignsManagerProvider>
      <Main />
    </CampaignsManagerProvider>
  );
};

export default CampaignsManager;
