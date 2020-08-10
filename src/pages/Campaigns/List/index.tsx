import React, { useCallback } from 'react';
import routesMap from 'routes/route-map';
import history from 'services/history';

import { Button } from 'components/shared';
import { Container, Content, CampaignBox } from './styles';

const List: React.FC = () => {
  const mock = [
    {
      id: 50,
      imageUrl:
        'https://storage.vendavall.com.br/tinymce/1595038632.5f125ba8a66501.23325933.png',
      title: 'Título da campanha',
      startDate: '02/02/2020',
      endDate: '25/02/2020',
    },
  ];

  const handleButtonClick = useCallback((id: number) => {
    history.push(`${routesMap.campaign}/${id}`);
  }, []);

  return (
    <Container>
      <Content>
        <h3>Campanhas</h3>
        {mock.map(item => (
          <CampaignBox>
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
