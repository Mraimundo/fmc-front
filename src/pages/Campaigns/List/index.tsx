import React, { useCallback, useState, useEffect } from 'react';
import routesMap from 'routes/route-map';
import history from 'services/history';
import getCampaigns, { Campaign } from 'services/campaigns/getCampaigns';

import { Button } from 'components/shared';
import { Container, Content, CampaignBox } from './styles';

const List: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    getCampaigns().then(data => setCampaigns(data));
  }, []);

  const handleButtonClick = useCallback((id: number) => {
    history.push(`${routesMap.campaign}/${id}`);
  }, []);

  return (
    <Container>
      <Content>
        <h3>Campanhas</h3>
        {campaigns.map(item => (
          <CampaignBox key={`campaign-${item.id}`}>
            <img src={item.imageUrl} alt={item.title} />
            <div>
              <div>
                <h3>{item.title}</h3>
                <span>{`Início: ${item.startDate} Término: ${item.endDate}`}</span>
              </div>
              <Button
                buttonRole="primary"
                type="button"
                onClick={() => handleButtonClick(item.id)}
              >
                Saiba mais
              </Button>
            </div>
          </CampaignBox>
        ))}
      </Content>
    </Container>
  );
};

export default List;
