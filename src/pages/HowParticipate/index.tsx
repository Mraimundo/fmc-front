import React, { useEffect, useState } from 'react';
import useDimensions from 'hooks/use-window-dimensions';
import getData, {
  HowParticipate as IHowParticipate,
} from 'services/participants/howParticipate';

import { SliderHowParticipate } from 'components/HowParticipate';
import { Link } from 'react-router-dom';
import { Container, Content, Actions, StepsContainer } from './styles';

interface SlideItem {
  picture: string;
}

const DefaultHowParticipate: React.FC = () => {
  const [data, setData] = useState<IHowParticipate | null>(null);
  const { width } = useDimensions();
  const [slideItems, setSlideItems] = useState<SlideItem[]>([]);

  useEffect(() => {
    getData().then(_data => {
      setData(_data);
    });
  }, []);

  useEffect(() => {
    if (!data) return;

    setSlideItems(data.slider.split(',').map(prop => ({ picture: prop })));
  }, [data]);

  return (
    <Container>
      <Content>
        <img
          src={width > 500 ? data?.pictureUrl : data?.mobilePictureUrl}
          alt={data?.description}
        />
        {slideItems.length > 0 && (
          <StepsContainer>
            <SliderHowParticipate items={slideItems} />
          </StepsContainer>
        )}
        <Actions>
          {data?.links.map(item => (
            <div key={item.id}>
              {item.type === 'internal' ? (
                <Link to={item.target}>{item.label}</Link>
              ) : (
                <a href={item.target}>{item.label}</a>
              )}
            </div>
          ))}
        </Actions>
      </Content>
    </Container>
  );
};

export default DefaultHowParticipate;
