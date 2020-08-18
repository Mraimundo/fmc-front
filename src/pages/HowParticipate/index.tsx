import React, { useEffect, useState } from 'react';
import getData, {
  HowParticipate as IHowParticipate,
} from 'services/participants/howParticipate';

import { Container, Content, Actions } from './styles';

const HowParticipate: React.FC = () => {
  const [data, setData] = useState<IHowParticipate | null>(null);
  useEffect(() => {
    getData().then(_data => {
      setData(_data);
    });
  }, []);

  return (
    <Container>
      <Content>
        <img src={data?.pictureUrl} alt={data?.description} />
        <Actions>
          {data?.links.map(item => (
            <div>
              <a href={item.target}>{item.label}</a>
            </div>
          ))}
        </Actions>
      </Content>
    </Container>
  );
};

export default HowParticipate;
