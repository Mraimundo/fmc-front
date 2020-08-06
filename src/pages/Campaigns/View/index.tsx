import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import history from 'services/history';
import { getCampaign } from 'services/campaignsManager';
import transformer, {
  Response as ICampaign,
} from 'services/campaignsManager/transformers/campaignToParticipantCampaignPage';

import { Button } from 'components/shared';
import Campaign from './Campaign';
import { Container, Content } from './styles';

interface Params {
  id: string;
}

const List: React.FC = () => {
  const params = useParams<Params>();
  const [campaign, setCampaign] = useState<ICampaign | null>(null);

  useEffect(() => {
    getCampaign(parseInt(params.id, 0))
      .then(data => {
        setCampaign(transformer(data));
      })
      .catch(() => history.push('/'));
  }, [params]);

  return (
    <Container>
      <Content>
        {campaign && (
          <>
            <Campaign campaign={campaign} />
            <Button buttonRole="primary" type="button">
              Participar
            </Button>
          </>
        )}
      </Content>
    </Container>
  );
};

export default List;
