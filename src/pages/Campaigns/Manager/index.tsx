import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCampaign } from 'services/campaignsManager';
import { Campaign } from 'services/campaignsManager/interfaces/Campaign';
import history from 'services/history';
import { CampaignsManagerProvider } from './Context';
import Main from './Main';

interface Params {
  id: string;
}

const CampaignsManager: React.FC = () => {
  const params = useParams<Params>();
  const [campaign, setCampaign] = useState<Campaign | null>(null);

  useEffect(() => {
    if (!params.id) {
      history.push('/');
      return;
    }
    getCampaign(parseInt(params.id, 0))
      .then(data => {
        setCampaign(data);
      })
      .catch(() => history.push('/'));
  }, [params]);

  return (
    campaign && (
      <CampaignsManagerProvider campaign={campaign}>
        <Main />
      </CampaignsManagerProvider>
    )
  );
};

export default CampaignsManager;
