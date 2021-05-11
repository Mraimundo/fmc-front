import React, { useState, useEffect } from 'react';

import {
  Container,
  Content,
  Header,
  Toggle,
  ListItem,
  ListItemContainer,
} from './styles';
import { pluginApi } from 'services/api';



interface CampaignProps {
  id: number;
  value: string;
  category: string;
  description: string;
  point_date: string;
  created: string;
  campaigns: {
    id: number;
    title: string;
  };
  status: {
    id: number;
    name: string;
  };
  type: {
    id: number;
    name: string;
  };
}

const ListOne: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeBottom, setActiveBottom] = useState(0);
  const [list, setList] = useState<CampaignProps[]>([]);

  useEffect(() => {
    async function fetchIndication() {
      const response = await pluginApi.get(`participants/extrato-fmc-coins?campaign_id=${1}`);
      setList(response.data);
    }
    fetchIndication()
  }, []);

  console.log(activeBottom)

  return (

    <Container>
      {
        list.map(item =>
          <>
            <Content key={item.id}>
              <Header>
                <div className="list-item">
                  <div>
                    <h3>Safra</h3>
                    <h4>{item.campaigns?.title}</h4>
                  </div>
                  <span></span>
                  <div>
                    <h3>Total</h3>
                    <h4> {item.value} FMC Coins</h4>
                  </div>
                </div>
                <Toggle onClick={() => {
                  setIsOpen(!isOpen)
                  setActiveBottom(item.id)
                }} isOpen={isOpen && (activeBottom === item.id)} />
              </Header>
              {isOpen && (activeBottom === item.id) && (
                <ListItemContainer>
                  <div>
                    <h3>Tipo de ponto</h3>
                    <h4>FMC Coins</h4>
                  </div>
                  <ListItem>
                    <div key={item.id}>
                      <div className="list-tipoponto">
                        <p>{item.type.name}</p>
                        <span>{item.value}</span>
                      </div>
                      <div className="list-description">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </ListItem>
                </ListItemContainer>
              )}
            </Content>
          </>
        )}

    </Container>
  );
};

export default ListOne;
