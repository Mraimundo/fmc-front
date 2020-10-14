import React, { useEffect, useState } from 'react';
import useDimensions from 'hooks/use-window-dimensions';
import getData, {
  HowParticipate as IHowParticipate,
} from 'services/participants/howParticipate';

import { Container, Content, Actions } from './styles';

const DefaultHowParticipate: React.FC = () => {
  const [data, setData] = useState<IHowParticipate | null>(null);
  const { width } = useDimensions();

  useEffect(() => {
    getData().then(_data => {
      setData(_data);
    });
  }, []);

  return (
    <Container>
      <Content>
        <img
          src={width > 500 ? data?.pictureUrl : data?.mobilePictureUrl}
          alt={data?.description}
        />
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

export default DefaultHowParticipate;
